import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  PhoneIncoming,
  Sparkles,
  ShieldCheck,
  Workflow,
  Headphones,
  Globe,
  Clock,
  Zap,
  LineChart,
  Users,
  Voicemail,
  Bot,
  PhoneForwarded,
  CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"

export const metadata: Metadata = {
  title: "Inbound Voice | Cloud Call Answering & Smart Routing · MeraTalk",
  description:
    "Answer every inbound call with intelligent IVR, skill-based routing, AI receptionist, and live analytics. Cloud-native inbound voice that scales from one number to thousands.",
  openGraph: {
    title: "Inbound Voice | MeraTalk",
    description:
      "Cloud-native inbound voice with smart routing, AI receptionist, and real-time analytics for support, sales, and service teams.",
    url: "https://meratalk.com/solutions/inbound-voice",
    type: "website",
  },
}

const sixIconBoxes = [
  {
    icon: <PhoneIncoming className="w-6 h-6" />,
    title: "Smart Call Routing",
    description:
      "Route every caller to the right agent using skills, language, priority, and account history — no missed handoffs.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Receptionist",
    description:
      "A natural voice agent answers in seconds, qualifies intent, and books, transfers, or resolves common requests.",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Visual IVR Builder",
    description:
      "Drag-and-drop menus, business hours, and conditional flows. Update your IVR in minutes without a developer.",
  },
  {
    icon: <Voicemail className="w-6 h-6" />,
    title: "Voicemail Transcription",
    description:
      "Every voicemail is transcribed, summarized, and delivered to inbox or CRM so nothing slips through the cracks.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Live Queue Analytics",
    description:
      "Track wait times, abandonment, and agent occupancy in real time, with alerts before service levels slip.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Carrier-Grade Reliability",
    description:
      "99.999% uptime, geo-redundant infrastructure, and built-in failover keep your inbound lines always answered.",
  },
]

const fourTrustBoxes = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "24/7 Coverage",
    description: "Always-on answering with after-hours flows and on-call escalation.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Global Numbers",
    description: "Local, toll-free, and international DIDs in 80+ countries.",
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "Agent Desktop",
    description: "Unified softphone with caller context, scripts, and CRM screen-pops.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Team Routing",
    description: "Ring groups, round-robin, and overflow rules across distributed teams.",
  },
]

const faqs = [
  {
    question:
      "How quickly can our team set up inbound voice routing, IVR menus, and live agent queues from scratch?",
    answer:
      "Most teams have a working inbound flow live the same day. You can port existing numbers or provision new ones in minutes, build IVR menus visually, and assign agents to queues without engineering help. Our onboarding team helps map business hours, escalation paths, and CRM integrations so you go live with a production-ready setup, not a prototype.",
  },
  {
    question:
      "Can the AI receptionist handle caller intent detection, qualification, and live transfer to human agents?",
    answer:
      "Yes. The AI receptionist greets callers, asks qualifying questions in natural language, and either resolves the request, books a meeting, or warm-transfers to the right agent with full context attached. It speaks 30+ languages, handles interruptions, and hands off seamlessly when callers ask for a human, so customers never feel stuck talking to a bot.",
  },
  {
    question:
      "Does inbound voice integrate with our existing CRM, helpdesk, and contact center workflows we already run?",
    answer:
      "MeraTalk ships native connectors for Salesforce, HubSpot, Zendesk, Intercom, Freshdesk, and Microsoft Dynamics, plus a streaming API for custom stacks. Inbound calls trigger screen-pops with caller history, log automatically as activities, and update tickets or deals in real time. Your agents stay in the tools they already use while inbound voice handles the routing and capture in the background.",
  },
  {
    question:
      "How do you guarantee call quality, low latency, and reliability for high-volume inbound voice traffic?",
    answer:
      "Our voice network is built on tier-1 carrier interconnects with HD codecs, jitter buffers, and geo-redundant media servers across the US, EU, and APAC. We maintain 99.999% platform uptime, automatic failover between regions, and real-time MOS monitoring on every call. Customers running thousands of concurrent inbound calls see consistent sub-100ms latency and call setup times under one second.",
  },
  {
    question:
      "What reporting and analytics do supervisors get for inbound queues, agents, and customer satisfaction trends?",
    answer:
      "Supervisors get a live wallboard with queue depth, wait time, abandonment rate, and agent state, plus historical reports across any date range. Every call is recorded, transcribed, and scored for sentiment and resolution, so you can spot coaching opportunities and trend shifts before CSAT drops. Reports export to BI tools, schedule by email, and feed dashboards your leadership team already trusts.",
  },
]

export default function InboundVoicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a9e8f]/10 text-[#0a9e8f] text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Inbound Voice
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Answer Every Call with{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Smart Routing & AI
                </span>{" "}
                Built for Modern Teams
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                MeraTalk inbound voice routes, qualifies, and resolves every incoming
                call with cloud-native IVR, AI receptionist, and live analytics — so
                your customers reach the right person fast and your agents stop juggling
                disconnected tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-6 py-3 rounded-lg font-semibold border border-[#e0e0e0] hover:border-[#0a9e8f] hover:text-[#0a9e8f] transition-colors"
                >
                  Book a Live Demo
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-square">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(closest-side, #0a9e8f33 0%, #0a9e8f1a 45%, transparent 75%)",
                  }}
                />
                <Image
                  src="/images/solutions/inbound-voice-hero.png"
                  alt="Inbound voice support agent on a headset surrounded by chat and channel icons"
                  width={1012}
                  height={1024}
                  className="relative w-full h-full object-contain"
                  style={{ filter: "hue-rotate(12deg) saturate(0.92)" }}
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Value/Feature Split */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                Turn Every Inbound Call Into a Faster, Friendlier Customer Experience
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-6">
                Long hold times, dropped calls, and lost context drive customers away.
                MeraTalk inbound voice greets every caller in seconds, captures intent
                with AI, and routes the conversation to the right agent with full
                history attached — so first-call resolution becomes the rule, not the
                exception.
              </p>
              <ul className="space-y-3">
                {[
                  "Answer in under 3 rings with AI or live agents",
                  "Route by skill, language, VIP status, and history",
                  "Auto-log calls and screen-pop CRM records",
                  "Track service levels and CSAT in real time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0a9e8f] mt-0.5 shrink-0" />
                    <span className="text-[#333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/hosted-phone-feature.jpg"
                  alt="Customer support agent handling inbound calls with live queue dashboard"
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
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Inbound Voice Capabilities Built for Every Customer-Facing Team
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Six core features that turn your phone number into an intelligent,
              measurable front door for support, sales, and service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sixIconBoxes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-[#e6f0ee]"
              >
                <div className="w-12 h-12 bg-[#e0f2f1] rounded-xl flex items-center justify-center text-[#0a9e8f] mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0d4a4a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#5a6a7a] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Workflow / Alternating Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/ai-contact-center-feature.jpg"
                  alt="Three-step inbound voice rollout from number provisioning to live routing"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                From First Call Provisioning to Live Routing in Three Simple Steps
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                Standing up cloud inbound voice shouldn&apos;t take a quarter. Our
                solutions team walks you from number porting to live agent queues in
                days, with proven playbooks for support, sales, and service workflows
                already running on MeraTalk.
              </p>
              <div className="space-y-5">
                {[
                  {
                    num: "01",
                    title: "Provision",
                    text: "Port your existing numbers or claim new local, toll-free, and international DIDs in minutes.",
                    icon: <PhoneForwarded className="w-5 h-5" />,
                  },
                  {
                    num: "02",
                    title: "Design",
                    text: "Build IVR menus, business hours, and routing rules visually — no code, no waiting on a vendor.",
                    icon: <Workflow className="w-5 h-5" />,
                  },
                  {
                    num: "03",
                    title: "Answer",
                    text: "Go live with AI receptionist, agent queues, and live dashboards on day one of rollout.",
                    icon: <Zap className="w-5 h-5" />,
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0a9e8f] text-white font-bold flex items-center justify-center shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0d4a4a] mb-1 flex items-center gap-2">
                        <span className="text-[#0a9e8f]">{step.icon}</span>
                        {step.title}
                      </h3>
                      <p className="text-[#5a6a7a] leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — 4 Icon Boxes */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Choose How Inbound Voice Plugs Into Your Operation
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              From global coverage to live agent desktops, pick the entry points that
              match how your team actually answers calls today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourTrustBoxes.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-[#e6f0ee] hover:shadow-md transition-shadow bg-white"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center text-[#0a9e8f] bg-[#e0f2f1]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0d4a4a] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5a6a7a] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — CTA */}
      <CTABanner />

      {/* Section 7 — FAQs */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              The questions support, sales, and operations leaders ask before moving
              their inbound voice to the cloud.
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
