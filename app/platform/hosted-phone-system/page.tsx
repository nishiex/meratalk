import { Metadata } from "next"
import { Phone, Cloud, Users, Settings, Globe, Shield, Smartphone, Headphones } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "Hosted Phone System | Cloud PBX Without Hardware · MeraTalk",
  description: "Cloud-hosted PBX phone system. No hardware, no maintenance. Enterprise features for any size business. 99.99% uptime, FCC licensed.",
  openGraph: {
    title: "Hosted Phone System | Cloud PBX Without Hardware · MeraTalk",
    description: "Cloud-hosted PBX phone system. No hardware, no maintenance. Enterprise features for any size business.",
    url: "https://meratalk.com/platform/hosted-phone-system",
    type: "website",
    images: ["/images/platform/hosted-phone-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hosted Phone System | Cloud PBX Without Hardware · MeraTalk",
    description: "Cloud-hosted PBX phone system. No hardware, no maintenance.",
    images: ["/images/platform/hosted-phone-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/hosted-phone-system",
    languages: { "en-US": "https://meratalk.com/platform/hosted-phone-system" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk Hosted Phone System",
  description: "Cloud-hosted PBX phone system without hardware requirements.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "Hosted Phone System", item: "https://meratalk.com/platform/hosted-phone-system" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a hosted phone system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A hosted phone system runs in the cloud instead of on-premises hardware. All features, maintenance, and updates are handled by the provider, eliminating the need for expensive PBX equipment.",
      },
    },
  ],
}

export default function HostedPhoneSystemPage() {
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
        heroTitle={<><span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">Cloud PBX</span> Without the Hardware Headaches</>}
        heroDescription="Enterprise-grade phone system, delivered from the cloud. No PBX hardware to buy, install, or maintain. MeraTalk Hosted Phone System gives you every feature you need with none of the complexity."
        accentColor="#99f6e4"
        heroImage="/images/platform/hosted-phone-hero.jpg"
        heroImageAlt="MeraTalk Hosted Phone System"
        section2Title="Enterprise Features, Zero Hardware"
        section2Description="Traditional PBX systems require expensive hardware, dedicated IT staff, and constant maintenance. MeraTalk delivers the same powerful features from the cloud—setup in minutes, managed entirely by us."
        section2Image="/images/platform/hosted-phone-feature.jpg"
        section2ImageAlt="Cloud PBX administration dashboard"
        section2Features={[
          "No on-premises hardware required",
          "Automatic updates and maintenance",
          "Web-based administration portal",
          "Use existing devices or optional IP phones",
          "99.99% uptime SLA guarantee",
        ]}
        section3Title="Complete Phone System Features"
        section3Subtitle="Everything a modern business needs"
        features={[
          {
            icon: <Phone className="w-6 h-6" />,
            title: "Business Calling",
            description: "HD voice quality, call routing, transfer, hold, conference—all the essentials and more.",
          },
          {
            icon: <Cloud className="w-6 h-6" />,
            title: "100% Cloud-Based",
            description: "No hardware to install or maintain. We handle everything in our secure data centers.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Unlimited Extensions",
            description: "Add users instantly as you grow. No rewiring or hardware upgrades needed.",
          },
          {
            icon: <Settings className="w-6 h-6" />,
            title: "Easy Administration",
            description: "Web portal for managing users, call routing, voicemail, and settings—no IT needed.",
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Multi-Location",
            description: "Connect all your offices with one phone system. Local numbers everywhere.",
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Work Anywhere",
            description: "Desktop and mobile apps let your team take business calls from anywhere.",
          },
        ]}
        benefitsTitle="Why Go Hosted?"
        benefitsSubtitle="The smart choice for modern businesses"
        benefits={[
          {
            title: "Eliminate Capital Expense",
            description: "No PBX hardware to purchase. Convert CapEx to predictable monthly OpEx.",
          },
          {
            title: "Scale Instantly",
            description: "Add or remove users in minutes. No capacity planning or hardware upgrades.",
          },
          {
            title: "Always Up to Date",
            description: "New features and security updates delivered automatically—no IT projects.",
          },
          {
            title: "Business Continuity",
            description: "Calls continue even if your office loses power. Route to mobile or other locations.",
          },
        ]}
        useCasesTitle="Perfect for Every Business"
        useCases={[
          { title: "Small Business", description: "Enterprise features without enterprise costs or complexity." },
          { title: "Multi-Location", description: "One phone system connecting all offices with unified management." },
          { title: "Remote Teams", description: "Keep distributed teams connected as if they were in one office." },
          { title: "Growing Companies", description: "Scale from 5 to 500 users without changing systems." },
          { title: "Professional Services", description: "Project a professional image with automated attendants and routing." },
          { title: "Replacing Legacy PBX", description: "Migrate from aging hardware to modern cloud communications." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "What is a hosted phone system?",
            answer: "A hosted phone system (also called cloud PBX) runs in the provider&apos;s data centers instead of on-premises hardware. All features, maintenance, and updates are handled by the provider, eliminating expensive PBX equipment.",
          },
          {
            question: "Do I need special phones?",
            answer: "No. MeraTalk works with your existing computers and smartphones via our apps. You can optionally use IP desk phones if your team prefers physical phones.",
          },
          {
            question: "What happens if the internet goes down?",
            answer: "Calls can automatically route to mobile phones or alternate locations. Our mobile app also works over cellular data, ensuring you never miss calls.",
          },
          {
            question: "Can I keep my existing phone numbers?",
            answer: "Yes. We port your existing numbers at no cost. The process typically takes 1-2 weeks and we handle all paperwork.",
          },
          {
            question: "How quickly can we get started?",
            answer: "Most businesses are up and running same-day. Number porting takes longer, but you can use temporary numbers while waiting.",
          },
        ]}
        ctaTitle="Upgrade to Cloud PBX"
        ctaDescription="Join thousands of businesses that have eliminated PBX hardware. Start your free trial today."
      />
    </>
  )
}
