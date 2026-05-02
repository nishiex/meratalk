import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Mic,
  ShieldCheck,
  Search,
  Cloud,
  Tags,
  PlayCircle,
  Sparkles,
  Activity,
  Headphones,
  Zap,
  Phone,
  MessageSquare,
} from "lucide-react"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"

export const metadata: Metadata = {
  title: "Call Recording | Secure, Searchable & Compliant · MeraTalk",
  description:
    "Record, transcribe, and analyze every business call. AI-powered call recording with searchable transcripts, encryption, and compliant retention.",
  openGraph: {
    title: "Call Recording | MeraTalk",
    description:
      "Capture every conversation automatically. Searchable transcripts, encryption, and AI-powered insights — built for compliance and coaching.",
    url: "https://meratalk.com/platform/call-recording",
    type: "website",
  },
  alternates: {
    canonical: "https://meratalk.com/platform/call-recording",
  },
}

const accentColor = "#cce8e3"

const features = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Automatic Capture",
    description:
      "Record inbound and outbound calls automatically across every device, queue, and team without manual triggers.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Searchable Transcripts",
    description:
      "Find any moment instantly with full-text transcript search across speakers, keywords, dates, and call outcomes.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Encryption at Rest",
    description:
      "AES-256 encryption with role-based access controls keeps every recording private and audit-ready.",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Unlimited Cloud Storage",
    description:
      "Store recordings safely in the cloud with configurable retention windows and one-click export.",
  },
  {
    icon: <Tags className="w-6 h-6" />,
    title: "Smart Tagging",
    description:
      "Auto-categorize calls by intent, sentiment, agent, and outcome so reviews and coaching take minutes.",
  },
  {
    icon: <PlayCircle className="w-6 h-6" />,
    title: "On-Demand Playback",
    description:
      "Stream recordings from any browser with waveform scrubbing, speed control, and synced transcript view.",
  },
]

const benefits = [
  {
    title: "Coach Smarter, Not Harder",
    description:
      "Surface best-in-class calls, share clips with your team, and turn every conversation into a learning moment.",
  },
  {
    title: "Stay Compliant by Default",
    description:
      "Automated consent prompts, retention rules, and exportable audit logs help you meet PCI, HIPAA, and GDPR.",
  },
  {
    title: "Resolve Disputes Fast",
    description:
      "Pull a verified recording in seconds — no more he-said-she-said when handling chargebacks or complaints.",
  },
  {
    title: "Unlock Customer Insights",
    description:
      "Aggregate sentiment trends, objections, and feature requests directly from real customer conversations.",
  },
]

const trustBoxes = [
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "Live Demo",
    description:
      "See call recording in action with a guided walkthrough tailored to your team and workflows.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Free Trial",
    description:
      "Try every feature for 14 days with no credit card and full access to AI transcription.",
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Talk to an Expert",
    description:
      "Chat with a specialist about compliance, retention, and rolling out recording across your org.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Quick Setup",
    description:
      "Activate call recording in minutes — no hardware, no IT tickets, and no disruption to live calls.",
  },
]

const faqs = [
  {
    question:
      "How quickly can our team start recording calls after we sign up for MeraTalk?",
    answer:
      "Most teams are recording calls within minutes of activation. Recording is enabled from a single toggle in the admin dashboard, applies to your existing numbers and devices, and requires no hardware changes or downtime.",
  },
  {
    question:
      "Is MeraTalk call recording compliant with HIPAA, PCI-DSS, and regional consent laws?",
    answer:
      "Yes. Recordings are encrypted in transit and at rest with AES-256, stored in compliant cloud regions, and protected by role-based access. We support automated consent announcements, on-demand pause for sensitive moments, and configurable retention to meet HIPAA, PCI-DSS, GDPR, and two-party consent rules.",
  },
  {
    question:
      "Can we search through call transcripts to find specific keywords, customers, or topics?",
    answer:
      "Absolutely. Every recording is automatically transcribed and indexed, so you can run full-text searches across speakers, dates, queues, and tags. Click any result to jump straight to that moment in the audio with a synced transcript view.",
  },
  {
    question:
      "What happens to existing call recordings if we ever decide to leave the platform?",
    answer:
      "Your recordings always belong to you. You can bulk-export audio files and transcripts at any time, schedule automated exports to your own cloud storage, or request a one-time data delivery during offboarding — no extra fees and no lock-in.",
  },
  {
    question:
      "Does call recording slow down call quality or require special phones and equipment?",
    answer:
      "No. Recording happens in the carrier-grade cloud, so there is zero impact on call quality, latency, or your devices. It works seamlessly with the MeraTalk apps, IP phones, mobile, and softphones your team already uses.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function CallRecordingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <Navbar />

        {/* 1. Hero — left text, right image */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#e0f2f1] text-[#0a9e8f] text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full mb-5">
                  <Mic className="w-3.5 h-3.5" /> Call Recording
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0d4a4a] leading-tight mb-6 text-balance">
                  Capture Every Call.{" "}
                  <span className="bg-gradient-to-r from-[#0a9e8f] to-[#3b8dd6] bg-clip-text text-transparent">
                    Unlock Every Insight.
                  </span>
                </h1>
                <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8 max-w-xl">
                  AI-powered call recording with searchable transcripts,
                  enterprise-grade encryption, and compliance-ready retention —
                  built for sales, support, and operations teams that move fast.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#trial"
                    className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#088a7d] transition-colors group"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="#demo"
                    className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-6 py-3 rounded-lg font-semibold border border-[#e0e0e0] hover:border-[#0a9e8f] hover:text-[#0a9e8f] transition-colors"
                  >
                    Book a Demo
                  </Link>
                </div>
                <div className="flex items-center gap-6 mt-8 text-sm text-[#5a6a7a]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#0a9e8f]" />
                    14-day free trial
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#0a9e8f]" />
                    No credit card
                  </span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div
                  className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
                  style={{ boxShadow: `0 25px 50px -12px ${accentColor}` }}
                >
                  <Image
                    src="/images/platform/call-recording-hero.png"
                    alt="Dashboard showing call recordings with waveforms and transcripts"
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

        {/* 2. Second section — left text, right image */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-6">
                  Every Conversation, Searchable in Seconds
                </h2>
                <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                  MeraTalk records, transcribes, and indexes 100% of your
                  business calls automatically. Skim transcripts, jump to
                  highlighted moments, and share clips with your team — all
                  from a clean, modern interface.
                </p>
                <ul className="space-y-4">
                  {[
                    "Automatic recording for inbound, outbound, and transferred calls",
                    "AI transcription with speaker diarization in 30+ languages",
                    "Synced waveform and transcript playback in your browser",
                    "Granular permissions for managers, agents, and auditors",
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
                  style={{ boxShadow: `0 25px 50px -12px ${accentColor}` }}
                >
                  <Image
                    src="/images/platform/ai-contact-center-feature.jpg"
                    alt="Searchable call transcript with highlighted keywords"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Six-icon feature grid */}
        <section className="py-20 bg-[#f8fffe]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
                Everything You Need to Record, Review & Reuse
              </h2>
              <p className="text-lg text-[#5a6a7a] max-w-2xl mx-auto">
                A complete call recording stack — from capture to compliance —
                without the complexity of legacy systems.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
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

        {/* 4. Benefits — alternating layout, image left + numbered list right */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div
                  className="relative w-full max-w-xl aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                  style={{ boxShadow: `0 25px 50px -12px ${accentColor}` }}
                >
                  <Image
                    src="/images/platform/ai-assistant-feature.jpg"
                    alt="Team reviewing call analytics and coaching highlights"
                    width={700}
                    height={875}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] leading-tight mb-4">
                  Built for the Way Modern Teams Work
                </h2>
                <p className="text-lg text-[#5a6a7a] leading-relaxed mb-8">
                  Recording is just the start. MeraTalk turns every call into
                  searchable, shareable, actionable knowledge for your whole
                  organization.
                </p>
                <div className="space-y-5">
                  {benefits.map((b, i) => (
                    <div
                      key={b.title}
                      className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-[#f0fdfa] to-white border border-[#e6f0ee]"
                    >
                      <div className="w-10 h-10 bg-[#0a9e8f] rounded-full flex items-center justify-center text-white font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#0d4a4a] mb-1.5">
                          {b.title}
                        </h3>
                        <p className="text-[#5a6a7a] leading-relaxed">
                          {b.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Four icon boxes — each with its own CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-4">
                Choose How You Want to Get Started
              </h2>
              <p className="text-lg text-[#5a6a7a] max-w-2xl mx-auto">
                Whether you’re exploring, scaling, or rolling out company-wide
                — we have a path that fits.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustBoxes.map((box) => (
                <div
                  key={box.title}
                  className="flex flex-col text-center p-7 rounded-xl border border-[#e6f0ee] hover:shadow-md transition-shadow bg-white"
                >
                  <div
                    className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center text-[#0a9e8f]"
                    style={{ backgroundColor: `${accentColor}` }}
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

        {/* 6. CTA section */}
        <section className="relative bg-gradient-to-br from-[#0d4a4a] via-[#0a3d3d] to-[#083030] py-[90px] px-6 text-center text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-50px] left-[10%] w-[200px] h-[200px] bg-[#0a9e8f]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-50px] right-[15%] w-[250px] h-[250px] bg-[#3b8dd6]/10 rounded-full blur-3xl" />
            <div className="absolute top-[20%] left-[8%] w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
              <Phone className="w-5 h-5 text-[#0a9e8f]" />
            </div>
            <div className="absolute top-[30%] right-[10%] w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
              <MessageSquare className="w-5 h-5 text-[#3b8dd6]" />
            </div>
            <div className="absolute bottom-[25%] left-[15%] w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
              <Mic className="w-4 h-4 text-[#f59e0b]" />
            </div>
          </div>

          <div className="relative z-[1] max-w-[720px] mx-auto">
            <div className="inline-block bg-white/10 border border-white/15 text-white/90 text-[11px] font-bold tracking-[1.5px] uppercase px-[18px] py-1.5 rounded-full mb-6 backdrop-blur-sm">
              Stop Losing Conversations
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold mb-5 leading-[1.15]">
              Turn Every Call Into a{" "}
              <span className="bg-gradient-to-r from-[#0a9e8f] to-[#3b8dd6] bg-clip-text text-transparent">
                Competitive Advantage
              </span>
            </h2>
            <p className="text-[17px] text-white/70 max-w-[560px] mx-auto mb-9 leading-[1.75]">
              Activate cloud call recording in minutes and unlock searchable,
              compliant, AI-ready conversations across your entire team — no
              hardware, no headaches.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link
                href="#trial"
                className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] px-8 py-3.5 rounded-full font-bold text-[15px] shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] transition-all"
              >
                Start Recording Free
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#sales"
                className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded-full font-semibold text-[15px] border border-white/25 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-20 bg-[#f8fffe]">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a4a] mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-[#5a6a7a]">
                Everything you need to know about MeraTalk Call Recording.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl border border-[#e6f0ee] overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                    <span className="font-semibold text-[#0d4a4a]">
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
    </>
  )
}
