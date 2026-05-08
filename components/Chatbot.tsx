"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Send, X } from "lucide-react";

interface Message {
  type: "ai" | "user";
  content: string;
}

const QUICK_PROMPTS = [
  "What visa services do you offer?",
  "How do I get a work permit?",
  "Tell me about permanent residency",
];

const GenieIcon = ({ className = "size-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="#ffffff"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.9"
      d="M12.9839 22.4946L13.521 21.5879C13.9375 20.8846 14.1458 20.5329 14.4804 20.3384C14.815 20.144 15.2362 20.1367 16.0786 20.1222C17.3224 20.1008 18.1024 20.0247 18.7566 19.7539C19.9704 19.2515 20.9348 18.2878 21.4375 17.0748C21.6226 16.6283 21.7169 16.123 21.7648 15.4515C21.7903 15.0958 21.803 14.9179 21.708 14.7756C21.6131 14.6332 21.4329 14.5728 21.0723 14.452C19.5606 13.9454 16.0584 12.6565 14.1 11.0008C11.8925 9.13444 9.91782 5.3404 9.21118 3.88615C9.0707 3.59705 9.00047 3.4525 8.87715 3.37622C8.75383 3.29994 8.59743 3.30159 8.28463 3.3049C6.25036 3.32638 5.32915 3.43899 4.36537 4.02919C3.69883 4.43737 3.13843 4.9974 2.72997 5.66349C2 6.85388 2 8.47432 2 11.7152V12.7053C2 15.0118 2 16.1651 2.37707 17.0748C2.87984 18.2878 3.84419 19.2515 5.05797 19.7539C5.71215 20.0247 6.49219 20.1008 7.73591 20.1222C8.57837 20.1367 8.9996 20.144 9.33417 20.3384C9.66874 20.5329 9.87702 20.8846 10.2936 21.5879L10.8307 22.4946C11.3094 23.3028 12.5052 23.3028 12.9839 22.4946Z"
      fill="#ffffff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.8719 0.239228C15.2073 0.55542 15.2039 1.06491 14.8643 1.3772L13.7622 2.39066C14.721 2.39968 15.6433 2.42144 16.4756 2.47388C17.1913 2.51898 17.8616 2.5879 18.4457 2.69609C19.0178 2.80206 19.569 2.95641 20.0069 3.20311C20.8206 3.66166 21.5058 4.29141 22.0058 5.04157C22.4867 5.76328 22.6986 6.57904 22.8003 7.56276C22.8998 8.52518 22.8998 9.72792 22.8998 11.253V11.2953C22.8998 11.7397 22.5129 12.1 22.0355 12.1C21.5582 12.1 21.1712 11.7397 21.1712 11.2953C21.1712 9.7186 21.1703 8.59328 21.0797 7.71697C20.9904 6.85308 20.8201 6.31502 20.5369 5.89005C20.1817 5.35695 19.6936 4.90776 19.1118 4.57993C18.9261 4.47529 18.6031 4.36615 18.1084 4.27451C17.6257 4.18509 17.0367 4.12228 16.3589 4.07957C15.5758 4.03023 14.7025 4.00921 13.7763 4.00026L14.8643 5.00068C15.2039 5.31298 15.2073 5.82246 14.8719 6.13865C14.5364 6.45485 13.9892 6.45801 13.6496 6.14572L11.0568 3.76146C10.8923 3.61027 10.7998 3.40409 10.7998 3.18894C10.7998 2.97379 10.8923 2.76761 11.0568 2.61642L13.6496 0.232165C13.9892 -0.0801259 14.5364 -0.0769636 14.8719 0.239228Z"
      fill="#ffffff"
    />
  </svg>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "ai",
      content:
        "Hello! I'm Genie, your Global Workgate AI assistant 🌍. I can help with visas, work permits, residency, and more. What would you like to know?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { type: "user", content: trimmed }]);
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { type: "ai", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again or reach out to us directly at support@globalworkgate.com.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const copyToClipboard = useCallback((text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  }, []);

  return (
    <>
      {/* ── Floating Trigger Button ── */}
      <motion.button
        id="genie-chat-trigger"
        aria-label="Open Genie AI Chat"
        className="fixed bottom-20 md:bottom-8 right-4 z-50 inline-flex h-[55px] w-[55px] items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-[0_8px_30px_rgba(99,102,241,0.5)] focus:outline-none"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setHasNotification(false);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={
          isOpen
            ? {}
            : {
                rotate: [0, 10, -10, 0],
                transition: { repeat: Infinity, repeatDelay: 2.5 },
              }
        }
      >
        <div className="relative">
          <GenieIcon className="size-[28px]" />
          {hasNotification && (
            <span className="absolute -right-1.5 -top-2 flex h-4 w-4 animate-pulse items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
              1
            </span>
          )}
        </div>
      </motion.button>

      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="genie-chat-panel"
            role="dialog"
            aria-label="Genie AI Chat"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", damping: 18, stiffness: 320 }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-0 right-0 z-50 flex h-full w-full flex-col overflow-hidden bg-white shadow-2xl md:bottom-[calc(4rem+1rem)] md:right-4 md:h-[600px] md:w-[370px] md:rounded-2xl md:border md:border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-br from-blue-600 to-purple-600 px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <GenieIcon className="size-4" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-blue-600 bg-green-400" />
                </div>
                <div>
                  <h2 className="text-sm font-bold leading-tight">Genie AI</h2>
                  <p className="text-[11px] text-blue-100">
                    Global Workgate Assistant · Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 transition-colors hover:bg-white/20"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-end gap-2 ${
                    message.type === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                      message.type === "ai"
                        ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {message.type === "ai" ? (
                      <GenieIcon className="size-3.5" />
                    ) : (
                      "U"
                    )}
                  </div>

                  {/* Bubble + Copy */}
                  <div
                    className={`flex max-w-[78%] flex-col gap-1 ${
                      message.type === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        message.type === "user"
                          ? "rounded-br-sm bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                          : "rounded-bl-sm bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.content}
                    </div>

                    {message.type === "ai" && (
                      <button
                        onClick={() => copyToClipboard(message.content, index)}
                        className="ml-1 flex items-center gap-1 text-[11px] text-gray-400 transition-colors hover:text-gray-600"
                        aria-label="Copy message"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check size={11} className="text-green-500" />
                            <span className="text-green-500">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={11} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-2"
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                    <GenieIcon className="size-3.5" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-3">
                    {[0, 150, 300].map((delay, i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts + Input */}
            <div className="border-t border-gray-100 bg-white p-4">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {QUICK_PROMPTS.map((prompt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    {prompt}
                  </motion.button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  id="genie-chat-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about visas, immigration..."
                  className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  type="submit"
                  id="genie-chat-send"
                  aria-label="Send message"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md"
                >
                  <Send size={16} />
                </motion.button>
              </form>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center bg-white pb-3">
              <span className="text-[10px] text-gray-300">
                Powered by{" "}
                <span className="font-semibold text-gray-400">
                  Global Workgate · Genie AI
                </span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
