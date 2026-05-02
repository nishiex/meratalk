import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  PhoneOutgoing,
  Sparkles,
  Target,
  Rocket,
  TrendingUp,
  Calendar,
  Filter,
  Mic,
  ListChecks,
  BarChart3,
  ShieldCheck,
  Zap,
  Users,
  Bot,
  CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"

export const metadata: Metadata = {
  title: "Outbound Sales | Power Dialer & AI-Driven Prospecting · MeraTalk",
  description:
    "Hit pipeline goals with predictive dialing, AI talk-track coaching, local presence, and CRM-native cadences. Outbound sales tooling that helps reps book more meetings every day.",
  openGraph: {
    title: "Outbound Sales | MeraTalk",
    description:
      "Cloud-native outbound sales with predictive dialing, AI coaching, automated cadences, and live pipeline analytics.",
    url: "https://meratalk.com/solutions/outbound-sales",
    type: "website",
  },
}

const sixIconBoxes = [
  {
    icon: <PhoneOutgoing className="w-6 h-6" />,
    title: "Predictive Power Dialer",
    description:
      "Skip dead lines and voicemails automatically. Reps connect with three to five times more decision-makers in the same eight-hour shift.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Real-Time AI Coach",
    description:
      "Live whisper prompts surface objections, pricing cues, and competitor mentions, helping new reps sound like quota-crushing veterans on every call.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Local Presence Numbers",
    description:
      "Display a familiar area code in 80+ countries so prospects pick up first time and your connect rates climb without extra effort.",
  },
  {
    icon: <ListChecks className="w-6 h-6" />,
    title: "Multi-Touch Cadences",
    description:
      "Blend calls, SMS, voicemail drops, and email into automated outreach sequences that move prospects forward without anything slipping through.",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Conversation Intelligence",
    description:
      "Every dial is recorded, transcribed, and scored for sentiment, talk ratio, and next steps so managers coach with data, not memory.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Live Pipeline Analytics",
    description:
      "Track dials, connects, conversions, and revenue per rep in real time, with leaderboards and alerts that fuel healthy team competition.",
  },
]

const fourTrustBoxes = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Compliant by Design",
    description: "TCPA, DNC, and global telemarketing rules enforced on every dial automatically.",
  },
  {
    icon: <Calendar className="w-7 h-7" />,
    title: "Calendar Booking",
    description: "Drop scheduling links inside live calls and confirm meetings before reps hang up.",
  },
  {
    icon: <Filter className="w-7 h-7" />,
    title: "Smart Lead Scoring",
    description: "AI ranks prospects by intent so reps always work the hottest list available.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Team Collaboration",
    description: "Shared playbooks, call libraries, and live barge so reps level up faster together.",
  },
]

const faqs = [
  {
    question:
      "How quickly can our outbound sales team launch a power dialer, cadences, and live coaching from scratch?",
    answer:
      "Most teams run their first live campaign within 24 hours of signing up. You can import lead lists from CSV or your CRM, configure cadence steps visually, and seat reps in under an hour. Our solutions team helps you map ICP filters, voicemail drops, and disposition codes so day one feels like day thirty rather than a long, painful rollout.",
  },
  {
    question:
      "Can the predictive dialer handle multiple campaigns, lists, and team members without slowing the calling pace?",
    answer:
      "Absolutely. The dialer scales horizontally, so hundreds of reps can run distinct campaigns side by side with separate caller IDs, scripts, and pacing ratios. List recycling, lead capping, and timezone-aware throttling are all built in, so reps stay busy on the right contacts without burning leads or breaching telemarketing limits during peak calling hours.",
  },
  {
    question:
      "What CRM integrations does the outbound sales suite support and how fast can we sync existing data?",
    answer:
      "MeraTalk connects natively to Salesforce, HubSpot, Pipedrive, Zoho, Outreach, and Salesloft, with a streaming API for custom systems. Calls log automatically, dispositions update fields, and notes flow back to opportunities the moment reps hang up. Initial syncs typically finish within an hour, and ongoing updates happen in real time so your CRM stays the single source of pipeline truth.",
  },
  {
    question:
      "How does AI coaching, call scoring, and sentiment analysis actually improve outbound sales conversion rates?",
    answer:
      "AI listens to every call and flags talk-time, monologue length, objection handling, and competitor mentions on a scorecard managers can review in seconds. Reps get private playback links with timestamps showing exactly where deals stalled. Customers measuring before-and-after typically see 18 to 32 percent lift in connect-to-meeting conversion within the first 90 days of consistent coaching.",
  },
  {
    question:
      "Are outbound calls compliant with TCPA, DNC, and global telemarketing regulations across the regions we operate in?",
    answer:
      "Yes. Every campaign is screened against federal and state DNC lists, internal suppression lists, and reassigned-number databases before a dial fires. Calling windows respect prospect timezones, consent records are stored with each lead, and audit trails are exportable for legal review. We support TCPA, CRTC, Ofcom, ACMA, and EU eCommerce rules out of the box.",
  },
]

export default function OutboundSalesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#fff7ed] via-white to-[#e6f7f5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Outbound Sales
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Book More Meetings with{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Smarter Dialing & AI Coaching
                </span>{" "}
                Built for Quota Crushers
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                MeraTalk outbound sales pairs predictive dialing, local-presence numbers,
                and real-time AI coaching with native CRM cadences — so every rep spends
                less time hunting for buyers and more time closing pipeline that moves
                the quarterly forecast.
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
                  See It in Action
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-[#5a6a7a]">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0a9e8f]" />
                  3–5x more connects
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0a9e8f]" />
                  Live in 24 hours
                </span>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-square">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(closest-side, #87CEEB33 0%, #90EE9022 45%, transparent 75%)",
                  }}
                />
                <Image
                  src="/images/platform/ai-assistant-hero.jpg"
                  alt="Outbound sales rep on a headset powered by AI coaching with live conversation insights"
                  width={900}
                  height={900}
                  className="relative w-full h-full object-contain"
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
                Replace Manual Dialing With a Selling Engine That Actually Compounds
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-6">
                The average sales rep spends barely two hours a day talking to prospects.
                MeraTalk flips that ratio. Predictive pacing, voicemail automation, and
                AI-curated lists eliminate idle time so your team has more conversations
                before lunch than most teams have in a full day of cold calling.
              </p>
              <ul className="space-y-3">
                {[
                  "Auto-skip voicemails, busy signals, and dead numbers",
                  "Display a local area code that matches every prospect",
                  "Drop pre-recorded voicemails in a single click",
                  "Auto-log every dial, disposition, and note to the CRM",
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
                  src="/images/platform/outbound-dialer-feature.jpg"
                  alt="Outbound sales rep working a power dialer cadence with live call screen and CRM context"
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
              Outbound Sales Tools Built Around the Way Modern Reps Actually Sell
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Six pillars that turn cold lists into qualified meetings and predictable
              revenue — without bolting together five different point tools.
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                From Cold List to Closed-Won in Four Repeatable Sales Plays
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                Outbound only works when motion, message, and measurement line up. Our
                playbook bakes those into the platform, so reps walk into every shift
                knowing exactly who to call, what to say, and what counts as a win.
              </p>
              <div className="relative">
                {[
                  {
                    title: "Target",
                    text: "Import or sync your ICP lists, then let AI rank prospects by intent, fit, and engagement signals.",
                    icon: <Target className="w-6 h-6" />,
                  },
                  {
                    title: "Engage",
                    text: "Launch multi-touch cadences blending calls, SMS, voicemail drops, and email from one rep workspace.",
                    icon: <Zap className="w-6 h-6" />,
                  },
                  {
                    title: "Coach",
                    text: "AI scores every conversation and surfaces missed cues so reps fix gaps before they touch the next dial.",
                    icon: <Mic className="w-6 h-6" />,
                  },
                  {
                    title: "Scale",
                    text: "Promote winning scripts and cadences to the whole team and watch ramp time shrink quarter over quarter.",
                    icon: <Rocket className="w-6 h-6" />,
                  },
                ].map((step, i, arr) => (
                  <div key={step.title} className="flex gap-4 relative pb-8 last:pb-0">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#ff6b35] text-white flex items-center justify-center relative z-10">
                        {step.icon}
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          aria-hidden
                          className="absolute left-1/2 top-12 -translate-x-1/2 w-px h-[calc(100%-36px)] bg-gradient-to-b from-[#ff6b35]/60 via-[#ff6b35]/25 to-transparent"
                        />
                      )}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-[#0d4a4a] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[#5a6a7a] leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div
                className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 50px -12px #0a9e8f55" }}
              >
                <Image
                  src="/images/platform/ai-assistant-feature.jpg"
                  alt="AI sales coach reviewing a live outbound call with conversation insights and next-best actions"
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
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Everything Sales Leaders Need to Run Outbound With Confidence
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Compliance guardrails, smart automation, and team-level visibility — so
              outbound feels less like a gamble and more like a system you can trust.
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
      <section className="relative bg-gradient-to-br from-[#0d4a4a] via-[#0a3d3d] to-[#083030] py-[90px] px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-60px] left-[8%] w-[220px] h-[220px] bg-[#ff6b35]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-[-60px] right-[12%] w-[260px] h-[260px] bg-[#0a9e8f]/15 rounded-full blur-3xl" />
          <div className="absolute top-[22%] left-[10%] w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <PhoneOutgoing className="w-5 h-5 text-[#ff6b35]" />
          </div>
          <div className="absolute top-[28%] right-[12%] w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <TrendingUp className="w-5 h-5 text-[#0a9e8f]" />
          </div>
          <div className="absolute bottom-[24%] left-[16%] w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Target className="w-4 h-4 text-[#f59e0b]" />
          </div>
        </div>

        <div className="relative z-[1] max-w-[720px] mx-auto">
          <div className="inline-block bg-white/10 border border-white/15 text-white/90 text-[11px] font-bold tracking-[1.5px] uppercase px-[18px] py-1.5 rounded-full mb-6 backdrop-blur-sm">
            Pipeline on Demand
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold mb-5 leading-[1.15]">
            Stop Chasing Quota.<br />
            <span className="bg-gradient-to-r from-[#ff6b35] to-[#0a9e8f] bg-clip-text text-transparent">
              Start Manufacturing It.
            </span>
          </h2>
          <p className="text-[17px] text-white/70 max-w-[560px] mx-auto mb-9 leading-[1.75]">
            Give your reps the dialer, the data, and the AI coach top-performing teams
            already use to crush forecast — and see your first lift within a single
            sprint.
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
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              The questions sales leaders, RevOps, and SDR managers ask before moving
              their outbound motion to MeraTalk.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-[#f8fffe] rounded-xl border border-[#e6f0ee] overflow-hidden"
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
