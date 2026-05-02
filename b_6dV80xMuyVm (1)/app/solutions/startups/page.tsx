"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"
import {
  Star, Rocket, Zap, DollarSign, Sparkles, Globe, Plug, Activity,
  Check, ChevronDown, ChevronUp, Phone, ArrowRight, TrendingUp,
  Clock, Heart, Users, MessageSquare, Headphones
} from "lucide-react"

const coreCapabilities = [
  {
    icon: Zap,
    title: "Launch in Minutes",
    description: "Sign up, pick a number, and start calling in under five minutes. No hardware, no contracts, no waiting."
  },
  {
    icon: DollarSign,
    title: "Pay As You Grow",
    description: "Start free, scale only as your team and call volume grow. No surprise fees, no annual lock-ins."
  },
  {
    icon: Sparkles,
    title: "AI Built In",
    description: "Auto-transcripts, smart routing, and call summaries powered by AI come standard, even on the starter plan."
  },
  {
    icon: Plug,
    title: "200+ Integrations",
    description: "Connect HubSpot, Slack, Notion, Stripe, and the rest of your stack in a few clicks."
  },
  {
    icon: Globe,
    title: "Numbers Anywhere",
    description: "Get local and toll-free numbers in 100+ countries to look established from day one."
  },
  {
    icon: Activity,
    title: "Reliability That Scales",
    description: "99.99% uptime, low-latency global routing, and security baked in so you can focus on shipping."
  }
]

const founderPerks = [
  {
    icon: Heart,
    title: "Zero Setup Fees",
    description: "Skip the upfront cost. Get every feature without paying for onboarding, hardware, or hidden extras."
  },
  {
    icon: Clock,
    title: "Free 14-Day Trial",
    description: "Test the full platform with your team. No credit card needed, no strings, cancel anytime."
  },
  {
    icon: Star,
    title: "Founder Pricing",
    description: "Special launch pricing for early-stage startups under two years old with active product traction."
  },
  {
    icon: Headphones,
    title: "Always-On Support",
    description: "Real humans, available 24/7 by chat, email, and phone, even on our smallest plan."
  }
]

const startupPillars = [
  "Bring your team online in minutes, not weeks.",
  "Built-in AI handles the busywork so founders can focus.",
  "Transparent pricing that scales with seats, not surprises.",
  "Open APIs ready for the day you need to build custom workflows."
]

const growthSteps = [
  "Migrate or port your existing numbers in under 24 hours.",
  "Slot in with your CRM, helpdesk, and team-chat tools.",
  "Open new regions and add seats whenever you raise.",
  "Get a dedicated CSM the moment you cross 50 seats."
]

const faqs = [
  {
    question: "What makes MeraTalk different from other communication platforms designed for startups and small teams?",
    answer: "MeraTalk combines startup-friendly pricing, instant setup, and enterprise-grade reliability in one place. You get AI-powered features (transcripts, smart routing, summaries) on day one without paying enterprise prices, plus a real support team that treats your startup like a strategic partner."
  },
  {
    question: "How quickly can my startup get up and running with MeraTalk's voice and messaging tools?",
    answer: "Most startups go from sign-up to first live call in under 10 minutes. Pick a number, invite your team, and you're ready. Number porting, integrations, and team provisioning happen in the background, typically completing within 24 hours."
  },
  {
    question: "Does MeraTalk offer flexible pricing that works for early-stage startups with limited budget and resources?",
    answer: "Yes. We offer a free 14-day trial, no setup fees, and a founder-friendly plan for startups under two years old. Pay only for the seats you actually use, scale up or down month-to-month, and never get locked into a long contract."
  },
  {
    question: "Can MeraTalk scale with our startup as we add more team members and customers over time?",
    answer: "Absolutely. The same platform that powers a 3-person team also runs 5,000-seat contact centers. Add users instantly, expand to new countries with local numbers, and unlock advanced features like AI agents, omnichannel routing, and dedicated infrastructure as you grow."
  },
  {
    question: "What integrations does MeraTalk provide with the popular tools that most startup teams rely on daily?",
    answer: "MeraTalk plugs into 200+ tools out of the box, including HubSpot, Salesforce, Slack, Microsoft Teams, Zapier, Notion, Linear, Intercom, Zendesk, and Stripe. Our open REST API and webhooks let your engineers wire up anything else in hours, not weeks."
  }
]

function StartupHeroImage() {
  return (
    <div className="relative w-full">
      {/* Soft brand background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0a9e8f]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#3b8dd6]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full aspect-square">
        <Image
          src="/images/solutions/startups-hero.png"
          alt="Startup customer support specialist with headset, surrounded by chat and AI tool icons"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-contain"
          priority
        />
      </div>

      {/* Decorative accents to match brand styling */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] rounded-full opacity-30 -z-10" />
      <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full opacity-30 -z-10" />
    </div>
  )
}

function StartupTeamImage() {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
      <Image
        src="/images/platform/team-chat-feature.jpg"
        alt="Startup team collaborating across messaging and voice channels"
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d4a4a]/55 via-[#0d4a4a]/15 to-transparent" />

      {/* Floating stat - top */}
      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
          <Users className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Avg. team size</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">3-50 founders</div>
        </div>
      </div>

      {/* Floating stat - bottom */}
      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Channels unified</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Voice · SMS · Chat</div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0">
        <div className="bg-[#0d4a4a]/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
          <span className="text-[12px] font-semibold text-white tracking-wide">Startup Collaboration Hub</span>
        </div>
      </div>
    </div>
  )
}

function StartupGrowthLadderVisual() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActiveStep(prev => (prev + 1) % 4), 1500)
    return () => clearInterval(id)
  }, [])

  const stages = [
    { label: "MVP", caption: "0-10 users", icon: Rocket },
    { label: "Seed", caption: "10-50 users", icon: Zap },
    { label: "Series A", caption: "50-500 users", icon: TrendingUp },
    { label: "Scale", caption: "500+ users", icon: Globe }
  ]

  return (
    <div className="relative w-full aspect-square bg-gradient-to-br from-[#f0fdfa] to-[#e6f7f5] rounded-3xl overflow-hidden p-8">
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
        <div className="text-[12px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f]">
          Built To Grow With You
        </div>

        <div className="w-full max-w-[300px] space-y-3">
          {stages.map((s, i) => {
            const Icon = s.icon
            const isActive = activeStep === i
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl p-4 shadow-md flex items-center gap-4 transition-all duration-500 ${
                  isActive ? "scale-[1.02] ring-2 ring-[#0a9e8f] shadow-xl" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                    isActive
                      ? "bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a]"
                      : "bg-[#f0fdfa]"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#0a9e8f]"}`} />
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-bold text-[#0d4a4a]">{s.label}</div>
                  <div className="text-[11px] text-[#5a6a7a]">{s.caption}</div>
                </div>
                {isActive && (
                  <div className="w-2 h-2 rounded-full bg-[#0a9e8f] animate-pulse" />
                )}
              </div>
            )
          })}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-md">
          <span className="text-xs font-semibold text-[#0d4a4a]">
            One platform · every stage
          </span>
        </div>
      </div>
    </div>
  )
}

export default function StartupsPage() {
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
                <Rocket className="w-3.5 h-3.5" />
                For Startups
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-6">
                Communication That Scales From{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Day One to Series D
                </span>
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Get the same voice, messaging, and AI tooling that powers thousands of growing companies, on a plan built for startup speed and budgets. Spin up business numbers in minutes, plug into the tools you already use, and stop worrying about your phone system so you can focus on what really matters: shipping product and winning customers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#0d4a4a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  href="#capabilities"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] border border-[#0d4a4a]/15 px-7 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#f0fdfa] transition-all"
                >
                  See What&apos;s Included
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-[13px] text-[#5a6a7a]">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#0a9e8f]" />
                  No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#0a9e8f]" />
                  Cancel anytime
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#0a9e8f]" />
                  Free 14-day trial
                </span>
              </div>
            </div>
            <div className="relative">
              <StartupHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Why Startups Choose MeraTalk */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <StartupTeamImage />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Built for Founders Who Move Fast
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Early-stage teams shouldn&apos;t have to choose between cheap tools that break and enterprise platforms that overcharge. MeraTalk gives you the speed of a scrappy startup tool with the reliability investors expect, so your communication stack never becomes the bottleneck on your roadmap.
              </p>
              <div className="space-y-4">
                {startupPillars.map((item, i) => (
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
              Everything Your Startup Needs, Out of the Box
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              Skip the procurement cycles and integration headaches. Every feature here ships on day one, even on the starter plan.
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
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section - Growth Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                From MVP to Series D, On the Same Platform
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                You shouldn&apos;t have to rip out and replace your phone system every time you raise. MeraTalk grows with you. Start with two seats and a single number, scale to a 500-person contact center across five regions without ever migrating providers, losing call history, or renegotiating contracts.
              </p>
              <div className="space-y-4">
                {growthSteps.map((item, i) => (
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
              <StartupGrowthLadderVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - 4 Founder Perks (no buttons) */}
      <section className="py-20 bg-gradient-to-b from-[#f8fffe] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Built for the Realities of Building a Startup
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[640px] mx-auto leading-[1.7]">
              Founder-friendly defaults, baked into every plan. No upsells required.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {founderPerks.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#e6f7f5] hover:shadow-lg hover:border-[#0a9e8f]/30 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0a9e8f]/10 to-[#3b8dd6]/10 flex items-center justify-center mb-5 mx-auto">
                  <item.icon className="w-7 h-7 text-[#0a9e8f]" />
                </div>
                <h3 className="text-[17px] font-bold text-[#0d4a4a] mb-3">{item.title}</h3>
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sixth Section - Shared CTA */}
      <CTABanner />

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] text-[#5a6a7a]">
              Everything founders ask before they sign up.
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
