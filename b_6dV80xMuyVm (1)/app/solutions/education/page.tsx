"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import {
  GraduationCap, Phone, ArrowRight, Check, ChevronDown, ChevronUp,
  PhoneCall, MessageSquare, CalendarCheck, Users,
  Bot, Bell, Mic, BookOpen, School,
  ShieldCheck, Clock, BarChart3, Workflow, Sparkles, Library,
  Megaphone, Languages
} from "lucide-react"

const coreCapabilities = [
  {
    icon: PhoneCall,
    title: "Unified Campus Phone System",
    description: "Replace aging PBX hardware with cloud calling that connects classrooms, admin offices, dorms, and athletic departments under one secure number plan."
  },
  {
    icon: Bot,
    title: "AI Receptionist For Admissions",
    description: "Greet prospective students around the clock, answer program questions, capture inquiry details, and route warm leads straight to the right counselor instantly."
  },
  {
    icon: MessageSquare,
    title: "Two-Way Parent Messaging",
    description: "Send attendance alerts, weather closures, and progress updates by SMS while parents reply directly to a teacher or office number they recognize."
  },
  {
    icon: CalendarCheck,
    title: "Appointment & Tour Booking",
    description: "Let families self-schedule campus tours, advisor meetings, and counseling sessions with branded confirmations and reminders that cut no-show rates."
  },
  {
    icon: Megaphone,
    title: "Mass Notification Broadcasts",
    description: "Reach every student, parent, and staff member in seconds during weather events, lockdowns, or schedule changes through voice, SMS, and email."
  },
  {
    icon: BarChart3,
    title: "Engagement & Outcome Analytics",
    description: "Track call volume by department, response time on inquiries, and enrollment funnel drop-off so leadership can coach teams and lift conversion."
  }
]

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "FERPA-Aware By Design",
    description: "Strict access controls, encrypted recordings, and audit logs help schools handle student records and family conversations the right way every time."
  },
  {
    icon: Clock,
    title: "Always-On Coverage",
    description: "After-hours AI answering, voicemail-to-text, and on-call routing make sure parents and prospective students always reach a real, helpful response."
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Greet families in Spanish, Mandarin, Vietnamese, Arabic, and more with live agent transfer or AI translation that keeps every household informed."
  },
  {
    icon: Workflow,
    title: "SIS & CRM Integrations",
    description: "Native sync with PowerSchool, Blackbaud, Slate, Salesforce Education Cloud, and Ellucian keeps every conversation tied to the right student record."
  }
]

const platformPillars = [
  "One inbox for every prospective student, parent, and alumni conversation across voice, SMS, and chat.",
  "Smart routing that connects callers with the admissions counselor, advisor, or department they actually need.",
  "AI summaries that turn every advising call into structured notes inside your student information system.",
  "Insights that show which programs, campaigns, and counselors convert inquiries into enrolled students."
]

const faqs = [
  {
    question: "How does MeraTalk help schools and universities respond to prospective student inquiries faster than competing institutions?",
    answer: "Inbound calls, web forms, request-info pages, and paid ad responses ring every available counselor within seconds while an AI receptionist handles overflow. Inquiry context, program interest, and prior touchpoints appear on screen before the call connects, so counselors open the conversation already informed. Most institutions cut first-response time from days to under five minutes and meaningfully lift inquiry-to-application rates across every program."
  },
  {
    question: "Can the platform integrate with the student information systems and admissions CRMs that schools already use daily?",
    answer: "Yes. MeraTalk ships with native integrations for PowerSchool, Blackbaud, Ellucian Banner, Anthology, Slate by Technolutions, Salesforce Education Cloud, and HubSpot, plus webhooks for custom portals and IDX-style program directories. Calls, texts, voicemails, and AI summaries log to the right student or applicant automatically, so counselors and advisors never juggle screens or re-key notes between systems during a busy enrollment cycle."
  },
  {
    question: "Is the AI assistant able to answer common admissions questions without a counselor picking up every single call?",
    answer: "The AI receptionist greets callers in your school's brand voice, answers questions on tuition, deadlines, scholarships, and program availability, then drops qualified prospects directly into a counselor's calendar with confirmation texts. Out-of-scope or sensitive callers are handed off to a human seamlessly with full context. Counselors review a tidy summary and recording before the next call, so no nuance from the family is missed."
  },
  {
    question: "Does MeraTalk keep student and family communications compliant with FERPA, TCPA, and accessibility requirements for schools?",
    answer: "Compliance guardrails are built into every workflow on the platform. Role-based access, consent capture, recording disclosures, and quiet-hour windows are configurable per campus and per campaign. FERPA-aware audit logs, opt-out keywords, TTY support, and WCAG-compliant interfaces are automatic, and our compliance team helps districts and universities set policies for outreach, recordings, and parent communications the right way from day one."
  },
  {
    question: "How quickly can a school district or college get fully onboarded onto MeraTalk and start using it on live campuses?",
    answer: "Most schools, districts, and colleges are live in under three weeks on a guided onboarding plan. Number porting, SIS sync, IVR setup, multilingual greetings, and staff training run in parallel through a dedicated implementation manager. Existing recordings, contacts, and call routing rules migrate without downtime, so admissions calls, parent hotlines, and after-hours coverage continue uninterrupted while the new platform comes online with zero disruption to learning."
  }
]

function EducationHeroImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/11] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
        <Image
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=80"
          alt="Diverse college students collaborating on a sunlit university campus"
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
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Under 5 minutes</div>
        </div>
      </div>

      <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl items-center gap-3 border border-gray-100">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] flex items-center justify-center">
          <GraduationCap className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Inquiries handled</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">24/7 by AI</div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] rounded-full opacity-30 -z-10" />
      <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full opacity-30 -z-10" />
    </div>
  )
}

function CampusHubImage() {
  return (
    <div className="relative w-full aspect-[5/4] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
      <Image
        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1400&q=80"
        alt="University library interior with students studying at long wooden tables"
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
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Counselors online</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Smart routing</div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] flex items-center justify-center">
          <Bell className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Family alerts</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Real-time push</div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0">
        <div className="bg-[#0d4a4a]/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
          <span className="text-[12px] font-semibold text-white tracking-wide">Campus Communication Hub</span>
        </div>
      </div>
    </div>
  )
}

function EnrollmentJourneyVisual() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep(prev => (prev + 1) % 4), 1400)
    return () => clearInterval(id)
  }, [])

  const steps = [
    { icon: Sparkles, label: "Inquire" },
    { icon: Mic, label: "Advise" },
    { icon: CalendarCheck, label: "Apply" },
    { icon: GraduationCap, label: "Enroll" }
  ]

  return (
    <div className="relative w-full aspect-square bg-gradient-to-br from-[#f0fdfa] to-[#e6f7f5] rounded-3xl overflow-hidden p-8">
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
        <div className="text-[12px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f]">
          Inquiry-to-Enrollment Journey
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
            From first inquiry to first day of class
          </span>
        </div>
      </div>
    </div>
  )
}

export default function EducationPage() {
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
                <GraduationCap className="w-3.5 h-3.5" />
                For Education
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-6">
                Connect Every Student, Family, And Classroom On{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  One Platform
                </span>
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                MeraTalk gives K-12 districts, colleges, and universities a single platform for every admissions inquiry, parent text, and campus-wide announcement. Respond to prospective students in minutes, qualify families with AI, and keep every conversation tied to the right record in your SIS, so educators spend more time teaching and less time chasing missed calls.
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
              <EducationHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Why Education Teams Choose MeraTalk */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <CampusHubImage />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Built For The Pace Of Modern Education
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Prospective students compare programs in hours, not weeks, and parents expect classroom-level updates from their phones. MeraTalk equips your institution with the communication infrastructure to win the first conversation on every inquiry, keep families engaged across the year, and stay connected with alumni long after graduation.
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
              Everything Your Institution Needs To Connect
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              From the first program inquiry to the final commencement call, MeraTalk handles every conversation your campus needs to run a high-performing admissions and student-success operation.
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

      {/* Fourth Section - Inquiry-to-Enrollment Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                A Cleaner Path From First Inquiry To First Class
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Every conversation in education either moves a student forward or quietly stalls them. MeraTalk gives counselors and advisors a guided workflow that captures the inquiry, qualifies fit, schedules the campus tour, and keeps families informed, so applicants stay on track without manual follow-up reminders or missed deadlines.
              </p>
              <div className="space-y-4">
                {[
                  "Auto-create an applicant record in your SIS the moment a new inquiry calls.",
                  "Score student fit with AI from the very first advising conversation.",
                  "Send branded tour confirmations and deadline reminder texts automatically.",
                  "Surface application status and financial aid updates to families in one thread."
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
              <EnrollmentJourneyVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - 4 icon boxes (no buttons) */}
      <section className="py-20 bg-gradient-to-b from-[#f8fffe] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Trusted By Districts, Colleges, And Universities
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[640px] mx-auto leading-[1.7]">
              The fundamentals that make MeraTalk a reliable communications partner for charter schools, public districts, and four-year institutions alike.
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
            <School className="w-5 h-5 text-[#0a9e8f]" />
          </div>
          <div className="absolute top-[30%] right-[10%] w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <BookOpen className="w-5 h-5 text-[#3b8dd6]" />
          </div>
          <div className="absolute bottom-[25%] left-[15%] w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Library className="w-4 h-4 text-[#f59e0b]" />
          </div>
        </div>

        <div className="relative z-[1] max-w-[760px] mx-auto">
          <div className="inline-block bg-white/10 border border-white/15 text-white/90 text-[11px] font-bold tracking-[1.5px] uppercase px-[18px] py-1.5 rounded-full mb-6 backdrop-blur-sm">
            Built For Schools & Universities
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold mb-5 leading-[1.15]">
            Turn Every Inquiry Into An<br />
            <span className="bg-gradient-to-r from-[#0a9e8f] to-[#3b8dd6] bg-clip-text text-transparent">Enrolled Student.</span>
          </h2>
          <p className="text-[17px] text-white/70 max-w-[600px] mx-auto mb-9 leading-[1.75]">
            Give your admissions counselors, advisors, and front-office staff the tools to answer faster, qualify smarter, and follow up automatically. See how MeraTalk fits the way modern schools actually communicate.
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
              Answers to the questions district leaders and admissions directors ask us most often.
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
