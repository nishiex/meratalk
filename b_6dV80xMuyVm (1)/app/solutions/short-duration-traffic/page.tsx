"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import {
  Timer, Zap, Globe2, ShieldCheck, BarChart3,
  Check, ChevronDown, ChevronUp, Phone, ArrowRight,
  Network, TrendingUp, Lock, Activity,
  Signal, Hash, Cpu, PhoneCall
} from "lucide-react"

const coreCapabilities = [
  {
    icon: Signal,
    title: "Smart Call Routing Engine",
    description: "Routes each short call through optimal carrier paths using real-time quality scores, geographic preference, and least-cost routing to guarantee completion rates above industry benchmarks."
  },
  {
    icon: BarChart3,
    title: "Real-Time Traffic Analytics",
    description: "Monitor call volumes, answer seizure ratios, average handle times, and completion rates across every campaign and carrier path from a single live dashboard."
  },
  {
    icon: Globe2,
    title: "Global SIP Trunking Network",
    description: "Carrier-grade SIP trunks in 80+ countries with local caller IDs and PSTN fallback ensure your short calls complete across international destinations and regulated markets."
  },
  {
    icon: ShieldCheck,
    title: "Automated Compliance Controls",
    description: "Built-in TCPA-safe pacing, DNC scrubbing, time-zone restrictions, and consent management protect every short-duration campaign from regulatory risk across the US, EU, and APAC."
  },
  {
    icon: Zap,
    title: "High-Throughput Dialing Engine",
    description: "Process millions of concurrent call attempts with intelligent retry logic, dynamic capacity scaling, and burst handling that adapts to traffic spikes without degrading call quality."
  },
  {
    icon: Hash,
    title: "Instant Number Provisioning",
    description: "Acquire and activate local, toll-free, or mobile numbers in minutes across 180+ countries to improve answer rates and compliance for every short-duration notification campaign."
  }
]

const trustPillars = [
  {
    icon: Activity,
    title: "99.999% Uptime SLA",
    description: "Geo-redundant infrastructure and automatic failover keep your notification and verification campaigns running through outages, traffic surges, and carrier disruptions without manual intervention."
  },
  {
    icon: Timer,
    title: "Sub-Second Call Latency",
    description: "Optimized media servers and direct carrier peering eliminate lag so OTP codes, flash calls, and alerts reach recipients before they lose context or patience."
  },
  {
    icon: Lock,
    title: "Real-Time Fraud Detection",
    description: "AI-powered anomaly detection flags suspicious call patterns, SIM swapping, and traffic pumping attacks before they inflate costs or compromise campaign integrity."
  },
  {
    icon: TrendingUp,
    title: "Elastic Traffic Scaling",
    description: "Provision capacity for millions of daily call attempts and scale from low-volume pilots to enterprise deployments without re-architecting or renegotiating carrier contracts."
  }
]

const platformPillars = [
  "Ultra-low latency SIP routing delivers calls under 200ms to maximize early answer rates on OTP and verification programs.",
  "Per-second billing and least-cost routing cut cost-per-call on high-frequency short campaigns by an average of 30%.",
  "Real-time ASR and NER monitoring catch quality degradation before it affects completion rates on time-sensitive alert broadcasts.",
  "Dedicated compliance modules enforce DNC, time-zone, and consent rules so every short call lands within legal boundaries globally."
]

const faqs = [
  {
    question: "How does MeraTalk ensure high connection rates for short-duration verification and notification calls at massive scale?",
    answer: "MeraTalk's intelligent routing engine evaluates real-time carrier quality metrics — answer seizure ratio, post-dial delay, and jitter — and dynamically selects the optimal path for every call attempt. Combined with automatic failover to backup carriers, geo-redundant SIP infrastructure, and per-second retry logic, the platform consistently delivers completion rates above industry benchmarks even during peak OTP or mass notification bursts."
  },
  {
    question: "What compliance tools does MeraTalk provide to manage TCPA, GDPR, and DNC rules for short-duration calling campaigns?",
    answer: "The platform ships with built-in TCPA-safe pacing, real-time DNC list scrubbing updated daily, time-zone-aware scheduling that prevents calls outside permitted hours, and consent-capture workflows for GDPR and CCPA. Audit logs record every call attempt with timestamps, consent status, and disposition so your legal and compliance team can respond to regulatory inquiries with complete, exportable documentation in minutes."
  },
  {
    question: "How quickly can businesses scale short-duration call capacity to handle sudden spikes in OTP and notification volume?",
    answer: "Capacity scales in real time through MeraTalk's cloud-native architecture — no hardware procurement, no carrier renegotiation, and no lead-time delays. Businesses can increase concurrent call limits, add new DID pools, and activate burst capacity for flash sales, emergency alerts, or seasonal surges directly from the management portal. The platform auto-scales down after peaks so you only pay for capacity you actually use."
  },
  {
    question: "Does MeraTalk support international short-duration traffic with local caller IDs and regional compliance built into the platform?",
    answer: "Yes. MeraTalk provides local presence numbers in 180+ countries, direct carrier interconnects in every major region, and per-country compliance profiles that automatically apply the correct DNC, consent, and pacing rules based on the destination. Local caller IDs lift answer rates by 30 to 60 percent compared to international numbers, and regional SIP nodes keep latency below the thresholds that affect short-duration call completion."
  },
  {
    question: "How does MeraTalk's analytics platform help reduce cost-per-completed-call for high-volume short-duration notification and verification programs?",
    answer: "The analytics suite breaks down cost drivers at the carrier, route, number, and campaign level so your operations team can pinpoint where spend is leaking. Automated least-cost routing shifts traffic to the cheapest path that meets your quality floor, per-second billing eliminates rounding waste on calls under 30 seconds, and weekly optimization reports surface the routing changes that would have the biggest impact on your unit economics."
  }
]

function HeroImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80"
          alt="Global communications network infrastructure powering short-duration call traffic"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0d4a4a]/50 via-transparent to-transparent" />
      </div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] rounded-full opacity-30 -z-10" />
      <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full opacity-30 -z-10" />
    </div>
  )
}

function AnalyticsImage() {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
        alt="Real-time analytics dashboard tracking short-duration call performance metrics"
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d4a4a]/40 via-[#0d4a4a]/10 to-transparent" />
    </div>
  )
}

function InfrastructureImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-[#e6f7f5]">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
          alt="Carrier-grade server infrastructure supporting high-volume short-duration call routing"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
        />
      </div>
      <div className="mt-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0a9e8f]/40 to-transparent" />
        <span className="text-[12px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f] whitespace-nowrap">
          Carrier-grade reliability, anywhere
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0a9e8f]/40 to-transparent" />
      </div>
    </div>
  )
}

export default function ShortDurationTrafficPage() {
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
                <Timer className="w-3.5 h-3.5" />
                By Use Case
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-6">
                The Platform Engineered for{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  High-Volume Short-Duration Traffic
                </span>
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                MeraTalk delivers carrier-grade infrastructure built to handle millions of short-duration calls — OTP verifications, flash notifications, alert broadcasts, and appointment reminders — with sub-second latency, intelligent routing, and real-time compliance controls so every call connects fast, completes reliably, and costs less per minute.
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

      {/* Second Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <AnalyticsImage />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Why Short-Duration Traffic Demands Dedicated Telecom Infrastructure
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Every millisecond and every fraction of a cent matters when you are routing millions of brief calls per day. Consumer OTPs, appointment reminders, flash authentication, and mass alert broadcasts require ultra-low latency, instant failover, and precision compliance controls that general-purpose VoIP platforms simply cannot deliver. MeraTalk was purpose-built to handle exactly this workload at any scale.
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

      {/* Third Section - 6 Icon Boxes */}
      <section id="capabilities" className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Capabilities Built for Brevity and Scale
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              From intelligent routing to automated compliance, every feature is engineered for businesses that rely on millions of short calls connecting fast, every single day.
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

      {/* Fourth Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Scale From Zero to Millions of Calls Without Infrastructure Overhead
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                MeraTalk's elastic cloud architecture removes the ceiling on short-duration traffic growth. Whether you are launching a startup notification service or expanding an enterprise OTP system to new geographies, the platform provisions capacity, routes around failures, and delivers consistent performance without hardware investments or long carrier negotiations.
              </p>
              <div className="space-y-4">
                {[
                  "Provision new DIDs, toll-free, or virtual numbers in 180+ countries through a self-serve portal in under five minutes.",
                  "Dynamic capacity scaling adjusts concurrent call limits in real time to absorb traffic spikes without impacting live campaigns.",
                  "Carrier-grade redundancy with automatic failover routes around downtime and ensures continuity for mission-critical notification flows.",
                  "Detailed post-call analytics reveal which routes, numbers, and time windows deliver the highest answer and completion rates."
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
              <InfrastructureImage />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - 4 Icon Boxes */}
      <section className="py-20 bg-gradient-to-b from-[#f8fffe] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Why Enterprises Trust MeraTalk for Short-Duration Traffic
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[640px] mx-auto leading-[1.7]">
              Reliability, speed, and compliance are the foundations that make MeraTalk the long-term infrastructure partner for OTP, notification, and verification programs at any volume.
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
      <section className="py-20 bg-gradient-to-br from-[#0d4a4a] via-[#0a4040] to-[#0d3a3a] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#0a9e8f]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3b8dd6]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#2dd4bf] text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5" />
            Start Today
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.2] mb-6">
            Ready to Route Millions of Short-Duration Calls with Confidence?
          </h2>
          <p className="text-[17px] text-[#a8d8d4] leading-[1.8] mb-10 max-w-[680px] mx-auto">
            Join hundreds of businesses using MeraTalk to deliver OTP verifications, mass notifications, and alert broadcasts at scale — with carrier-grade reliability, real-time compliance, and transparent per-second pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-8 py-4 rounded-lg font-semibold text-[16px] hover:bg-[#088a7d] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Book A Demo
            </Link>
            <Link
              href="#capabilities"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-[16px] hover:bg-white/20 transition-all"
            >
              Explore Features
              <ArrowRight className="w-4 h-4" />
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
              Answers to the questions short-duration traffic teams ask us most often.
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
