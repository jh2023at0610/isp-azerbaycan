import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  locale?: string;
  alternateLocales?: { locale: string; url: string }[];
}

export function generateMetadata(config: SEOConfig): Metadata {
  const currentYear = new Date().getFullYear();
  const title = config.title.includes(currentYear.toString()) 
    ? config.title 
    : `${config.title} ${currentYear}`;

  return {
    title,
    description: config.description,
    keywords: config.keywords,
    canonical: config.canonical,
    openGraph: {
      title,
      description: config.description,
      url: config.canonical,
      siteName: 'ISP Azərbaycan',
      locale: config.locale || 'az_AZ',
      type: 'website',
      images: config.ogImage ? [
        {
          url: config.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : undefined,
    },
    alternates: {
      canonical: config.canonical,
      languages: config.alternateLocales?.reduce((acc, alt) => {
        acc[alt.locale] = alt.url;
        return acc;
      }, {} as Record<string, string>),
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
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

export function generateHreflangTags(alternateLocales: { locale: string; url: string }[]) {
  return alternateLocales.map(({ locale, url }) => ({
    rel: 'alternate',
    hrefLang: locale,
    href: url,
  }));
}
