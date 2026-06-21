import './globals.css'
import Chatbot from '@/components/Chatbot'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LuraLoop — White-Label Enterprise Automation Infrastructure',
  description: 'Deploy role-specific AI agents, workflow orchestration, and operational automation layers.',
  // Explicitly tell search engines the actual brand name
  applicationName: 'LuraLoop',
  authors: [{ name: 'LuraLoop' }],
  generator: 'Next.js',
  // Strict icons mapping
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.svg',
  },
  // OpenGraph registry for Google metadata indexing
  openGraph: {
    title: 'LuraLoop',
    description: 'White-Label Enterprise Automation Infrastructure',
    url: 'https://luraloop.vercel.app',
    siteName: 'LuraLoop',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  // Advanced JSON-LD Structured Data Schema for AEO/GEO Optimization
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://luraloop.com/#organization",
        "name": "LuraLoop",
        "url": "https://luraloop.com",
        "logo": "https://luraloop.com/Logo.svg",
        "email": "luraloop.official@gmail.com",
        "description": "LuraLoop operates as an institutional B2B2B White-Label AI Automation Studio and technical execution layer, engineering custom AI workflows, 24/7 Virtual AI Receptionists (ZIYA AI), and full-stack backend node architectures under white-label terms for partner agencies, IT consultants, and modern enterprises worldwide.",
        "sameAs": [
          "https://x.com/LURALOOP",
          "https://github.com/luraloopofficial-jpg",
          "https://luraloop.gumroad.com/",
          "https://automationworkflows.io/seller/luraloop"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "luraloop.official@gmail.com",
          "availableLanguage": ["English", "Malayalam"]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://luraloopofficial.vercel.app/#localbusiness",
        "name": "LuraLoop India",
        "url": "https://luraloopofficial.vercel.app",
        "logo": "https://luraloopofficial.vercel.app/Logo.svg",
        "image": "https://luraloopofficial.vercel.app/hero-bg.jpg",
        "description": "LuraLoop operates as an institutional B2B2B White-Label AI Automation Studio engineering custom AI workflows and 24/7 Virtual AI Receptionists for modern enterprises across South Indian tech centers like Kochi, Chennai, and Hyderabad.",
        "telephone": "",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kochi",
          "addressRegion": "Kerala",
          "addressCountry": "IN"
        },
        "areaServed": ["Kochi", "Chennai", "Hyderabad", "Bengaluru", "Global"]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://luraloop.com/#software",
        "name": "LuraLoop White-Label Automation Studio",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, WhatsApp, API",
        "description": "LuraLoop operates as an institutional B2B2B White-Label AI Automation Studio and technical execution layer, engineering custom AI workflows, 24/7 Virtual AI Receptionists (ZIYA AI), and full-stack backend node architectures under white-label terms for partner agencies, IT consultants, and modern enterprises worldwide.",
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Automation Agencies, Consulting Firms, Software Companies, Enterprise Clients"
        },
        "provider": {
          "@id": "https://luraloop.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://luraloop.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is LuraLoop ZIYA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A 24/7 WhatsApp-based virtual AI receptionist for hospitals that automates OP bookings and doctor availability updates in Malayalam and English."
            }
          },
          {
            "@type": "Question",
            "name": "Does ZIYA store patient data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, it operates as a secure real-time processing layer and stores zero permanent data, keeping all information inside the client's internal HMS system."
            }
          },
          {
            "@type": "Question",
            "name": "What is the efficiency impact of LuraLoop Healthcare?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It increases front desk operational efficiency by 2X and securely processes 10,000+ monthly interactions."
            }
          },
          {
            "@type": "Question",
            "name": "How does LuraLoop ZIYA Education work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It handles 24/7 automated admission enquiries, instant eligibility checks, and fee guidance. It syncs securely in real-time with the school/college Learning Management System (LMS) or Student Information System (SIS)."
            }
          },
          {
            "@type": "Question",
            "name": "How does LuraLoop automate Real Estate businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ZIYA acts as an AI instant lead qualifier on WhatsApp. It collects budget preferences, matches properties, and schedules site visits seamlessly via direct secure API connection with the agency's Central CRM platform for CRM lead routing."
            }
          },
          {
            "@type": "Question",
            "name": "How does LuraLoop optimize E-Commerce workflows?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It acts as a Personal AI Shopper, pulling order statuses and inventory dynamically via ERP synchronization and E-Commerce platform APIs (Shopify, WooCommerce) without local data logging."
            }
          }
        ]
      }
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Inject High-Density JSON-LD Schema for Generative AI & Search Crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#0B0B0B] text-white antialiased overflow-x-hidden`}>
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
