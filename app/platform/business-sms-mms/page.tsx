import { Metadata } from "next"
import { MessageSquare, Image, Users, Zap, Shield, BarChart3, Clock, CheckCircle } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "Business SMS & MMS | Text from Your Business Number · MeraTalk",
  description: "Two-way SMS & MMS from your business number. 98% open rates, TCPA compliant, 10DLC registered. Text customers at scale with automation.",
  openGraph: {
    title: "Business SMS & MMS | Text from Your Business Number · MeraTalk",
    description: "Two-way SMS & MMS from your business number. 98% open rates, TCPA compliant, 10DLC registered.",
    url: "https://meratalk.com/platform/business-sms-mms",
    type: "website",
    images: ["/images/platform/business-sms-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business SMS & MMS | Text from Your Business Number · MeraTalk",
    description: "Two-way SMS & MMS from your business number. 98% open rates, TCPA compliant.",
    images: ["/images/platform/business-sms-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/business-sms-mms",
    languages: { "en-US": "https://meratalk.com/platform/business-sms-mms" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk Business SMS & MMS",
  description: "Two-way business text messaging with SMS and MMS capabilities.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "Business SMS & MMS", item: "https://meratalk.com/platform/business-sms-mms" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I text from my existing business phone number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! MeraTalk enables SMS and MMS on your existing business numbers, including local, toll-free, and ported numbers.",
      },
    },
  ],
}

export default function BusinessSMSMMSPage() {
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
        heroTitle={<>Text Customers From Your <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">Business Number</span>. Instant, Personal, Effective.</>}
        heroDescription="Reach customers where they actually read messages. MeraTalk Business SMS delivers 98% open rates with two-way conversations, automation, and full compliance built in."
        accentColor="#bbf7d0"
        heroImage="/images/platform/business-sms-hero.jpg"
        heroImageAlt="MeraTalk Business SMS & MMS Platform"
        section2Title="Two-Way Conversations That Drive Results"
        section2Description="Stop sending one-way blasts. MeraTalk enables real conversations with customers via text—from appointment confirmations to support inquiries to sales follow-ups. All from your business number."
        section2Image="/images/platform/business-sms-feature.jpg"
        section2ImageAlt="SMS campaign analytics and conversations"
        section2Features={[
          "Text-enable your existing business numbers",
          "Two-way conversations with full threading",
          "MMS support for images, videos, and files",
          "Templates and scheduled messaging",
          "TCPA compliant with 10DLC registration",
        ]}
        section3Title="Everything You Need for Business Texting"
        section3Subtitle="Powerful features for effective customer communication"
        features={[
          {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Two-Way SMS",
            description: "Real conversations with customers. They reply, you respond—all tracked in one unified inbox.",
          },
          {
            icon: <Image className="w-6 h-6" />,
            title: "MMS Rich Media",
            description: "Send images, videos, PDFs, and more. Perfect for product photos, receipts, and documents.",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Automation",
            description: "Trigger texts based on events, schedules, or customer actions. Drip campaigns made easy.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Team Inbox",
            description: "Multiple team members can manage conversations with assignments, notes, and internal chat.",
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Full Compliance",
            description: "TCPA compliant with 10DLC registration, opt-out handling, and quiet hours enforcement.",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Analytics",
            description: "Track delivery rates, response times, and campaign performance in real-time.",
          },
        ]}
        benefitsTitle="Why SMS Works for Business"
        benefitsSubtitle="The numbers speak for themselves"
        benefits={[
          {
            title: "98% Open Rate",
            description: "Text messages are read almost immediately—far outperforming email.",
          },
          {
            title: "45% Response Rate",
            description: "Customers actually respond to texts, enabling real two-way communication.",
          },
          {
            title: "3x Higher Engagement",
            description: "SMS campaigns drive significantly more action than other channels.",
          },
          {
            title: "Instant Delivery",
            description: "Messages arrive in seconds, perfect for time-sensitive communications.",
          },
        ]}
        useCasesTitle="Texting That Works"
        useCases={[
          { title: "Appointment Reminders", description: "Reduce no-shows by 30% with automated SMS reminders and confirmations." },
          { title: "Order Updates", description: "Keep customers informed with shipping notifications and delivery alerts." },
          { title: "Customer Support", description: "Resolve issues quickly via text—customers prefer it to waiting on hold." },
          { title: "Sales Follow-Up", description: "Reach prospects faster with personalized text outreach." },
          { title: "Promotions", description: "Drive traffic with time-sensitive offers that get read immediately." },
          { title: "Reviews & Feedback", description: "Request reviews via text when customers are most engaged." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "Can I text from my existing business phone number?",
            answer: "Yes! MeraTalk can text-enable your existing business numbers, including local numbers, toll-free numbers, and numbers you port to our platform.",
          },
          {
            question: "What is 10DLC and do I need it?",
            answer: "10DLC (10-digit long code) is a carrier-mandated registration for business SMS. MeraTalk handles the registration process and ensures your messages are delivered reliably.",
          },
          {
            question: "How do I stay TCPA compliant?",
            answer: "MeraTalk includes built-in compliance features: opt-in/opt-out tracking, quiet hours enforcement, consent management, and audit trails. We help you text responsibly.",
          },
          {
            question: "What&apos;s the difference between SMS and MMS?",
            answer: "SMS is text-only (160 characters). MMS supports images, videos, audio, and longer messages. Both are included with MeraTalk.",
          },
          {
            question: "Can I automate text messages?",
            answer: "Absolutely. Set up automated texts based on triggers (new signup, appointment booked, purchase completed) or schedules (weekly reminders, birthday messages).",
          },
        ]}
        ctaTitle="Start Texting Customers Today"
        ctaDescription="Join thousands of businesses using MeraTalk SMS to reach customers instantly. Start your free trial."
      />
    </>
  )
}
