"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import {
  Home, Phone, ArrowRight, Check, ChevronDown, ChevronUp,
  PhoneCall, MessageSquare, Calendar, MapPin,
  Bot, Users, Bell, Mic, Building2, KeyRound,
  ShieldCheck, Clock, BarChart3, Star, Workflow, Sparkles, FileText
} from "lucide-react"

const coreCapabilities = [
  {
    icon: PhoneCall,
    title: "Instant Lead Response",
    description: "Connect with new buyer and seller leads in seconds across voice, SMS, and chat so hot inquiries never slip to a competing brokerage."
  },
  {
    icon: Calendar,
    title: "Automated Showing Scheduling",
    description: "Let an AI assistant book, confirm, and reschedule property tours directly from your calendar without long phone tag with prospects."
  },
  {
    icon: MessageSquare,
    title: "Listing SMS & MMS Alerts",
    description: "Send price drops, new-listing photos, and open-house reminders straight to buyer phones with branded numbers and rich media."
  },
  {
    icon: MapPin,
    title: "Local Numbers in Every Market",
    description: "Provision city-specific caller IDs so buyers see a familiar area code and pick up the call instead of letting it go to voicemail."
  },
  {
    icon: Bot,
    title: "AI Receptionist For Agents",
    description: "Capture caller name, budget, and preferred neighborhoods around the clock, then route qualified leads to the right agent on duty."
  },
  {
    icon: BarChart3,
    title: "Pipeline & Conversion Insights",
    description: "Track call volume, response time, and showing-to-offer ratios per agent and listing to coach teams and double down on what works."
  }
]

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "TCPA-Aware Outreach",
    description: "Built-in consent capture, opt-out handling, and quiet-hour rules keep prospecting calls and texts compliant in every state."
  },
  {
    icon: Clock,
    title: "Always-On Coverage",
    description: "After-hours AI answering and voicemail-to-text mean weekend buyers and relocating families always reach a real response."
  },
  {
    icon: Star,
    title: "Branded Caller Identity",
    description: "Display your brokerage name, agent photo, and reason for the call so prospects trust the number before answering."
  },
  {
    icon: Workflow,
    title: "CRM-Native Workflows",
    description: "Tight sync with Follow Up Boss, kvCORE, BoomTown, and Salesforce keeps every conversation logged on the right contact record."
  }
]

const platformPillars = [
  "One inbox for every buyer, seller, and tenant conversation across voice, SMS, and chat.",
  "Smart routing that pairs each lead with the agent who knows the neighborhood best.",
  "AI summaries that turn every showing call into structured CRM notes automatically.",
  "Insights that show which listings, ads, and agents convert calls into closings."
]

const faqs = [
  {
    question: "How does MeraTalk help real estate agents respond to new buyer and seller leads faster than competing brokerages?",
    answer: "Inbound calls, web forms, Zillow leads, and Facebook ad responses ring every available agent within seconds while an AI receptionist handles overflow. Lead context, neighborhood preferences, and budget appear on screen before the call connects, so agents open the conversation already informed. Most teams cut first-response time from hours to under two minutes and meaningfully lift connect-to-appointment rates."
  },
  {
    question: "Can the platform integrate with the real estate CRMs and listing tools my brokerage already uses every day?",
    answer: "Yes. MeraTalk ships with native integrations for Follow Up Boss, kvCORE, BoomTown, Lofty, LionDesk, Sierra Interactive, and Salesforce, plus direct webhooks for Zillow Premier Agent, Realtor.com, and IDX websites. Calls, texts, voicemails, and AI summaries log to the right contact automatically, so agents never juggle screens or copy notes between systems during a busy showing day."
  },
  {
    question: "Is the AI assistant able to qualify leads and book showings without an agent picking up every single call?",
    answer: "The AI receptionist greets callers in your brand voice, asks for budget, timeline, financing status, and preferred neighborhoods, then drops qualified prospects directly into an agent's calendar with confirmation texts. Unqualified or out-of-area callers receive helpful information and a follow-up SMS instead of being lost. Agents review a tidy summary and recording before the showing, so no context is missed."
  },
  {
    question: "Does MeraTalk keep brokerage outreach compliant with TCPA, do-not-call, and state-level real estate regulations?",
    answer: "Compliance guardrails are built into every workflow. Consent capture, branded caller identity, internal DNC lists, and quiet-hour windows are configurable per state and per campaign. Recording disclosures, opt-out keywords, and audit logs are automatic, and our compliance team helps brokerages set up policies for cold-calling FSBOs, expired listings, and SMS drip campaigns the right way from day one."
  },
  {
    question: "How quickly can a real estate team get fully onboarded onto MeraTalk and start using it on live listings?",
    answer: "Most brokerages and independent teams are live in under two weeks. Number porting, CRM sync, IVR setup, and agent training run in parallel through a guided onboarding plan. Existing recordings, contacts, and call routing rules migrate without downtime, so showings, listing calls, and after-hours leads continue uninterrupted while your new platform comes online with zero disruption to closings."
  }
]

function RealEstateHeroImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/11] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80"
          alt="Modern suburban home with manicured lawn and welcoming entrance"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <div className="hidden sm:flex absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl items-center gap-3 border border-gray-100">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
          <PhoneCall className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Avg. response</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Under 90 seconds</div>
        </div>
      </div>

      <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl items-center gap-3 border border-gray-100">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] flex items-center justify-center">
          <KeyRound className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Showings booked</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">24/7 by AI</div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] rounded-full opacity-30 -z-10" />
      <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full opacity-30 -z-10" />
    </div>
  )
}

function AgentHubImage() {
  return (
    <div className="relative w-full aspect-[5/4] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
        alt="Real estate agent showing a luxury home interior to interested buyers"
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
        unoptimized
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d4a4a]/55 via-[#0d4a4a]/15 to-transparent" />

      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
          <Users className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Agents online</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Smart routing</div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] flex items-center justify-center">
          <Bell className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">New lead alerts</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Real-time push</div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0">
        <div className="bg-[#0d4a4a]/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
          <span className="text-[12px] font-semibold text-white tracking-wide">Agent Communication Hub</span>
        </div>
      </div>
    </div>
  )
}

function AnimatedJourneyVisual() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep(prev => (prev + 1) % 4), 1400)
    return () => clearInterval(id)
  }, [])

  const steps = [
    { icon: Sparkles, label: "Capture" },
    { icon: Mic, label: "Qualify" },
    { icon: Calendar, label: "Show" },
    { icon: KeyRound, label: "Close" }
  ]

  return (
    <div className="relative w-full aspect-square bg-gradient-to-br from-[#f0fdfa] to-[#e6f7f5] rounded-3xl overflow-hidden p-8">
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
        <div className="text-[12px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f]">
          Lead-to-Close Journey
        </div>

        <div className="grid grid-cols-2 gap-5 w-full max-w-[300px]">
          {steps.map((s, i) => {
            const Icon = s.icon
            const isActive = step === i
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl p-5 shadow-md flex flex-col items-center gap-2 transition-all duration-500 ${
                  isActive ? "scale-105 ring-2 ring-[#0a9e8f] shadow-xl" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a]"
                      : "bg-[#f0fdfa]"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-[#0a9e8f]"}`} />
                </div>
                <div className="text-[13px] font-bold text-[#0d4a4a]">{s.label}</div>
                <div className="text-[10px] text-[#5a6a7a]">Step {i + 1}</div>
              </div>
            )
          })}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-md">
          <span className="text-xs font-semibold text-[#0d4a4a]">
            From inquiry to keys in hand
          </span>
        </div>
      </div>
    </div>
  )
}

export default function RealEstatePage() {
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
                <Home className="w-3.5 h-3.5" />
                For Real Estate
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-6">
                Win More Listings, Close More Deals With{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Smarter Conversations
                </span>
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                MeraTalk gives real estate teams one platform for every buyer call, seller text, and showing follow-up. Respond in seconds, qualify leads with AI, and keep every conversation tied to the right contact in your CRM, so agents spend more time with clients and less time chasing missed calls.
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
              <RealEstateHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Why Real Estate Teams Choose MeraTalk */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <AgentHubImage />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Built For The Speed Of Real Estate
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Buyers move fast and competing agents move faster. MeraTalk equips your brokerage with the communication infrastructure to win the first conversation on every lead, nurture sellers between listings, and keep your sphere warm long after the closing table.
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
          </div>
        </div>
      </section>

      {/* Core Capabilities (6 icon boxes) */}
      <section id="capabilities" className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Everything Your Brokerage Needs To Connect
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              From the first inquiry on a listing to the final closing call, MeraTalk handles every conversation your team needs to run a high-performing real estate business.
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

      {/* Fourth Section - Lead-to-Close Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                A Cleaner Path From First Call To Closing
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Every conversation in real estate either moves a deal forward or quietly stalls one. MeraTalk gives agents a guided workflow that captures the lead, qualifies intent, schedules the showing, and keeps the seller updated, so transactions stay on track without manual follow-up reminders.
              </p>
              <div className="space-y-4">
                {[
                  "Auto-create a contact in your CRM the moment a new lead calls.",
                  "Score buyer intent with AI from the very first conversation.",
                  "Send branded showing confirmations and reminder texts automatically.",
                  "Surface listing updates and offer status to clients in one thread."
                ].map((item, i) => (
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
              <AnimatedJourneyVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - 4 icon boxes (no buttons) */}
      <section className="py-20 bg-gradient-to-b from-[#f8fffe] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Trusted By Top-Producing Brokerages
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[640px] mx-auto leading-[1.7]">
              The fundamentals that make MeraTalk a reliable communications partner for boutique teams and national franchises alike.
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

      {/* Sixth Section - CTA */}
      <section className="relative bg-gradient-to-br from-[#0d4a4a] via-[#0a3d3d] to-[#083030] py-[90px] px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-50px] left-[10%] w-[200px] h-[200px] bg-[#0a9e8f]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-50px] right-[15%] w-[250px] h-[250px] bg-[#3b8dd6]/10 rounded-full blur-3xl" />
          <div className="absolute top-[20%] left-[8%] w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Building2 className="w-5 h-5 text-[#0a9e8f]" />
          </div>
          <div className="absolute top-[30%] right-[10%] w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <KeyRound className="w-5 h-5 text-[#3b8dd6]" />
          </div>
          <div className="absolute bottom-[25%] left-[15%] w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <FileText className="w-4 h-4 text-[#f59e0b]" />
          </div>
        </div>

        <div className="relative z-[1] max-w-[760px] mx-auto">
          <div className="inline-block bg-white/10 border border-white/15 text-white/90 text-[11px] font-bold tracking-[1.5px] uppercase px-[18px] py-1.5 rounded-full mb-6 backdrop-blur-sm">
            Built For Brokers & Agents
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold mb-5 leading-[1.15]">
            Turn Every Listing Into A<br />
            <span className="bg-gradient-to-r from-[#0a9e8f] to-[#3b8dd6] bg-clip-text text-transparent">Closed Conversation.</span>
          </h2>
          <p className="text-[17px] text-white/70 max-w-[600px] mx-auto mb-9 leading-[1.75]">
            Give your agents the tools to answer faster, qualify smarter, and follow up automatically. See how MeraTalk fits the way real estate teams actually sell.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-8 py-3.5 rounded-full font-bold text-[15px] shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] transition-all"
            >
              Book A Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#capabilities"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded-full font-semibold text-[15px] border border-white/25 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Seventh Section - FAQ */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] text-[#5a6a7a]">
              Answers to the questions brokerages and team leaders ask us most often.
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
