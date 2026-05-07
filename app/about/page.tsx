import React from "react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { CheckCircle2, Award, Users, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Success Rate", value: "98%", icon: <Award className="text-red-500" /> },
    { label: "Happy Clients", value: "10k+", icon: <Users className="text-blue-500" /> },
    { label: "Countries", value: "50+", icon: <Globe className="text-green-500" /> },
    { label: "Years Exp", value: "15+", icon: <CheckCircle2 className="text-purple-500" /> },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-black text-[#2D3E75] mb-6 leading-tight">
                Giving Feathers to Your <span className="text-[#D32F2F]">Dreams</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Fly High Abroad is a premier immigration consultancy dedicated to helping individuals and families achieve their global aspirations. We specialize in skilled migration, work permits, and permanent residency for top destinations worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="bg-gray-50 p-3 rounded-xl">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#2D3E75]">{stat.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=800&auto=format&fit=crop" 
                  alt="Aviation and Travel" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 bg-white p-6 rounded-3xl shadow-xl z-20 border border-gray-100">
                <p className="text-[#2D3E75] font-bold italic">
                  "Our mission is to bridge the gap between your current location and your desired destination."
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                    FH
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">CEO, Fly High Abroad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-white py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#2D3E75] mb-4">Why Choose Us?</h2>
              <p className="text-gray-500">We pride ourselves on our transparency, expertise, and personalized approach to every case.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Guidance",
                  desc: "Our team of certified immigration consultants stays updated with the latest policy changes.",
                  img: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?q=80&w=400&auto=format&fit=crop"
                },
                {
                  title: "Personalized Strategy",
                  desc: "We analyze your profile to find the best pathway suited for your career and family goals.",
                  img: "https://images.unsplash.com/photo-1454165833767-027ffb57ad2e?q=80&w=400&auto=format&fit=crop"
                },
                {
                  title: "Seamless Process",
                  desc: "From documentation to visa filing, we handle the complexities while you focus on your future.",
                  img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop"
                }
              ].map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="mb-6 overflow-hidden rounded-2xl h-48">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3E75] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
