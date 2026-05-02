import { Metadata } from "next"
import { Headphones, Phone, Bot, BarChart3, Users, Clock, Workflow, Shield } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "AI Contact Center Platform | Voice-First CCaaS · MeraTalk",
  description: "AI-powered contact center for voice-first customer service. Smart routing, real-time analytics & AI agent assist. 99.99% uptime, FCC licensed.",
  openGraph: {
    title: "AI Contact Center Platform | Voice-First CCaaS · MeraTalk",
    description: "AI-powered contact center for voice-first customer service. Smart routing, real-time analytics & AI agent assist.",
    url: "https://meratalk.com/platform/ai-contact-center",
    type: "website",
    images: ["/images/platform/ai-contact-center-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Contact Center Platform | Voice-First CCaaS · MeraTalk",
    description: "AI-powered contact center for voice-first customer service. Smart routing, real-time analytics.",
    images: ["/images/platform/ai-contact-center-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/ai-contact-center",
    languages: { "en-US": "https://meratalk.com/platform/ai-contact-center" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk AI Contact Center",
  description: "Voice-first AI-powered contact center platform for enterprise customer service.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "AI Contact Center", item: "https://meratalk.com/platform/ai-contact-center" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes MeraTalk a voice-first contact center?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MeraTalk is built on enterprise-grade voice infrastructure with FCC licensing, ensuring crystal-clear call quality and 99.99% uptime. Voice is our foundation, enhanced with AI and digital channels.",
      },
    },
  ],
}

export default function AIContactCenterPage() {
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
        heroTitle={<>Voice-First <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">AI Contact Center</span> Built for Scale</>}
        heroDescription="Deliver exceptional customer service with an AI-powered contact center designed around voice. MeraTalk combines enterprise-grade telephony with intelligent automation for faster resolutions and happier customers."
        accentColor="#bfdbfe"
        heroImage="/images/platform/ai-contact-center-hero.jpg"
        heroImageAlt="MeraTalk AI Contact Center Command Dashboard"
        section2Title="Enterprise Voice Quality Meets AI Intelligence"
        section2Description="Built on FCC-licensed infrastructure with 99.99% uptime, MeraTalk delivers the call quality your customers expect while AI handles routing, assists agents, and optimizes operations in real-time."
        section2Image="/images/platform/ai-contact-center-feature.jpg"
        section2ImageAlt="Contact center agents with AI assistance"
        section2Features={[
          "HD voice quality with FCC-licensed infrastructure",
          "AI-powered intelligent call routing",
          "Real-time agent assist and coaching",
          "Comprehensive analytics and reporting",
          "Seamless CRM and helpdesk integrations",
        ]}
        section3Title="Complete Contact Center Solution"
        section3Subtitle="Everything you need to run a world-class support operation"
        features={[
          {
            icon: <Phone className="w-6 h-6" />,
            title: "Enterprise Voice",
            description: "Crystal-clear HD voice on FCC-licensed infrastructure with 99.99% uptime and global reach.",
          },
          {
            icon: <Workflow className="w-6 h-6" />,
            title: "AI Call Routing",
            description: "Intelligent routing based on skills, availability, customer history, and predicted intent.",
          },
          {
            icon: <Bot className="w-6 h-6" />,
            title: "Agent AI Assist",
            description: "Real-time transcription, suggested responses, and automated post-call work for every agent.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Workforce Management",
            description: "Forecasting, scheduling, and real-time adherence tracking to optimize staffing.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Advanced Analytics",
            description: "Real-time dashboards, historical reporting, and AI-powered insights into operations.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Queue Management",
            description: "Smart queues with callbacks, estimated wait times, and overflow routing.",
          },
        ]}
        benefitsTitle="Deliver Better Service at Lower Cost"
        benefitsSubtitle="AI-powered efficiency without sacrificing quality"
        benefits={[
          {
            title: "30% Faster Resolution",
            description: "AI routing connects customers to the right agent first time, every time.",
          },
          {
            title: "Reduce Handle Time",
            description: "Agent AI assistance surfaces answers and automates after-call work.",
          },
          {
            title: "Scale Efficiently",
            description: "AI handles routine inquiries, letting agents focus on complex issues.",
          },
          {
            title: "Improve CSAT Scores",
            description: "Better routing, faster resolution, and consistent quality drive customer satisfaction.",
          },
        ]}
        useCasesTitle="Built for Every Contact Center"
        useCases={[
          { title: "Customer Support", description: "Resolve issues faster with AI-powered routing and agent assistance." },
          { title: "Technical Support", description: "Complex troubleshooting made efficient with AI-surfaced knowledge." },
          { title: "Sales Teams", description: "High-volume outbound and inbound sales with intelligent lead routing." },
          { title: "Healthcare", description: "HIPAA-compliant patient communication and appointment management." },
          { title: "Financial Services", description: "Secure, compliant customer service with full audit trails." },
          { title: "BPO Operations", description: "Multi-tenant support with client-specific routing and reporting." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "What makes MeraTalk a voice-first contact center?",
            answer: "MeraTalk is built on enterprise-grade voice infrastructure with FCC licensing, ensuring crystal-clear call quality and 99.99% uptime. Voice is our foundation, enhanced with AI capabilities and digital channels—not an afterthought.",
          },
          {
            question: "How does AI routing improve customer experience?",
            answer: "AI analyzes customer intent, history, and agent skills to connect callers with the best agent for their specific need. This reduces transfers, speeds resolution, and improves first-call resolution rates.",
          },
          {
            question: "Can I integrate with my existing systems?",
            answer: "Yes! MeraTalk integrates with Salesforce, Zendesk, ServiceNow, HubSpot, and many other CRM and helpdesk platforms. APIs and webhooks enable custom integrations.",
          },
          {
            question: "What reporting and analytics are available?",
            answer: "Real-time dashboards show queue status, agent performance, and service levels. Historical reports cover every metric with customizable date ranges. AI insights identify trends and opportunities.",
          },
          {
            question: "How quickly can we deploy?",
            answer: "Most contact centers are live within 2-4 weeks. Our team handles number porting, integrations, and training to ensure a smooth transition.",
          },
        ]}
        ctaTitle="Ready to Transform Your Contact Center?"
        ctaDescription="See how MeraTalk AI Contact Center can improve your customer service. Schedule a demo today."
      />
    </>
  )
}
