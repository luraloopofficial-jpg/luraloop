import './globals.css'
import Chatbot from '@/components/Chatbot'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import AuthProvider from '@/components/AuthProvider'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://luraloop.vercel.app'),
  title: {
    default: "LuraLoop | Enterprise AI Automation & White-Label Infrastructure",
    template: "%s | LuraLoop"
  },
  description: "Deploy role-specific AI employees, multi-agent infrastructure, and automated business workflows under a secure, white-label enterprise partner delivery model.",
  alternates: {
    canonical: "https://luraloop.vercel.app",
  },
  openGraph: {
    title: "LuraLoop | Enterprise AI Automation & White-Label Infrastructure",
    description: "Deploy role-specific AI employees, multi-agent infrastructure, and automated business workflows under a secure, white-label enterprise partner delivery model.",
    url: "https://luraloop.vercel.app",
    siteName: "LuraLoop",
    images: [{
      url: "https://luraloop.vercel.app/hero-bg.jpg",
      width: 1200,
      height: 630,
      alt: "LuraLoop Enterprise AI Automation",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuraLoop | Enterprise AI Automation & White-Label Infrastructure",
    description: "Deploy role-specific AI employees, multi-agent infrastructure, and automated business workflows.",
    images: ["https://luraloop.vercel.app/hero-bg.jpg"],
  },
  keywords: [
    "white-label AI automation",
    "enterprise AI infrastructure",
    "AI agent orchestration",
    "business process automation",
    "multi-agent AI systems",
    "AI for IT agencies India"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Advanced JSON-LD Structured Data Schema for AEO/GEO Optimization
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://luraloop.vercel.app/#organization",
        "name": "LuraLoop",
        "url": "https://luraloop.vercel.app",
        "logo": "https://luraloop.vercel.app/Logo.svg",
        "email": "official.luraloop@gmail.com",
        "description": "White-Label AI Agents and Operational Automation Infrastructure for Enterprise Partners.",
        "sameAs": [
          "https://x.com/LURALOOP",
          "https://github.com/luraloopofficial-jpg",
          "https://luraloop.gumroad.com/",
          "https://automationworkflows.io/seller/luraloop"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "official.luraloop@gmail.com",
          "availableLanguage": ["English", "Malayalam"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://luraloop.vercel.app/#website",
        "url": "https://luraloop.vercel.app",
        "name": "LuraLoop",
        "description": "Enterprise AI Automation & White-Label Infrastructure for Agencies and System Integrators.",
        "publisher": { "@id": "https://luraloop.vercel.app/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://luraloop.vercel.app/blog?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
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
        "description": "White-Label AI Agents and Operational Automation Infrastructure for Enterprise Partners.",
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
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.className} bg-[#030712] luxury-ambient-bg text-white antialiased overflow-x-hidden`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Chatbot />
          <SpeedInsights />
        </AuthProvider>
      </body>
    </html>
  )
}
