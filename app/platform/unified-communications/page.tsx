import { Metadata } from "next"
import { Phone, Video, MessageSquare, Mail, Users, Globe, Zap, Shield, Headphones } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "Unified Communications Platform | All-in-One Business Comms · MeraTalk",
  description: "Unify voice, video, chat, SMS & email in one platform. 99.99% uptime, FCC 214 licensed. Built for US businesses with 200+ integrations.",
  openGraph: {
    title: "Unified Communications Platform | All-in-One Business Comms · MeraTalk",
    description: "Unify voice, video, chat, SMS & email in one platform. 99.99% uptime, FCC 214 licensed. Built for US businesses with 200+ integrations.",
    url: "https://meratalk.com/platform/unified-communications",
    type: "website",
    images: ["/images/platform/unified-communications-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unified Communications Platform | All-in-One Business Comms · MeraTalk",
    description: "Unify voice, video, chat, SMS & email in one platform. 99.99% uptime, FCC 214 licensed.",
    images: ["/images/platform/unified-communications-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/unified-communications",
    languages: { "en-US": "https://meratalk.com/platform/unified-communications" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk Unified Communications",
  description: "All-in-one unified communications platform for voice, video, chat, SMS, and email.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "Unified Communications", item: "https://meratalk.com/platform/unified-communications" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Unified Communications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unified Communications (UC) combines multiple communication channels—voice, video, messaging, and collaboration tools—into a single integrated platform for seamless business communication.",
      },
    },
    {
      "@type": "Question",
      name: "How does MeraTalk UC improve productivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MeraTalk UC eliminates app switching by unifying all channels, provides presence awareness, enables instant collaboration, and integrates with your existing business tools.",
      },
    },
  ],
}

export default function UnifiedCommunicationsPage() {
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
        heroTitle={<>One Platform, Every Channel. <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">Unified Communications</span> Built for Business.</>}
        heroDescription="Bring voice, video, chat, SMS, and email together in a single, seamless platform. MeraTalk Unified Communications eliminates silos and connects your entire team—anywhere, anytime."
        accentColor="#a7f3d0"
        heroImage="/images/platform/unified-communications-hero.jpg"
        heroImageAlt="MeraTalk Unified Communications Dashboard"
        section2Title="Connect Every Conversation Across Your Organization"
        section2Description="Modern businesses need more than just phone calls. MeraTalk UC brings every communication channel into one intuitive interface, so your team can collaborate effortlessly and your customers get faster, better service."
        section2Image="/images/platform/unified-communications-feature.jpg"
        section2ImageAlt="Team collaboration through unified communications"
        section2Features={[
          "Voice, video, chat, and SMS in one app",
          "Presence awareness across all channels",
          "Seamless handoff between devices",
          "200+ business app integrations",
          "Enterprise-grade security and compliance",
        ]}
        section3Title="Everything You Need in One Platform"
        section3Subtitle="Powerful features designed to unify your business communications"
        features={[
          {
            icon: <Phone className="w-6 h-6" />,
            title: "Cloud Voice",
            description: "Crystal-clear VoIP calling with HD audio, call routing, voicemail-to-email, and advanced call management features.",
          },
          {
            icon: <Video className="w-6 h-6" />,
            title: "HD Video Conferencing",
            description: "Face-to-face meetings with screen sharing, recording, virtual backgrounds, and up to 200 participants.",
          },
          {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Team Messaging",
            description: "Real-time chat with channels, direct messages, file sharing, and searchable conversation history.",
          },
          {
            icon: <Mail className="w-6 h-6" />,
            title: "Business SMS & MMS",
            description: "Text customers from your business number with two-way messaging, templates, and automation.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Presence & Status",
            description: "See who&apos;s available in real-time with automatic presence updates across all devices.",
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Reach",
            description: "Connect teams worldwide with local numbers in 100+ countries and reliable international calling.",
          },
        ]}
        benefitsTitle="Why Businesses Choose MeraTalk UC"
        benefitsSubtitle="Transform how your organization communicates and collaborates"
        benefits={[
          {
            title: "Reduce Communication Costs",
            description: "Consolidate multiple tools into one platform and save up to 40% on your communication spend.",
          },
          {
            title: "Boost Team Productivity",
            description: "Eliminate app switching and context loss with everything in one place.",
          },
          {
            title: "Work From Anywhere",
            description: "Full functionality on desktop, mobile, and web—your office travels with you.",
          },
          {
            title: "Scale Without Limits",
            description: "Add users and features instantly as your business grows, with no hardware required.",
          },
        ]}
        useCasesTitle="Built for Every Team"
        useCases={[
          { title: "Sales Teams", description: "Close deals faster with integrated calling, video demos, and instant team collaboration." },
          { title: "Customer Support", description: "Resolve issues quickly with omnichannel support and full customer context." },
          { title: "Remote Teams", description: "Stay connected and productive from anywhere with enterprise-grade reliability." },
          { title: "Healthcare", description: "HIPAA-compliant communications for patient care and team coordination." },
          { title: "Financial Services", description: "Secure, compliant communications for client interactions and internal collaboration." },
          { title: "Education", description: "Connect students, teachers, and staff with flexible communication tools." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "What is Unified Communications?",
            answer: "Unified Communications (UC) combines multiple communication channels—voice, video, messaging, and collaboration tools—into a single integrated platform. This eliminates the need for multiple apps and provides a seamless experience for business communication.",
          },
          {
            question: "How does MeraTalk UC improve productivity?",
            answer: "MeraTalk UC eliminates app switching by unifying all channels, provides presence awareness so you know who&apos;s available, enables instant collaboration through team chat, and integrates with 200+ business tools you already use.",
          },
          {
            question: "Can I keep my existing phone numbers?",
            answer: "Yes! MeraTalk supports number porting, so you can bring your existing business phone numbers to our platform at no additional cost.",
          },
          {
            question: "Is MeraTalk UC secure and compliant?",
            answer: "Absolutely. MeraTalk is FCC 214 licensed, SOC 2 compliant, and offers HIPAA-compliant options. All communications are encrypted end-to-end.",
          },
          {
            question: "What integrations are available?",
            answer: "MeraTalk integrates with 200+ business applications including Salesforce, HubSpot, Microsoft 365, Google Workspace, Slack, and many more.",
          },
        ]}
        ctaTitle="Ready to Unify Your Communications?"
        ctaDescription="Join thousands of businesses that trust MeraTalk for their unified communications. Start your free trial today."
      />
    </>
  )
}
