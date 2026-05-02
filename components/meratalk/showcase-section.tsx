"use client"

import { Phone, Clock, MessageSquare, Grid3X3, Video, Users } from "lucide-react"

export function ShowcaseSection() {
  return (
    <section className="bg-gradient-to-br from-[#f0fffe] via-[#eaf6ff] to-[#f5f0ff] py-[90px] px-6 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-block bg-gradient-to-br from-[#0a9e8f]/13 to-[#3b8dd6]/13 border border-[#0a9e8f]/27 text-[#0a9e8f] text-[11px] font-bold tracking-[1.5px] uppercase px-[18px] py-1.5 rounded-full mb-[18px]">
          PLATFORM IN ACTION
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#0d4a4a] mb-3.5">
          See MeraTalk Work For You
        </h2>
        <p className="text-base text-[#667] max-w-[520px] mx-auto leading-[1.7]">
          From intelligent calls to unified messaging — everything your team needs, live and in sync.
        </p>
      </div>

      {/* Three Panels */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Panel 1: AI Calling */}
        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(10,158,143,0.10)] flex flex-col min-h-[520px] animate-[panelRise_0.7s_ease_both]">
          <div className="flex items-center gap-2 px-[18px] pt-3.5 text-[12px] font-bold text-[#0a9e8f] uppercase tracking-[1px]">
            <span className="w-2 h-2 rounded-full bg-[#0a9e8f] shadow-[0_0_0_3px_rgba(10,158,143,0.2)] animate-[pulseDot_1.8s_ease-in-out_infinite]" />
            AI-Powered Calling
          </div>
          <div className="relative flex-1 m-3 rounded-[14px] overflow-hidden min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" 
              alt="Professional on call"
              className="w-full h-full object-cover object-top absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(13,74,74,0.45)] rounded-[14px]" />
            
            {/* Chat Bubbles */}
            <div className="absolute bottom-[68px] left-2.5 flex items-start gap-[7px] bg-white rounded-xl p-[9px_12px] shadow-[0_4px_20px_rgba(0,0,0,0.18)] max-w-[190px] z-[2] animate-[floatIn_0.5s_ease_0.6s_both]">
              <div className="w-[26px] h-[26px] bg-gradient-to-br from-[#0a9e8f] to-[#3b8dd6] rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0">AT</div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] font-bold text-[#0a9e8f]">AI Assistant</span>
                <span className="text-[10px] text-[#333] leading-[1.4]">{"Hi Tom! Great speaking with you today. I've scheduled your meeting for Jan 9th at 2 PM IST."}</span>
              </div>
            </div>
            <div className="absolute bottom-3 right-2.5 flex items-start gap-[7px] bg-white rounded-xl p-[9px_12px] shadow-[0_4px_20px_rgba(0,0,0,0.18)] max-w-[190px] z-[2] animate-[floatIn_0.5s_ease_1.2s_both]">
              <div className="w-[26px] h-[26px] bg-[#0d4a4a] rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0">TM</div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] font-bold text-[#0a9e8f]">Tom</span>
                <span className="text-[10px] text-[#333] leading-[1.4]">{"Perfect, thanks!"}</span>
              </div>
            </div>
            
            {/* Live Badge */}
            <div className="absolute top-2.5 right-2.5 bg-[rgba(220,38,38,0.9)] text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-[5px] z-[3]">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-[blink_1s_step-end_infinite]" />
              Live Call
            </div>
          </div>
          <div className="flex items-center gap-3 p-[14px_18px] border-t border-[#f0f0f0] bg-[#fafffe] mt-auto shrink-0">
            <div className="w-9 h-9 bg-[#e8f9f7] rounded-[10px] flex items-center justify-center shrink-0">
              <Phone className="w-[18px] h-[18px] text-[#0a9e8f]" />
            </div>
            <div>
              <strong className="block text-[13px] font-bold text-[#1a1a2e]">Auto Follow-Up</strong>
              <span className="text-[11.5px] text-[#8a95a3] leading-[1.4]">AI books meetings & sends summaries instantly</span>
            </div>
          </div>
        </div>

        {/* Panel 2: Phone Mockup */}
        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(10,158,143,0.10)] flex flex-col min-h-[520px] animate-[panelRise_0.7s_ease_0.12s_both]">
          <div className="flex items-center gap-2 px-[18px] pt-3.5 text-[12px] font-bold text-[#0a9e8f] uppercase tracking-[1px]">
            <span className="w-2 h-2 rounded-full bg-[#0a9e8f] shadow-[0_0_0_3px_rgba(10,158,143,0.2)] animate-[pulseDot_1.8s_ease-in-out_infinite]" />
            Smart Call Summary
          </div>
          <div className="flex-1 p-4 flex justify-center items-center bg-gradient-to-br from-[#f0fffe] to-[#eaf6ff]">
            <PhoneMockup />
          </div>
          <div className="flex items-center gap-3 p-[14px_18px] border-t border-[#f0f0f0] bg-[#fafffe] mt-auto shrink-0">
            <div className="w-9 h-9 bg-[#e8f9f7] rounded-[10px] flex items-center justify-center shrink-0">
              <Clock className="w-[18px] h-[18px] text-[#0a9e8f]" />
            </div>
            <div>
              <strong className="block text-[13px] font-bold text-[#1a1a2e]">Instant AI Summaries</strong>
              <span className="text-[11.5px] text-[#8a95a3] leading-[1.4]">Every call logged, transcribed & actioned automatically</span>
            </div>
          </div>
        </div>

        {/* Panel 3: Dashboard */}
        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(10,158,143,0.10)] flex flex-col min-h-[520px] animate-[panelRise_0.7s_ease_0.24s_both]">
          <div className="flex items-center gap-2 px-[18px] pt-3.5 text-[12px] font-bold text-[#0a9e8f] uppercase tracking-[1px]">
            <span className="w-2 h-2 rounded-full bg-[#0a9e8f] shadow-[0_0_0_3px_rgba(10,158,143,0.2)] animate-[pulseDot_1.8s_ease-in-out_infinite]" />
            Unified Team Inbox
          </div>
          <div className="flex-1 m-3 rounded-xl overflow-hidden border border-[#e8e8f0] min-h-[300px]">
            <DashboardMockup />
          </div>
          <div className="flex items-center gap-3 p-[14px_18px] border-t border-[#f0f0f0] bg-[#fafffe] mt-auto shrink-0">
            <div className="w-9 h-9 bg-[#e8f9f7] rounded-[10px] flex items-center justify-center shrink-0">
              <MessageSquare className="w-[18px] h-[18px] text-[#0a9e8f]" />
            </div>
            <div>
              <strong className="block text-[13px] font-bold text-[#1a1a2e]">Unified Team Inbox</strong>
              <span className="text-[11.5px] text-[#8a95a3] leading-[1.4]">All calls, messages & voicemails in one live dashboard</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="w-[200px] bg-[#1a1a2e] rounded-[32px] p-[12px_7px_10px] shadow-[0_16px_48px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.12)]">
      <div className="w-[60px] h-1.5 bg-black rounded-full mx-auto mb-1.5" />
      <div className="bg-[#f8f8fc] rounded-[20px] overflow-hidden min-h-[300px] flex flex-col">
        {/* Status bar */}
        <div className="flex justify-between items-center px-2.5 pt-1.5 pb-0.5 text-[9px] font-bold text-[#1a1a2e] bg-[#f8f8fc]">
          <span>9:41</span>
          <span className="flex gap-1 items-center">
            <svg width="12" height="10" viewBox="0 0 24 24" fill="#1a1a2e"><path d="M1.42 9a16 16 0 0 1 21.16 0M5 12.55a11 11 0 0 1 14.08 0M8.53 16.11a6 6 0 0 1 6.95 0" stroke="#1a1a2e" strokeWidth="2" fill="none"/><circle cx="12" cy="20" r="1.5" fill="#1a1a2e"/></svg>
            <svg width="18" height="10" viewBox="0 0 24 12" fill="none"><rect x="0" y="1" width="20" height="10" rx="2" stroke="#1a1a2e" strokeWidth="1.5"/><rect x="21" y="3.5" width="2" height="5" rx="1" fill="#1a1a2e"/><rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="#1a1a2e"/></svg>
          </span>
        </div>
        {/* Tabs */}
        <div className="flex gap-1.5 px-2.5 py-1.5 bg-white">
          <button className="text-[9px] font-semibold px-2.5 py-1 rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] text-white">Summary</button>
          <button className="text-[9px] font-semibold px-2.5 py-1 rounded-full bg-[#f0f0f5] text-[#666]">Transcript</button>
        </div>
        {/* Content */}
        <div className="p-2.5 flex-1 overflow-hidden">
          <div className="text-[10px] font-semibold text-[#1a1a2e] leading-[1.5] mb-2 flex items-start gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#7c3aed"><path d="M12 2L8 8H2l5 4-2 7 7-5 7 5-2-7 5-4h-6L12 2z"/></svg>
            Confirmation of demo booking with <strong>Agastya Patel</strong>
          </div>
          <div className="text-[9px] text-[#7c3aed] font-semibold flex items-center gap-1 mb-2">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#7c3aed"><path d="M12 2L8 8H2l5 4-2 7 7-5 7 5-2-7 5-4h-6L12 2z"/></svg>
            Ask AI assistant
          </div>
          <div className="grid grid-cols-2 gap-1 mb-2.5">
            {['Generate To-Do List', 'Create Follow Up', 'Draft Email', 'Summarize'].map((action) => (
              <button key={action} className="bg-gradient-to-br from-[#0d4a4a] to-[#0a9e8f] text-white text-[8px] font-semibold p-1.5 rounded-[7px] text-left leading-[1.3]">
                {action} ›
              </button>
            ))}
          </div>
          <div className="text-[9px] text-[#555] leading-[1.6]">
            <strong className="text-[#1a1a2e] text-[9.5px]">Call Details:</strong>
            <p>You called Agastya Patel after he showed interest in improving business communication.</p>
          </div>
          {/* Typing */}
          <div className="flex items-center gap-1.5 mt-2 p-1.5 bg-[#f0fffe] rounded-lg">
            <div className="flex gap-[3px] items-center">
              <span className="w-[5px] h-[5px] rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite]" />
              <span className="w-[5px] h-[5px] rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite_0.2s]" />
              <span className="w-[5px] h-[5px] rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite_0.4s]" />
            </div>
            <span className="text-[9px] text-[#0a9e8f] font-semibold">AI generating insights...</span>
          </div>
        </div>
        {/* Audio bar */}
        <div className="flex items-center gap-1.5 px-2.5 py-2 bg-white border-t border-[#eee]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a9e8f" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          <div className="flex-1 flex items-center gap-[2px] h-[18px]">
            {[6, 12, 18, 10, 16, 8, 14, 6].map((h, i) => (
              <div 
                key={i} 
                className="w-[3px] bg-gradient-to-b from-[#0a9e8f] to-[#3b8dd6] rounded-sm animate-[waveAnim_0.8s_ease-in-out_infinite_alternate]" 
                style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <span className="text-[9px] font-bold text-[#333]">3:45</span>
        </div>
      </div>
    </div>
  )
}

function DashboardMockup() {
  const contacts = [
    { initials: 'PK', name: 'Priya Khurana', preview: 'Voicemail received...', time: '12:54', gradient: 'from-[#0a9e8f] to-[#0d4a4a]', active: true, badge: 3, phone: '+1 (555) 234-5678' },
    { initials: 'BK', name: 'Bhumi Kapoor', preview: 'Priya called', time: '12:50', gradient: 'from-[#7c3aed] to-[#4f46e5]', badge: 2, phone: '+1 (555) 345-6789' },
    { initials: 'NB', name: 'Niharika Bhosale', preview: 'Thanks...', time: 'Yest', gradient: 'from-[#f59e0b] to-[#d97706]', phone: '+1 (555) 456-7890' },
    { initials: 'MS', name: 'Mihir Singh', preview: 'Niharik...', time: 'Yest', gradient: 'from-[#0a9e8f] to-[#3b82f6]', badge: 5, phone: '+1 (555) 567-8901' },
    { initials: 'AK', name: 'Amit Kumar', preview: 'New lead from...', time: 'Mon', gradient: 'from-[#ec4899] to-[#be185d]', badge: 1, phone: '+1 (555) 678-9012' },
    { initials: 'RS', name: 'Riya Sharma', preview: 'Call scheduled...', time: 'Mon', gradient: 'from-[#06b6d4] to-[#0891b2]', phone: '+1 (555) 789-0123' },
  ]

  return (
    <div className="flex h-full min-h-[300px]">
      {/* Sidebar */}
      <div className="w-9 bg-gradient-to-b from-[#0d4a4a] to-[#0a9e8f] flex flex-col items-center py-2.5 gap-3.5 shrink-0">
        <div className="w-[26px] h-[26px] rounded-[7px] bg-white/20 flex items-center justify-center">
          <Grid3X3 className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="relative">
          <Phone className="w-3.5 h-3.5 text-white/80" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[7px] font-bold text-white flex items-center justify-center animate-pulse">4</span>
        </div>
        <div className="relative">
          <MessageSquare className="w-3.5 h-3.5 text-white/80" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[7px] font-bold text-white flex items-center justify-center">8</span>
        </div>
        <div className="relative">
          <Video className="w-3.5 h-3.5 text-white/50" />
          <span className="absolute -top-1 -right-1.5 w-[14px] h-3 bg-green-500 rounded-full text-[6px] font-bold text-white flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]">Live</span>
        </div>
        <Users className="w-3.5 h-3.5 text-white/50" />
      </div>
      
      {/* Contact List */}
      <div className="w-[130px] border-r border-[#eee] bg-white shrink-0 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-2 pt-2 pb-1">
          <span className="text-[10px] font-bold text-[#1a1a2e]">Messages</span>
          <span className="text-[8px] font-bold text-white bg-[#0a9e8f] rounded-full px-1.5 py-0.5">11 new</span>
        </div>
        <div className="flex gap-1 px-2 pb-1.5">
          {['All', 'Team', 'Direct'].map((filter, i) => (
            <span key={filter} className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full cursor-pointer ${i === 0 ? 'bg-[#0a9e8f] text-white' : 'bg-[#f5f5f5] text-[#888]'}`}>
              {filter}
            </span>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-1.5 px-2 py-1.5 cursor-pointer transition-all ${contact.active ? 'bg-[#eafaf8] border-l-2 border-[#0a9e8f]' : 'hover:bg-[#f5fffe]'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative shrink-0">
                <div className={`w-[26px] h-[26px] rounded-full bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-[9px] font-bold text-white`}>
                  {contact.initials}
                </div>
                {contact.badge && (
                  <span className="absolute -top-0.5 -right-0.5 w-[14px] h-[14px] bg-red-500 rounded-full text-[8px] font-bold text-white flex items-center justify-center shadow-sm animate-[badgePop_0.3s_ease]">
                    {contact.badge}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-[#1a1a2e] truncate">{contact.name}</span>
                  <span className="text-[7px] text-[#bbb] shrink-0 ml-1">{contact.time}</span>
                </div>
                <span className="block text-[8px] text-[#999] truncate">{contact.preview}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#fcfcff] min-w-0">
        <div className="flex items-center gap-[7px] px-2.5 py-2 border-b border-[#eee] bg-white">
          <div className="relative">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center text-[10px] font-bold text-white">RD</div>
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold text-[#1a1a2e] block">Rohan Desai</span>
            <span className="text-[8px] text-[#0a9e8f]">+1 (555) 123-4567</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-6 h-6 rounded-full bg-[#f0f0f5] flex items-center justify-center hover:bg-[#e5e5ea] cursor-pointer transition-colors">
              <Video className="w-[11px] h-[11px] text-[#666]" />
            </div>
            <div className="w-6 h-6 rounded-full bg-[#0a9e8f] flex items-center justify-center cursor-pointer animate-[ringPulse_2s_ease-in-out_infinite]">
              <Phone className="w-[11px] h-[11px] text-white" />
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden p-2 flex flex-col gap-1.5">
          <div className="flex justify-start animate-[msgSlideIn_0.4s_ease]">
            <div className="max-w-[80%] p-[6px_9px] rounded-[10px] text-[9px] leading-[1.5] text-[#1a1a2e] bg-white border border-[#eee] rounded-tl-sm shadow-sm">
              Hey, just wanted to touch base on the upcoming product launch.
            </div>
          </div>
          <div className="flex justify-end animate-[msgSlideIn_0.4s_ease_0.2s_both]">
            <div className="max-w-[80%] p-[6px_9px] rounded-[10px] text-[9px] leading-[1.5] text-white bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] rounded-tr-sm shadow-sm">
              {"Yes, I've reviewed everything."}
            </div>
          </div>
          <div className="flex justify-start animate-[msgSlideIn_0.4s_ease_0.4s_both]">
            <div className="max-w-[80%] p-[6px_9px] rounded-[10px] text-[9px] leading-[1.5] text-[#1a1a2e] bg-white border border-[#eee] rounded-tl-sm shadow-sm">
              {"Looks great! Let's move forward with that."}
            </div>
          </div>
          <div className="flex justify-end animate-[msgSlideIn_0.4s_ease_0.6s_both]">
            <div className="max-w-[80%] p-[6px_9px] rounded-[10px] text-[9px] leading-[1.5] text-white bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] rounded-tr-sm shadow-sm">
              {"Sounds good to me. I'll create key dates for the campaign and send it to you tomorrow."}
            </div>
          </div>
          {/* Typing indicator */}
          <div className="flex items-center gap-[5px] animate-[fadeIn_0.5s_ease_1s_both]">
            <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center text-[8px] font-bold text-white shrink-0">RD</div>
            <div className="flex gap-[3px] bg-white border border-[#eee] p-[5px_8px] rounded-tl-sm rounded-[10px] items-center shadow-sm">
              <span className="w-[5px] h-[5px] rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite]" />
              <span className="w-[5px] h-[5px] rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite_0.2s]" />
              <span className="w-[5px] h-[5px] rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite_0.4s]" />
            </div>
            <span className="text-[9px] text-[#999]">Typing...</span>
          </div>
        </div>
        {/* Input bar */}
        <div className="flex items-center gap-2 px-2 py-1.5 border-t border-[#eee] bg-white">
          <div className="flex-1 flex items-center bg-[#f5f5f7] rounded-full px-2.5 py-1">
            <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent text-[9px] outline-none text-[#333] placeholder:text-[#999]" readOnly />
          </div>
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center cursor-pointer">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </div>
        </div>
      </div>
    </div>
  )
}
