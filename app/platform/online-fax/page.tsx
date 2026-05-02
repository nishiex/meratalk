import { Metadata } from "next"
import { Send, FileText, Shield, Cloud, Smartphone, Clock, CheckCircle, Mail } from "lucide-react"
import { PlatformPageTemplate } from "@/components/meratalk/platform-page-template"

export const metadata: Metadata = {
  title: "Online Fax | Send & Receive Faxes Digitally · MeraTalk",
  description: "Digital faxing without fax machines. HIPAA compliant, secure cloud fax. Send from email, app, or web. Keep your fax number or get a new one.",
  openGraph: {
    title: "Online Fax | Send & Receive Faxes Digitally · MeraTalk",
    description: "Digital faxing without fax machines. HIPAA compliant, secure cloud fax. Send from email, app, or web.",
    url: "https://meratalk.com/platform/online-fax",
    type: "website",
    images: ["/images/platform/online-fax-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Fax | Send & Receive Faxes Digitally · MeraTalk",
    description: "Digital faxing without fax machines. HIPAA compliant, secure cloud fax.",
    images: ["/images/platform/online-fax-hero.jpg"],
  },
  alternates: {
    canonical: "https://meratalk.com/platform/online-fax",
    languages: { "en-US": "https://meratalk.com/platform/online-fax" },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MeraTalk Online Fax",
  description: "Digital faxing solution for sending and receiving faxes without physical fax machines.",
  brand: { "@type": "Organization", name: "MeraTalk" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meratalk.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://meratalk.com/platform" },
    { "@type": "ListItem", position: 3, name: "Online Fax", item: "https://meratalk.com/platform/online-fax" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is online fax HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MeraTalk Online Fax is fully HIPAA compliant with encryption, audit trails, and BAA agreements available for healthcare organizations.",
      },
    },
  ],
}

export default function OnlineFaxPage() {
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
        heroTitle={<>Fax Without the Fax Machine. <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">Send & Receive Digitally</span>.</>}
        heroDescription="Many industries still require fax. MeraTalk Online Fax lets you send and receive faxes from your computer, phone, or email—no hardware required. HIPAA compliant and fully integrated."
        accentColor="#fde68a"
        heroImage="/images/platform/online-fax-hero.jpg"
        heroImageAlt="MeraTalk Online Fax Platform"
        section2Title="Modern Faxing for Modern Business"
        section2Description="Healthcare, legal, and financial organizations rely on fax for compliance. MeraTalk makes it simple—send faxes from email, receive them as PDFs, and store everything securely in the cloud."
        section2Image="/images/platform/online-fax-feature.jpg"
        section2ImageAlt="Healthcare professional using digital fax"
        section2Features={[
          "Send faxes from email, web, or mobile app",
          "Receive faxes as PDF to your inbox",
          "HIPAA compliant with full encryption",
          "Keep your existing fax number",
          "Cloud storage with unlimited retention",
        ]}
        section3Title="Complete Digital Fax Solution"
        section3Subtitle="Everything you need to go paperless"
        features={[
          {
            icon: <Mail className="w-6 h-6" />,
            title: "Email-to-Fax",
            description: "Send faxes by emailing attachments to your fax number. It&apos;s that simple.",
          },
          {
            icon: <FileText className="w-6 h-6" />,
            title: "Fax-to-Email",
            description: "Incoming faxes arrive as PDFs in your email inbox, organized and searchable.",
          },
          {
            icon: <Cloud className="w-6 h-6" />,
            title: "Cloud Storage",
            description: "All faxes stored securely in the cloud with unlimited retention and easy retrieval.",
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "HIPAA Compliant",
            description: "Full encryption, audit trails, and BAA agreements for healthcare compliance.",
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile Faxing",
            description: "Send and receive faxes from the MeraTalk mobile app, anywhere.",
          },
          {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Delivery Confirmation",
            description: "Automatic confirmations and detailed transmission reports for every fax.",
          },
        ]}
        benefitsTitle="Why Go Digital?"
        benefitsSubtitle="Eliminate the hassle of traditional fax machines"
        benefits={[
          {
            title: "No More Hardware",
            description: "Eliminate fax machines, dedicated phone lines, paper, and toner costs.",
          },
          {
            title: "Fax From Anywhere",
            description: "Send and receive faxes from your laptop, phone, or any device with internet.",
          },
          {
            title: "Never Lose a Fax",
            description: "Cloud storage means faxes are searchable and retrievable forever.",
          },
          {
            title: "Stay Compliant",
            description: "HIPAA, SOC 2, and industry-specific compliance built in.",
          },
        ]}
        useCasesTitle="Industries That Trust Digital Fax"
        useCases={[
          { title: "Healthcare", description: "HIPAA-compliant faxing for patient records, prescriptions, and referrals." },
          { title: "Legal", description: "Secure transmission of contracts, court documents, and signed agreements." },
          { title: "Finance", description: "Compliant faxing for loan documents, applications, and account forms." },
          { title: "Insurance", description: "Claims processing, policy documents, and customer communications." },
          { title: "Real Estate", description: "Contracts, disclosures, and closing documents sent and received digitally." },
          { title: "Government", description: "Secure document transmission meeting government compliance requirements." },
        ]}
        faqTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "Is online fax HIPAA compliant?",
            answer: "Yes. MeraTalk Online Fax is fully HIPAA compliant with TLS encryption, secure storage, complete audit trails, and Business Associate Agreements (BAA) available for healthcare organizations.",
          },
          {
            question: "Can I keep my existing fax number?",
            answer: "Absolutely. We can port your existing fax number to MeraTalk. You can also get a new local or toll-free fax number.",
          },
          {
            question: "How do I send a fax?",
            answer: "Three ways: email your document to the recipient&apos;s fax number, use our web portal, or send from the MeraTalk mobile app. All methods are equally secure.",
          },
          {
            question: "What file formats can I fax?",
            answer: "PDF, Word, Excel, images (PNG, JPG), and more. We automatically convert documents to fax format.",
          },
          {
            question: "How long are faxes stored?",
            answer: "Faxes are stored indefinitely in your cloud account. You can download, share, or delete them anytime. Custom retention policies are available for compliance requirements.",
          },
        ]}
        ctaTitle="Upgrade to Digital Fax"
        ctaDescription="Join thousands of organizations that have eliminated fax machines. Start your free trial today."
      />
    </>
  )
}
