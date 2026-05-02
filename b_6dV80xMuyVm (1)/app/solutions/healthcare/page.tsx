"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"
import {
  Activity, HeartPulse, Stethoscope, Check, ChevronDown, ChevronUp,
  Lock, FileLock2, Phone, Video, Calendar,
  ClipboardList, BellRing, ShieldCheck, UserRound, Hospital,
  ArrowRight, Workflow, Sparkles
} from "lucide-react"

const coreCapabilities = [
  {
    icon: ShieldCheck,
    title: "HIPAA-Compliant Voice & Messaging",
    description: "End-to-end encrypted calls, SMS, and video meetings with signed BAAs so every patient interaction stays private and audit-ready."
  },
  {
    icon: Video,
    title: "Telehealth Video Visits",
    description: "Launch HD video consultations from any browser with no app downloads, enabling virtual care for patients across every location."
  },
  {
    icon: Calendar,
    title: "Smart Appointment Reminders",
    description: "Automated voice and SMS reminders reduce no-shows by up to 40% while keeping schedules full and revenue predictable."
  },
  {
    icon: ClipboardList,
    title: "EHR & EMR Integrations",
    description: "Native connectors for Epic, Cerner, Athenahealth, and 200+ tools sync call records and notes directly into patient charts."
  },
  {
    icon: BellRing,
    title: "24/7 Patient Access Lines",
    description: "Always-on call routing, IVR triage, and on-call escalation keep patients connected to the right caregiver around the clock."
  },
  {
    icon: HeartPulse,
    title: "AI Clinical Call Summaries",
    description: "Real-time transcription and AI summaries auto-generate visit notes so providers spend more time with patients, less on charts."
  }
]

const trustPillars = [
  {
    icon: Lock,
    title: "HIPAA & HITECH Ready",
    description: "Encrypted voice, signed BAAs, and full audit logs for every regulated workflow."
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II Certified",
    description: "Independently audited controls protect patient data across every layer of the platform."
  },
  {
    icon: Hospital,
    title: "Built for Care Teams",
    description: "Workflows designed with clinicians, front desk, and IT leaders across health systems."
  },
  {
    icon: UserRound,
    title: "Dedicated Healthcare Support",
    description: "Specialists who understand clinical operations available 24/7 for mission-critical issues."
  }
]

const platformPillars = [
  "Encrypted voice, video, and SMS aligned with HIPAA and HITECH safeguards.",
  "Direct EHR integrations that keep call notes and patient context in sync.",
  "AI-powered triage, transcription, and call summaries for every interaction.",
  "Reliable 99.999% uptime so patient access lines never go dark."
]

const faqs = [
  {
    question: "Is MeraTalk fully HIPAA compliant for handling protected health information across calls, video, and patient messaging workflows?",
    answer: "Yes. MeraTalk is built for healthcare with end-to-end encryption, signed Business Associate Agreements (BAAs), audit logging, and access controls that meet HIPAA, HITECH, and 42 CFR Part 2 requirements. Every voice, video, SMS, and fax channel handles PHI with the same regulated safeguards your compliance team expects."
  },
  {
    question: "Can MeraTalk integrate seamlessly with our existing EHR, EMR, and practice management systems used across the organization?",
    answer: "Absolutely. We offer pre-built connectors for Epic, Cerner, Athenahealth, eClinicalWorks, Allscripts, and Greenway Health, plus open APIs for custom systems. Call logs, recordings, transcripts, and patient identifiers sync directly into the chart so clinicians never have to switch tools."
  },
  {
    question: "How does MeraTalk help reduce patient no-shows and improve appointment adherence across primary care and specialty practices?",
    answer: "Our automated reminder workflows send personalized voice, SMS, and email confirmations before every appointment, with one-tap rescheduling. Healthcare customers consistently see 30% to 40% reductions in no-show rates within the first 90 days, recovering significant lost revenue and improving patient outcomes."
  },
  {
    question: "What does the deployment process look like for a multi-location clinic or regional health system rolling out MeraTalk?",
    answer: "A dedicated healthcare implementation team handles discovery, number porting, EHR integration, and staff training in phased waves. Most multi-location practices go live within 4 to 6 weeks with zero downtime, and large health systems are migrated facility by facility to keep clinical operations uninterrupted throughout."
  },
  {
    question: "How does MeraTalk support telehealth, virtual care, and after-hours patient access for distributed clinical teams nationwide?",
    answer: "MeraTalk includes browser-based HD video visits, secure clinician-to-patient messaging, and intelligent after-hours call routing with on-call escalation. Providers can take encrypted calls from any device, while triage IVRs and AI receptionists keep urgent patient needs flowing to the right caregiver 24/7."
  }
]

function HealthcareHeroImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
        <Image
          src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1400&q=80"
          alt="Healthcare clinician in a video telehealth visit with a patient"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
          priority
        />
      </div>

      {/* Floating stat card - top right */}
      <div className="hidden sm:flex absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl items-center gap-3 border border-gray-100">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Compliance</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">HIPAA · HITECH</div>
        </div>
      </div>

      {/* Floating stat card - bottom left */}
      <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl items-center gap-3 border border-gray-100">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0a9e8f] opacity-60" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0a9e8f]" />
        </span>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Patient access</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">24/7 connected</div>
        </div>
      </div>

      {/* Decorative accent circles */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] rounded-full opacity-30 -z-10" />
      <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full opacity-30 -z-10" />
    </div>
  )
}

function HealthcareHubImage() {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
      <Image
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
        alt="Healthcare provider reviewing patient information on a tablet"
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
        priority={false}
      />

      {/* Soft brand overlay for visual consistency */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d4a4a]/55 via-[#0d4a4a]/15 to-transparent" />

      {/* Floating stat card - top left */}
      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
          <Stethoscope className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Care continuity</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Every channel</div>
        </div>
      </div>

      {/* Floating stat card - bottom right */}
      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] flex items-center justify-center">
          <FileLock2 className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">PHI protection</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">End-to-end encrypted</div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0">
        <div className="bg-[#0d4a4a]/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
          <span className="text-[12px] font-semibold text-white tracking-wide">Healthcare Communication Platform</span>
        </div>
      </div>
    </div>
  )
}

function AnimatedCareFlowVisual() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep(prev => (prev + 1) % 4), 1400)
    return () => clearInterval(id)
  }, [])

  const steps = [
    { icon: Phone, label: "Reach" },
    { icon: Workflow, label: "Triage" },
    { icon: Video, label: "Treat" },
    { icon: Sparkles, label: "Follow-up" }
  ]

  return (
    <div className="relative w-full aspect-square bg-gradient-to-br from-[#f0fdfa] to-[#e6f7f5] rounded-3xl overflow-hidden p-8">
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
        <div className="text-[12px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f]">
          Patient Journey Flow
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
            From first call to follow-up
          </span>
        </div>
      </div>
    </div>
  )
}

export default function HealthcarePage() {
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
                <Activity className="w-3.5 h-3.5" />
                For Healthcare
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-6">
                HIPAA-Compliant Communication, Built for{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Modern Healthcare
                </span>
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Connect patients, providers, and care teams on a single secure platform. MeraTalk delivers encrypted voice, video visits, AI-powered patient messaging, and EHR integrations that keep your practice compliant, efficient, and focused on what matters most: outstanding patient care.
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
              <HealthcareHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Why Healthcare Chooses MeraTalk */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <HealthcareHubImage />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Communication That Puts Patients First
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                From single-location practices to nationwide health systems, healthcare teams need more than a phone line. They need a HIPAA-grade communication backbone that protects PHI, integrates with the EHR, and helps clinicians deliver care without friction. MeraTalk replaces fragmented tools with one trusted platform built for the realities of modern medicine.
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
              Capabilities Built for Clinical Workflows
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              From HIPAA-compliant voice to AI-powered visit summaries, every feature is engineered for the daily realities of patient care.
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

      {/* Fourth Section - Patient Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                A Connected Patient Journey, End to End
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Every patient interaction matters. MeraTalk follows the journey from first phone call through follow-up, helping front-desk teams, nurses, and providers stay coordinated. Smart routing, encrypted messaging, and AI-driven summaries reduce manual work and keep care personal at every step.
              </p>
              <div className="space-y-4">
                {[
                  "Intelligent IVR triage routes urgent calls to the right caregiver instantly.",
                  "Encrypted SMS reminders cut no-shows and improve appointment adherence.",
                  "Browser-based video visits expand access for rural and homebound patients.",
                  "AI visit summaries draft chart notes so clinicians spend more time with patients."
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
              <AnimatedCareFlowVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - 4 icon boxes (no buttons) */}
      <section className="py-20 bg-gradient-to-b from-[#f8fffe] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Trusted Across the Healthcare Industry
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[640px] mx-auto leading-[1.7]">
              Compliance, reliability, and care-team-first design are the fundamentals that make MeraTalk the long-term partner for clinics, hospitals, and health systems.
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
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] text-[#5a6a7a]">
              Answers to the questions healthcare leaders ask us most often.
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
