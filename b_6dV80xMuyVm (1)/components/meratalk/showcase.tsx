"use client"

import { Phone, MessageSquare, LayoutDashboard } from "lucide-react"

export function Showcase() {
  return (
    <section className="bg-gradient-to-br from-[#f0fffe] via-[#eaf6ff] to-[#f5f0ff] py-[90px] px-6 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-block bg-gradient-to-br from-[#0a9e8f]/15 to-[#3b8dd6]/15 border border-[#0a9e8f]/26 text-[#0a9e8f] text-[11px] font-bold tracking-[1.5px] uppercase px-5 py-1.5 rounded-full mb-4">
          Platform Features
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#0d4a4a] mb-3.5">
          All-in-One Communication Suite
        </h2>
        <p className="text-[16px] text-[#667] max-w-[520px] mx-auto leading-[1.7]">
          Transform how your team connects with customers using AI-powered voice, messaging, and analytics.
        </p>
      </div>

      {/* Panels */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Panel 1: AI Calling */}
        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(10,158,143,0.10)] flex flex-col min-h-[520px] animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex items-center gap-2 px-[18px] pt-3.5 text-[12px] font-bold text-[#0a9e8f] uppercase tracking-[1px]">
            <span className="w-2 h-2 rounded-full bg-[#0a9e8f] shadow-[0_0_0_3px_rgba(10,158,143,0.2)] animate-pulse" />
            AI Calling
          </div>
          <div className="relative flex-1 m-3 rounded-[14px] overflow-hidden min-h-[300px] bg-gradient-to-br from-[#0d4a4a] to-[#0a9e8f]">
            {/* Content Preview */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-10 h-10" />
                </div>
                <p className="text-lg font-semibold">Smart Outbound Calls</p>
                <p className="text-sm opacity-80">Real-time AI coaching</p>
              </div>
            </div>
            {/* Live badge */}
            <div className="absolute top-2.5 right-2.5 bg-red-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 z-[3]">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              LIVE
            </div>
            {/* Chat bubbles */}
            <div className="absolute bottom-[68px] left-2.5 bg-white rounded-xl p-2.5 shadow-lg max-w-[190px] z-[2] animate-in fade-in slide-in-from-bottom-2 duration-500 delay-500">
              <div className="flex items-start gap-1.5">
                <div className="w-[26px] h-[26px] bg-gradient-to-br from-[#0a9e8f] to-[#3b8dd6] rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                  AI
                </div>
                <div>
                  <div className="text-[9px] font-bold text-[#0a9e8f]">MeraTalk AI</div>
                  <div className="text-[10px] text-[#333] leading-[1.4]">Great opening! Continue with the demo offer.</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 right-2.5 bg-white rounded-xl p-2.5 shadow-lg max-w-[160px] z-[2] animate-in fade-in slide-in-from-bottom-2 duration-500 delay-1000">
              <div className="flex items-start gap-1.5">
                <div className="w-[26px] h-[26px] bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                  AG
                </div>
                <div>
                  <div className="text-[9px] font-bold text-[#f59e0b]">Agent</div>
                  <div className="text-[10px] text-[#333] leading-[1.4]">{"I'd love to schedule that demo..."}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-[18px] py-3.5 border-t border-[#f0f0f0] bg-[#fafffe] mt-auto">
            <div className="w-9 h-9 bg-[#e8f9f7] rounded-lg flex items-center justify-center shrink-0">
              <Phone className="w-[18px] h-[18px] text-[#0a9e8f]" />
            </div>
            <div>
              <strong className="block text-[13px] font-bold text-[#1a1a2e]">AI-Powered Voice</strong>
              <span className="text-[11.5px] text-[#8a95a3] leading-[1.4]">Smart coaching during live calls</span>
            </div>
          </div>
        </div>

        {/* Panel 2: Phone Mockup */}
        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(10,158,143,0.10)] flex flex-col min-h-[520px] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <div className="flex items-center gap-2 px-[18px] pt-3.5 text-[12px] font-bold text-[#0a9e8f] uppercase tracking-[1px]">
            <span className="w-2 h-2 rounded-full bg-[#0a9e8f] shadow-[0_0_0_3px_rgba(10,158,143,0.2)] animate-pulse" />
            Mobile App
          </div>
          <div className="flex-1 p-4 flex justify-center items-center bg-gradient-to-br from-[#f0fffe] to-[#eaf6ff]">
            {/* Phone Frame */}
            <div className="w-[200px] bg-[#1a1a2e] rounded-[32px] p-3 pt-3 pb-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.12)]">
              <div className="w-[60px] h-[6px] bg-black rounded-full mx-auto mb-1.5" />
              <div className="bg-[#f8f8fc] rounded-[20px] overflow-hidden min-h-[300px] flex flex-col">
                {/* Status bar */}
                <div className="flex justify-between items-center px-2.5 pt-1.5 pb-0.5 text-[9px] font-bold text-[#1a1a2e] bg-[#f8f8fc]">
                  <span>9:41</span>
                  <span className="flex items-center gap-1">
                    <svg width="12" height="8" viewBox="0 0 20 12" fill="none"><path d="M1 9l4-4 4 4 4-8 4 8" stroke="#333" strokeWidth="2" strokeLinecap="round"/></svg>
                    <svg width="16" height="8" viewBox="0 0 24 12" fill="none"><rect x="0" y="1" width="20" height="10" rx="2" stroke="#333" strokeWidth="1.5"/><rect x="1.5" y="2.5" width="13" height="7" rx="1" fill="#333"/><rect x="21" y="3.5" width="2" height="5" rx="1" fill="#333"/></svg>
                  </span>
                </div>
                {/* Tabs */}
                <div className="flex gap-1.5 px-2.5 py-1.5 bg-white">
                  {['Calls', 'SMS', 'Meet'].map((tab, i) => (
                    <span
                      key={tab}
                      className={`text-[9px] font-semibold px-2.5 py-1 rounded-full ${
                        i === 0
                          ? 'bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] text-white'
                          : 'bg-[#f0f0f5] text-[#666]'
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
                {/* Content */}
                <div className="p-2.5 flex-1">
                  <div className="text-[10px] font-semibold text-[#1a1a2e] mb-2 flex items-start gap-1">
                    <span className="text-[9px] text-[#7c3aed] font-semibold flex items-center gap-1">
                      ✨ AI Assistant
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 mb-2.5">
                    {['Quick Call', 'Send SMS', 'Schedule', 'Voicemail'].map((action) => (
                      <button
                        key={action}
                        className="bg-gradient-to-br from-[#0d4a4a] to-[#0a9e8f] text-white text-[8px] font-semibold py-1.5 px-1.5 rounded-lg text-left leading-[1.3]"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                  <div className="text-[9px] text-[#555] leading-[1.6]">
                    <strong className="text-[#1a1a2e] text-[9.5px]">Recent Activity</strong>
                    <ul className="mt-1 ml-2.5 list-disc">
                      <li>Call with John - 2m ago</li>
                      <li>SMS sent to Sarah</li>
                    </ul>
                  </div>
                  {/* Typing indicator */}
                  <div className="flex items-center gap-1.5 mt-2 p-1.5 bg-[#f0fffe] rounded-lg">
                    <div className="flex gap-0.5 items-center">
                      {[...Array(3)].map((_, i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-[#0a9e8f] animate-bounce"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                    <span className="text-[9px] text-[#0a9e8f] font-semibold">AI processing...</span>
                  </div>
                </div>
                {/* Audio bar */}
                <div className="flex items-center gap-1.5 px-2.5 py-2 bg-white border-t border-[#eee]">
                  <div className="flex-1 flex items-center gap-0.5 h-[18px]">
                    {[6, 12, 18, 10, 16, 8, 14, 6].map((h, i) => (
                      <div
                        key={i}
                        className="w-[3px] rounded-sm bg-gradient-to-t from-[#3b8dd6] to-[#0a9e8f]"
                        style={{
                          height: `${h}px`,
                          animation: `waveAnim 0.8s ease-in-out infinite alternate`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-bold text-[#333]">02:34</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-[18px] py-3.5 border-t border-[#f0f0f0] bg-[#fafffe] mt-auto">
            <div className="w-9 h-9 bg-[#e8f9f7] rounded-lg flex items-center justify-center shrink-0">
              <MessageSquare className="w-[18px] h-[18px] text-[#0a9e8f]" />
            </div>
            <div>
              <strong className="block text-[13px] font-bold text-[#1a1a2e]">Mobile-First Design</strong>
              <span className="text-[11.5px] text-[#8a95a3] leading-[1.4]">Work from anywhere, on any device</span>
            </div>
          </div>
        </div>

        {/* Panel 3: Dashboard */}
        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(10,158,143,0.10)] flex flex-col min-h-[520px] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="flex items-center gap-2 px-[18px] pt-3.5 text-[12px] font-bold text-[#0a9e8f] uppercase tracking-[1px]">
            <span className="w-2 h-2 rounded-full bg-[#0a9e8f] shadow-[0_0_0_3px_rgba(10,158,143,0.2)] animate-pulse" />
            Team Dashboard
          </div>
          <div className="flex flex-1 m-3 rounded-xl overflow-hidden border border-[#e8e8f0] min-h-[300px]">
            {/* Sidebar */}
            <div className="w-9 bg-gradient-to-b from-[#0d4a4a] to-[#0a9e8f] flex flex-col items-center py-2.5 gap-3.5 shrink-0">
              {[true, false, false, false].map((active, i) => (
                <div
                  key={i}
                  className={`w-[26px] h-[26px] rounded-lg flex items-center justify-center cursor-pointer ${
                    active ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                >
                  {i === 0 && <LayoutDashboard className="w-3.5 h-3.5 text-white" />}
                  {i === 1 && <Phone className="w-3.5 h-3.5 text-white/50" />}
                  {i === 2 && <MessageSquare className="w-3.5 h-3.5 text-white/50" />}
                  {i === 3 && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                </div>
              ))}
            </div>
            {/* Conversation list */}
            <div className="w-[130px] border-r border-[#eee] bg-white shrink-0 overflow-hidden flex flex-col">
              <div className="text-[10px] font-bold text-[#1a1a2e] px-2 py-2 pt-2">Messages</div>
              <div className="flex gap-1 px-2 pb-1.5">
                {['All', 'Team', 'Direct'].map((filter, i) => (
                  <span
                    key={filter}
                    className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full cursor-pointer ${
                      i === 0 ? 'bg-[#0a9e8f] text-white' : 'bg-[#f5f5f5] text-[#888]'
                    }`}
                  >
                    {filter}
                  </span>
                ))}
              </div>
              {[
                { initials: 'PK', name: 'Priya K.', preview: 'Voicemail received', time: '12:54', gradient: 'from-[#0a9e8f] to-[#0d4a4a]', active: true },
                { initials: 'BK', name: 'Bhumi K.', preview: 'Priya called', time: '12:50', gradient: 'from-[#7c3aed] to-[#4f46e5]' },
                { initials: 'NB', name: 'Niharika B.', preview: 'Thanks for...', time: 'Yday', gradient: 'from-[#f59e0b] to-[#d97706]' },
              ].map((conv, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-1.5 px-2 py-1.5 cursor-pointer transition-colors ${
                    conv.active ? 'bg-[#eafaf8]' : 'hover:bg-[#f5fffe]'
                  }`}
                >
                  <div
                    className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0 bg-gradient-to-br ${conv.gradient}`}
                  >
                    {conv.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[9px] font-semibold text-[#1a1a2e] truncate">{conv.name}</span>
                    <span className="block text-[8.5px] text-[#999] truncate">{conv.preview}</span>
                  </div>
                  <span className="text-[8px] text-[#bbb] shrink-0">{conv.time}</span>
                </div>
              ))}
            </div>
            {/* Chat area */}
            <div className="flex-1 flex flex-col bg-[#fcfcff] min-w-0">
              <div className="flex items-center gap-1.5 px-2.5 py-2 border-b border-[#eee] bg-white">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center text-[10px] font-bold text-white">RD</div>
                <span className="text-[10px] font-bold text-[#1a1a2e] flex-1">Rohan Desai</span>
              </div>
              <div className="flex-1 p-2 flex flex-col gap-1.5 overflow-hidden">
                <div className="flex justify-start">
                  <div className="max-w-[80%] px-2.5 py-1.5 rounded-lg text-[9px] leading-[1.5] text-[#1a1a2e] bg-white border border-[#eee] rounded-tl-sm">
                    Hey, just wanted to touch base on the launch.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] px-2.5 py-1.5 rounded-lg text-[9px] leading-[1.5] text-white bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] rounded-tr-sm">
                    {"Yes, I've reviewed everything."}
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] px-2.5 py-1.5 rounded-lg text-[9px] leading-[1.5] text-[#1a1a2e] bg-white border border-[#eee] rounded-tl-sm">
                    {"Looks great! Let's move forward."}
                  </div>
                </div>
                {/* Typing indicator */}
                <div className="flex items-center gap-1.5">
                  <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center text-[8px] font-bold text-white shrink-0">RD</div>
                  <div className="flex gap-1 bg-white border border-[#eee] px-2 py-1.5 rounded-lg rounded-tl-sm items-center">
                    {[...Array(3)].map((_, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#0a9e8f] animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#999]">Typing...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-[18px] py-3.5 border-t border-[#f0f0f0] bg-[#fafffe] mt-auto">
            <div className="w-9 h-9 bg-[#e8f9f7] rounded-lg flex items-center justify-center shrink-0">
              <MessageSquare className="w-[18px] h-[18px] text-[#0a9e8f]" />
            </div>
            <div>
              <strong className="block text-[13px] font-bold text-[#1a1a2e]">Unified Team Inbox</strong>
              <span className="text-[11.5px] text-[#8a95a3] leading-[1.4]">All calls, messages & voicemails in one dashboard</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes waveAnim {
          from { transform: scaleY(0.4); opacity: 0.5; }
          to { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
