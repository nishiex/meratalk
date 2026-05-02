import { Metadata } from "next"
import { Heart, Target, Workflow, BarChart3, Users, Mail, MessageSquare, Zap } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "Customer Engagement Platform | Campaigns & Journeys · MeraTalk",
  description: "Drive customer loyalty with automated campaigns, journey mapping & omnichannel engagement. Personalized outreach at scale with 99.99% delivery.",
  openGraph: {
    title: "Customer Engagement Platform | Campaigns & Journeys · MeraTalk",
    description: "Drive customer loyalty with automated campaigns, journey mapping & omnichannel engagement. Personalized outreach at scale.",
    url: "https://meratalk.com/platform/customer-engagement",
    type: "website",
    images: ["/images/platform/customer-engagement-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Engagement Platform | Campaigns & Journeys · MeraTalk",
    description: "Drive customer loyalty with automated campaigns, journey mapping & omnichannel engagement.",
    images: ["/images/platform/customer-engagement-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/customer-engagement",
    languages: { "en-US": "https://meratalk.com/platform/customer-engagement" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk Customer Engagement",
  description: "Customer engagement platform for automated campaigns and customer journey orchestration.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "Customer Engagement", item: "https://meratalk.com/platform/customer-engagement" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What channels does MeraTalk Customer Engagement support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MeraTalk supports SMS, MMS, voice calls, email, and chat—all from a unified platform with consistent customer profiles across channels.",
      },
    },
  ],
}

export default function CustomerEngagementPage() {
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
        heroTitle={<>Campaigns & Journeys That Build Lasting <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">Customer Relationships</span></>}
        heroDescription="Create personalized customer experiences across every touchpoint. MeraTalk Customer Engagement helps you design, automate, and optimize campaigns that drive loyalty and revenue."
        accentColor="#fbcfe8"
        heroImage="/images/platform/customer-engagement-hero.jpg"
        heroImageAlt="MeraTalk Customer Engagement Dashboard"
        section2Title="Orchestrate the Complete Customer Journey"
        section2Description="From first contact to loyal advocate, every customer interaction matters. MeraTalk helps you map, automate, and personalize every step of the journey across voice, SMS, email, and chat channels."
        section2Image="/images/platform/customer-engagement-feature.jpg"
        section2ImageAlt="Customer journey mapping and campaign analytics"
        section2Features={[
          "Visual journey builder with drag-and-drop",
          "Behavior-triggered campaigns and automations",
          "Omnichannel outreach—SMS, voice, email, chat",
          "Real-time analytics and A/B testing",
          "Personalization at scale with customer data",
        ]}
        section3Title="Powerful Engagement Tools"
        section3Subtitle="Everything you need to connect with customers at the right moment"
        features={[
          {
            icon: <Workflow className="w-6 h-6" />,
            title: "Journey Orchestration",
            description: "Design multi-step customer journeys with visual workflows. Trigger actions based on behavior, time, or events.",
          },
          {
            icon: <Target className="w-6 h-6" />,
            title: "Smart Segmentation",
            description: "Create dynamic segments based on behavior, demographics, and engagement history for targeted campaigns.",
          },
          {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "SMS Campaigns",
            description: "High-deliverability SMS and MMS campaigns with templates, scheduling, and compliance built-in.",
          },
          {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Marketing",
            description: "Beautiful email campaigns with drag-and-drop builder, personalization tokens, and detailed analytics.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Campaign Analytics",
            description: "Track opens, clicks, conversions, and revenue attribution across all channels in real-time.",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Automation Triggers",
            description: "Set up event-based automations for welcome series, re-engagement, cart recovery, and more.",
          },
        ]}
        benefitsTitle="Drive Business Results"
        benefitsSubtitle="Turn engagement into measurable outcomes"
        benefits={[
          {
            title: "Increase Customer Lifetime Value",
            description: "Personalized journeys keep customers engaged and coming back for repeat business.",
          },
          {
            title: "Reduce Churn",
            description: "Proactive engagement and win-back campaigns catch at-risk customers before they leave.",
          },
          {
            title: "Scale Personal Touch",
            description: "Automation lets you deliver personalized experiences to thousands without manual effort.",
          },
          {
            title: "Measure Everything",
            description: "Full attribution tracking shows exactly which campaigns drive revenue and ROI.",
          },
        ]}
        useCasesTitle="Engagement That Works"
        useCases={[
          { title: "Onboarding Journeys", description: "Welcome new customers with automated multi-touch sequences that drive activation." },
          { title: "Appointment Reminders", description: "Reduce no-shows with SMS and voice reminders with confirmation options." },
          { title: "Re-engagement Campaigns", description: "Win back inactive customers with personalized offers and content." },
          { title: "Loyalty Programs", description: "Reward your best customers and encourage referrals with automated campaigns." },
          { title: "Feedback Collection", description: "Gather NPS scores and reviews at key moments in the customer journey." },
          { title: "Promotional Campaigns", description: "Launch targeted promotions with SMS, email, and voice for maximum reach." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "What channels does MeraTalk Customer Engagement support?",
            answer: "MeraTalk supports SMS, MMS, voice calls, email, and web chat—all from a unified platform. Customer profiles and engagement history are consistent across all channels.",
          },
          {
            question: "How do I ensure SMS compliance?",
            answer: "MeraTalk has built-in compliance features including opt-in/opt-out management, TCPA compliance, quiet hours enforcement, and 10DLC registration assistance.",
          },
          {
            question: "Can I integrate with my CRM?",
            answer: "Yes! MeraTalk integrates with Salesforce, HubSpot, Zoho, and many other CRMs. We also offer APIs and webhooks for custom integrations.",
          },
          {
            question: "How is campaign success measured?",
            answer: "Track delivery rates, opens, clicks, conversions, and revenue attribution. Our analytics dashboard shows real-time performance and campaign comparisons.",
          },
          {
            question: "Is there a limit on contacts or campaigns?",
            answer: "Plans scale with your needs. Enterprise plans include unlimited contacts and campaigns. We&apos;ll help you find the right plan for your volume.",
          },
        ]}
        ctaTitle="Start Engaging Customers Today"
        ctaDescription="Build campaigns that drive results. Try MeraTalk Customer Engagement free for 14 days."
      />
    </>
  )
}
