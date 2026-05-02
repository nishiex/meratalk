import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Globe,
  Workflow,
  LineChart,
  Bot,
  Inbox,
  Smile,
  CheckCircle,
  HeartHandshake,
  Ticket,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"

export const metadata: Metadata = {
  title: "Customer Support Software | Faster, Friendlier Help · MeraTalk",
  description:
    "Resolve more tickets in less time with MeraTalk's unified customer support platform — voice, chat, email, and SMS in one inbox, powered by AI assist.",
  openGraph: {
    title: "Customer Support | MeraTalk",
    description:
      "Run a faster, friendlier support team across voice, chat, email, and SMS — with AI assist, smart routing, and live coaching built in.",
    url: "https://meratalk.com/solutions/customer-support",
    type: "website",
  },
}

const sixIconBoxes = [
  {
    icon: <Inbox className="w-6 h-6" />,
    title: "Unified Help Inbox",
    description:
      "Voice, chat, email, SMS, and social tickets land in one queue so agents stop tab-hopping and start solving customer issues faster.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Agent Assist",
    description:
      "Suggested replies, summaries, and next-best actions appear inline as customers speak or type, cutting handle time on every ticket.",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Smart Skill Routing",
    description:
      "Match each conversation to the agent best equipped to resolve it using language, history, sentiment, and account-tier signals.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "24/7 Multilingual Bots",
    description:
      "Deflect repeat questions in 40+ languages with self-service flows that hand off cleanly to a human when context gets complex.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Live Quality Insights",
    description:
      "Track CSAT, FCR, AHT, and sentiment per channel, agent, and queue with dashboards your team leads can actually act on.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure by Default",
    description:
      "PII redaction, role-based access, audit logs, and SOC 2 Type II controls keep customer conversations protected end to end.",
  },
]

const fourIconBoxes = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Faster Response",
    description: "Cut first-reply time with AI drafts and macros tuned to each customer.",
  },
  {
    icon: <Smile className="w-7 h-7" />,
    title: "Higher CSAT",
    description: "Empathic, on-brand answers from the first touch through final resolution.",
  },
  {
    icon: <Ticket className="w-7 h-7" />,
    title: "Fewer Tickets",
    description: "Self-service bots and help articles deflect the questions agents repeat most.",
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: "Loyal Customers",
    description: "Consistent, friendly service that turns one-time buyers into repeat advocates.",
  },
]

const faqs = [
  {
    question:
      "How quickly can our support team go live on MeraTalk across voice, chat, email, and SMS channels together?",
    answer:
      "Most teams are answering live customer conversations within seven to fourteen days. Our onboarding specialists migrate your existing macros, knowledge base articles, business hours, and routing rules, then run a parallel pilot on one channel before rolling out the rest. You keep your phone numbers, ticket history, and CSAT survey data — nothing gets reset.",
  },
  {
    question:
      "Will MeraTalk integrate with the CRM, helpdesk, and e-commerce tools our customer service team already uses daily?",
    answer:
      "Yes. We ship native two-way integrations with Salesforce, HubSpot, Zendesk, Intercom, Freshdesk, Shopify, and the major contact center platforms, plus a streaming REST API and webhooks for custom systems. Customer profiles, order history, and past tickets appear inside the agent workspace automatically, so reps never have to swivel between five browser tabs to answer one question.",
  },
  {
    question:
      "How does the AI agent assist actually help my reps without sounding robotic or generic on every reply?",
    answer:
      "The assistant is grounded in your help center, past resolved tickets, and brand voice guidelines, then it watches the live conversation in real time. It surfaces suggested responses, account context, and the next best action — but the agent always stays in control. Replies feel human because they are: the AI drafts, your team edits, sends, and learns from every accepted suggestion.",
  },
  {
    question:
      "What does the platform do to protect customer data, recordings, and personally identifiable information end to end?",
    answer:
      "All voice and text data is encrypted in transit and at rest, with automatic PII redaction running before storage and AI inference. The platform is SOC 2 Type II certified, GDPR and CCPA aligned, and supports regional data residency in the US, EU, and APAC. Granular role-based permissions, audit logs, and bring-your-own-key options give compliance teams the control they expect.",
  },
  {
    question:
      "Can we measure customer support performance and coach individual agents using the analytics built into MeraTalk?",
    answer:
      "Absolutely. Live dashboards track CSAT, first response time, average handle time, first contact resolution, deflection rate, and sentiment across every channel and queue. Team leads can drill into individual conversations, scorecard agents against custom rubrics, and trigger coaching workflows when sentiment dips or SLA breaches are predicted — all without exporting a single spreadsheet.",
  },
]

export default function CustomerSupportPage() {
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
                Customer Support
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Deliver Faster, Friendlier{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Customer Support
                </span>{" "}
                Across Every Channel
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                MeraTalk unifies voice, chat, email, and SMS into a single agent workspace —
                with AI assist, smart routing, and live quality insights — so your team
                resolves more tickets, in less time, with happier customers on the other end.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                >
                  Start Supporting Customers
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
                  src="/images/platform/ai-contact-center-hero.jpg"
                  alt="Customer support agent helping a customer through a unified omnichannel workspace"
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
                One Workspace for Every Conversation Your Customers Start
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-6">
                Your customers don&apos;t think in channels — they expect the same fast,
                friendly answer whether they call, email, chat on your site, or message you
                on WhatsApp. MeraTalk gives every agent a single screen with the full
                customer history, AI-suggested replies, and live sentiment cues built in.
              </p>
              <ul className="space-y-3">
                {[
                  "Voice, chat, email, SMS, and social in one unified queue",
                  "Customer context, orders, and past tickets inline with every reply",
                  "AI draft replies grounded in your help center and brand voice",
                  "Live coaching whispers and sentiment alerts for team leads",
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
                  src="/images/platform/omnichannel-contact-center-feature.jpg"
                  alt="Unified support workspace showing voice, chat, and email tickets in one queue"
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
              Built for Modern Customer Service Teams
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Six core capabilities that help support leaders shrink response times, lift
              CSAT, and keep agents focused on the customer instead of the tooling.
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

      {/* Section 4 — Process / Alternating Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/customer-engagement-feature.jpg"
                  alt="Three-step customer support workflow from inquiry to resolution"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                A Simple Three-Step Path From Inquiry to Resolved Customer
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                Great customer support isn&apos;t about adding more tools — it&apos;s about
                removing friction. MeraTalk takes every ticket from arrival to resolution
                with the same structured, measurable flow, no matter which channel the
                customer chose to start the conversation.
              </p>
              <div>
                {[
                  {
                    num: "01",
                    title: "Capture",
                    text: "Calls, chats, emails, and messages flow into one queue with full customer context attached automatically.",
                  },
                  {
                    num: "02",
                    title: "Assist",
                    text: "AI suggests answers, routes the ticket to the right agent, and surfaces every relevant article and past case.",
                  },
                  {
                    num: "03",
                    title: "Resolve",
                    text: "Agents reply once, close the loop with CSAT, and feed every outcome back into smarter automations.",
                  },
                ].map((step, idx, arr) => (
                  <div key={step.num}>
                    <div className="flex gap-4 py-5">
                      <div className="w-12 h-12 rounded-full bg-[#0a9e8f] text-white font-bold flex items-center justify-center shrink-0">
                        {step.num}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#0d4a4a] mb-1">
                          {step.title}
                        </h3>
                        <p className="text-[#5a6a7a] leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="border-t border-[#cfe7e3]" />
                    )}
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
              Outcomes Support Leaders Actually Care About
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              The metrics that move when teams stop juggling tabs and start serving
              customers from a single, intelligent workspace.
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
              Common questions from support, CX, and operations leaders evaluating
              MeraTalk for their customer service team.
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
