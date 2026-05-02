"use client"

import { Home, MessageSquare, Users, Search, Phone, X, Video, Grid3X3, Send, ChevronRight, UserPlus, Share2 } from "lucide-react"
import Link from "next/link"

export function FeaturesV2() {
  return (
    <section className="bg-[#f5feff] py-[90px] px-[60px] max-md:px-6 max-md:py-[60px]">
      {/* Header */}
      <div className="text-center mb-[52px]">
        <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold text-[#1a1a2e] leading-[1.25] mb-3.5">
          Empower Your Business with<br />
          <span className="text-[#0a9e8f]">Real-Time Insights</span>
        </h2>
        <p className="text-base text-[#666] max-w-[520px] mx-auto leading-[1.7]">
          One powerful platform that handles every aspect of your business communication — intelligently and effortlessly.
        </p>
      </div>

      {/* Four Hero Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1400px] mx-auto mb-8">
        {/* Card 1: Cloud Phone System */}
        <div className="rounded-[20px] p-9 pb-0 overflow-hidden relative min-h-[420px] flex flex-col bg-gradient-to-br from-[#eef6ff] to-[#dff0fb]">
          <div className="mb-7">
            <h3 className="text-xl font-extrabold text-[#1a1a2e] mb-2.5">Cloud Phone System</h3>
            <p className="text-sm text-[#555] leading-[1.75] max-w-[380px]">
              Your Anywhere, Anytime Office. Work from anywhere with our AI-powered{" "}
              <Link href="#" className="text-[#0a9e8f] font-semibold underline">cloud phone system</Link>. 
              Crystal-clear calls and powerful features for business.
            </p>
          </div>
          <div className="flex-1 relative flex items-end">
            <CloudPhoneMockup />
          </div>
        </div>

        {/* Card 2: AI Power Dialer */}
        <div className="rounded-[20px] p-9 pb-0 overflow-hidden relative min-h-[420px] flex flex-col bg-gradient-to-br from-[#e8fdf7] to-[#d9f5ee]">
          <div className="mb-7">
            <h3 className="text-xl font-extrabold text-[#1a1a2e] mb-2.5">AI Power Dialer</h3>
            <p className="text-sm text-[#555] leading-[1.75] max-w-[380px]">
              Connect Smarter, Not Harder. Our AI prioritizes your hottest leads, so your team connects with the best prospects first, maximizing every call.
            </p>
          </div>
          <div className="flex-1 relative flex items-end">
            <DialerMockup />
          </div>
        </div>

        {/* Card 3: Unified Inbox */}
        <div className="rounded-[20px] p-9 pb-0 overflow-hidden relative min-h-[420px] flex flex-col bg-gradient-to-br from-[#f3f0ff] to-[#ede8fd]">
          <div className="mb-7">
            <h3 className="text-xl font-extrabold text-[#1a1a2e] mb-2.5">Unified Inbox</h3>
            <p className="text-sm text-[#555] leading-[1.75] max-w-[380px]">
              Manage all emails, chats, SMS, and messages from every channel in one place. Never miss a customer touchpoint again — all conversations, one smart inbox.
            </p>
          </div>
          <div className="flex-1 relative flex items-end justify-center">
            <UnifiedInboxMockup />
          </div>
        </div>

        {/* Card 4: Real-Time Reporting */}
        <div className="rounded-[20px] p-9 pb-0 overflow-hidden relative min-h-[420px] flex flex-col bg-gradient-to-br from-[#fff8f0] to-[#fff1e0]">
          <div className="mb-7">
            <h3 className="text-xl font-extrabold text-[#1a1a2e] mb-2.5">Real-Time Reporting</h3>
            <p className="text-sm text-[#555] leading-[1.75] max-w-[380px]">
              Track key metrics, analyze performance, and make smarter decisions with live dashboards and AI-generated insights. Know what&apos;s working — instantly.
            </p>
          </div>
          <div className="flex-1 relative flex items-end justify-center">
            <ReportingMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function CloudPhoneMockup() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto">
      <div className="flex bg-white rounded-t-[14px] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] w-full h-[200px] overflow-hidden">
        {/* Sidebar */}
        <div className="w-9 bg-gradient-to-b from-[#0d4a4a] to-[#0a9e8f] flex flex-col items-center py-3 gap-3 shrink-0">
          <div className="w-6 h-6 rounded-md flex items-center justify-center bg-white/20"><Home className="w-3.5 h-3.5 text-white" /></div>
          <MessageSquare className="w-3.5 h-3.5 text-white/50" />
          <Users className="w-3.5 h-3.5 text-white/50" />
          <Grid3X3 className="w-3.5 h-3.5 text-white/50" />
        </div>
        {/* Main */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex gap-0 border-b border-[#eee] px-2">
            <span className="flex items-center gap-1 text-[9px] font-semibold text-[#888] px-2 py-2">
              <Phone className="w-2.5 h-2.5" /> Calls
            </span>
            <span className="flex items-center gap-1 text-[9px] font-semibold text-[#0a9e8f] px-2 py-2 border-b-2 border-[#0a9e8f] -mb-px">
              <MessageSquare className="w-2.5 h-2.5" /> Messages
            </span>
            <span className="flex items-center gap-1 text-[9px] font-semibold text-[#888] px-2 py-2">
              <Video className="w-2.5 h-2.5" /> Meet
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-[7px] bg-[#f8f9fb] m-2 rounded-lg text-[9px] text-[#aaa]">
            <Search className="w-2.5 h-2.5" /> Search
          </div>
          <div className="flex items-center gap-2 px-2.5 py-[7px] hover:bg-[#f5fffe]">
            <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center text-[9px] font-bold text-white">AV</div>
            <div className="flex flex-col gap-px"><span className="text-[11px] font-semibold text-[#1a1a2e]">Alex Volkov</span><span className="text-[9px] text-[#aaa]">Whatsapp</span></div>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-[7px] hover:bg-[#f5fffe]">
            <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center text-[9px] font-bold text-white">DC</div>
            <div className="flex flex-col gap-px"><span className="text-[11px] font-semibold text-[#1a1a2e]">David Chen</span><span className="text-[9px] text-[#aaa]">Facebook</span></div>
          </div>
        </div>
      </div>
      {/* Incoming call popup */}
      <div className="absolute bottom-[30px] right-[-10px] bg-white rounded-[14px] p-[10px_14px] shadow-[0_8px_32px_rgba(0,0,0,0.16)] flex items-center gap-2.5 z-[2] animate-[floatIn_0.5s_ease_1s_both]">
        <div className="w-[34px] h-[34px] bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0">GF</div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-bold text-[#1a1a2e]">Georgia Ferna</span>
          <span className="text-[10px] text-[#888]">+1 (452) 215-2252</span>
        </div>
        <div className="flex gap-1.5">
          <button className="w-7 h-7 rounded-full bg-[#ef4444] flex items-center justify-center"><X className="w-3 h-3 text-white" /></button>
          <button className="w-7 h-7 rounded-full bg-[#22c55e] flex items-center justify-center"><Phone className="w-3 h-3 text-white" /></button>
        </div>
      </div>
      {/* Arc decoration */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 w-20 h-[120px] border-2 border-dashed border-[#0a9e8f]/27 rounded-full border-l-0 pointer-events-none" />
      <style jsx>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

function DialerMockup() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      <div className="bg-white rounded-t-[16px] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] w-full overflow-hidden">
        {/* Status bar */}
        <div className="flex justify-between items-center px-3 py-1.5 text-[9px] font-bold text-[#333] bg-[#f8f9fb]">
          <span>09:52</span>
          <span className="flex gap-[3px] items-center">
            <svg width="12" height="8" viewBox="0 0 20 12" fill="none"><path d="M1 9l4-4 4 4 4-8 4 8" stroke="#333" strokeWidth="2" strokeLinecap="round"/></svg>
            <svg width="16" height="8" viewBox="0 0 24 12" fill="none"><rect x="0" y="1" width="20" height="10" rx="2" stroke="#333" strokeWidth="1.5"/><rect x="1.5" y="2.5" width="13" height="7" rx="1" fill="#333"/><rect x="21" y="3.5" width="2" height="5" rx="1" fill="#333"/></svg>
          </span>
        </div>
        {/* Contact card */}
        <div className="flex items-center gap-2.5 p-3 border-b border-[#f0f0f0]">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" alt="Contact" className="w-10 h-10 rounded-full object-cover border-2 border-[#e5e7eb]" />
          <div className="flex-1">
            <span className="block text-xs font-bold text-[#1a1a2e]">+1 987 656 6565</span>
            <span className="block text-[10px] text-[#888]">Sales Manager</span>
          </div>
          <div className="flex gap-[5px]">
            <div className="w-[26px] h-[26px] rounded-full bg-[#f3f4f6] flex items-center justify-center">
              <UserPlus className="w-2.5 h-2.5 text-[#0a9e8f]" />
            </div>
            <div className="w-[26px] h-[26px] rounded-full bg-[#0a9e8f] flex items-center justify-center">
              <Phone className="w-2.5 h-2.5 text-white" />
            </div>
            <div className="w-[26px] h-[26px] rounded-full bg-[#f3f4f6] flex items-center justify-center">
              <Share2 className="w-2.5 h-2.5 text-[#666]" />
            </div>
          </div>
        </div>
        {/* Dialing animation */}
        <div className="flex items-center gap-2 px-3.5 py-3 bg-[#f0fffe]">
          <div className="w-8 h-8 bg-[#e8f9f7] rounded-full flex items-center justify-center animate-[pulseDot_1.5s_ease-in-out_infinite]">
            <Phone className="w-[18px] h-[18px] text-[#0a9e8f]" />
          </div>
          <span className="text-[13px] font-bold text-[#0d4a4a]">Dialing...</span>
          <div className="flex gap-[3px]">
            <span className="w-[5px] h-[5px] rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite]" />
            <span className="w-[5px] h-[5px] rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite_0.2s]" />
            <span className="w-[5px] h-[5px] rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite_0.4s]" />
          </div>
        </div>
      </div>
      {/* Ghost card */}
      <div className="absolute bottom-3 right-0 bg-white rounded-xl p-2 pr-3 shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center gap-2 animate-[floatIn_0.6s_ease_1.2s_both]">
        <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center text-[9px] font-bold text-white">SM</div>
        <div className="flex flex-col gap-px">
          <span className="text-[10px] font-semibold text-[#1a1a2e]">Sales Manager</span>
          <span className="text-[9px] text-[#aaa]">+1 987 656 6565</span>
        </div>
      </div>
      {/* Arc */}
      <div className="absolute right-[10px] top-1/2 -translate-y-1/2 w-20 h-[120px] border-2 border-dashed border-[#0a9e8f]/40 rounded-full border-l-0 pointer-events-none" />
      <style jsx>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
        @keyframes pulseDot {
          0%, 100% { box-shadow: 0 0 0 3px rgba(10,158,143,0.2); }
          50% { box-shadow: 0 0 0 7px rgba(10,158,143,0.07); }
        }
      `}</style>
    </div>
  )
}

function UnifiedInboxMockup() {
  const messages = [
    { initials: 'PK', name: 'Priya Khurana', preview: 'Hey, just wanted to follow up on...', time: '2m ago', channel: 'SMS', gradient: 'from-[#0a9e8f] to-[#3b8dd6]', unread: true },
    { initials: 'RD', name: 'Rohan Desai', preview: 'Confirmed! See you on Thursday at 3PM', time: '14m ago', channel: 'Email', gradient: 'from-[#7c3aed] to-[#4f46e5]' },
    { initials: 'NB', name: 'Niharika Bhosale', preview: 'Thanks for the quick response!', time: '32m ago', channel: 'Chat', gradient: 'from-[#f59e0b] to-[#d97706]', unread: true },
    { initials: 'MS', name: 'Mihir Singh', preview: 'Can we reschedule the demo?', time: '1h ago', channel: 'Email', gradient: 'from-[#0d4a4a] to-[#0a9e8f]' },
  ]

  const channelColors: Record<string, string> = {
    SMS: 'bg-[#e8f9f7] text-[#0a9e8f]',
    Email: 'bg-[#eef3ff] text-[#3b5bdb]',
    Chat: 'bg-[#fff4e6] text-[#d97706]',
  }

  return (
    <div className="relative w-full max-w-[340px]">
      <div className="bg-white rounded-t-[14px] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] w-full overflow-hidden flex flex-col">
        {/* Tabs */}
        <div className="flex gap-0 border-b border-[#eee] px-2.5 bg-[#fafafa]">
          {['All', 'Email', 'SMS', 'Chat'].map((tab, i) => (
            <span key={tab} className={`text-[9.5px] font-semibold px-2.5 py-[9px] cursor-pointer ${i === 0 ? 'text-[#7c3aed] border-b-2 border-[#7c3aed] -mb-px' : 'text-[#999]'}`}>
              {tab}
            </span>
          ))}
        </div>
        {/* Messages */}
        <div className="flex flex-col">
          {messages.map((msg, i) => (
            <div key={i} className={`flex items-center gap-2.5 px-3 py-[9px] border-b border-[#f5f5f7] relative transition-colors hover:bg-[#faf8ff] ${msg.unread ? 'bg-[#fdfbff]' : ''}`}>
              <div className={`w-[30px] h-[30px] rounded-full bg-gradient-to-br ${msg.gradient} flex items-center justify-center text-[9px] font-bold text-white shrink-0`}>
                {msg.initials}
              </div>
              <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-[#1a1a2e]">{msg.name}</span>
                  <span className="text-[9px] text-[#bbb]">{msg.time}</span>
                </div>
                <span className="text-[9.5px] text-[#888] truncate max-w-[180px] block">{msg.preview}</span>
                <span className={`inline-block text-[8px] font-bold px-1.5 py-px rounded-full mt-0.5 w-fit ${channelColors[msg.channel]}`}>{msg.channel}</span>
              </div>
              {msg.unread && <div className="w-2 h-2 rounded-full bg-[#7c3aed] shrink-0" />}
            </div>
          ))}
        </div>
        {/* Compose bar */}
        <div className="flex items-center gap-2 px-3 py-2 border-t border-[#eee] bg-[#fafafa]">
          <div className="flex-1 text-[9.5px] text-[#bbb] bg-[#f3f4f6] rounded-lg px-2.5 py-[5px]">Type a message...</div>
          <button className="w-[26px] h-[26px] rounded-full bg-[#7c3aed] flex items-center justify-center">
            <Send className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
      {/* Notification popup */}
      <div className="absolute top-[18px] right-[-10px] bg-white rounded-xl p-2 pr-3 shadow-[0_6px_24px_rgba(124,58,237,0.18)] flex items-center gap-2 z-[2] animate-[floatIn_0.5s_ease_1s_both]">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center shrink-0">
          <MessageSquare className="w-3 h-3 text-white" />
        </div>
        <div className="flex flex-col gap-px">
          <strong className="text-[10px] font-bold text-[#1a1a2e]">3 new messages</strong>
          <span className="text-[9px] text-[#888]">across 2 channels</span>
        </div>
      </div>
      <div className="absolute right-[15px] top-1/2 -translate-y-1/2 w-20 h-[120px] border-2 border-dashed border-[#7c3aed]/20 rounded-full border-l-0 pointer-events-none" />
      <style jsx>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

function ReportingMockup() {
  return (
    <div className="relative w-full max-w-[340px]">
      <div className="bg-white rounded-t-[14px] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] w-full overflow-hidden p-3.5 pt-3.5 pb-0 flex flex-col gap-2.5">
        <div className="flex justify-between items-center">
          <span className="text-[11px] font-bold text-[#1a1a2e]">Performance Dashboard</span>
          <span className="flex items-center gap-1 text-[9px] font-bold text-[#22c55e] bg-[#f0fdf4] px-2 py-[3px] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-[pulseDot_1.5s_ease-in-out_infinite]" />
            Live
          </span>
        </div>
        {/* KPIs */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { value: '1,284', label: 'Calls Today', trend: '12%', color: '#0a9e8f', up: true },
            { value: '94%', label: 'Answer Rate', trend: '3%', color: '#7c3aed', up: true },
            { value: '3:42', label: 'Avg Duration', trend: '8s', color: '#f59e0b', up: false },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-[#f8f9fb] rounded-[10px] p-[9px_8px] flex flex-col items-center gap-[3px]">
              <span className="text-[17px] font-extrabold leading-none" style={{ color: kpi.color }}>{kpi.value}</span>
              <span className="text-[8px] text-[#999] font-medium text-center">{kpi.label}</span>
              <span className={`text-[8px] font-bold ${kpi.up ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                {kpi.up ? '▲' : '▼'} {kpi.trend}
              </span>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="flex flex-col gap-1.5">
          <div className="text-[9px] font-semibold text-[#aaa] uppercase tracking-[0.8px]">Calls per hour</div>
          <div className="flex items-end gap-1 h-14">
            {[
              { h: 45, label: '9am' },
              { h: 65, label: '10am' },
              { h: 55, label: '11am' },
              { h: 90, label: '12pm', active: true },
              { h: 75, label: '1pm' },
              { h: 80, label: '2pm' },
              { h: 60, label: '3pm' },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-[3px]">
                <div 
                  className={`w-full rounded-t transition-colors ${bar.active ? 'bg-gradient-to-b from-[#f97316] to-[#fb923c]' : 'bg-[#e9e5ff]'}`}
                  style={{ height: `${bar.h}%` }}
                />
                <span className="text-[7.5px] text-[#ccc]">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Agents */}
        <div className="flex flex-col gap-[5px]">
          {[
            { initials: 'AK', name: 'Arya K.', score: 88, gradient: 'from-[#0a9e8f] to-[#0d4a4a]', color: '#0a9e8f' },
            { initials: 'VS', name: 'Vikram S.', score: 74, gradient: 'from-[#7c3aed] to-[#4f46e5]', color: '#7c3aed' },
          ].map((agent) => (
            <div key={agent.name} className="flex items-center gap-2 px-2 py-1.5 bg-[#f8f9fb] rounded-[9px]">
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${agent.gradient} flex items-center justify-center text-[8px] font-bold text-white shrink-0`}>
                {agent.initials}
              </div>
              <span className="text-[10px] font-semibold text-[#1a1a2e] flex-1">{agent.name}</span>
              <div className="flex-1 h-[5px] bg-[#e9e5ff] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${agent.score}%`, background: agent.color }} />
              </div>
              <span className="text-[10px] font-extrabold" style={{ color: '#f97316' }}>{agent.score}%</span>
            </div>
          ))}
        </div>
      </div>
      {/* AI insight badge */}
      <div className="absolute bottom-3.5 right-[-10px] bg-gradient-to-br from-[#fff4ed] to-[#ffecd5] rounded-[10px] p-2 pr-3 flex items-center gap-2 text-[9.5px] font-semibold text-[#7c3000] shadow-[0_6px_24px_rgba(249,115,22,0.18)] z-[2] animate-[floatIn_0.5s_ease_1s_both]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#7c3aed"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        AI: Peak hours are 12–2pm
      </div>
      <div className="absolute right-[15px] top-1/2 -translate-y-1/2 w-20 h-[120px] border-2 border-dashed border-[#f59e0b]/20 rounded-full border-l-0 pointer-events-none" />
      <style jsx>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
          50% { box-shadow: 0 0 0 7px rgba(34,197,94,0.07); }
        }
      `}</style>
    </div>
  )
}
