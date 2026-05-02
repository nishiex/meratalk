import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Mic,
  Brain,
  Sparkles,
  HeartPulse,
  Wand2,
  Users,
  CheckCircle,
  Headphones,
  ShieldCheck,
  Activity,
  Rocket,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"

export const metadata: Metadata = {
  title: "AI Agent Assist | Real-Time Copilot for Customer Conversations · MeraTalk",
  description:
    "AI Agent Assist gives every agent a real-time copilot — live transcription, smart suggestions, auto-summaries, and sentiment insights — so your team resolves issues faster.",
  openGraph: {
    title: "AI Agent Assist | MeraTalk",
    description:
      "Real-time AI copilot that listens, suggests, and automates the after-call work for every customer conversation.",
    url: "https://meratalk.com/platform/ai-agent-assist",
    type: "website",
  },
}

const sixIconBoxes = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Live Transcription",
    description:
      "Real-time speech-to-text with speaker identification and 95%+ accuracy across accents and industries.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Smart Suggestions",
    description:
      "AI reads each conversation and surfaces the right reply, knowledge article, or next step instantly.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Auto Call Summaries",
    description:
      "Every call ends with a clean summary, action items, and a sentiment snapshot — no manual notes.",
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Sentiment Detection",
    description:
      "Spot frustrated customers the moment tone shifts so supervisors can step in before churn happens.",
  },
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: "CRM Auto-Update",
    description:
      "Tickets are logged, calls are tagged, and follow-ups are scheduled automatically as agents talk.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Coaching at Scale",
    description:
      "Identify what top performers do differently and replicate those moments across your entire team.",
  },
]

const fourTrustBoxes = [
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "24/7 AI Coverage",
    description: "Always-on assistance that never takes a break or skips a customer.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Enterprise Security",
    description: "SOC 2 Type II, HIPAA, and GDPR compliance built in by default.",
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Real-Time Analytics",
    description: "Track sentiment, talk time, and resolution metrics as they happen.",
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    title: "Activate in Minutes",
    description: "Switch on AI Agent Assist for your entire team in a single click.",
  },
]

const faqs = [
  {
    question:
      "How does AI Agent Assist actually help our team improve customer service quality and resolution speed in real-time conversations?",
    answer:
      "AI Agent Assist listens to every call as it happens, transcribes the conversation, surfaces relevant knowledge articles and customer history, and suggests proven responses based on what your top agents say in similar situations. The result is faster first-contact resolution and more consistent service quality across the team.",
  },
  {
    question:
      "Can the AI assistant integrate with our existing CRM, helpdesk, and knowledge base systems without requiring complex engineering work?",
    answer:
      "Yes. AI Agent Assist ships with native integrations for Salesforce, HubSpot, Zendesk, Freshdesk, and the most common knowledge platforms. Setup is configuration-only for those tools. Anything custom can be wired up with our REST API and webhooks — typically in a day, not a quarter.",
  },
  {
    question:
      "Is the AI transcription and analysis accurate enough to handle different accents, industry jargon, and noisy call environments reliably?",
    answer:
      "We benchmark our transcription at 95%+ accuracy across English accents, and we let you upload glossaries of industry terminology so the model learns your domain language. Background noise is handled by carrier-grade audio processing, and accuracy continues to improve as the model adapts to your team.",
  },
  {
    question:
      "How does MeraTalk protect customer conversation data and ensure compliance with HIPAA, GDPR, and SOC 2 Type II requirements?",
    answer:
      "All audio and transcripts are encrypted in transit and at rest, stored in regional data centers you choose, and never used to train public models. We sign BAAs for HIPAA, support full GDPR data-subject workflows, and undergo annual SOC 2 Type II audits. Detailed compliance docs are available on request.",
  },
  {
    question:
      "What kind of training or onboarding does our team need before they can start benefiting from AI Agent Assist on real calls?",
    answer:
      "Most teams are productive on day one. The agent UI sits inside their existing softphone, so there is nothing new to learn. We typically run a 30-minute kickoff with supervisors to walk through coaching dashboards and configure suggestion sources, and that is the entire onboarding.",
  },
  {
    question:
      "How quickly can we expect measurable improvements in agent productivity and customer satisfaction after deploying AI Agent Assist?",
    answer:
      "Customers usually see 30–40% faster average handle times within the first two weeks, driven by auto-summaries replacing manual notes and suggestions reducing knowledge-base lookups. CSAT improvements typically follow in weeks 4–8 as new agents ramp faster and quality becomes more consistent across the team.",
  },
]

export default function AIAgentAssistPage() {
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
                AI Agent Assist
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Empower Every Agent With an{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  AI Copilot
                </span>{" "}
                That Listens, Learns, and Helps
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                AI Agent Assist sits alongside your customer-facing teams in real time —
                surfacing the right answer, drafting the right response, and handling the
                after-call paperwork so agents can focus on the customer.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-6 py-3 rounded-lg font-semibold border border-[#e0e0e0] hover:border-[#0a9e8f] hover:text-[#0a9e8f] transition-colors"
                >
                  Watch a Demo
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/ai-assistant-hero.jpg"
                  alt="AI Agent Assist real-time copilot interface"
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

      {/* Section 2 — Value/Feature Split */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                Your Best Agent&apos;s Knowledge, Available to Everyone
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-6">
                Stop asking new hires to memorize the playbook. AI Agent Assist learns
                from every successful conversation and shares those insights with your
                entire team in real time — suggested replies, knowledge articles, and
                customer context delivered the moment they&apos;re needed.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time guidance during every customer call",
                  "Knowledge articles surfaced based on conversation context",
                  "Compliance reminders built into agent prompts",
                  "Performance insights for supervisors and team leads",
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
                  src="/images/platform/ai-assistant-feature.jpg"
                  alt="Agent dashboard with AI suggestions and customer context"
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
              Everything Your Agents Need, On Every Call
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Six AI capabilities that turn good agents into great ones — without adding
              steps to their workflow.
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
                <p className="text-[#5a6a7a] leading-relaxed">{item.description}</p>
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
                  alt="AI Agent Assist integrated into the agent workflow"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                Built Into the Agent Workflow — Not Bolted Onto It
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                AI Agent Assist plugs into the tools your team already uses, so there is
                nothing new to launch and nothing to switch between. From the moment a
                call connects to the after-call wrap, the assistant works alongside your
                agents at the speed of conversation.
              </p>
              <div className="space-y-5">
                {[
                  {
                    num: "01",
                    title: "Listen",
                    text: "AI joins every call automatically and transcribes both sides in real time.",
                  },
                  {
                    num: "02",
                    title: "Assist",
                    text: "Suggestions, knowledge articles, and compliance prompts appear inline as the conversation unfolds.",
                  },
                  {
                    num: "03",
                    title: "Wrap Up",
                    text: "After the call, AI auto-generates a summary, updates the CRM, and schedules any follow-ups.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0a9e8f] text-white font-bold flex items-center justify-center shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0d4a4a] mb-1">
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

      {/* Section 5 — CTA */}
      <CTABanner />

      {/* Section 6 — 4 Icon Boxes (Trust Signals) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Enterprise-Ready From Day One
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              The same platform that powers thousands of contact centers — secure,
              reliable, and ready for your team.
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
                <p className="text-sm text-[#5a6a7a] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — FAQs */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Everything teams ask before they roll out AI Agent Assist.
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
