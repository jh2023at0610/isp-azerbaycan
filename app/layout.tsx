import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ən yaxşı internet provayder 2025 - Azərbaycan ISP müqayisəsi',
  description: 'Azərbaycanın ən yaxşı internet provayderlərini müqayisə edin. KaTV, BirLink, CityNet və digər provayderlərin sürət, qiymət və xidmət reytinqi.',
  keywords: 'ən yaxşı internet provayder, ən sürətli provayder, internet provayderləri müqayisəsi, internet provayder reytinqi, Bakı internet provayderləri, ən sürətli internet',
  authors: [{ name: 'ISP Azərbaycan' }],
  creator: 'ISP Azərbaycan',
  publisher: 'ISP Azərbaycan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.az'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ən yaxşı internet provayder 2025 - Azərbaycan ISP müqayisəsi',
    description: 'Azərbaycanın ən yaxşı internet provayderlərini müqayisə edin. KaTV, BirLink, CityNet və digər provayderlərin sürət, qiymət və xidmət reytinqi.',
    url: 'https://yourdomain.az',
    siteName: 'ISP Azərbaycan',
    locale: 'az_AZ',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ISP Azərbaycan - Internet Provayderləri Müqayisəsi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ən yaxşı internet provayder 2025 - Azərbaycan ISP müqayisəsi',
    description: 'Azərbaycanın ən yaxşı internet provayderlərini müqayisə edin. KaTV, BirLink, CityNet və digər provayderlərin sürət, qiymət və xidmət reytinqi.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ISP Azərbaycan",
              "description": "Azərbaycanın ən yaxşı internet provayderlərini müqayisə edin",
              "url": "https://yourdomain.az",
              "logo": "https://yourdomain.az/logo.png",
              "sameAs": [
                "https://facebook.com/ispazerbaycan",
                "https://instagram.com/ispazerbaycan"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+994-XX-XXX-XX-XX",
                "contactType": "customer service",
                "areaServed": "AZ",
                "availableLanguage": "az"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ISP Azərbaycan",
              "url": "https://yourdomain.az",
              "description": "Azərbaycanın ən yaxşı internet provayderlərini müqayisə edin",
              "inLanguage": "az",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://yourdomain.az/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
