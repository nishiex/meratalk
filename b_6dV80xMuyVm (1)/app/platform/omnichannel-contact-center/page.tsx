import { Metadata } from "next"
import { Globe, Phone, MessageSquare, Mail, MessagesSquare, Users, Workflow, BarChart3 } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "AI Omnichannel Contact Center | Voice · Chat · Email · SMS · MeraTalk",
  description: "Unified omnichannel contact center with voice, chat, email & SMS. Single agent desktop, unified customer view. 99.99% uptime, FCC licensed.",
  openGraph: {
    title: "AI Omnichannel Contact Center | Voice · Chat · Email · SMS · MeraTalk",
    description: "Unified omnichannel contact center with voice, chat, email & SMS. Single agent desktop, unified customer view.",
    url: "https://meratalk.com/platform/omnichannel-contact-center",
    type: "website",
    images: ["/images/platform/omnichannel-contact-center-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Omnichannel Contact Center | Voice · Chat · Email · SMS · MeraTalk",
    description: "Unified omnichannel contact center with voice, chat, email & SMS. Single agent desktop.",
    images: ["/images/platform/omnichannel-contact-center-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/omnichannel-contact-center",
    languages: { "en-US": "https://meratalk.com/platform/omnichannel-contact-center" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk AI Omnichannel Contact Center",
  description: "Unified omnichannel contact center platform supporting voice, chat, email, and SMS.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "Omnichannel Contact Center", item: "https://meratalk.com/platform/omnichannel-contact-center" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What channels does the omnichannel contact center support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MeraTalk supports voice calls, SMS/MMS, email, web chat, and social messaging—all unified in a single agent desktop with complete customer context across channels.",
      },
    },
  ],
}

export default function OmnichannelContactCenterPage() {
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
        heroTitle={<>Every Channel, One Conversation. True <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">Omnichannel Support</span>.</>}
        heroDescription="Meet customers on their preferred channel—voice, chat, email, or SMS—with full context at every touchpoint. MeraTalk Omnichannel Contact Center unifies it all in one powerful platform."
        accentColor="#c7d2fe"
        heroImage="/images/platform/omnichannel-contact-center-hero.jpg"
        heroImageAlt="MeraTalk Omnichannel Contact Center Interface"
        section2Title="Seamless Customer Journeys Across Every Channel"
        section2Description="Customers don&apos;t think in channels—they just want help. MeraTalk connects voice, chat, email, and SMS into a unified experience where agents see the complete conversation history regardless of how customers reach out."
        section2Image="/images/platform/omnichannel-contact-center-feature.jpg"
        section2ImageAlt="Agent handling multiple channels seamlessly"
        section2Features={[
          "Voice, SMS, email, and chat in one agent desktop",
          "Unified customer profile across all channels",
          "Seamless channel switching mid-conversation",
          "AI-powered routing for every channel",
          "Consistent analytics across all touchpoints",
        ]}
        section3Title="All Channels, Unified"
        section3Subtitle="Handle every customer interaction from one place"
        features={[
          {
            icon: <Phone className="w-6 h-6" />,
            title: "Voice",
            description: "Enterprise-grade HD voice with AI routing, call recording, and real-time agent assistance.",
          },
          {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "SMS & MMS",
            description: "Two-way text messaging with templates, automation, and full conversation threading.",
          },
          {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            description: "Unified email inbox with smart routing, templates, and SLA tracking.",
          },
          {
            icon: <MessagesSquare className="w-6 h-6" />,
            title: "Web Chat",
            description: "Embeddable chat widget with chatbot handoff, co-browsing, and file sharing.",
          },
          {
            icon: <Workflow className="w-6 h-6" />,
            title: "Unified Routing",
            description: "AI routes every interaction to the right agent based on skills, load, and customer context.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Cross-Channel Analytics",
            description: "Unified reporting across all channels with customer journey visualization.",
          },
        ]}
        benefitsTitle="Why Go Omnichannel?"
        benefitsSubtitle="Deliver the experience customers expect"
        benefits={[
          {
            title: "Meet Customers Where They Are",
            description: "Let customers choose their preferred channel without sacrificing service quality.",
          },
          {
            title: "Eliminate Repeat Explanations",
            description: "Complete context follows customers across channels—no starting over.",
          },
          {
            title: "Improve Agent Efficiency",
            description: "One desktop for all channels means faster training and less context switching.",
          },
          {
            title: "Better Business Insights",
            description: "Unified analytics reveal the complete picture of customer interactions.",
          },
        ]}
        useCasesTitle="Omnichannel Success Stories"
        useCases={[
          { title: "E-commerce Support", description: "Handle order inquiries across chat, email, and phone seamlessly." },
          { title: "Healthcare", description: "Patient communication via preferred channels with HIPAA compliance." },
          { title: "Financial Services", description: "Secure multi-channel support for banking and insurance customers." },
          { title: "SaaS Companies", description: "Technical support that scales across channels as you grow." },
          { title: "Travel & Hospitality", description: "Booking support and concierge services on every channel." },
          { title: "Retail", description: "In-store and online support unified for consistent customer experience." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "What channels does the omnichannel contact center support?",
            answer: "MeraTalk supports voice calls, SMS/MMS, email, web chat, and social messaging—all unified in a single agent desktop. Customer context and conversation history flow seamlessly across all channels.",
          },
          {
            question: "Can customers switch channels mid-conversation?",
            answer: "Yes! A customer can start on chat, continue via email, and finish with a phone call—all with full context preserved. Agents see the complete interaction history.",
          },
          {
            question: "How does routing work across channels?",
            answer: "AI-powered routing considers agent skills, current workload, customer history, and conversation context to route every interaction—regardless of channel—to the best available agent.",
          },
          {
            question: "Do I need separate licenses for each channel?",
            answer: "No. MeraTalk pricing includes all channels. You pay per agent seat, not per channel, making it simple to expand your omnichannel capabilities.",
          },
          {
            question: "How do analytics work across channels?",
            answer: "Unified analytics provide a complete view of customer interactions across all channels. Track customer journeys, channel preferences, resolution times, and agent performance in one dashboard.",
          },
        ]}
        ctaTitle="Unite Your Customer Conversations"
        ctaDescription="See how MeraTalk Omnichannel Contact Center creates seamless customer experiences. Start your free trial."
      />
    </>
  )
}
