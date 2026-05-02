"use client"

import { useState, type ReactElement } from "react"
import { Check, Phone, MessageSquare, Video, Mic, MicOff, VideoOff, Users, Send, Paperclip, Smile, MoreVertical, PhoneCall, PhoneOff, Volume2 } from "lucide-react"

type TabKey = "voice" | "messaging" | "meetings"

interface TabContent {
  key: TabKey
  label: string
  heading: string
  bullets: { strong: string; rest: string }[]
  Mockup: () => ReactElement
}

const tabs: TabContent[] = [
  {
    key: "voice",
    label: "Voice & Calling",
    heading: "Crystal-clear cloud calling that works wherever your team does.",
    bullets: [
      {
        strong: "Make and receive business calls from any device",
        rest: " — desktop, mobile, or web — with one number that follows your team across locations.",
      },
      {
        strong: "Route every call intelligently",
        rest: " with AI-powered IVR, smart queues, and live transcription that surfaces context the moment a customer connects.",
      },
      {
        strong: "Stay compliant and reliable",
        rest: " with carrier-grade voice quality, end-to-end encryption, and 99.99% uptime backed by our global infrastructure.",
      },
    ],
    Mockup: VoiceMockup,
  },
  {
    key: "messaging",
    label: "Messaging & Chat",
    heading: "Every conversation, every channel, in one unified inbox.",
    bullets: [
      {
        strong: "Bring SMS, WhatsApp, email, and team chat together",
        rest: " so customer-facing teams reply from one window — no more app switching or dropped threads.",
      },
      {
        strong: "Collaborate inside the conversation",
        rest: " with internal notes, shared assignment, and AI suggestions that help agents respond faster and more consistently.",
      },
      {
        strong: "Keep context flowing across teammates",
        rest: " with full message history, automatic tagging, and rich media attachments stored securely in one place.",
      },
    ],
    Mockup: MessagingMockup,
  },
  {
    key: "meetings",
    label: "Video Meetings",
    heading: "Host HD video meetings without leaving the platform.",
    bullets: [
      {
        strong: "Launch a meeting from any chat or call",
        rest: " in a single click — no separate apps, no downloads, no friction for the people you invite.",
      },
      {
        strong: "Capture every important moment",
        rest: " with live transcription, AI-generated summaries, and action items pushed straight into your team's workflow.",
      },
      {
        strong: "Scale from 1:1s to all-hands",
        rest: " with screen share, breakout rooms, and reactions — built for distributed teams that need to stay in sync.",
      },
    ],
    Mockup: MeetingsMockup,
  },
]

export function UnifiedCommunication() {
  const [active, setActive] = useState<TabKey>("voice")
  const current = tabs.find((t) => t.key === active) ?? tabs[0]
  const Mockup = current.Mockup

  return (
    <section className="bg-[#0b1d2a] py-[100px] px-6 max-md:py-[70px] overflow-hidden relative">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(10,158,143,0.18),transparent_70%)]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-[#0a9e8f]/15 border border-[#0a9e8f]/30 text-[#5eead4] text-[11px] font-bold tracking-[1.5px] uppercase px-[18px] py-1.5 rounded-full mb-[18px]">
            ONE UNIFIED PLATFORM
          </div>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold text-white leading-[1.2]">
            Cover All Your Bases with{" "}
            <span className="bg-gradient-to-r from-[#0a9e8f] to-[#3b8dd6] bg-clip-text text-transparent">
              Unified Communication
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 max-md:mb-9">
          <div
            role="tablist"
            aria-label="Unified communication channels"
            className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            {tabs.map((tab) => {
              const isActive = tab.key === active
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.key)}
                  className={`relative px-5 py-2.5 max-md:px-4 max-md:py-2 text-[13px] max-md:text-[12px] font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] shadow-[0_4px_18px_rgba(10,158,143,0.45)] ring-1 ring-[#5eead4]/40"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Body */}
        <div
          key={active}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-[ucFade_0.45s_ease]"
        >
          {/* Left: Copy */}
          <div>
            <h3 className="text-[clamp(1.4rem,2.4vw,1.95rem)] font-extrabold text-white leading-[1.3] mb-7">
              {current.heading}
            </h3>
            <ul className="flex flex-col gap-5">
              {current.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3.5 items-start">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#0a9e8f]/15 border border-[#0a9e8f]/40 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#5eead4]" strokeWidth={3} />
                  </span>
                  <p className="text-[14.5px] leading-[1.7] text-white/75">
                    <strong className="text-white font-bold">{bullet.strong}</strong>
                    {bullet.rest}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Mockup */}
          <div className="relative flex justify-center">
            <Mockup />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ucFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

/* ---------- Mockups ---------- */

function VoiceMockup() {
  return (
    <div className="relative w-full max-w-[460px]">
      {/* Background card */}
      <div className="relative rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)] bg-[#0d4a4a] aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a9e8f]/40 via-[#0d4a4a] to-[#1a1a2e]" />
        {/* Soft pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#5eead4]/20 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-72 h-72 rounded-full bg-[#3b8dd6]/20 blur-3xl" />
        </div>

        {/* Active call card */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full max-w-[300px] bg-white/95 backdrop-blur rounded-[18px] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center text-white font-bold text-sm">
                  AP
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#22c55e] border-2 border-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-bold text-[#0d4a4a] truncate">Agastya Patel</div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#0a9e8f] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                  Connected · 02:14
                </div>
              </div>
              <Volume2 className="w-4 h-4 text-[#0a9e8f]" />
            </div>

            {/* Waveform */}
            <div className="flex items-center justify-center gap-[3px] h-10 mb-4 px-2">
              {[12, 22, 30, 18, 26, 34, 20, 28, 16, 24, 32, 14, 20, 26, 18].map((h, i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-full bg-gradient-to-b from-[#0a9e8f] to-[#3b8dd6]"
                  style={{
                    height: `${h}px`,
                    animation: `ucWave 0.9s ease-in-out ${i * 0.06}s infinite alternate`,
                  }}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3">
              <button className="w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#0d4a4a] hover:bg-[#e2e8f0] transition-colors">
                <Mic className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#0d4a4a] hover:bg-[#e2e8f0] transition-colors">
                <Users className="w-4 h-4" />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#ef4444] flex items-center justify-center text-white shadow-[0_6px_16px_rgba(239,68,68,0.4)]">
                <PhoneOff className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating transcript chip */}
        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-3 py-2 max-w-[180px] animate-[ucFloat_0.6s_ease_0.4s_both]">
          <div className="text-[9px] font-bold text-[#5eead4] uppercase tracking-wide mb-0.5">Live Transcript</div>
          <div className="text-[10.5px] text-white/90 leading-[1.4]">{"“Sure, let's lock in Friday at 3 PM.”"}</div>
        </div>
      </div>

      {/* Floating call notification */}
      <div className="absolute -bottom-6 -right-4 max-md:right-0 bg-white rounded-2xl p-3 pr-4 shadow-[0_12px_36px_rgba(10,158,143,0.35)] flex items-center gap-3 animate-[ucFloat_0.6s_ease_0.7s_both]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#3b8dd6] flex items-center justify-center">
          <PhoneCall className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-[#1a1a2e]">Incoming · Sales</div>
          <div className="text-[10px] text-[#666]">+1 (415) 555 0118</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ucWave {
          from { transform: scaleY(0.5); opacity: 0.7; }
          to { transform: scaleY(1.2); opacity: 1; }
        }
        @keyframes ucFloat {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

function MessagingMockup() {
  const channels = [
    { label: "WhatsApp", color: "bg-[#22c55e]/20 text-[#22c55e]" },
    { label: "Email", color: "bg-[#3b8dd6]/20 text-[#7dc4ff]" },
    { label: "SMS", color: "bg-[#0a9e8f]/20 text-[#5eead4]" },
  ]

  return (
    <div className="relative w-full max-w-[460px]">
      <div className="relative rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)] bg-white aspect-[4/3]">
        {/* Header */}
        <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[#eef2f6] bg-white">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center text-white text-[11px] font-bold">
              PK
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#22c55e] border-2 border-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[12px] font-bold text-[#1a1a2e] truncate">Priya Khurana</div>
            <div className="text-[10px] text-[#0a9e8f] font-semibold">via WhatsApp · Online</div>
          </div>
          <Phone className="w-4 h-4 text-[#0a9e8f]" />
          <Video className="w-4 h-4 text-[#0a9e8f]" />
          <MoreVertical className="w-4 h-4 text-[#94a3b8]" />
        </div>

        {/* Channel chips */}
        <div className="flex gap-1.5 px-4 py-2 border-b border-[#f1f5f9] bg-[#fafbff]">
          {channels.map((c) => (
            <span key={c.label} className={`text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${c.color}`}>
              {c.label}
            </span>
          ))}
        </div>

        {/* Messages */}
        <div className="p-4 flex flex-col gap-2 bg-[#fbfcfe] h-[calc(100%-160px)] overflow-hidden">
          <div className="flex justify-start animate-[ucMsg_0.4s_ease_0.1s_both]">
            <div className="max-w-[78%] bg-white border border-[#eef2f6] rounded-2xl rounded-tl-md px-3 py-2 text-[11.5px] text-[#1a1a2e] leading-[1.45] shadow-sm">
              Hi! Got your quote — looks great. Quick question on the timeline 👇
            </div>
          </div>
          <div className="flex justify-end animate-[ucMsg_0.4s_ease_0.3s_both]">
            <div className="max-w-[78%] bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] text-white rounded-2xl rounded-tr-md px-3 py-2 text-[11.5px] leading-[1.45] shadow-sm">
              Of course! Happy to walk you through it. Want to jump on a quick call?
            </div>
          </div>
          <div className="flex justify-start animate-[ucMsg_0.4s_ease_0.55s_both]">
            <div className="max-w-[78%] bg-white border border-[#eef2f6] rounded-2xl rounded-tl-md px-3 py-2 text-[11.5px] text-[#1a1a2e] leading-[1.45] shadow-sm">
              Yes please — sending over a meeting link.
            </div>
          </div>

          {/* AI suggestion */}
          <div className="mt-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-[#0a9e8f]/10 to-[#3b8dd6]/10 border border-[#0a9e8f]/20 animate-[ucMsg_0.4s_ease_0.8s_both]">
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#3b8dd6] flex items-center justify-center text-white text-[9px] font-bold">AI</span>
            <span className="text-[10.5px] text-[#0d4a4a] font-medium">Suggested reply: <span className="font-bold">Booking demo for Fri 3 PM</span></span>
          </div>
        </div>

        {/* Compose */}
        <div className="absolute bottom-0 inset-x-0 flex items-center gap-2 px-4 py-3 border-t border-[#eef2f6] bg-white">
          <Paperclip className="w-4 h-4 text-[#94a3b8]" />
          <div className="flex-1 bg-[#f1f5f9] rounded-full px-3 py-1.5 text-[11px] text-[#94a3b8]">Type a message…</div>
          <Smile className="w-4 h-4 text-[#94a3b8]" />
          <button className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center shadow-[0_4px_12px_rgba(10,158,143,0.4)]">
            <Send className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -top-5 -right-3 max-md:right-0 bg-white rounded-2xl px-3.5 py-2.5 shadow-[0_12px_36px_rgba(124,58,237,0.3)] flex items-center gap-2.5 animate-[ucFloat_0.6s_ease_0.6s_both]">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-[#1a1a2e]">5 new messages</div>
          <div className="text-[10px] text-[#666]">across 3 channels</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ucMsg {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ucFloat {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

function MeetingsMockup() {
  const tiles = [
    { initials: "RD", name: "Rohan", gradient: "from-[#0a9e8f] to-[#0d4a4a]", muted: false, speaking: true },
    { initials: "BK", name: "Bhumi", gradient: "from-[#7c3aed] to-[#4f46e5]", muted: true, speaking: false },
    { initials: "MS", name: "Mihir", gradient: "from-[#f59e0b] to-[#d97706]", muted: false, speaking: false },
    { initials: "AK", name: "Arya", gradient: "from-[#3b8dd6] to-[#1e40af]", muted: true, speaking: false },
  ]

  return (
    <div className="relative w-full max-w-[460px]">
      <div className="relative rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)] bg-[#0b1d2a] aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0d4a4a] to-[#0b1d2a]" />

        {/* Top bar */}
        <div className="relative flex items-center justify-between px-4 py-3 z-10">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 bg-[#ef4444]/90 text-white text-[10px] font-bold px-2 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              REC
            </span>
            <span className="text-[11px] text-white/80 font-semibold">Q2 Roadmap Sync</span>
          </div>
          <span className="text-[10.5px] text-white/70 font-medium">04:18</span>
        </div>

        {/* Video grid */}
        <div className="relative grid grid-cols-2 gap-2 p-3 pt-1 z-0">
          {tiles.map((tile) => (
            <div
              key={tile.initials}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br ${tile.gradient} flex items-center justify-center ${
                tile.speaking ? "ring-2 ring-[#5eead4]" : ""
              }`}
            >
              <span className="text-white text-2xl font-extrabold drop-shadow">{tile.initials}</span>
              <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 bg-black/40 backdrop-blur rounded-md px-1.5 py-0.5">
                {tile.muted ? <MicOff className="w-2.5 h-2.5 text-[#ef4444]" /> : <Mic className="w-2.5 h-2.5 text-white" />}
                <span className="text-[9px] font-semibold text-white">{tile.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2">
          <button className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Mic className="w-3.5 h-3.5" />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <VideoOff className="w-3.5 h-3.5" />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Users className="w-3.5 h-3.5" />
          </button>
          <button className="w-10 h-9 rounded-full bg-[#ef4444] flex items-center justify-center text-white shadow-[0_6px_16px_rgba(239,68,68,0.4)]">
            <PhoneOff className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating AI summary */}
      <div className="absolute -bottom-6 -left-4 max-md:left-0 bg-white rounded-2xl px-3.5 py-2.5 shadow-[0_12px_36px_rgba(10,158,143,0.35)] flex items-start gap-2.5 max-w-[230px] animate-[ucFloat_0.6s_ease_0.5s_both]">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0a9e8f] to-[#3b8dd6] flex items-center justify-center shrink-0">
          <span className="text-white text-[10px] font-extrabold">AI</span>
        </div>
        <div>
          <div className="text-[11px] font-bold text-[#1a1a2e]">Summary ready</div>
          <div className="text-[10px] text-[#666] leading-[1.45]">3 action items captured & assigned to your team.</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ucFloat {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
