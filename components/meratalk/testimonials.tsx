"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "The platform unified our entire communication stack, directly improving efficiency and simplifying our growth. Our agency grew 30% last quarter — MeraTalk made that possible.",
    author: "Wang Jun",
    role: "Sales Manager, Callmama",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=92&q=80",
  },
  {
    quote: "The AI Dialer from MeraTalk doubled our connection rate, allowing us to place candidates faster. It was the best decision our company ever made — more meaningful conversations every day.",
    author: "Michael Davis",
    role: "Ops Manager, Yevoip",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=92&q=80",
  },
  {
    quote: "MeraTalk's real-time analytics transformed how we manage our team. We make data-driven decisions instantly and consistently deliver exceptional service to our clients.",
    author: "Sarah Thompson",
    role: "Director of Operations, NexaFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=92&q=80",
  },
  {
    quote: "Switching to MeraTalk reduced our call handling time by 40%. The AI-powered features are incredibly intuitive and our team adopted them seamlessly.",
    author: "James Wilson",
    role: "CTO, CloudReach",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=92&q=80",
  },
  {
    quote: "The voice quality is exceptional and the integration with our CRM was flawless. MeraTalk has become the backbone of our customer service operations.",
    author: "Elena Rodriguez",
    role: "Customer Success Lead, TechFlow",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=92&q=80",
  },
  {
    quote: "We went from managing 5 different tools to just MeraTalk. The consolidation alone saved us thousands in monthly subscriptions.",
    author: "David Park",
    role: "Operations Director, ScaleUp Inc",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=92&q=80",
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#f4fffe] py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center px-6 mb-14">
        <div className="inline-block bg-gradient-to-br from-[#0a9e8f]/13 to-[#3b8dd6]/13 border border-[#0a9e8f]/27 text-[#0a9e8f] text-[11px] font-bold tracking-[1.5px] uppercase px-[18px] py-1.5 rounded-full mb-[18px]">
          Testimonials
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#0d4a4a]">
          Trusted by Businesses Worldwide
        </h2>
        <p className="text-[16px] text-[#666] mt-3 max-w-[580px] mx-auto leading-[1.7]">
          See what our customers are saying about MeraTalk.
        </p>
      </div>

      {/* Carousel */}
      <div 
        className="relative mt-14 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
        }}
      >
        <div className="flex gap-6 w-max animate-testimonials-scroll hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] p-8 pt-8 shadow-[0_4px_24px_rgba(10,158,143,0.08)] border border-[#e8f6f5] w-[340px] shrink-0 flex flex-col gap-0 relative hover:shadow-[0_12px_40px_rgba(10,158,143,0.16)] hover:-translate-y-1 transition-all"
            >
              {/* Quote mark */}
              <span className="absolute top-5 right-6 text-[64px] text-[#0a9e8f] opacity-[0.12] font-serif leading-none pointer-events-none">
                &ldquo;
              </span>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-[#f59e0b] fill-current" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-[14.5px] text-[#444] leading-[1.8] italic flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#f0f0f0]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-[46px] h-[46px] rounded-full object-cover border-2 border-[#e8f6f5] shrink-0"
                />
                <div className="flex flex-col gap-0.5">
                  <strong className="text-[14px] font-bold text-[#1a1a2e]">{t.author}</strong>
                  <span className="text-[12px] text-[#0a9e8f] font-medium">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes testimonials-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-testimonials-scroll {
          animation: testimonials-scroll 32s linear infinite;
        }
      `}</style>
    </section>
  )
}
