import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Smile,
  MessageCircle,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Languages,
  Workflow,
  Zap,
  LineChart,
  Headphones,
  Users,
  CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"

export const metadata: Metadata = {
  title: "AI Sentiment Analysis | Form & Conversation Insights · MeraTalk",
  description:
    "Real-time AI sentiment analysis for forms, chats, and calls. Detect emotion, intent, and urgency across every customer touchpoint with multilingual accuracy.",
  openGraph: {
    title: "AI Sentiment Analysis | MeraTalk",
    description:
      "Detect emotion and intent across forms, calls, and chats with real-time AI sentiment analysis built for customer experience teams.",
    url: "https://meratalk.com/solutions/ai-sentiment-analysis",
    type: "website",
  },
}

const sixIconBoxes = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Context-Aware NLU",
    description:
      "Transformer models trained on customer-support data parse tone, intent, and entities — not just positive or negative scores.",
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Emotion Detection",
    description:
      "Go beyond polarity. Surface frustration, joy, confusion, and urgency so agents respond to how customers actually feel.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Form & Chat Coverage",
    description:
      "Analyze contact forms, live chat, support tickets, and call transcripts from a single API and a single dashboard.",
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: "Multilingual Accuracy",
    description:
      "Native sentiment scoring across 40+ languages with no translation step, preserving nuance, slang, and idiom.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Live Trend Dashboards",
    description:
      "Track sentiment by product, channel, agent, and campaign in real time — and spot shifts before they hit your CSAT.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Privacy by Design",
    description:
      "PII redaction, regional data residency, and SOC 2 Type II controls keep customer voice data safe and compliant.",
  },
]

const fourTrustBoxes = [
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Real-Time Routing",
    description: "Auto-escalate angry or churn-risk conversations to senior agents in milliseconds.",
  },
  {
    icon: <LineChart className="w-7 h-7" />,
    title: "CX Analytics",
    description: "Plug sentiment into BI tools, CRM, and ticketing for closed-loop reporting.",
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "Agent Coaching",
    description: "Score every interaction against empathy, clarity, and resolution benchmarks.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Contact Us",
    description: "Talk to a CX specialist about rolling sentiment AI out across your team.",
  },
]

const faqs = [
  {
    question:
      "How does your AI sentiment analysis differ from basic positive, neutral, and negative polarity scoring tools?",
    answer:
      "Polarity scores tell you whether a message is positive or negative — they rarely tell you why. Our models go further by detecting discrete emotions like frustration, confusion, urgency, and delight, alongside intent signals such as cancellation risk or upsell readiness. That richer signal lets your team act on the conversation, not just label it.",
  },
  {
    question:
      "Can the platform analyze sentiment from web forms, live chat, support tickets, and voice call transcripts together?",
    answer:
      "Yes. The same API and dashboard cover contact and feedback forms, live chat sessions, email and ticketing threads, and call transcripts streamed from your contact center. Sentiment, emotion, and intent are scored per message and rolled up per conversation, so you can compare channels side by side and identify where customer experience drifts.",
  },
  {
    question:
      "Which languages and regional dialects does the sentiment engine support without losing accuracy or contextual nuance?",
    answer:
      "We support 40+ languages natively, including English, Spanish, Portuguese, French, German, Hindi, Arabic, Mandarin, Japanese, and major regional dialects. Models are trained on in-language customer-support data rather than translation pipelines, which means slang, idiom, code-switching, and politeness norms are preserved instead of flattened into English first.",
  },
  {
    question:
      "How is customer data protected and what compliance certifications cover the sentiment analysis pipeline end to end?",
    answer:
      "Voice and text data are encrypted in transit and at rest, with automatic PII redaction before any model inference. The platform is SOC 2 Type II certified, GDPR and CCPA aligned, and supports regional data residency in the US, EU, and APAC. Customers can also bring their own keys and configure retention policies down to the conversation level.",
  },
  {
    question:
      "How quickly can our team integrate sentiment analysis into existing CRM, ticketing, and contact center workflows we already run?",
    answer:
      "Most teams are live in under two weeks. We ship native connectors for Salesforce, HubSpot, Zendesk, Intercom, Freshdesk, and major contact center platforms, plus a streaming REST API and webhooks for custom stacks. Our solutions team helps map sentiment signals to your existing routing, escalation, and reporting rules so the rollout is incremental, not disruptive.",
  },
]

export default function AISentimentAnalysisPage() {
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
                AI Sentiment Analysis
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Understand Every Customer{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Form, Chat, and Call
                </span>{" "}
                in Real Time
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                MeraTalk reads the emotion, intent, and urgency behind every message your
                customers send — across forms, chat, email, and voice — so your team can
                respond to how people actually feel, not just what they typed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                >
                  Try Sentiment AI Free
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
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/ai-assistant-hero.jpg"
                  alt="AI sentiment analysis dashboard reading live customer conversations"
                  width={1600}
                  height={1000}
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
                Turn Every Customer Signal Into a Decision Your Team Can Act On
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-6">
                Most CX tools collect feedback then leave you to read through it. MeraTalk
                scores every form submission, chat message, and call transcript the moment
                it arrives — surfacing churn risk, frustration, and delight in dashboards,
                tickets, and routing rules your team already uses.
              </p>
              <ul className="space-y-3">
                {[
                  "Live emotion and intent scoring on every interaction",
                  "Auto-tag tickets and escalate angry conversations",
                  "Track sentiment by channel, agent, product, and campaign",
                  "Native CRM, helpdesk, and contact center integrations",
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
                  src="/images/platform/ai-contact-center-feature.jpg"
                  alt="Sentiment analytics dashboard showing live emotion trends"
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
              Sentiment Intelligence Built for Customer Experience Teams
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Six core capabilities that turn raw customer language into coordinated,
              measurable action across every channel.
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
                  src="/images/platform/ai-assistant-feature.jpg"
                  alt="Three-step rollout of AI sentiment analysis across CX channels"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                From First Form Submission to Closed-Loop CX in Three Simple Steps
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                Rolling out sentiment AI shouldn&apos;t mean a six-month data science
                project. Our solutions team walks you from initial connection to live
                routing in days, with proven playbooks for support, sales, and product
                feedback workflows.
              </p>
              <div className="space-y-5">
                {[
                  {
                    num: "01",
                    title: "Connect",
                    text: "Plug your forms, chat widget, and contact center into MeraTalk with native connectors or our streaming API.",
                    icon: <Workflow className="w-5 h-5" />,
                  },
                  {
                    num: "02",
                    title: "Score",
                    text: "Every message is scored for emotion, intent, and urgency — enriched with PII-safe metadata for downstream tools.",
                    icon: <Brain className="w-5 h-5" />,
                  },
                  {
                    num: "03",
                    title: "Act",
                    text: "Automate routing, agent assist, and reporting so insights become resolved tickets and saved customers.",
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
              Choose How Sentiment AI Plugs Into Your Workflow
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              From real-time routing to executive dashboards, pick the entry point that
              matches your team&apos;s biggest customer experience priority.
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
              The questions CX, support, and product leaders ask before rolling out
              sentiment AI across their teams.
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
