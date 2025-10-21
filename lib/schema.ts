import { Provider } from '../data/providers';

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': string;
    addressCountry: string;
    addressLocality: string;
  };
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
  };
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: string[];
  serviceType: string;
  offers: {
    '@type': string;
    price: string;
    priceCurrency: string;
    availability: string;
  }[];
}

export interface AggregateRatingSchema {
  '@context': string;
  '@type': string;
  itemReviewed: {
    '@type': string;
    name: string;
  };
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

export interface FAQSchema {
  '@context': string;
  '@type': string;
  mainEntity: {
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }[];
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ISP Azərbaycan',
    url: 'https://yourdomain.az',
    logo: 'https://yourdomain.az/images/logo.png',
    description: 'Azərbaycanın ən yaxşı internet provayderlərini müqayisə edin və ən uyğun seçimi edin',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AZ',
      addressLocality: 'Bakı',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+994-XX-XXX-XX-XX',
      contactType: 'customer service',
    },
  };
}

export function generateServiceSchema(provider: Provider): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${provider.name} Internet Xidməti`,
    description: provider.description,
    provider: {
      '@type': 'Organization',
      name: provider.name,
    },
    areaServed: provider.coverage,
    serviceType: 'Internet Service Provider',
    offers: provider.packages.map(pkg => ({
      '@type': 'Offer',
      price: pkg.price.toString(),
      priceCurrency: 'AZN',
      availability: 'https://schema.org/InStock',
    })),
  };
}

export function generateAggregateRatingSchema(provider: Provider): AggregateRatingSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'Service',
      name: `${provider.name} Internet Xidməti`,
    },
    ratingValue: provider.userRating,
    reviewCount: provider.totalReviews,
    bestRating: 5,
    worstRating: 1,
  };
}

export function generateFAQSchema(faqItems: { question: string; answer: string }[]): FAQSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
