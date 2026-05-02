import { Metadata } from "next"
import { Phone, Bot, Voicemail, PhoneForwarded, Clock, Shield, Smartphone, Settings } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "Business Phone + AI Receptionist | Cloud PBX with AI · MeraTalk",
  description: "Cloud PBX with AI-powered virtual receptionist. Never miss a call with 24/7 AI answering, smart routing & voicemail transcription. 99.99% uptime.",
  openGraph: {
    title: "Business Phone + AI Receptionist | Cloud PBX with AI · MeraTalk",
    description: "Cloud PBX with AI-powered virtual receptionist. Never miss a call with 24/7 AI answering, smart routing & voicemail transcription.",
    url: "https://meratalk.com/platform/business-phone",
    type: "website",
    images: ["/images/platform/business-phone-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Phone + AI Receptionist | Cloud PBX with AI · MeraTalk",
    description: "Cloud PBX with AI-powered virtual receptionist. Never miss a call with 24/7 AI answering.",
    images: ["/images/platform/business-phone-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/business-phone",
    languages: { "en-US": "https://meratalk.com/platform/business-phone" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk Business Phone + AI Receptionist",
  description: "Cloud PBX system with AI-powered virtual receptionist for 24/7 call handling.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "Business Phone", item: "https://meratalk.com/platform/business-phone" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI Receptionist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI Receptionist is an intelligent virtual assistant that answers calls 24/7, routes callers to the right department, takes messages, and handles common inquiries—all without human intervention.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need special hardware for Cloud PBX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No special hardware required. MeraTalk Cloud PBX works with your existing devices—computers, smartphones, and tablets. You can also use IP phones if preferred.",
      },
    },
  ],
}

export default function BusinessPhonePage() {
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
        heroTitle={<><span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">Cloud PBX</span> with AI-Powered Reception. Never Miss Another Call.</>}
        heroDescription="Transform your business phone system with intelligent AI that answers calls, routes inquiries, and handles messages 24/7. Enterprise-grade Cloud PBX without the enterprise complexity."
        accentColor="#fed7aa"
        heroImage="/images/platform/business-phone-hero.jpg"
        heroImageAlt="MeraTalk Business Phone with AI Receptionist"
        section2Title="Your AI Receptionist Works Around the Clock"
        section2Description="Stop losing business to missed calls. MeraTalk&apos;s AI Receptionist handles every call professionally, understands caller intent, routes to the right person, and takes detailed messages—all while sounding natural and friendly."
        section2Image="/images/platform/business-phone-feature.jpg"
        section2ImageAlt="AI-powered call handling dashboard"
        section2Features={[
          "24/7 AI-powered call answering",
          "Natural language understanding for caller intent",
          "Smart routing based on availability and skills",
          "Voicemail transcription delivered to email",
          "Seamless handoff to live agents when needed",
        ]}
        section3Title="Complete Cloud PBX Features"
        section3Subtitle="Everything you need for professional business communications"
        features={[
          {
            icon: <Bot className="w-6 h-6" />,
            title: "AI Virtual Receptionist",
            description: "Intelligent call handling that understands context, answers questions, and routes calls appropriately.",
          },
          {
            icon: <PhoneForwarded className="w-6 h-6" />,
            title: "Smart Call Routing",
            description: "Route calls based on time, caller ID, IVR selections, or AI-detected intent to the right team member.",
          },
          {
            icon: <Voicemail className="w-6 h-6" />,
            title: "Visual Voicemail",
            description: "Voicemail transcription with instant email and SMS notifications. Never check voicemail the old way again.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Business Hours",
            description: "Set custom schedules, holiday hours, and after-hours routing with different greetings and rules.",
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile App",
            description: "Take your business line anywhere with our iOS and Android apps. Call, text, and manage from your phone.",
          },
          {
            icon: <Settings className="w-6 h-6" />,
            title: "Easy Administration",
            description: "Web-based admin portal for managing users, numbers, routing rules, and analytics—no IT required.",
          },
        ]}
        benefitsTitle="Transform Your Phone System"
        benefitsSubtitle="Modern cloud communications with AI intelligence"
        benefits={[
          {
            title: "Never Miss Important Calls",
            description: "AI answers instantly, 24/7, ensuring every caller gets professional attention even outside business hours.",
          },
          {
            title: "Reduce Administrative Burden",
            description: "AI handles routine inquiries, appointment scheduling, and call routing, freeing your team for high-value work.",
          },
          {
            title: "Professional Image",
            description: "Sound like an enterprise with automated attendants, hold music, and polished call flows.",
          },
          {
            title: "No Hardware Investment",
            description: "100% cloud-based. Use existing devices or optional IP phones. Setup in minutes, not weeks.",
          },
        ]}
        useCasesTitle="Perfect For"
        useCases={[
          { title: "Small Businesses", description: "Get enterprise phone features without enterprise costs or complexity." },
          { title: "Medical Practices", description: "HIPAA-compliant with appointment reminders and after-hours triage routing." },
          { title: "Law Firms", description: "Professional call handling with detailed message transcription and call logging." },
          { title: "Real Estate", description: "Never miss a lead with AI that captures caller info and schedules showings." },
          { title: "Service Companies", description: "Route calls to field technicians and capture emergency requests 24/7." },
          { title: "Multi-Location", description: "Unified phone system across all locations with local numbers everywhere." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "What is an AI Receptionist?",
            answer: "An AI Receptionist is an intelligent virtual assistant that answers calls 24/7, understands what callers need through natural conversation, routes them to the right person or department, takes detailed messages, and can even handle common inquiries—all without human intervention.",
          },
          {
            question: "Do I need special hardware for Cloud PBX?",
            answer: "No special hardware required. MeraTalk Cloud PBX works with your existing devices—computers, smartphones, and tablets. You can optionally use IP desk phones if your team prefers physical phones.",
          },
          {
            question: "Can I keep my existing business phone numbers?",
            answer: "Absolutely. We support number porting from any carrier at no additional cost. The process typically takes 1-2 weeks and we handle all the paperwork.",
          },
          {
            question: "How does the AI handle complex inquiries?",
            answer: "For complex inquiries beyond the AI&apos;s training, it seamlessly transfers to a live team member while providing context. You can also customize the AI&apos;s knowledge base with your specific business information.",
          },
          {
            question: "What&apos;s the uptime guarantee?",
            answer: "MeraTalk guarantees 99.99% uptime backed by our SLA. Our infrastructure is distributed across multiple data centers for maximum reliability.",
          },
        ]}
        ctaTitle="Upgrade Your Business Phone Today"
        ctaDescription="Join thousands of businesses using MeraTalk&apos;s AI-powered phone system. Start your free 14-day trial."
      />
    </>
  )
}
