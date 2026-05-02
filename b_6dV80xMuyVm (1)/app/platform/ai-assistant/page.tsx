import { Metadata } from "next"
import { Sparkles, Brain, Mic, FileText, Zap, Clock, Shield, BarChart3 } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "AI Assistant | Copilot for Every Call · MeraTalk",
  description: "AI-powered call assistant with real-time transcription, smart suggestions & customer context. Boost agent productivity by 40% with AI copilot.",
  openGraph: {
    title: "AI Assistant | Copilot for Every Call · MeraTalk",
    description: "AI-powered call assistant with real-time transcription, smart suggestions & customer context. Boost agent productivity by 40%.",
    url: "https://meratalk.com/platform/ai-assistant",
    type: "website",
    images: ["/images/platform/ai-assistant-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Assistant | Copilot for Every Call · MeraTalk",
    description: "AI-powered call assistant with real-time transcription, smart suggestions & customer context.",
    images: ["/images/platform/ai-assistant-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/ai-assistant",
    languages: { "en-US": "https://meratalk.com/platform/ai-assistant" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk AI Assistant",
  description: "AI-powered copilot for customer calls with real-time assistance and insights.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "AI Assistant", item: "https://meratalk.com/platform/ai-assistant" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the AI Assistant help agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI Assistant provides real-time transcription, suggests relevant responses, surfaces customer history, and automates post-call tasks—letting agents focus on the conversation.",
      },
    },
  ],
}

export default function AIAssistantPage() {
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
        heroTitle={<>Your <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">AI Copilot</span> for Every Customer Conversation</>}
        heroDescription="Give every agent superpowers with AI that listens, transcribes, suggests responses, and automates follow-ups in real-time. MeraTalk AI Assistant helps your team deliver exceptional service, faster."
        accentColor="#ddd6fe"
        heroImage="/images/platform/ai-assistant-hero.jpg"
        heroImageAlt="MeraTalk AI Assistant Interface"
        section2Title="Real-Time Intelligence During Every Call"
        section2Description="MeraTalk AI Assistant works alongside your agents, providing instant transcription, surfacing relevant knowledge articles, suggesting responses, and capturing key information—all without interrupting the natural flow of conversation."
        section2Image="/images/platform/ai-assistant-feature.jpg"
        section2ImageAlt="AI-powered agent assistance dashboard"
        section2Features={[
          "Live call transcription with speaker identification",
          "AI-suggested responses based on conversation context",
          "Automatic customer history and context surfacing",
          "Real-time sentiment detection and alerts",
          "One-click post-call summaries and action items",
        ]}
        section3Title="AI That Actually Helps"
        section3Subtitle="Practical AI features that make an immediate impact"
        features={[
          {
            icon: <Mic className="w-6 h-6" />,
            title: "Live Transcription",
            description: "Real-time speech-to-text with 95%+ accuracy, speaker identification, and searchable call history.",
          },
          {
            icon: <Brain className="w-6 h-6" />,
            title: "Smart Suggestions",
            description: "AI analyzes the conversation and suggests relevant responses, knowledge articles, and next steps.",
          },
          {
            icon: <FileText className="w-6 h-6" />,
            title: "Auto Summaries",
            description: "Automatic call summaries with key points, action items, and customer sentiment—no manual notes needed.",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Instant Context",
            description: "Customer history, previous interactions, and relevant details appear automatically when calls connect.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "After-Call Automation",
            description: "AI handles CRM updates, follow-up scheduling, and task creation based on call content.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Performance Insights",
            description: "Track talk time, sentiment trends, and keyword frequency across all agent conversations.",
          },
        ]}
        benefitsTitle="Transform Agent Performance"
        benefitsSubtitle="Measurable improvements from day one"
        benefits={[
          {
            title: "40% Faster Resolution",
            description: "Agents find answers instantly with AI-surfaced knowledge and suggested responses.",
          },
          {
            title: "Eliminate Manual Notes",
            description: "AI captures and summarizes every call, letting agents focus fully on customers.",
          },
          {
            title: "Faster Onboarding",
            description: "New agents perform like veterans with AI guidance and real-time coaching.",
          },
          {
            title: "Consistent Quality",
            description: "AI ensures every agent follows best practices and compliance requirements.",
          },
        ]}
        useCasesTitle="AI Assistance Everywhere"
        useCases={[
          { title: "Customer Support", description: "Agents resolve issues faster with AI-surfaced solutions and customer history." },
          { title: "Sales Calls", description: "AI suggests talking points, handles objections, and captures commitments." },
          { title: "Technical Support", description: "Complex troubleshooting made easy with AI-retrieved documentation." },
          { title: "Collections", description: "Compliance-aware suggestions keep calls professional and effective." },
          { title: "Healthcare", description: "HIPAA-compliant AI assists with appointment scheduling and patient communication." },
          { title: "Financial Services", description: "Regulatory guidance and disclosure reminders built into every call." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "How does the AI Assistant help agents?",
            answer: "The AI Assistant provides real-time transcription, suggests relevant responses based on conversation context, automatically surfaces customer history and knowledge articles, detects sentiment, and handles post-call tasks like summaries and CRM updates.",
          },
          {
            question: "Is the AI transcription accurate?",
            answer: "MeraTalk AI achieves 95%+ transcription accuracy across various accents and industries. The AI continuously learns and improves from your specific terminology and use cases.",
          },
          {
            question: "Does it work with my existing systems?",
            answer: "Yes! AI Assistant integrates with popular CRMs (Salesforce, HubSpot, Zendesk), knowledge bases, and helpdesks. Custom integrations are available via API.",
          },
          {
            question: "Is the data secure?",
            answer: "All transcriptions and AI processing are encrypted and SOC 2 compliant. Data is never used to train public models. HIPAA-compliant options are available.",
          },
          {
            question: "How quickly can we get started?",
            answer: "AI Assistant activates instantly on your MeraTalk account. No special hardware or lengthy setup required—just enable it and start benefiting immediately.",
          },
        ]}
        ctaTitle="Give Your Team AI Superpowers"
        ctaDescription="See how AI Assistant transforms customer conversations. Start your free trial today."
      />
    </>
  )
}
