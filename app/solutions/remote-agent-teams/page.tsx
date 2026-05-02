"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"
import {
  UserCheck, Globe2, Shield, Wifi, Monitor,
  Check, ChevronDown, ChevronUp, Phone, ArrowRight,
  Clock, Lock, Activity, Laptop, Bot, BarChart3,
  ShieldCheck, CheckCircle, Zap, Headphones, Video, Users2
} from "lucide-react"

const coreCapabilities = [
  {
    icon: Laptop,
    title: "Browser-Based Softphone",
    description: "Agents log in from any browser on any device — no hardware, no downloads, no VPN. Full call handling, transfer, hold, and conference from a single secure tab."
  },
  {
    icon: Shield,
    title: "Zero-Trust Agent Security",
    description: "Device-level MFA, encrypted SRTP media streams, and role-based permissions keep every remote session locked down from first login to the last call of the shift."
  },
  {
    icon: BarChart3,
    title: "Live Supervisor Dashboards",
    description: "Monitor queue depth, agent status, and per-call metrics across all remote locations in real time so supervisors stay in control regardless of physical distance."
  },
  {
    icon: Bot,
    title: "AI Agent Assist",
    description: "Real-time transcription, next-best-action prompts, and knowledge-base surfacing help remote agents resolve customer issues faster without needing a supervisor nearby."
  },
  {
    icon: Wifi,
    title: "Adaptive HD Voice Quality",
    description: "Dynamic jitter buffering, codec switching, and forward error correction maintain crystal-clear call quality even on variable home broadband and shared Wi-Fi networks."
  },
  {
    icon: Activity,
    title: "Remote Call Recording & QA",
    description: "Capture, store, and auto-score 100% of remote agent calls with encrypted cloud recordings so compliance and quality standards never slip across dispersed team locations."
  }
]

const trustPillars = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Every call, recording, and data exchange is encrypted in transit and at rest, protecting customer data across every remote agent's home or shared network environment."
  },
  {
    icon: CheckCircle,
    title: "99.999% Uptime SLA",
    description: "Geo-redundant infrastructure and automatic failover keep remote agents connected through outages so no call is ever dropped due to platform downtime or regional failures."
  },
  {
    icon: Globe2,
    title: "Global Number Provisioning",
    description: "Assign local, toll-free, or virtual numbers across 80+ countries in seconds so remote agents project a professional local presence regardless of where they are physically."
  },
  {
    icon: ShieldCheck,
    title: "GDPR, PCI & HIPAA Ready",
    description: "Built-in consent capture, PII masking in transcripts, and regional data residency satisfy the strictest privacy and regulatory requirements for fully distributed agent teams."
  }
]

const platformPillars = [
  "Instant browser-based login with no hardware, no VPN, and no IT ticket required for any remote agent.",
  "Supervisor whisper, barge-in, and silent monitoring work identically whether agents are remote or in-office.",
  "Native CRM connectors push live customer context to each agent's screen-pop before the call even connects.",
  "Workforce scheduling and forecasting tools keep distributed teams aligned across every time zone and shift."
]

const onboardingBenefits = [
  "Provision new remote agents in minutes using role templates and bulk imports directly from your HR system.",
  "One setup link gets an agent live on their first call within the hour — no hardware to ship or configure.",
  "Automated QA scoring on every call replaces manual spot-checking so quality scales with your headcount.",
  "Real-time coaching cards surface answers mid-call so new remote hires ramp in days rather than weeks."
]

const faqs = [
  {
    question: "How quickly can new remote agents get set up and start taking live customer calls on MeraTalk?",
    answer: "Setup is measured in minutes, not days. Send an agent a provisioning link, they create a password, and they are live on the browser-based softphone within the hour — no hardware to ship, no VPN to configure, and no IT ticket required. Role templates pre-populate permissions, scripts, and CRM integrations so every agent sees the right screen-pop from their very first inbound call."
  },
  {
    question: "How does MeraTalk maintain consistent call quality for agents working from home on residential internet?",
    answer: "The platform uses adaptive jitter buffering, dynamic codec switching between Opus, G.711, and G.729, plus forward error correction to compensate for the packet loss and latency spikes common on consumer broadband. An in-browser network quality indicator warns agents before calls begin if their connection is degraded, and supervisors see per-agent MOS scores on the live dashboard so they can intervene or reroute traffic before customer satisfaction takes a hit."
  },
  {
    question: "What security controls protect sensitive customer data when remote agents connect from personal or shared networks?",
    answer: "Every media stream uses SRTP encryption and every signaling path uses TLS 1.3. Agents authenticate via SSO or MFA before any session starts, and automatic idle-session timeouts disconnect unattended browsers. Role-based permissions restrict which customer data fields each agent can view or export, and all recorded calls are stored on encrypted, region-locked infrastructure with full access logs that satisfy PCI DSS, HIPAA, and GDPR audit requirements without any additional configuration."
  },
  {
    question: "Can supervisors whisper-coach and barge into live calls made by remote agents the same way they do in an office?",
    answer: "Yes — every supervisory tool available to in-office managers works identically for remote agents. Supervisors see real-time call status, queue position, and AI sentiment scores for every distributed team member on a unified dashboard. They can listen silently, deliver real-time whisper coaching that only the agent hears, or join the call directly for a three-way barge when escalation is needed — all from their own browser interface with no physical proximity required and no extra hardware to install."
  },
  {
    question: "How does MeraTalk handle compliance and call recording obligations for geographically dispersed remote agent teams?",
    answer: "MeraTalk records 100% of calls by default and stores them on encrypted, geo-redundant infrastructure with configurable regional data residency to satisfy data sovereignty laws in the US, EU, and APAC. Built-in consent tone injection and two-party disclosure playback automate per-state and per-country recording disclosure requirements. PII masking redacts card numbers and sensitive identifiers from transcripts, and granular role-based access ensures only authorized managers can retrieve, replay, or export recordings — giving compliance teams a complete audit trail across every remote location."
  }
]

function HeroImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80"
          alt="Remote agent working from home with headset and laptop"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#0a9e8f] to-[#08acf2] rounded-full opacity-25 -z-10" />
      <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] rounded-full opacity-25 -z-10" />
    </div>
  )
}

function PlatformImage() {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
      <Image
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
        alt="Remote agent team supervisor monitoring distributed workforce dashboard"
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d4a4a]/50 via-[#0d4a4a]/10 to-transparent" />

      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
          <Users2 className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Agents online now</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">247 active globally</div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Avg handle time</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Down 31% this month</div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0">
        <div className="bg-[#0d4a4a]/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
          <span className="text-[12px] font-semibold text-white tracking-wide">Remote Agent Intelligence Platform</span>
        </div>
      </div>
    </div>
  )
}

function OnboardingImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-[#e6f7f5]">
        <Image
          src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80"
          alt="Remote agent onboarding and team collaboration via video call"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
        />
      </div>
      <div className="mt-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0a9e8f]/40 to-transparent" />
        <span className="text-[12px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f] whitespace-nowrap">
          Work from anywhere, perform like you are there
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0a9e8f]/40 to-transparent" />
      </div>
    </div>
  )
}

export default function RemoteAgentTeamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <div className="h-[72px]" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5] py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0a9e8f]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b8dd6]/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0a9e8f]/10 text-[#0a9e8f] text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full mb-5">
                <UserCheck className="w-3.5 h-3.5" />
                For Remote Agent Teams
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-6">
                The Voice Platform Built for{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Distributed Agents Working from Anywhere
                </span>
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Give every remote agent the same contact center power as your in-office team. MeraTalk delivers browser-based softphones, zero-trust security, AI-driven assist, and real-time supervisor dashboards so your distributed workforce handles every call with confidence — from any device, any location, any time zone.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#0d4a4a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Book A Demo
                </Link>
                <Link
                  href="#capabilities"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] border border-[#0d4a4a]/15 px-7 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#f0fdfa] transition-all"
                >
                  See Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section — Platform Parity */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Every Remote Agent Gets the Full Contact Center — Not a Stripped-Down Version
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Most remote setups sacrifice features for simplicity. MeraTalk delivers full platform parity so a home-based agent in Dallas handles calls with the same AI assist, live coaching, and CRM context as one sitting in your downtown operations hub. Distance stops being a disadvantage the moment they log in.
              </p>
              <div className="space-y-4">
                {platformPillars.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0a9e8f] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[15px] text-[#1a1a2e] font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <PlatformImage />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section — Core Capabilities Grid (6 icon boxes) */}
      <section id="capabilities" className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Capabilities Purpose-Built for Distributed Agent Success
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              From browser-based softphones to live AI coaching, every feature is engineered to make remote agents as productive, secure, and accountable as any in-office team member.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e6f7f5] hover:shadow-[0_8px_40px_rgba(10,158,143,0.12)] hover:border-[#0a9e8f]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0a9e8f]/10 to-[#3b8dd6]/10 flex items-center justify-center mb-5 group-hover:from-[#0a9e8f] group-hover:to-[#0d4a4a] transition-all">
                  <feature.icon className="w-7 h-7 text-[#0a9e8f] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0d4a4a] mb-3">{feature.title}</h3>
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7] line-clamp-3">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section — Onboarding & Ramp */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <OnboardingImage />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Onboard Remote Agents in Hours and Ramp Them in Days
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Forget week-long IT provisioning cycles. A single setup link is all a remote agent needs to join a live queue. Automated coaching, pre-built role templates, and real-time QA scoring compress the ramp period so new hires contribute from their very first shift.
              </p>
              <div className="space-y-4">
                {onboardingBenefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0a9e8f] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[15px] text-[#1a1a2e] font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section — 4 Trust Pillars (no buttons) */}
      <section className="py-20 bg-gradient-to-b from-[#f8fffe] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Built on the Foundations Remote Operations Demand
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[640px] mx-auto leading-[1.7]">
              Security, reliability, global reach, and compliance are not optional add-ons — they are the core pillars that make MeraTalk the trusted backbone for remote agent operations at any scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#e6f7f5] hover:shadow-lg hover:border-[#0a9e8f]/30 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0a9e8f]/10 to-[#3b8dd6]/10 flex items-center justify-center mb-5 mx-auto">
                  <item.icon className="w-7 h-7 text-[#0a9e8f]" />
                </div>
                <h3 className="text-[17px] font-bold text-[#0d4a4a] mb-3">{item.title}</h3>
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7] line-clamp-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sixth Section — CTA */}
      <CTABanner />

      {/* Seventh Section — FAQs */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] text-[#5a6a7a]">
              Answers to the questions operations leaders ask most when deploying remote agent teams.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#f8fffe] rounded-xl border border-[#e6f7f5] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f0fdfa] transition-colors"
                >
                  <span className="font-semibold text-[15px] text-[#0d4a4a] pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-[#0a9e8f] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#0a9e8f] shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
