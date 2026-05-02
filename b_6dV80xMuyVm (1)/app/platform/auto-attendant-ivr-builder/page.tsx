import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  GitBranch,
  Languages,
  Mic,
  Clock,
  Users,
  Shield,
  PlayCircle,
  Headphones,
  BookOpen,
  Sparkles,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"

export const metadata: Metadata = {
  title: "Auto-Attendant & IVR Builder | MeraTalk",
  description:
    "Design intelligent call flows in minutes with MeraTalk's drag-and-drop Auto-Attendant & IVR Builder. Route, greet, and serve callers with zero code.",
}

const ACCENT = "#bfe9e3"

const sixFeatures = [
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Drag-and-Drop Flows",
    description: "Build branching call paths visually with a no-code editor anyone on your team can master.",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Studio-Quality Greetings",
    description: "Record, upload, or generate AI voiceovers in dozens of voices and styles.",
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: "Multilingual Routing",
    description: "Greet every caller in their preferred language with automatic detection and prompts.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time-Based Schedules",
    description: "Switch flows automatically by business hours, holidays, or peak-traffic windows.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Smart Skill Routing",
    description: "Match callers to the agent best equipped to help based on intent, history, and availability.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Built-In Compliance",
    description: "PCI, HIPAA, and GDPR controls baked into every menu, prompt, and recording.",
  },
]

const fourSteps = [
  {
    step: "01",
    title: "Map Your Call Flow",
    description: "Sketch your menu structure on the visual canvas — drag nodes for greetings, menus, queues, and transfers.",
  },
  {
    step: "02",
    title: "Add Intelligent Logic",
    description: "Layer in conditions like caller ID, time of day, language, and CRM data to personalize every path.",
  },
  {
    step: "03",
    title: "Test & Preview Live",
    description: "Place a real call against your draft flow, hear every prompt, and validate routing before going live.",
  },
  {
    step: "04",
    title: "Publish Instantly",
    description: "Deploy to all your numbers in one click. Edit at any time — changes propagate in seconds.",
  },
]

const fourCtaBoxes = [
  {
    icon: <PlayCircle className="w-7 h-7" />,
    title: "See It in Action",
    description: "Walk through a guided demo and see how teams build production-ready IVRs in 15 minutes.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Start Free Trial",
    description: "Spin up your first auto-attendant today — no credit card, no hardware, no commitment.",
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "Talk to an Expert",
    description: "Have complex routing needs? Our solutions team will architect your perfect call flow.",
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Read the Docs",
    description: "Detailed guides, video tutorials, and templates to launch a polished IVR fast.",
  },
]

const faqs = [
  {
    question:
      "How quickly can I build and publish a complete auto-attendant flow for my business?",
    answer:
      "Most teams launch their first production IVR in under 30 minutes. The drag-and-drop canvas comes with prebuilt templates for common flows like sales, support, and after-hours, so you can start from a proven layout, customize greetings and routing rules, then publish to all your numbers in a single click.",
  },
  {
    question:
      "Can I design intelligent call routing without writing code or hiring a developer?",
    answer:
      "Absolutely. The IVR Builder is fully no-code. Visual nodes represent every action — greetings, menus, queues, conditions, transfers, voicemail — and you connect them by drawing arrows on the canvas. Conditional logic for caller ID, time-of-day, and CRM data is configured through dropdowns, not scripts.",
  },
  {
    question:
      "Does the IVR Builder support multilingual prompts and time-based routing for global teams?",
    answer:
      "Yes. You can serve greetings in any of 30+ supported languages with auto-detection or caller-prompted selection. Time-based routing lets you define business hours, holidays, and peak-traffic windows per region, so callers always reach the right team in the right language at the right time.",
  },
  {
    question:
      "How does the platform integrate with my existing CRM, helpdesk, and phone system?",
    answer:
      "Out-of-the-box connectors are available for Salesforce, HubSpot, Zendesk, ServiceNow, and major SIP-compatible PBXs. Caller data flows in real time, so menus can branch on customer tier, open ticket status, or last-touch agent. Custom integrations are available via REST API and webhooks.",
  },
  {
    question:
      "Can I test changes safely before they affect live callers and production traffic?",
    answer:
      "Every flow has a draft state with a built-in call simulator. You can dial a private test number, hear every prompt, and walk every branch without impacting live traffic. Once validated, changes deploy instantly — and you can roll back to any prior version with a single click.",
  },
]

export default function AutoAttendantIVRBuilderPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 — Hero (Left text, Right image) */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-[#0a9e8f]/20 text-[#0a9e8f] text-[11.5px] font-bold tracking-[1.3px] uppercase px-4 py-1.5 rounded-full mb-6">
                <span className="w-[7px] h-[7px] bg-[#0a9e8f] rounded-full" />
                Auto-Attendant &amp; IVR Builder
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Design Smart Call Flows{" "}
                <span className="bg-gradient-to-r from-[#0a9e8f] to-[#3b8dd6] bg-clip-text text-transparent">
                  Without Writing a Line of Code
                </span>
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                Build branching menus, route by language, schedule, or skill, and ship polished caller experiences in minutes — all from a visual drag-and-drop canvas your whole team can use.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                >
                  Start Building Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-6 py-3 rounded-lg font-semibold border border-[#e0e0e0] hover:border-[#0a9e8f] hover:text-[#0a9e8f] transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: `0 25px 50px -12px ${ACCENT}` }}
              >
                <Image
                  src="/images/platform/business-phone-hero.jpg"
                  alt="Auto-Attendant and IVR Builder visual canvas"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Left content, Right image */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                Every Caller Reaches the Right Person, Faster
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                Static phone trees frustrate callers and overload agents. MeraTalk replaces them with adaptive flows that understand context — language, intent, history, and time of day — so every call lands where it should without endless menu prompts.
              </p>
              <ul className="space-y-4">
                {[
                  "Visual canvas with prebuilt templates for sales, support, and after-hours",
                  "Real-time data lookups from your CRM during the call",
                  "AI-powered intent detection routes by what callers say",
                  "Live preview and call simulator before you publish",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0a9e8f] mt-0.5 shrink-0" />
                    <span className="text-[#333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: `0 25px 50px -12px ${ACCENT}` }}
              >
                <Image
                  src="/images/platform/business-phone-feature.jpg"
                  alt="Smart call routing and IVR menu preview"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — 6 Icon Boxes */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Everything You Need to Run a Modern IVR
            </h2>
            <p className="text-lg text-[#5a6a7a] max-w-2xl mx-auto">
              Powerful out of the box, flexible enough to support the most complex enterprise call flows.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sixFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-[#e6f0ee]"
              >
                <div className="w-12 h-12 bg-[#e0f2f1] rounded-xl flex items-center justify-center text-[#0a9e8f] mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0d4a4a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#5a6a7a] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Process / How It Works (alternating numbered cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              From Idea to Live Flow in Four Steps
            </h2>
            <p className="text-lg text-[#5a6a7a] max-w-2xl mx-auto">
              A clear path from a blank canvas to a production IVR your callers will love.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {fourSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 p-6 rounded-xl bg-gradient-to-br from-[#f0fdfa] to-white border border-[#e6f0ee]"
              >
                <div className="w-12 h-12 bg-[#0a9e8f] rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0d4a4a] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#5a6a7a] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — 4 Icon Boxes */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Pick the Path That Works for You
            </h2>
            <p className="text-lg text-[#5a6a7a] max-w-2xl mx-auto">
              Whether you want to explore on your own or chat with our team, we&apos;ve got you covered.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourCtaBoxes.map((box) => (
              <div
                key={box.title}
                className="text-center p-6 rounded-xl border border-[#e6f0ee] hover:shadow-md transition-shadow bg-white"
              >
                <div
                  className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center text-[#0a9e8f]"
                  style={{ backgroundColor: `${ACCENT}66` }}
                >
                  {box.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0d4a4a] mb-2">
                  {box.title}
                </h3>
                <p className="text-sm text-[#5a6a7a] leading-relaxed">
                  {box.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — CTA Section */}
      <section className="relative bg-gradient-to-br from-[#0d4a4a] via-[#0a3d3d] to-[#083030] py-[90px] px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-50px] left-[10%] w-[200px] h-[200px] bg-[#0a9e8f]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-50px] right-[15%] w-[250px] h-[250px] bg-[#3b8dd6]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-[1] max-w-[760px] mx-auto">
          <div className="inline-block bg-white/10 border border-white/15 text-white/90 text-[11px] font-bold tracking-[1.5px] uppercase px-[18px] py-1.5 rounded-full mb-6 backdrop-blur-sm">
            Ready When You Are
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold mb-5 leading-[1.15]">
            Stop Losing Callers to{" "}
            <span className="bg-gradient-to-r from-[#0a9e8f] to-[#3b8dd6] bg-clip-text text-transparent">
              Clunky Phone Menus
            </span>
          </h2>
          <p className="text-[17px] text-white/70 max-w-[560px] mx-auto mb-9 leading-[1.75]">
            Replace your dated IVR with intelligent flows that route every caller to the right answer in seconds. Try MeraTalk free — no credit card, no setup fees, no hardware.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-8 py-3.5 rounded-full font-bold text-[15px] shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] transition-all"
            >
              Start Free Trial
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded-full font-semibold text-[15px] border border-white/25 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7 — FAQs */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-[820px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Answers to the questions teams ask most before launching their first IVR.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-[#e6f0ee] overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[#0d4a4a] pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#0a9e8f] transition-transform group-open:rotate-180 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#5a6a7a] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
