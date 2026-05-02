import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Lightbulb,
  CheckCircle,
  Tag,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  BarChart3,
  Eye,
  Brain,
  Layers,
  Database,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"

export const metadata: Metadata = {
  title:
    "Conversation Intelligence | Insights From Every Customer Interaction · MeraTalk",
  description:
    "Conversation Intelligence analyzes 100% of customer calls, chats, and messages — surfacing trends, coaching opportunities, and revenue signals automatically.",
  openGraph: {
    title: "Conversation Intelligence | MeraTalk",
    description:
      "Analyze every customer interaction at scale. Spot churn risk, coaching gaps, and revenue signals automatically.",
    url: "https://meratalk.com/platform/conversation-intelligence",
    type: "website",
  },
}

const sixIconBoxes = [
  {
    icon: <Tag className="w-6 h-6" />,
    title: "AI Topic Detection",
    description:
      "Surface conversations that matter — competitor mentions, churn risks, product feedback, and compliance flags.",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Automated QA Scoring",
    description:
      "Score every interaction against your quality rubric automatically and spot training gaps before they hit CSAT.",
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Sentiment Analytics",
    description:
      "Track customer emotion across every channel and segment to see what actually moves satisfaction over time.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Voice of Customer",
    description:
      "See what customers really want — themes, complaints, and feature requests aggregated and ranked automatically.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Compliance Monitoring",
    description:
      "Catch missed disclosures, script deviations, and regulatory misses before they turn into fines or escalations.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Performance Dashboards",
    description:
      "Track agent, team, and customer trends in real time with dashboards built for ops, not data scientists.",
  },
]

const fourIconBoxes = [
  {
    icon: <Eye className="w-7 h-7" />,
    title: "100% Coverage",
    description: "Review every conversation, not just the 2–3% your QA team has time for.",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Custom AI Models",
    description: "Train models on your industry, products, and language — not a generic dataset.",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Cross-Channel",
    description: "Voice, chat, email, and SMS unified into a single analytics layer.",
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: "Enterprise Scale",
    description: "Process millions of interactions per month with sub-second query times.",
  },
]

const faqs = [
  {
    question:
      "How does Conversation Intelligence analyze our customer interactions across calls, chat, email, and other channels at enterprise scale?",
    answer:
      "Every interaction is automatically transcribed where needed, normalized into a unified format, and analyzed by AI models tuned to your industry. The system processes millions of conversations per month and exposes results through dashboards, alerts, and APIs you can plug into BI tools or coaching workflows.",
  },
  {
    question:
      "Can we customize the AI models to detect topics and signals that are specific to our industry or product line?",
    answer:
      "Yes. You can train custom topic models on your own glossary, scripts, and historical labeled examples. We also ship a library of prebuilt models for common industries — financial services, healthcare, retail, SaaS — that you can use as-is or fine-tune in days, not months.",
  },
  {
    question:
      "How long does it take to deploy Conversation Intelligence and start seeing meaningful insights from our existing call recordings?",
    answer:
      "Most teams are live within two weeks. We connect to your call recording and channel sources via prebuilt integrations, ingest a backlog of historical conversations, and run the first analytics pass within 48 hours. Custom models add another week or two depending on complexity.",
  },
  {
    question:
      "What level of accuracy can we expect from automated quality scoring compared to manual reviews performed by our QA analysts?",
    answer:
      "On well-defined rubrics, automated scoring typically agrees with senior QA analysts 90%+ of the time, and it covers every call rather than a tiny sample. We recommend running both in parallel for the first 30 days so you can calibrate the model and spot edge cases your QA team disagrees with.",
  },
  {
    question:
      "How do we ensure customer privacy and compliance with regulations when analyzing recorded conversations using your AI models?",
    answer:
      "All audio and text are encrypted in transit and at rest, processed in regional data centers you choose, and never used to train shared or public models. PII redaction can be enabled before storage, and we support SOC 2 Type II, HIPAA, and GDPR — including BAAs and full data-subject workflows.",
  },
  {
    question:
      "Does Conversation Intelligence integrate with our existing call recording, CRM, and business intelligence tools without significant engineering work?",
    answer:
      "Yes. We have native connectors for Genesys, NICE, Five9, Salesforce, HubSpot, Snowflake, Tableau, and Looker. Anything not on that list can be wired up via REST APIs, webhooks, or our SQL-compatible warehouse export — usually in a day rather than a quarter.",
  },
]

export default function ConversationIntelligencePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a9e8f]/10 text-[#0a9e8f] text-sm font-semibold mb-6">
                <Lightbulb className="w-4 h-4" />
                Conversation Intelligence
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Turn Every Conversation Into{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Insight
                </span>{" "}
                That Drives Better Outcomes
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                Conversation Intelligence analyzes 100% of your customer interactions
                automatically — surfacing trends, coaching opportunities, and revenue
                signals hidden in calls, chats, and emails.
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
                  See It In Action
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/ai-contact-center-hero.jpg"
                  alt="Conversation Intelligence dashboard"
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

      {/* Section 2 — Value Split (image left, content right) */}
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
                  alt="Insights surfaced from customer conversations"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                Listen to Every Customer, Even at Scale
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-6">
                Manual QA teams typically review 2–3% of calls. Conversation
                Intelligence reviews 100% — scoring every interaction against your
                quality criteria, flagging what matters, and showing you patterns no
                human could spot by sampling.
              </p>
              <ul className="space-y-3">
                {[
                  "Automatic transcription and language analysis",
                  "Custom topic and intent detection per business unit",
                  "Real-time alerts for compliance and churn risks",
                  "Aggregated voice-of-customer themes across channels",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0a9e8f] mt-0.5 shrink-0" />
                    <span className="text-[#333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — 6 Icon Boxes */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Six Ways Intelligence Pays Off
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Every conversation contains signal. Conversation Intelligence finds it,
              ranks it, and routes it to the people who can act on it.
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-5">
                From Raw Calls to Actionable Insight in Minutes
              </h2>
              <div className="w-16 h-1 bg-[#0a9e8f] rounded-full mb-6" aria-hidden />
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                Stop spending weeks on manual call reviews and brittle pivot tables.
                Conversation Intelligence ingests every interaction, applies your
                custom AI models, and delivers insight in dashboards your team can act
                on the same day.
              </p>
              <div className="divide-y divide-[#e6e6e6]">
                {[
                  {
                    title: "Ingest",
                    text: "Connect to your existing call recording, chat, and ticketing sources in a few clicks.",
                  },
                  {
                    title: "Analyze",
                    text: "AI transcribes, classifies, and scores every conversation against your custom criteria.",
                  },
                  {
                    title: "Act",
                    text: "Trends, alerts, and coaching moments are routed to dashboards, Slack, or your CRM.",
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
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/omnichannel-contact-center-feature.jpg"
                  alt="From conversation to action in minutes"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
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
              Built for Teams That Need Real Answers
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              The same analytics platform trusted by enterprise contact centers — at
              scale, with security and customization that match your business.
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
              What teams ask before they roll out Conversation Intelligence.
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
