import { Metadata } from "next"
import { MessagesSquare, Hash, Users, FileText, Search, Bell, Lock, Zap } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "Team Chat | Built-in Messaging for Teams · MeraTalk",
  description: "Internal team messaging with channels, direct messages & file sharing. Integrated with voice and video. Reduce email, boost collaboration.",
  openGraph: {
    title: "Team Chat | Built-in Messaging for Teams · MeraTalk",
    description: "Internal team messaging with channels, direct messages & file sharing. Integrated with voice and video.",
    url: "https://meratalk.com/platform/team-chat",
    type: "website",
    images: ["/images/platform/team-chat-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Chat | Built-in Messaging for Teams · MeraTalk",
    description: "Internal team messaging with channels, direct messages & file sharing.",
    images: ["/images/platform/team-chat-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/team-chat",
    languages: { "en-US": "https://meratalk.com/platform/team-chat" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk Team Chat",
  description: "Built-in team messaging platform with channels, DMs, and file sharing.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "Team Chat", item: "https://meratalk.com/platform/team-chat" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Team Chat included with MeraTalk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Team Chat is included with all MeraTalk plans at no additional cost, fully integrated with voice, video, and other communication features.",
      },
    },
  ],
}

export default function TeamChatPage() {
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
        heroTitle={<>Built-in <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">Team Chat</span>. One Less App to Manage.</>}
        heroDescription="Stop switching between tools. MeraTalk Team Chat brings messaging, file sharing, and collaboration together with your phone system—so your team stays connected without the clutter."
        accentColor="#a5f3fc"
        heroImage="/images/platform/team-chat-hero.jpg"
        heroImageAlt="MeraTalk Team Chat Platform"
        section2Title="Real-Time Collaboration Without the Complexity"
        section2Description="Channels for projects, direct messages for quick questions, and seamless integration with voice and video. MeraTalk Team Chat keeps conversations organized and accessible—without adding another subscription."
        section2Image="/images/platform/team-chat-feature.jpg"
        section2ImageAlt="Team collaboration via chat"
        section2Features={[
          "Channels for teams, projects, and topics",
          "Direct messages and group conversations",
          "File sharing with preview and search",
          "One-click escalation to voice or video",
          "Mobile and desktop apps included",
        ]}
        section3Title="Chat Features That Matter"
        section3Subtitle="Everything your team needs to communicate effectively"
        features={[
          {
            icon: <Hash className="w-6 h-6" />,
            title: "Channels",
            description: "Organize conversations by team, project, or topic. Keep discussions focused and searchable.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Direct Messages",
            description: "Quick 1:1 or group conversations for fast decisions and informal communication.",
          },
          {
            icon: <FileText className="w-6 h-6" />,
            title: "File Sharing",
            description: "Share documents, images, and files with inline preview and cloud storage integration.",
          },
          {
            icon: <Search className="w-6 h-6" />,
            title: "Search Everything",
            description: "Find any message, file, or conversation instantly with powerful search.",
          },
          {
            icon: <Bell className="w-6 h-6" />,
            title: "Smart Notifications",
            description: "Customizable alerts so you never miss important messages but aren&apos;t overwhelmed.",
          },
          {
            icon: <Lock className="w-6 h-6" />,
            title: "Enterprise Security",
            description: "End-to-end encryption, data retention policies, and compliance controls.",
          },
        ]}
        benefitsTitle="Why Unified Team Chat?"
        benefitsSubtitle="One platform for all team communication"
        benefits={[
          {
            title: "Fewer Tools to Manage",
            description: "Chat, voice, and video in one platform means less software sprawl and lower costs.",
          },
          {
            title: "Context at Your Fingertips",
            description: "See colleague availability, call them instantly, or schedule a meeting—all from chat.",
          },
          {
            title: "Nothing Falls Through Cracks",
            description: "Searchable history means decisions and context are always accessible.",
          },
          {
            title: "Work From Anywhere",
            description: "Desktop and mobile apps keep teams connected regardless of location.",
          },
        ]}
        useCasesTitle="Team Chat in Action"
        useCases={[
          { title: "Project Coordination", description: "Dedicated channels for each project keep stakeholders aligned." },
          { title: "Quick Questions", description: "Get answers in seconds instead of scheduling meetings or sending emails." },
          { title: "Remote Teams", description: "Stay connected with distributed teams across time zones." },
          { title: "Customer Escalations", description: "Internal chat helps agents collaborate on complex issues in real-time." },
          { title: "Announcements", description: "Company-wide or team channels for important updates everyone sees." },
          { title: "Social Connection", description: "Water cooler channels keep remote teams feeling connected." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "Is Team Chat included with MeraTalk?",
            answer: "Yes! Team Chat is included with all MeraTalk plans at no additional cost. It&apos;s fully integrated with voice, video, and other communication features.",
          },
          {
            question: "Can I use Team Chat on mobile?",
            answer: "Absolutely. The MeraTalk mobile app includes full Team Chat functionality, so you can stay connected from anywhere.",
          },
          {
            question: "How is Team Chat different from Slack or Teams?",
            answer: "MeraTalk Team Chat is built into your phone system. You can see colleague presence, call them with one click, or start a video meeting—all without switching apps.",
          },
          {
            question: "Is there a message history limit?",
            answer: "No limits on message history. All conversations are searchable and retained according to your organization&apos;s policies.",
          },
          {
            question: "Can external users join Team Chat?",
            answer: "Guest access allows you to invite clients, vendors, or partners to specific channels for collaboration.",
          },
        ]}
        ctaTitle="Simplify Team Communication"
        ctaDescription="Get Team Chat included with your MeraTalk phone system. Start your free trial today."
      />
    </>
  )
}
