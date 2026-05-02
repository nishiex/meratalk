"use client"

import { Check, ChevronRight, Clock, Phone, Users, Bot } from "lucide-react"
import Link from "next/link"

export function AlternatingFeatures() {
  return (
    <section className="overflow-hidden">
      {/* Row 1: Team Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[60px] py-20 px-20 max-lg:px-6 max-lg:gap-9 bg-gradient-to-br from-[#eef6ff] to-[#e8f9f7]">
        <div>
          <div className="inline-block bg-[#e8f9f7] text-[#0a9e8f] text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-[5px] rounded-full mb-4">
            Team Management
          </div>
          <h2 className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-extrabold text-[#0d4a4a] leading-[1.2] mb-4">
            Tailored for Growing Teams
          </h2>
          <p className="text-[15px] text-[#555] leading-[1.8] mb-6 max-w-[440px]">
            Easily onboard new team members, assign phone numbers, and manage everything from a centralized dashboard. Scale from 5 to 500 agents without missing a beat.
          </p>
          <ul className="flex flex-col gap-2.5 mb-8">
            {['One-click agent onboarding', 'Role-based permissions & access', 'Centralized number management'].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#333]">
                <Check className="w-4 h-4 text-[#0a9e8f]" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="inline-flex items-center gap-1.5 bg-[#0d1b2a] text-white text-[13px] font-bold px-6 py-3 rounded-lg hover:bg-[#0a9e8f] hover:-translate-y-0.5 transition-all">
            Learn More <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <SalesDialerMockup />
        </div>
      </div>

      {/* Row 2: Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[60px] py-20 px-20 max-lg:px-6 max-lg:gap-9 bg-gradient-to-br from-[#fff5f5] to-[#fdf2ff]">
        <div className="flex justify-center items-center max-lg:order-first lg:order-first">
          <AnalyticsMockup />
        </div>
        <div>
          <div className="inline-block bg-[#e8f9f7] text-[#0a9e8f] text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-[5px] rounded-full mb-4">
            Analytics
          </div>
          <h2 className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-extrabold text-[#0d4a4a] leading-[1.2] mb-4">
            Real-Time Analytics & Reporting
          </h2>
          <p className="text-[15px] text-[#555] leading-[1.8] mb-6 max-w-[440px]">
            Gain instant insights into call performance, team activity, and customer interactions to optimize operations and efficiency. Make data-driven decisions with live dashboards.
          </p>
          <ul className="flex flex-col gap-2.5 mb-8">
            {['Live call & team performance metrics', 'AI-generated weekly reports', 'Custom KPI tracking dashboards'].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#333]">
                <Check className="w-4 h-4 text-[#0a9e8f]" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="inline-flex items-center gap-1.5 bg-[#0d1b2a] text-white text-[13px] font-bold px-6 py-3 rounded-lg hover:bg-[#0a9e8f] hover:-translate-y-0.5 transition-all">
            Learn More <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Row 3: AI Receptionist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[60px] py-20 px-20 max-lg:px-6 max-lg:gap-9 bg-gradient-to-br from-[#f0fff8] to-[#e8f9f7]">
        <div>
          <div className="inline-block bg-[#e8f9f7] text-[#0a9e8f] text-[11px] font-bold tracking-[1.2px] uppercase px-3.5 py-[5px] rounded-full mb-4">
            AI Automation
          </div>
          <h2 className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-extrabold text-[#0d4a4a] leading-[1.2] mb-4">
            AI-Powered Receptionist
          </h2>
          <p className="text-[15px] text-[#555] leading-[1.8] mb-6 max-w-[440px]">
            Our AI Receptionist automatically handles calls, qualifies leads, blocks spam, and books appointments, saving your team valuable time around the clock.
          </p>
          <ul className="flex flex-col gap-2.5 mb-8">
            {['24/7 automated call answering', 'Smart lead qualification & routing', 'Instant appointment booking'].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#333]">
                <Check className="w-4 h-4 text-[#0a9e8f]" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="inline-flex items-center gap-1.5 bg-[#0d1b2a] text-white text-[13px] font-bold px-6 py-3 rounded-lg hover:bg-[#0a9e8f] hover:-translate-y-0.5 transition-all">
            Learn More <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <AIReceptionistMockup />
        </div>
      </div>
    </section>
  )
}

function SalesDialerMockup() {
  const agents = [
    { initials: 'AK', name: 'Arya Malhotra', status: 'Online', calls: 12, gradient: 'from-[#0a9e8f] to-[#3b8dd6]' },
    { initials: 'VS', name: 'Vikram Singh', status: 'Online', calls: 8, gradient: 'from-[#7c3aed] to-[#4f46e5]' },
    { initials: 'PV', name: 'Priya Verma', status: 'Away', calls: 5, gradient: 'from-[#f59e0b] to-[#d97706]' },
  ]

  return (
    <div className="bg-white rounded-[18px] shadow-[0_12px_50px_rgba(0,0,0,0.12)] p-5 w-full max-w-[420px] animate-[floatUpDown_4s_ease-in-out_infinite]">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[13px] font-bold text-[#1a1a2e]">Sales Dialer</span>
        <div className="flex gap-[5px]">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
      </div>
      <div className="text-[10px] text-[#999] font-semibold uppercase tracking-[1px] mb-2.5">Contact Status</div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { icon: <Clock className="w-3.5 h-3.5" />, value: 5, label: 'Dialing', color: '#0a9e8f', bg: '#e8f9f7' },
          { icon: <Check className="w-3.5 h-3.5" />, value: 2, label: 'Connected', color: '#16a34a', bg: '#dcfce7' },
          { icon: <Users className="w-3.5 h-3.5" />, value: 3, label: 'Active Agents', color: '#2563eb', bg: '#dbeafe' },
          { icon: <Phone className="w-3.5 h-3.5" />, value: 4, label: 'Ringing', color: '#d97706', bg: '#fef3c7' },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#f8f9fb] rounded-[10px] p-2.5 text-center flex flex-col items-center gap-1">
            <div className="w-[26px] h-[26px] rounded-[7px] flex items-center justify-center" style={{ background: stat.bg, color: stat.color }}>
              {stat.icon}
            </div>
            <span className="text-base font-extrabold text-[#1a1a2e] leading-none">{stat.value}</span>
            <span className="text-[8.5px] text-[#999] font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1.5 mb-3.5">
        {agents.map((agent) => (
          <div key={agent.name} className="flex items-center gap-2.5 px-2.5 py-2 bg-[#f8f9fb] rounded-[10px]">
            <div className={`w-[30px] h-[30px] rounded-full bg-gradient-to-br ${agent.gradient} flex items-center justify-center text-[10px] font-bold text-white shrink-0`}>
              {agent.initials}
            </div>
            <div className="flex-1 flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-[#1a1a2e]">{agent.name}</span>
              <span className={`text-[10px] font-medium ${agent.status === 'Online' ? 'text-[#16a34a]' : 'text-[#d97706]'}`}>● {agent.status}</span>
            </div>
            <span className="text-[11px] font-bold text-[#0a9e8f]">{agent.calls} calls</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-3 py-2 bg-[#e8f9f7] rounded-lg text-[11px] font-semibold text-[#0a9e8f]">
        <span className="w-2 h-2 rounded-full bg-[#0a9e8f] animate-[blink_1s_step-end_infinite]" />
        Live Dashboard
        <div className="flex gap-0.5 items-end ml-auto">
          {[8, 14, 10, 16, 6].map((h, i) => (
            <div key={i} className="w-1 bg-[#0a9e8f] rounded-sm animate-[waveAnim_0.8s_ease-in-out_infinite_alternate]" style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes waveAnim {
          from { transform: scaleY(0.4); opacity: 0.5; }
          to { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

function AnalyticsMockup() {
  return (
    <div className="relative">
      <div className="bg-white rounded-[18px] shadow-[0_12px_50px_rgba(0,0,0,0.12)] p-5 w-full max-w-[420px] animate-[floatUpDown_4s_ease-in-out_infinite]">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#0a9e8f] flex items-center justify-center text-[11px] font-bold text-white">IN</div>
          <div>
            <div className="text-xs font-bold text-[#1a1a2e]">+91 80 1234 5678</div>
            <div className="flex gap-1 mt-0.5">
              {['A', 'B', 'C'].map((l, i) => (
                <div key={l} className={`w-4 h-4 rounded-full flex items-center justify-center text-[6px] font-bold text-white ${i === 0 ? 'bg-[#0a9e8f]' : i === 1 ? 'bg-[#7c3aed]' : 'bg-[#f59e0b]'}`}>{l}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap mb-3">
          <span className="text-[10px] font-semibold px-2.5 py-[3px] rounded-full bg-[#e8f9f7] text-[#0a9e8f] flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            AI Assistant
          </span>
          <span className="text-[10px] font-semibold px-2.5 py-[3px] rounded-full bg-[#f3f4f6] text-[#6b7280]">Automated call handling</span>
        </div>
        <div className="bg-[#f8f9fb] rounded-[10px] p-2.5 mb-2.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-[#1a1a2e] mb-2">
            <span>Current Activity</span>
            <span className="bg-[#dcfce7] text-[#16a34a] text-[10px] font-bold px-2 py-0.5 rounded-full">● Live</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { value: '90%', label: 'Completed', bg: '#dcfce7' },
              { value: '35', label: 'Ongoing', bg: '#fef3c7' },
              { value: '14', label: 'Incoming', bg: '#dbeafe' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-1.5 rounded-lg" style={{ background: stat.bg }}>
                <span className="block text-base font-extrabold text-[#1a1a2e]">{stat.value}</span>
                <span className="block text-[9px] text-[#666] font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm font-extrabold text-[#0a9e8f] mb-2.5 flex items-baseline gap-2">
          08h 55m in 47s <span className="text-[10px] text-[#999] font-medium">Shift Duration</span>
        </div>
        <div className="bg-[#f8f9fb] rounded-[10px] p-2.5">
          <div className="text-[10px] font-semibold text-[#666] mb-2">Calls per day</div>
          <div className="flex gap-1 items-end h-9 mb-1">
            {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
              <div key={i} className={`flex-1 rounded-t ${i === 5 ? 'bg-gradient-to-b from-[#0a9e8f] to-[#3b8dd6]' : 'bg-[#d1fae5]'}`} style={{ height: `${h}%` }} />
            ))}
          </div>
          <svg viewBox="0 0 200 40" className="w-full h-10 mb-1">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a9e8f"/>
                <stop offset="100%" stopColor="#0a9e8f" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <polyline points="0,35 30,25 60,30 90,15 120,20 150,8 180,14 200,10" fill="none" stroke="#0a9e8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="0,35 30,25 60,30 90,15 120,20 150,8 180,14 200,10 200,40 0,40" fill="url(#chartGrad)" opacity=".3"/>
          </svg>
          <div className="text-[9px] text-[#0a9e8f] font-semibold flex items-center gap-1">● Client Interactions</div>
        </div>
      </div>
      {/* Floating person image */}
      <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-[130px] h-[170px] rounded-[14px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.18)] border-[3px] border-white max-md:hidden">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" alt="Analytics" className="w-full h-full object-cover object-top" />
      </div>
      <style jsx>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  )
}

function AIReceptionistMockup() {
  return (
    <div className="bg-gradient-to-br from-[#f0fffe] to-[#eef6ff] rounded-[18px] shadow-[0_12px_50px_rgba(0,0,0,0.12)] p-5 w-full max-w-[420px] animate-[floatUpDown_4s_ease-in-out_infinite]">
      <div className="flex items-center gap-2.5 mb-4 relative">
        <div className="w-10 h-10 bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] rounded-xl flex items-center justify-center shrink-0">
          <Bot className="w-[22px] h-[22px] text-white" />
        </div>
        <div>
          <div className="text-[13px] font-bold text-[#0d4a4a]">MeraTalk AI</div>
          <div className="text-[10px] text-[#0a9e8f] font-semibold">● Active · Handling 3 calls</div>
        </div>
        <div className="absolute right-0 top-0 w-3 h-3 rounded-full bg-[#0a9e8f] shadow-[0_0_0_4px_rgba(10,158,143,0.2)] animate-[pulseDot_1.8s_ease-in-out_infinite]" />
      </div>
      
      {/* Chat messages */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-end gap-1.5">
          <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center shrink-0">
            <Bot className="w-3 h-3 text-white" />
          </div>
          <div className="max-w-[70%] p-[9px_12px] rounded-xl text-xs leading-[1.5] text-[#1a1a2e] bg-white border border-[#e5e7eb] rounded-tl-sm shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            Are you sending messages?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[70%] p-[9px_12px] rounded-xl text-xs leading-[1.5] text-white bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] rounded-tr-sm">
            Do you use a toll-free number?
          </div>
        </div>
        <div className="flex items-end gap-1.5">
          <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center shrink-0">
            <Bot className="w-3 h-3 text-white" />
          </div>
          <div className="max-w-[70%] p-[9px_12px] rounded-xl text-xs leading-[1.5] text-[#1a1a2e] bg-white border border-[#e5e7eb] rounded-tl-sm shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            {"I'll connect you to the right agent. Please hold."}
          </div>
        </div>
        {/* Typing */}
        <div className="flex items-end gap-1.5">
          <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center shrink-0">
            <Bot className="w-3 h-3 text-white" />
          </div>
          <div className="flex gap-1 items-center p-3 bg-white border border-[#e5e7eb] rounded-xl rounded-tl-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite_0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a9e8f] animate-[typingBounce_1.2s_ease-in-out_infinite_0.4s]" />
          </div>
        </div>
      </div>
      
      {/* Connection line */}
      <div className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-[#e5e7eb]">
        <div className="flex flex-col items-center gap-1">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80" alt="Caller" className="w-11 h-11 rounded-full object-cover border-2 border-[#0a9e8f]" />
          <div className="text-[9px] text-[#999] font-semibold">Caller</div>
        </div>
        <div className="flex-1 flex justify-center gap-1.5 items-center">
          {[0, 0.3, 0.6].map((delay, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0a9e8f] animate-[connPulse_1.5s_ease-in-out_infinite]" style={{ animationDelay: `${delay}s`, opacity: 1 - i * 0.3 }} />
          ))}
        </div>
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center shadow-[0_4px_16px_rgba(10,158,143,0.35)]">
          <Bot className="w-[18px] h-[18px] text-white" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseDot {
          0%, 100% { box-shadow: 0 0 0 4px rgba(10,158,143,0.2); }
          50% { box-shadow: 0 0 0 8px rgba(10,158,143,0.07); }
        }
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
        @keyframes connPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}
