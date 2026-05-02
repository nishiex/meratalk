"use client"

import Link from "next/link"
import { Phone, MessageSquare, Mail, BarChart3, X, Check, Search, Home, Video, Users } from "lucide-react"

export function Features() {
  return (
    <section className="bg-[#f5feff] py-[90px] px-[60px]">
      {/* Header */}
      <div className="text-center mb-[52px]">
        <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold text-[#1a1a2e] leading-[1.25] mb-3.5">
          Empower Your Business with<br />
          <span className="text-[#0a9e8f]">Real-Time Insights</span>
        </h2>
        <p className="text-[16px] text-[#666] max-w-[520px] mx-auto leading-[1.7]">
          One powerful platform that handles every aspect of your business communication — intelligently and effortlessly.
        </p>
      </div>

      {/* Hero Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1100px] mx-auto mb-8">
        {/* Card 1: Cloud Phone System */}
        <div className="rounded-[20px] p-9 pb-0 overflow-hidden relative min-h-[420px] flex flex-col bg-gradient-to-br from-[#eef6ff] to-[#dff0fb]">
          <div className="mb-7">
            <h3 className="text-[20px] font-extrabold text-[#1a1a2e] mb-2.5">Cloud Phone System</h3>
            <p className="text-[14px] text-[#555] leading-[1.75] max-w-[380px]">
              Your Anywhere, Anytime Office. Work from anywhere with our AI-powered{" "}
              <Link href="#" className="text-[#0a9e8f] font-semibold underline">cloud phone system</Link>. 
              Crystal-clear calls and powerful features for business.
            </p>
          </div>
          <div className="flex-1 relative flex items-end justify-center">
            {/* Messaging UI Mockup */}
            <div className="flex bg-white rounded-[14px_14px_0_0] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] w-full max-w-[340px] h-[200px] overflow-hidden">
              <div className="w-9 bg-gradient-to-b from-[#0d4a4a] to-[#0a9e8f] flex flex-col items-center py-3 gap-3 shrink-0">
                {[Home, MessageSquare, Users, Phone].map((Icon, i) => (
                  <div key={i} className={`w-6 h-6 rounded-md flex items-center justify-center ${i === 0 ? 'bg-white/20' : ''}`}>
                    <Icon className={`w-3.5 h-3.5 ${i === 0 ? 'text-white' : 'text-white/50'}`} />
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex gap-0 border-b border-[#eee] px-2">
                  {[{ icon: Phone, label: 'Calls' }, { icon: MessageSquare, label: 'Messages', active: true }, { icon: Video, label: 'Meet' }].map((tab, i) => (
                    <span
                      key={i}
                      className={`flex items-center gap-1 text-[9px] font-semibold py-2 px-2 cursor-pointer whitespace-nowrap ${
                        tab.active ? 'text-[#0a9e8f] border-b-2 border-[#0a9e8f] -mb-px' : 'text-[#888]'
                      }`}
                    >
                      <tab.icon className="w-2.5 h-2.5" />
                      {tab.label}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#f8f9fb] m-2 rounded-lg text-[9px] text-[#aaa]">
                  <Search className="w-2.5 h-2.5" />
                  <span>Search</span>
                </div>
                {[
                  { initials: 'AV', name: 'Alex Volkov', sub: 'Whatsapp', gradient: 'from-[#0a9e8f] to-[#0d4a4a]' },
                  { initials: 'DC', name: 'David Chen', sub: 'Facebook', gradient: 'from-[#7c3aed] to-[#4f46e5]' },
                ].map((contact, i) => (
                  <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 cursor-pointer hover:bg-[#f5fffe] transition-colors">
                    <div className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0 bg-gradient-to-br ${contact.gradient}`}>
                      {contact.initials}
                    </div>
                    <div className="flex flex-col gap-px">
                      <span className="text-[11px] font-semibold text-[#1a1a2e]">{contact.name}</span>
                      <span className="text-[9px] text-[#aaa]">{contact.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Incoming call popup */}
            <div className="absolute bottom-[30px] right-[-10px] bg-white rounded-[14px] p-2.5 px-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.16)] flex items-center gap-2.5 whitespace-nowrap z-[2] animate-in fade-in slide-in-from-bottom-2 duration-500 delay-1000">
              <div className="w-[34px] h-[34px] bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                GF
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-[#1a1a2e]">Georgia Ferna</span>
                <span className="text-[10px] text-[#888]">+1 (452) 215-2252</span>
              </div>
              <div className="flex gap-1.5">
                <button className="w-7 h-7 rounded-full bg-[#ef4444] flex items-center justify-center">
                  <X className="w-3 h-3 text-white" />
                </button>
                <button className="w-7 h-7 rounded-full bg-[#22c55e] flex items-center justify-center">
                  <Phone className="w-3 h-3 text-white" />
                </button>
              </div>
            </div>
            {/* Dashed arc decoration */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 w-20 h-[120px] border-2 border-dashed border-[#0a9e8f]/26 rounded-full border-l-0 pointer-events-none" />
          </div>
        </div>

        {/* Card 2: AI Power Dialer */}
        <div className="rounded-[20px] p-9 pb-0 overflow-hidden relative min-h-[420px] flex flex-col bg-gradient-to-br from-[#e8fdf7] to-[#d9f5ee]">
          <div className="mb-7">
            <h3 className="text-[20px] font-extrabold text-[#1a1a2e] mb-2.5">AI Power Dialer</h3>
            <p className="text-[14px] text-[#555] leading-[1.75] max-w-[380px]">
              Connect Smarter, Not Harder. Our AI prioritizes your hottest leads, so your team connects with the best prospects first, maximizing every call.
            </p>
          </div>
          <div className="flex-1 relative flex items-end justify-center">
            {/* Dialer UI Mockup */}
            <div className="bg-white rounded-[16px_16px_0_0] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] w-full max-w-[320px] overflow-hidden">
              <div className="flex justify-between items-center px-3 py-1.5 text-[9px] font-bold text-[#333] bg-[#f8f9fb]">
                <span>09:52</span>
                <span className="flex items-center gap-1">
                  <svg width="12" height="8" viewBox="0 0 20 12" fill="none"><path d="M1 9l4-4 4 4 4-8 4 8" stroke="#333" strokeWidth="2" strokeLinecap="round"/></svg>
                  <svg width="16" height="8" viewBox="0 0 24 12" fill="none"><rect x="0" y="1" width="20" height="10" rx="2" stroke="#333" strokeWidth="1.5"/><rect x="1.5" y="2.5" width="13" height="7" rx="1" fill="#333"/><rect x="21" y="3.5" width="2" height="5" rx="1" fill="#333"/></svg>
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 border-b border-[#f0f0f0]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#667] to-[#999] flex items-center justify-center text-white text-[14px] font-bold">SM</div>
                <div className="flex-1">
                  <span className="block text-[12px] font-bold text-[#1a1a2e]">+1 987 656 6565</span>
                  <span className="block text-[10px] text-[#888]">Sales Manager</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-[26px] h-[26px] rounded-full bg-[#f3f4f6] flex items-center justify-center">
                    <Users className="w-2.5 h-2.5 text-[#0a9e8f]" />
                  </div>
                  <div className="w-[26px] h-[26px] rounded-full bg-[#0a9e8f] flex items-center justify-center">
                    <Phone className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
              </div>
              {/* Dialing animation */}
              <div className="flex items-center gap-2 px-3.5 py-3 bg-[#f0fffe]">
                <div className="w-8 h-8 bg-[#e8f9f7] rounded-full flex items-center justify-center animate-pulse">
                  <Phone className="w-[18px] h-[18px] text-[#0a9e8f]" />
                </div>
                <span className="text-[13px] font-bold text-[#0d4a4a]">Dialing...</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#0a9e8f] animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Ghost card */}
            <div className="absolute bottom-3 right-0 bg-white rounded-xl p-2 px-3 shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-600 delay-1200">
              <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center text-[9px] font-bold text-white">SM</div>
              <div className="flex flex-col gap-px">
                <span className="text-[10px] font-semibold text-[#1a1a2e]">Sales Manager</span>
                <span className="text-[9px] text-[#aaa]">+1 987 656 6565</span>
              </div>
            </div>
            {/* Arc decoration */}
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 w-20 h-[120px] border-2 border-dashed border-[#0a9e8f]/40 rounded-full border-l-0 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom 4-card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto">
        {[
          { icon: Phone, title: "Smart Call Routing", desc: "Automatically route calls to the right team member based on skills, availability, and customer history." },
          { icon: MessageSquare, title: "Omnichannel Messaging", desc: "Engage customers via SMS, WhatsApp, email, and chat from a single unified inbox." },
          { icon: Mail, title: "Voicemail to Email", desc: "Never miss a message. Get voicemails transcribed and delivered straight to your inbox." },
          { icon: BarChart3, title: "Real-Time Analytics", desc: "Track performance metrics, monitor team activity, and make data-driven decisions instantly." },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(10,158,143,0.07)] border border-[#f0f5f5] hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(10,158,143,0.14)] transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] rounded-[14px] flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-[15px] font-bold text-[#1a1a2e] mb-2">{feature.title}</h4>
            <p className="text-[13px] text-[#666] leading-[1.7]">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
