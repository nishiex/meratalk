"use client"

import Link from "next/link"
import { ArrowRight, Phone, MessageSquare, Zap } from "lucide-react"

export function CTABanner() {
  return (
    <section className="relative bg-gradient-to-br from-[#0d4a4a] via-[#0a3d3d] to-[#083030] py-[90px] px-6 text-center text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-50px] left-[10%] w-[200px] h-[200px] bg-[#0a9e8f]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-50px] right-[15%] w-[250px] h-[250px] bg-[#3b8dd6]/10 rounded-full blur-3xl" />
        {/* Floating icons */}
        <div className="absolute top-[20%] left-[8%] w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 animate-[floatUpDown_4s_ease-in-out_infinite]">
          <Phone className="w-5 h-5 text-[#0a9e8f]" />
        </div>
        <div className="absolute top-[30%] right-[10%] w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 animate-[floatUpDown_4s_ease-in-out_infinite_0.5s]">
          <MessageSquare className="w-5 h-5 text-[#3b8dd6]" />
        </div>
        <div className="absolute bottom-[25%] left-[15%] w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 animate-[floatUpDown_4s_ease-in-out_infinite_1s]">
          <Zap className="w-4 h-4 text-[#f59e0b]" />
        </div>
      </div>

      <div className="relative z-[1] max-w-[700px] mx-auto">
        <div className="inline-block bg-white/10 border border-white/15 text-white/90 text-[11px] font-bold tracking-[1.5px] uppercase px-[18px] py-1.5 rounded-full mb-6 backdrop-blur-sm">
          Get Started Today
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold mb-5 leading-[1.15]">
          Ready to Transform Your<br />
          <span className="bg-gradient-to-r from-[#0a9e8f] to-[#3b8dd6] bg-clip-text text-transparent">Business Communications?</span>
        </h2>
        <p className="text-[17px] text-white/70 max-w-[540px] mx-auto mb-9 leading-[1.75]">
          Join thousands of businesses using MeraTalk to deliver exceptional customer experiences. Start your free trial today — no credit card required.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-8 py-3.5 rounded-full font-bold text-[15px] shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] transition-all"
          >
            Start Free Trial
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded-full font-semibold text-[15px] border border-white/25 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            Talk to Sales
          </Link>
        </div>
        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-6 mt-10 text-[13px] text-white/50">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            Free 14-day trial
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            Cancel anytime
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
