import { Metadata } from "next"
import { Video, Monitor, Users, Calendar, Lock, Mic, Layout, Cloud } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "HD Video Meetings | Crystal-Clear Video Conferencing · MeraTalk",
  description: "HD video meetings with screen sharing, recording & virtual backgrounds. Up to 200 participants. Integrated with your phone system. No extra apps.",
  openGraph: {
    title: "HD Video Meetings | Crystal-Clear Video Conferencing · MeraTalk",
    description: "HD video meetings with screen sharing, recording & virtual backgrounds. Up to 200 participants.",
    url: "https://meratalk.com/platform/video-meetings",
    type: "website",
    images: ["/images/platform/video-meetings-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "HD Video Meetings | Crystal-Clear Video Conferencing · MeraTalk",
    description: "HD video meetings with screen sharing, recording & virtual backgrounds.",
    images: ["/images/platform/video-meetings-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/video-meetings",
    languages: { "en-US": "https://meratalk.com/platform/video-meetings" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk HD Video Meetings",
  description: "Crystal-clear HD video conferencing with screen sharing and recording.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "Video Meetings", item: "https://meratalk.com/platform/video-meetings" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many participants can join a video meeting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MeraTalk video meetings support up to 200 participants with full HD video, screen sharing, and recording capabilities.",
      },
    },
  ],
}

export default function VideoMeetingsPage() {
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
        heroTitle={<>Crystal-Clear <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">Video Meetings</span>. Built Into Your Phone System.</>}
        heroDescription="Face-to-face collaboration without the complexity. MeraTalk HD Video brings meetings, screen sharing, and recording together with your phone system—no separate video app needed."
        accentColor="#bae6fd"
        heroImage="/images/platform/video-meetings-hero.jpg"
        heroImageAlt="MeraTalk HD Video Meetings"
        section2Title="Professional Video Conferencing Made Simple"
        section2Description="Start meetings with one click from your phone system, chat, or calendar. HD video, reliable connections, and all the features you need for productive meetings—whether you&apos;re in the office or working remotely."
        section2Image="/images/platform/video-meetings-feature.jpg"
        section2ImageAlt="Business video conference presentation"
        section2Features={[
          "HD video with automatic quality optimization",
          "Screen sharing with annotation tools",
          "Meeting recording with cloud storage",
          "Virtual backgrounds and noise cancellation",
          "Calendar integration for easy scheduling",
        ]}
        section3Title="Everything for Great Meetings"
        section3Subtitle="Professional video conferencing features built in"
        features={[
          {
            icon: <Video className="w-6 h-6" />,
            title: "HD Video",
            description: "Crystal-clear 1080p video with automatic bandwidth optimization for smooth calls anywhere.",
          },
          {
            icon: <Monitor className="w-6 h-6" />,
            title: "Screen Sharing",
            description: "Share your screen, specific apps, or whiteboard with annotation and remote control.",
          },
          {
            icon: <Cloud className="w-6 h-6" />,
            title: "Cloud Recording",
            description: "Record meetings to the cloud with automatic transcription and easy sharing.",
          },
          {
            icon: <Layout className="w-6 h-6" />,
            title: "Virtual Backgrounds",
            description: "Professional backgrounds and blur keep focus on you, not your surroundings.",
          },
          {
            icon: <Mic className="w-6 h-6" />,
            title: "Noise Cancellation",
            description: "AI-powered noise suppression eliminates background distractions automatically.",
          },
          {
            icon: <Calendar className="w-6 h-6" />,
            title: "Calendar Integration",
            description: "Schedule meetings from Outlook or Google Calendar with automatic join links.",
          },
        ]}
        benefitsTitle="Video That Just Works"
        benefitsSubtitle="Reliable, high-quality video without the hassle"
        benefits={[
          {
            title: "One Less Subscription",
            description: "Video meetings included with MeraTalk—no need for separate Zoom or Teams licenses.",
          },
          {
            title: "Seamless Integration",
            description: "Start video from a phone call, chat, or calendar—all within the same app.",
          },
          {
            title: "Join From Anywhere",
            description: "Browser-based guest access means external participants never need to download software.",
          },
          {
            title: "Enterprise Reliability",
            description: "Built on the same infrastructure that powers your phone system with 99.99% uptime.",
          },
        ]}
        useCasesTitle="Video for Every Scenario"
        useCases={[
          { title: "Team Meetings", description: "Regular standups, all-hands, and team syncs with full collaboration features." },
          { title: "Client Presentations", description: "Professional video calls with screen sharing for sales demos and proposals." },
          { title: "Remote Interviews", description: "Video interviews with recording for hiring team review." },
          { title: "Training Sessions", description: "Webinar-style training with Q&A and breakout rooms." },
          { title: "Customer Support", description: "Video support calls for complex issues that need visual assistance." },
          { title: "Quick Huddles", description: "Instant video calls from chat when messaging isn&apos;t enough." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "How many participants can join a video meeting?",
            answer: "MeraTalk video meetings support up to 200 participants with full HD video, screen sharing, and recording capabilities.",
          },
          {
            question: "Do guests need to download software?",
            answer: "No. External participants can join via web browser without downloading anything. Internal users get the best experience with our desktop and mobile apps.",
          },
          {
            question: "How long are meetings recorded for?",
            answer: "Cloud recordings are stored according to your plan (30 days to unlimited). Recordings can be downloaded for permanent storage.",
          },
          {
            question: "Is there a time limit on meetings?",
            answer: "No artificial time limits. Meet as long as you need—we don&apos;t cut you off at 40 minutes.",
          },
          {
            question: "Can I dial into video meetings by phone?",
            answer: "Yes! Every video meeting includes dial-in numbers so participants can join by phone if they prefer audio-only.",
          },
        ]}
        ctaTitle="Better Meetings Start Here"
        ctaDescription="Get HD video meetings included with your MeraTalk phone system. Start your free trial."
      />
    </>
  )
}
