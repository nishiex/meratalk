import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Layers,
  UserCircle,
  History,
  Sparkles,
  HeartPulse,
  ShieldCheck,
  Activity,
  Rocket,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"

export const metadata: Metadata = {
  title:
    "Conversational Context | Memory Across Every Customer Channel · MeraTalk",
  description:
    "Conversational Context gives every customer interaction full memory across voice, chat, email, and SMS — so customers never have to repeat themselves.",
  openGraph: {
    title: "Conversational Context | MeraTalk",
    description:
      "Persistent memory across every customer touchpoint. End the repeat, start every conversation with full context.",
    url: "https://meratalk.com/platform/conversational-context",
    type: "website",
  },
}

const sixIconBoxes = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Cross-Channel Memory",
    description:
      "Voice, chat, email, and SMS interactions feed a single unified customer profile that follows every conversation.",
  },
  {
    icon: <UserCircle className="w-6 h-6" />,
    title: "Persistent Identity",
    description:
      "Match a customer to the right profile across channels — even when contact details, devices, or numbers change.",
  },
  {
    icon: <History className="w-6 h-6" />,
    title: "Conversation History",
    description:
      "Searchable, summarized history that appears the instant a new call, chat, or message connects to your team.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Context-Aware AI",
    description:
      "AI suggestions account for everything the customer has said before — across every channel and every interaction.",
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Sentiment Continuity",
    description:
      "Track how a customer's sentiment evolves over weeks and months, not just within a single conversation.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Privacy Controls",
    description:
      "Granular controls over what context is retained, surfaced to agents, and forgotten on customer request.",
  },
]

const fourIconBoxes = [
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Cross-Channel",
    description: "Voice, chat, email, and SMS unified into a single customer record.",
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Real-Time",
    description: "Context appears the moment a new conversation begins on any channel.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Privacy-First",
    description: "Granular retention and forgetting controls built into every record.",
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    title: "Plug-and-Play",
    description: "Works with your existing CRM and helpdesk in minutes — no engineering required.",
  },
]

const faqs = [
  {
    question:
      "How does Conversational Context unify customer interactions across different channels like voice, chat, email, and SMS automatically?",
    answer:
      "Every interaction is normalized into a single customer timeline using identity resolution across phone numbers, emails, account IDs, and device fingerprints. The platform reconciles channels in real time so an agent picking up a call sees the chat from yesterday and the email from last week as one continuous story.",
  },
  {
    question:
      "Can the system match customer identity across multiple channels even when the customer uses different contact details or devices?",
    answer:
      "Yes. We use a probabilistic identity graph that links account identifiers, phone numbers, email addresses, and customer IDs from your CRM. When a customer reaches out from a new device or number, the system can still link them to the right profile based on signals like account login, callback patterns, or explicit verification.",
  },
  {
    question:
      "Will adding Conversational Context affect call latency or chat response times for our agents during live conversations with customers?",
    answer:
      "No. Context is precomputed and cached, so it surfaces in under 100ms when an interaction starts. AI suggestions stream in alongside the agent's UI without blocking. Real-world deployments see no measurable impact on call setup time or agent response speed.",
  },
  {
    question:
      "How long is conversation history retained, and can our customers request deletion of their context data under GDPR rules?",
    answer:
      "Retention is fully configurable per data type — typically 13–24 months for transcripts, longer for derived insights. Customers can request deletion via your existing data-subject workflow, and we propagate those deletes across the unified record, transcripts, and any derived models within 30 days.",
  },
  {
    question:
      "Does Conversational Context integrate with the CRM, helpdesk, and contact center tools we already use without engineering effort?",
    answer:
      "Yes. We ship native connectors for Salesforce, HubSpot, Zendesk, Freshdesk, Genesys, NICE, and Five9. Anything outside that list can be wired up via REST API and webhooks — typically a one-day integration. The customer record is exposed both in agent UIs and via API so any downstream tool can consume it.",
  },
  {
    question:
      "What happens to existing conversation history when we onboard — can past interactions be imported into the unified customer record?",
    answer:
      "Absolutely. We support bulk import from existing call recording systems, chat archives, and email logs. Historical interactions are transcribed, identity-matched, and merged into the unified profile so your team starts day one with full context — not from a blank slate.",
  },
]

export default function ConversationalContextPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a9e8f]/10 text-[#0a9e8f] text-sm font-semibold mb-6">
                <Brain className="w-4 h-4" />
                Conversational Context
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Customer Conversations With{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Memory
                </span>{" "}
                That Spans Every Channel
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                Conversational Context gives every voice, chat, email, and SMS
                interaction a shared memory — so customers never repeat themselves and
                agents always start with the full story.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                >
                  Get Started
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
                  src="/images/platform/omnichannel-contact-center-hero.jpg"
                  alt="Unified customer record across every channel"
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

      {/* Section 2 — Value Split */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                Customers Don&apos;t Think in Channels — Your Platform Shouldn&apos;t Either
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-6">
                When a customer chats with you on Monday and calls on Wednesday, they
                expect you to remember. Conversational Context unifies every interaction
                into a single timeline so every agent — and every AI — starts with the
                full story.
              </p>
              <ul className="space-y-3">
                {[
                  "One customer record across every channel",
                  "Real-time identity resolution and matching",
                  "Searchable conversation history for any agent",
                  "Configurable retention and privacy controls",
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
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/customer-engagement-feature.jpg"
                  alt="Unified conversation timeline across channels"
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
              Six Capabilities That Make Memory Possible
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              The building blocks that turn isolated interactions into a continuous
              conversation your customers can feel.
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

      {/* Section 4 — Content / Alternating Layout */}
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
                  alt="How Conversational Context works in practice"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-5">
                How Conversational Context Works in Practice
              </h2>
              <div className="w-16 h-1 bg-[#0a9e8f] rounded-full mb-6" aria-hidden />
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                Conversational Context plugs into the channels you already run and turns
                every interaction into a building block of one continuous customer
                timeline. There is nothing for your team to babysit.
              </p>
              <div className="divide-y divide-[#e6e6e6]">
                {[
                  {
                    title: "Capture",
                    text: "Every voice, chat, and message is captured and normalized into a unified customer timeline.",
                  },
                  {
                    title: "Resolve",
                    text: "Identity matching links every interaction to the right person — across devices, numbers, and channels.",
                  },
                  {
                    title: "Surface",
                    text: "Relevant history and context surface the moment any new conversation begins on any channel.",
                  },
                ].map((step) => (
                  <div key={step.title} className="py-5 first:pt-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-[#0d4a4a] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#5a6a7a] leading-relaxed">{step.text}</p>
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
              Built to Scale With Your Customer Base
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Enterprise-ready memory that delivers real-time context, ironclad
              privacy, and integration with the tools your team already uses.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourIconBoxes.map((item, index) => (
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
              What teams ask before they roll out Conversational Context.
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
