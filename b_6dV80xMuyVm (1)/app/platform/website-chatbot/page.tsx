import { Metadata } from "next"
import { Bot, MessageSquare, Clock, Zap, Users, Code, BarChart3, Globe } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "Website Chatbot | 24/7 Automated Site Replies · MeraTalk",
  description: "AI chatbot for your website. Capture leads, answer questions & support customers 24/7. No-code builder with seamless human handoff.",
  openGraph: {
    title: "Website Chatbot | 24/7 Automated Site Replies · MeraTalk",
    description: "AI chatbot for your website. Capture leads, answer questions & support customers 24/7.",
    url: "https://meratalk.com/platform/website-chatbot",
    type: "website",
    images: ["/images/platform/website-chatbot-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Chatbot | 24/7 Automated Site Replies · MeraTalk",
    description: "AI chatbot for your website. Capture leads, answer questions & support customers 24/7.",
    images: ["/images/platform/website-chatbot-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/website-chatbot",
    languages: { "en-US": "https://meratalk.com/platform/website-chatbot" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk Website Chatbot",
  description: "AI-powered website chatbot for 24/7 automated customer engagement and lead capture.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "Website Chatbot", item: "https://meratalk.com/platform/website-chatbot" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need coding skills to set up the chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No coding required. Our visual builder lets you create conversation flows with drag-and-drop. Just copy one line of code to your website and you're live.",
      },
    },
  ],
}

export default function WebsiteChatbotPage() {
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
        heroTitle={<>Your Website, Always On. <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">AI Chatbot</span> That Works 24/7.</>}
        heroDescription="Capture leads, answer questions, and support customers around the clock—without adding headcount. MeraTalk Website Chatbot engages visitors intelligently and hands off to humans when needed."
        accentColor="#f5d0fe"
        heroImage="/images/platform/website-chatbot-hero.jpg"
        heroImageAlt="MeraTalk Website Chatbot Interface"
        section2Title="Instant Engagement, Day and Night"
        section2Description="Most website visitors leave without engaging. MeraTalk Chatbot starts conversations, captures contact info, answers common questions, and routes complex inquiries to your team—all automatically."
        section2Image="/images/platform/website-chatbot-feature.jpg"
        section2ImageAlt="Chatbot conversation builder interface"
        section2Features={[
          "AI-powered conversations that feel natural",
          "Visual drag-and-drop flow builder",
          "Seamless handoff to live agents",
          "Lead capture and CRM integration",
          "Customizable appearance and behavior",
        ]}
        section3Title="Smart Chatbot Features"
        section3Subtitle="Engage visitors and capture opportunities"
        features={[
          {
            icon: <Bot className="w-6 h-6" />,
            title: "AI Conversations",
            description: "Natural language understanding handles questions beyond scripted flows intelligently.",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "No-Code Builder",
            description: "Visual drag-and-drop builder creates conversation flows without any coding.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Human Handoff",
            description: "Seamlessly route complex conversations to live agents with full context.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Availability",
            description: "Never miss a lead or support request—chatbot works while you sleep.",
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Easy Integration",
            description: "One line of code adds chatbot to any website. Works with WordPress, Shopify, and more.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Analytics",
            description: "Track conversations, conversion rates, and popular questions to optimize performance.",
          },
        ]}
        benefitsTitle="Why Add a Chatbot?"
        benefitsSubtitle="Convert more visitors into customers"
        benefits={[
          {
            title: "Capture More Leads",
            description: "Engage visitors who would otherwise leave. Chatbot captures contact info 24/7.",
          },
          {
            title: "Instant Responses",
            description: "Answer common questions immediately—no waiting for business hours.",
          },
          {
            title: "Reduce Support Volume",
            description: "Chatbot handles routine inquiries, freeing your team for complex issues.",
          },
          {
            title: "Qualify Leads",
            description: "Ask qualifying questions and route hot leads to sales automatically.",
          },
        ]}
        useCasesTitle="Chatbot Success Stories"
        useCases={[
          { title: "Lead Generation", description: "Capture visitor info and qualify leads before they leave your site." },
          { title: "Customer Support", description: "Answer FAQs instantly and escalate complex issues to agents." },
          { title: "Appointment Booking", description: "Let visitors schedule meetings directly through chat." },
          { title: "Product Recommendations", description: "Guide shoppers to the right products based on their needs." },
          { title: "Order Status", description: "Let customers check order status without contacting support." },
          { title: "After-Hours Coverage", description: "Capture leads and support requests when your team is offline." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "Do I need coding skills to set up the chatbot?",
            answer: "No coding required. Our visual builder lets you create conversation flows with drag-and-drop. Just copy one line of code to your website and you&apos;re live.",
          },
          {
            question: "Can the chatbot transfer to a live agent?",
            answer: "Yes! When conversations need human help, chatbot seamlessly transfers to available agents with full conversation history and context.",
          },
          {
            question: "Does it work with my website platform?",
            answer: "MeraTalk Chatbot works with any website—WordPress, Shopify, Squarespace, custom sites, and more. Just add one snippet of code.",
          },
          {
            question: "Can I customize the chatbot appearance?",
            answer: "Absolutely. Match your brand with custom colors, logos, greeting messages, and chat widget positioning.",
          },
          {
            question: "How does AI improve conversations?",
            answer: "AI understands natural language, so visitors can ask questions in their own words. The chatbot improves over time by learning from successful conversations.",
          },
        ]}
        ctaTitle="Put Your Website to Work 24/7"
        ctaDescription="Start capturing leads and supporting customers around the clock. Try MeraTalk Chatbot free."
      />
    </>
  )
}
