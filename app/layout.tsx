import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ISP Azərbaycan - İnternet Provayderləri Müqayisəsi',
  description: 'Azərbaycanda ən yaxşı internet provayderləri müqayisəsi. Sürətli, etibarlı və ucuz internet xidmətləri.',
  keywords: 'internet provayder, azərbaycan, internet sürəti, müqayisə, ISP',
  openGraph: {
    title: 'ISP Azərbaycan - İnternet Provayderləri Müqayisəsi',
    description: 'Azərbaycanda ən yaxşı internet provayderləri müqayisəsi',
    type: 'website',
    locale: 'az_AZ',
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZY7SDHCQV0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZY7SDHCQV0');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
