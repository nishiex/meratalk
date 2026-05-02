import { Metadata } from "next"
import { PhoneOutgoing, Zap, Users, BarChart3, Clock, Shield, Settings, Target } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "Outbound Dialer | Power Through Call Lists Fast · MeraTalk",
  description: "Power dialer & predictive dialer for sales teams. 3x more conversations, TCPA compliant. Preview, power, and predictive dialing modes.",
  openGraph: {
    title: "Outbound Dialer | Power Through Call Lists Fast · MeraTalk",
    description: "Power dialer & predictive dialer for sales teams. 3x more conversations, TCPA compliant.",
    url: "https://meratalk.com/platform/outbound-dialer",
    type: "website",
    images: ["/images/platform/outbound-dialer-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outbound Dialer | Power Through Call Lists Fast · MeraTalk",
    description: "Power dialer & predictive dialer for sales teams. 3x more conversations, TCPA compliant.",
    images: ["/images/platform/outbound-dialer-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/outbound-dialer",
    languages: { "en-US": "https://meratalk.com/platform/outbound-dialer" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk Outbound Dialer",
  description: "Power dialer and predictive dialer for high-volume outbound calling.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "Outbound Dialer", item: "https://meratalk.com/platform/outbound-dialer" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between power dialer and predictive dialer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Power dialer calls one number at a time, connecting agents immediately when someone answers. Predictive dialer calls multiple numbers simultaneously, predicting when agents will be available, maximizing conversations per hour.",
      },
    },
  ],
}

export default function OutboundDialerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PlatformPageTemplate
        heroTitle={<>Power Through Call Lists. <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">3x More Conversations</span>.</>}
        heroDescription="Stop dialing manually. MeraTalk Outbound Dialer automates the boring stuff—dialing, voicemail detection, and disposition—so your team spends more time talking to prospects and less time waiting."
        accentColor="#fecaca"
        heroImage="/images/platform/outbound-dialer-hero.jpg"
        heroImageAlt="MeraTalk Outbound Dialer Platform"
        section2Title="Every Dialing Mode for Every Use Case"
        section2Description="Preview dial for research-heavy calls. Power dial for efficient list processing. Predictive dial for maximum volume. MeraTalk gives you the right tool for every campaign, all TCPA compliant."
        section2Image="/images/platform/outbound-dialer-feature.jpg"
        section2ImageAlt="Sales team using power dialer"
        section2Features={[
          "Preview, power, and predictive dialing modes",
          "Automatic voicemail detection and drop",
          "Local presence dialing for higher answer rates",
          "CRM integration with click-to-dial",
          "TCPA compliant with DNC list management",
        ]}
        section3Title="Dialer Features That Drive Results"
        section3Subtitle="Everything your sales team needs to crush quota"
        features={[
          {
            icon: <PhoneOutgoing className="w-6 h-6" />,
            title: "Multiple Dial Modes",
            description: "Preview, power, and predictive modes for different campaign needs and compliance requirements.",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Voicemail Drop",
            description: "Detect voicemail automatically and drop pre-recorded messages with one click.",
          },
          {
            icon: <Target className="w-6 h-6" />,
            title: "Local Presence",
            description: "Display local caller ID to increase answer rates by up to 400%.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Real-Time Analytics",
            description: "Track calls, connections, talk time, and conversions in real-time dashboards.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Team Management",
            description: "Monitor agent activity, listen to calls, whisper coaching, and barge when needed.",
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Compliance Built-In",
            description: "TCPA compliance, DNC list scrubbing, call time restrictions, and consent tracking.",
          },
        ]}
        benefitsTitle="Why Teams Choose MeraTalk Dialer"
        benefitsSubtitle="More conversations, better results"
        benefits={[
          {
            title: "3x More Conversations",
            description: "Eliminate manual dialing and waiting. Spend time talking, not dialing.",
          },
          {
            title: "Higher Answer Rates",
            description: "Local presence and optimized call timing increase the chances prospects pick up.",
          },
          {
            title: "Perfect Voicemails Every Time",
            description: "Drop consistent, professional voicemails without speaking—save time and improve quality.",
          },
          {
            title: "Stay Compliant",
            description: "Built-in TCPA compliance, DNC management, and consent tracking protect your business.",
          },
        ]}
        useCasesTitle="Dialer Success Stories"
        useCases={[
          { title: "Inside Sales", description: "SDRs and AEs power through lead lists and book more meetings." },
          { title: "Collections", description: "Reach more accounts with predictive dialing while staying compliant." },
          { title: "Political Campaigns", description: "High-volume voter outreach with local presence and compliance." },
          { title: "Appointment Setting", description: "Confirm and reschedule appointments efficiently with power dialing." },
          { title: "Lead Follow-Up", description: "Respond to inbound leads faster with automated call queuing." },
          { title: "Customer Surveys", description: "Conduct research calls at scale with predictive efficiency." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "What is the difference between power dialer and predictive dialer?",
            answer: "Power dialer calls one number at a time, connecting agents immediately when someone answers—no abandoned calls. Predictive dialer calls multiple numbers simultaneously, using algorithms to predict when agents will be available, maximizing conversations per hour but with some risk of dropped calls.",
          },
          {
            question: "Is the dialer TCPA compliant?",
            answer: "Yes. MeraTalk includes DNC list management, calling hour restrictions, consent tracking, and abandoned call rate controls. We help you stay compliant while maximizing efficiency.",
          },
          {
            question: "What is local presence dialing?",
            answer: "Local presence displays a local area code to the person you&apos;re calling, even if you&apos;re calling from elsewhere. This can increase answer rates by up to 400% compared to toll-free or out-of-area numbers.",
          },
          {
            question: "Can I integrate with my CRM?",
            answer: "Yes! MeraTalk integrates with Salesforce, HubSpot, Zoho, and many other CRMs for automatic logging, click-to-dial, and contact synchronization.",
          },
          {
            question: "How does voicemail drop work?",
            answer: "When the dialer detects voicemail, you can drop a pre-recorded message with one click and immediately move to the next call. The voicemail plays while you&apos;re already talking to the next prospect.",
          },
        ]}
        ctaTitle="Supercharge Your Outbound Calling"
        ctaDescription="Start having more conversations and closing more deals. Try MeraTalk Dialer free."
      />
    </>
  )
}
