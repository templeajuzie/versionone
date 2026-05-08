"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  type: "ai" | "user";
  content: string;
}

const GenieIcon = ({ className = "size-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#ffffff" className={className} xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.9" d="M12.9839 22.4946L13.521 21.5879C13.9375 20.8846 14.1458 20.5329 14.4804 20.3384C14.815 20.144 15.2362 20.1367 16.0786 20.1222C17.3224 20.1008 18.1024 20.0247 18.7566 19.7539C19.9704 19.2515 20.9348 18.2878 21.4375 17.0748C21.6226 16.6283 21.7169 16.123 21.7648 15.4515C21.7903 15.0958 21.803 14.9179 21.708 14.7756C21.6131 14.6332 21.4329 14.5728 21.0723 14.452C19.5606 13.9454 16.0584 12.6565 14.1 11.0008C11.8925 9.13444 9.91782 5.3404 9.21118 3.88615C9.0707 3.59705 9.00047 3.4525 8.87715 3.37622C8.75383 3.29994 8.59743 3.30159 8.28463 3.3049C6.25036 3.32638 5.32915 3.43899 4.36537 4.02919C3.69883 4.43737 3.13843 4.9974 2.72997 5.66349C2 6.85388 2 8.47432 2 11.7152V12.7053C2 15.0118 2 16.1651 2.37707 17.0748C2.87984 18.2878 3.84419 19.2515 5.05797 19.7539C5.71215 20.0247 6.49219 20.1008 7.73591 20.1222C8.57837 20.1367 8.9996 20.144 9.33417 20.3384C9.66874 20.5329 9.87702 20.8846 10.2936 21.5879L10.8307 22.4946C11.3094 23.3028 12.5052 23.3028 12.9839 22.4946Z" fill="#ffffff"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M14.8719 0.239228C15.2073 0.55542 15.2039 1.06491 14.8643 1.3772L13.7622 2.39066C14.721 2.39968 15.6433 2.42144 16.4756 2.47388C17.1913 2.51898 17.8616 2.5879 18.4457 2.69609C19.0178 2.80206 19.569 2.95641 20.0069 3.20311C20.8206 3.66166 21.5058 4.29141 22.0058 5.04157C22.4867 5.76328 22.6986 6.57904 22.8003 7.56276C22.8998 8.52518 22.8998 9.72792 22.8998 11.253V11.2953C22.8998 11.7397 22.5129 12.1 22.0355 12.1C21.5582 12.1 21.1712 11.7397 21.1712 11.2953C21.1712 9.7186 21.1703 8.59328 21.0797 7.71697C20.9904 6.85308 20.8201 6.31502 20.5369 5.89005C20.1817 5.35695 19.6936 4.90776 19.1118 4.57993C18.9261 4.47529 18.6031 4.36615 18.1084 4.27451C17.6257 4.18509 17.0367 4.12228 16.3589 4.07957C15.5758 4.03023 14.7025 4.00921 13.7763 4.00026L14.8643 5.00068C15.2039 5.31298 15.2073 5.82246 14.8719 6.13865C14.5364 6.45485 13.9892 6.45801 13.6496 6.14572L11.0568 3.76146C10.8923 3.61027 10.7998 3.40409 10.7998 3.18894C10.7998 2.97379 10.8923 2.76761 11.0568 2.61642L13.6496 0.232165C13.9892 -0.0801259 14.5364 -0.0769636 14.8719 0.239228Z" fill="#ffffff"/>
  </svg>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "ai", content: "Hello! I'm Genie 🌍. How can I help with your immigration journey today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { type: "user", content: text.trim() }]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim() }),
      });

      if (!response.ok) throw new Error("Failed to send");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let currentAiMessage = "";

      setMessages((prev) => [...prev, { type: "ai", content: "" }]);
      setIsTyping(false);

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");
        
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content || "";
              currentAiMessage += content;
              
              setMessages((prev) => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = currentAiMessage;
                return newMessages;
              });
            } catch (e) { /* ignore parse errors for partial chunks */ }
          }
        }
      }
    } catch (error) {
      setMessages((prev) => [...prev, { type: "ai", content: "⚠️ Sorry, I lost connection. Please try again." }]);
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 z-50 h-[60px] w-[60px] rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <GenieIcon className="size-7" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 flex h-[600px] w-[380px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <GenieIcon className="size-5" />
                <span className="font-bold">Genie AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4 bg-gray-50/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${m.type === "user" ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-800"}`}>
                    <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-gray-800 prose-pre:text-gray-100">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {m.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl p-3 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
