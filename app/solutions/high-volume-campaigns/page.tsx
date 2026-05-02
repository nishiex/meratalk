import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Gauge,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Activity,
  BarChart3,
  Server,
  Send,
  Filter,
  CheckCircle,
  Target,
  TrendingUp,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"

export const metadata: Metadata = {
  title: "High-Volume Campaigns | Mass Voice & SMS at Scale · MeraTalk",
  description:
    "Run millions of compliant outbound calls and messages a day with MeraTalk's high-volume campaign engine — predictive dialing, smart caller ID, and live analytics built in.",
  openGraph: {
    title: "High-Volume Campaigns | MeraTalk",
    description:
      "Launch, scale, and optimize mass calling and SMS campaigns with predictive dialing, deliverability tooling, and real-time reporting.",
    url: "https://meratalk.com/solutions/high-volume-campaigns",
    type: "website",
  },
}

const sixIconBoxes = [
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Predictive Dialer Engine",
    description:
      "Auto-pace dial ratios per agent and per list to keep talk-time high while staying within abandonment thresholds your compliance team can defend.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Carrier-Grade Throughput",
    description:
      "Tier-1 routes and direct interconnects deliver millions of attempts per day with sub-second connect latency and consistent quality of service.",
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: "Mass SMS & Voice Blast",
    description:
      "Run synchronized voice and SMS campaigns from one console with per-segment cadence, throttling, and dynamic content personalization.",
  },
  {
    icon: <Filter className="w-6 h-6" />,
    title: "Built-In Compliance",
    description:
      "TCPA, STIR/SHAKEN, DNC, time-zone, and quiet-hour rules apply automatically so reps never accidentally dial a contact they shouldn't.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Caller ID Reputation",
    description:
      "Rotate and monitor numbers, detect spam labeling early, and remediate flagged DIDs before pickup rates collapse mid-campaign.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Live Campaign Analytics",
    description:
      "Track answer rate, conversion, agent productivity, and cost per outcome in real time — and split-test scripts and lists from one dashboard.",
  },
]

const fourIconBoxes = [
  {
    icon: <PhoneCall className="w-7 h-7" />,
    title: "Higher Connect Rates",
    description: "Local presence, healthy DIDs, and smart pacing put more live calls on agents.",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Better Targeting",
    description: "Segmented lists and dynamic scripts move the right offer to the right contact.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Faster Scale",
    description: "Spin from one campaign to hundreds without re-architecting your dialer stack.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Lower Risk",
    description: "Automated guardrails keep every dial inside the rules your legal team set.",
  },
]

const faqs = [
  {
    question:
      "What kind of daily call and SMS volume can MeraTalk realistically sustain for a single high-volume campaign account?",
    answer:
      "Customers regularly run between one and ten million outbound attempts per day on a single account, with peak burst capacity well beyond that on dedicated infrastructure. We provision tier-1 carrier capacity, geo-distributed media servers, and direct interconnects ahead of launch, then auto-scale during campaign windows so you never have to negotiate trunks mid-promotion or throttle agents back during peak hours.",
  },
  {
    question:
      "How does the platform help us stay compliant with TCPA, STIR/SHAKEN, DNC, and international calling regulations?",
    answer:
      "Compliance is enforced before a number is ever dialed. Every list is scrubbed against federal, state, and internal DNC registries on import and again at run time. STIR/SHAKEN attestation, time-zone gating, quiet-hour rules, frequency caps, and consent-record lookups apply per contact, per campaign. You can also configure custom guardrails per region — UK, EU, Canada, Australia — without writing a line of code.",
  },
  {
    question:
      "Which dialer modes do you support and how do we choose between predictive, power, progressive, and preview dialing?",
    answer:
      "We support all four modes plus manual click-to-dial, and you can switch between them per campaign or per agent group. Predictive maximizes agent talk time on high-volume lists with healthy contact rates. Power and progressive are best for warmer lists where pacing matters more than abandonment. Preview is ideal for high-value or regulated outreach where reps need context before connecting.",
  },
  {
    question:
      "What happens to our caller ID reputation and pickup rates when campaigns scale into the millions of attempts?",
    answer:
      "We actively manage DID reputation across major analytics providers, rotate numbers based on usage and flagging signals, and remediate spam labels through carrier-direct submissions. Local presence pools, branded caller ID where supported, and STIR/SHAKEN attestation all work together to protect pickup rates so a successful campaign doesn't burn the very assets that made it work.",
  },
  {
    question:
      "How quickly can our team launch a brand new high-volume campaign from list import to first live dial on agents?",
    answer:
      "Most campaigns go from list upload to live dialing in under an hour. The console handles list ingestion, automated scrubbing, segmentation, script and disposition setup, agent assignment, and pacing rules from one screen. For larger or regulated rollouts, our solutions team runs a guided launch with you — typically a same-week turnaround from contract to first connected conversation on the floor.",
  },
]

export default function HighVolumeCampaignsPage() {
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
                High-Volume Campaigns
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                Run Millions of{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Compliant Outbound Calls
                </span>{" "}
                a Day, Without Breaking a Sweat
              </h1>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                MeraTalk gives outbound teams a carrier-grade dialer, mass SMS engine,
                automated compliance guardrails, and live performance analytics — built to
                push high-velocity campaigns to scale without burning numbers, agents,
                or reputation along the way.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                >
                  Launch a Campaign
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-6 py-3 rounded-lg font-semibold border border-[#e0e0e0] hover:border-[#0a9e8f] hover:text-[#0a9e8f] transition-colors"
                >
                  Talk to a Specialist
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
                  alt="Outbound calling team running high-volume campaigns from a unified dialer console"
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
                Built for Teams That Live and Die by Connect Rate
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-6">
                When campaigns scale into the millions of attempts, the bottleneck stops
                being your list and starts being your stack. MeraTalk pairs tier-1 carrier
                capacity with intelligent pacing, healthy number pools, and automated
                compliance — so every extra dial actually puts a real conversation on a
                rep&apos;s headset instead of burning your caller ID reputation.
              </p>
              <ul className="space-y-3">
                {[
                  "Predictive, power, progressive, and preview dialing modes",
                  "Automated DNC, TCPA, time-zone, and consent enforcement",
                  "Local presence and branded caller ID across regions",
                  "Real-time reporting on connect, talk, and conversion metrics",
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
                  alt="High-volume dialer dashboard showing live agent activity and connect rates"
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
              Everything You Need to Scale Outbound, Safely
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              Six core capabilities that turn a list, a script, and a goal into a
              repeatable, compliant, measurable campaign engine.
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
                  src="/images/platform/business-sms-feature.jpg"
                  alt="Three-step launch flow for a compliant high-volume outbound campaign"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                Launch a Compliant Campaign in Three Repeatable Steps
              </h2>
              <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                Volume without process is just noise. MeraTalk wraps every campaign in the
                same disciplined flow — load, launch, optimize — so your team can run more
                of them in parallel without losing visibility into what&apos;s working,
                what&apos;s burning numbers, and where the next conversion is coming from.
              </p>
              <div>
                {[
                  {
                    num: "01",
                    title: "Load",
                    text: "Import lists, scrub against DNC and consent records, segment by geography, time zone, and intent in a single workflow.",
                  },
                  {
                    num: "02",
                    title: "Launch",
                    text: "Pick a dialer mode, assign agents, set pacing, and go live with caller IDs, scripts, and dispositions already wired up.",
                  },
                  {
                    num: "03",
                    title: "Optimize",
                    text: "Watch live dashboards, A/B test scripts and lists, and let the engine reallocate dials toward your best-performing segments.",
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
              Outcomes Outbound Leaders Actually Care About
            </h2>
            <p className="text-lg text-[#5a6a7a]">
              The numbers that move when your dialer, list strategy, and compliance
              tooling finally pull in the same direction.
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
              The questions outbound, marketing, and compliance leaders ask before
              moving high-volume campaigns onto MeraTalk.
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
