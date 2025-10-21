export interface Provider {
  id: string;
  name: string;
  description: string;
  coverage: string[];
  packages: Package[];
  pros: string[];
  cons: string[];
  website: string;
  logo: string;
  ourRating: number;
  userRating: number;
  totalReviews: number;
  speedTiers: string[];
  priceRange: {
    min: number;
    max: number;
  };
  established: number;
  technology: string[];
}

export interface Package {
  name: string;
  speed: string;
  price: number;
  features: string[];
}

export const providers: Provider[] = [
  {
    id: 'katv',
    name: 'KaTV',
    description: 'Azərbaycanın aparıcı internet provayderlərindən biri. Yüksək sürətli və etibarlı xidmət.',
    coverage: ['Bakı', 'Sumqayıt', 'Gəncə', 'Mingəçevir'],
    packages: [
      {
        name: 'Başlanğıc',
        speed: '50 Mbps',
        price: 25,
        features: ['Sürətli internet', '24/7 dəstək', 'WiFi router']
      },
      {
        name: 'Standart',
        speed: '100 Mbps',
        price: 40,
        features: ['Yüksək sürət', '24/7 dəstək', 'WiFi router', 'Statik IP']
      },
      {
        name: 'Premium',
        speed: '200 Mbps',
        price: 65,
        features: ['Maksimum sürət', '24/7 dəstək', 'WiFi router', 'Statik IP', 'Prioritet dəstək']
      }
    ],
    pros: [
      'Yüksək sürətli internet',
      'Etibarlı xidmət',
      'Yaxşı müştəri dəstəyi',
      'Geniş paket seçimi'
    ],
    cons: [
      'Məhdud ərazi örtüyü',
      'Yüksək qiymətlər'
    ],
    website: 'https://katv.az',
    logo: '/images/katv-logo.png',
    ourRating: 4.5,
    userRating: 4.3,
    totalReviews: 1247,
    speedTiers: ['50 Mbps', '100 Mbps', '200 Mbps'],
    priceRange: { min: 25, max: 65 },
    established: 2010,
    technology: ['Fiber', 'ADSL', 'WiFi']
  },
  {
    id: 'birlink',
    name: 'BirLink',
    description: 'Yüksək sürətli internet xidmətləri və müasir texnologiyalar.',
    coverage: ['Bakı', 'Sumqayıt', 'Gəncə', 'Lənkəran'],
    packages: [
      {
        name: 'Ev',
        speed: '60 Mbps',
        price: 30,
        features: ['Sürətli internet', 'WiFi router', 'Mobil tətbiq']
      },
      {
        name: 'Biznes',
        speed: '150 Mbps',
        price: 55,
        features: ['Yüksək sürət', 'WiFi router', 'Statik IP', 'Biznes dəstək']
      },
      {
        name: 'Korporativ',
        speed: '300 Mbps',
        price: 90,
        features: ['Maksimum sürət', 'Statik IP', 'Prioritet dəstək', 'SLA']
      }
    ],
    pros: [
      'Çox yüksək sürət',
      'Müasir texnologiyalar',
      'Yaxşı qiymət-sürət nisbəti',
      'Geniş ərazi örtüyü'
    ],
    cons: [
      'Bəzi ərazilərdə məhdudiyyətlər',
      'Mürəkkəb qurulum'
    ],
    website: 'https://birlink.az',
    logo: '/images/birlink-logo.png',
    ourRating: 4.7,
    userRating: 4.4,
    totalReviews: 892,
    speedTiers: ['60 Mbps', '150 Mbps', '300 Mbps'],
    priceRange: { min: 30, max: 90 },
    established: 2012,
    technology: ['Fiber', 'WiFi', '4G']
  },
  {
    id: 'citynet',
    name: 'CityNet',
    description: 'Şəhər əhatə dairəsi geniş internet provayderi. Sabit və sürətli xidmət.',
    coverage: ['Bakı', 'Sumqayıt', 'Gəncə', 'Mingəçevir', 'Şəki'],
    packages: [
      {
        name: 'Şəhər',
        speed: '40 Mbps',
        price: 22,
        features: ['Sürətli internet', 'WiFi router', 'Texniki dəstək']
      },
      {
        name: 'Şəhər Plus',
        speed: '80 Mbps',
        price: 35,
        features: ['Yüksək sürət', 'WiFi router', 'Statik IP', 'Texniki dəstək']
      },
      {
        name: 'Şəhər Pro',
        speed: '160 Mbps',
        price: 50,
        features: ['Maksimum sürət', 'WiFi router', 'Statik IP', 'Prioritet dəstək']
      }
    ],
    pros: [
      'Geniş şəhər örtüyü',
      'Sabit xidmət',
      'Ucuz qiymətlər',
      'Yaxşı müştəri dəstəyi'
    ],
    cons: [
      'Məhdud maksimum sürət',
      'Köhnə texnologiyalar'
    ],
    website: 'https://citynet.az',
    logo: '/images/citynet-logo.png',
    ourRating: 4.2,
    userRating: 4.1,
    totalReviews: 1563,
    speedTiers: ['40 Mbps', '80 Mbps', '160 Mbps'],
    priceRange: { min: 22, max: 50 },
    established: 2008,
    technology: ['ADSL', 'Fiber', 'WiFi']
  },
  {
    id: 'aztelekom',
    name: 'AzTelekom',
    description: 'Dövlət internet provayderi. Bütün Azərbaycan ərazisində xidmət.',
    coverage: ['Bakı', 'Sumqayıt', 'Gəncə', 'Mingəçevir', 'Lənkəran', 'Şəki', 'Quba', 'Xaçmaz'],
    packages: [
      {
        name: 'Dövlət',
        speed: '30 Mbps',
        price: 18,
        features: ['Əsas internet', 'WiFi router', 'Dövlət dəstəyi']
      },
      {
        name: 'Dövlət Plus',
        speed: '60 Mbps',
        price: 28,
        features: ['Sürətli internet', 'WiFi router', 'Statik IP', 'Dövlət dəstəyi']
      },
      {
        name: 'Dövlət Pro',
        speed: '120 Mbps',
        price: 45,
        features: ['Yüksək sürət', 'WiFi router', 'Statik IP', 'Prioritet dəstək']
      }
    ],
    pros: [
      'Bütün ölkə ərazisində xidmət',
      'Dövlət dəstəyi',
      'Ucuz qiymətlər',
      'Etibarlı infrastruktur'
    ],
    cons: [
      'Aşağı sürət',
      'Yavaş texniki dəstək',
      'Məhdud paket seçimi'
    ],
    website: 'https://aztelekom.az',
    logo: '/images/aztelekom-logo.png',
    ourRating: 3.8,
    userRating: 3.6,
    totalReviews: 2341,
    speedTiers: ['30 Mbps', '60 Mbps', '120 Mbps'],
    priceRange: { min: 18, max: 45 },
    established: 1992,
    technology: ['ADSL', 'Fiber', 'WiFi']
  },
  {
    id: 'azeronline',
    name: 'AzerOnline',
    description: 'Müasir texnologiyalı internet xidmətləri və innovativ həllər.',
    coverage: ['Bakı', 'Sumqayıt', 'Gəncə', 'Mingəçevir'],
    packages: [
      {
        name: 'Online',
        speed: '70 Mbps',
        price: 32,
        features: ['Sürətli internet', 'WiFi router', 'Mobil tətbiq', 'Online dəstək']
      },
      {
        name: 'Online Plus',
        speed: '140 Mbps',
        price: 48,
        features: ['Yüksək sürət', 'WiFi router', 'Statik IP', 'Online dəstək']
      },
      {
        name: 'Online Pro',
        speed: '250 Mbps',
        price: 75,
        features: ['Maksimum sürət', 'WiFi router', 'Statik IP', 'Prioritet dəstək']
      }
    ],
    pros: [
      'Müasir texnologiyalar',
      'Yaxşı sürət',
      'Online dəstək',
      'Mobil tətbiq'
    ],
    cons: [
      'Məhdud ərazi örtüyü',
      'Yüksək qiymətlər',
      'Yeni şirkət'
    ],
    website: 'https://azeronline.az',
    logo: '/images/azeronline-logo.png',
    ourRating: 4.3,
    userRating: 4.2,
    totalReviews: 567,
    speedTiers: ['70 Mbps', '140 Mbps', '250 Mbps'],
    priceRange: { min: 32, max: 75 },
    established: 2018,
    technology: ['Fiber', 'WiFi', '5G']
  },
  {
    id: 'connect',
    name: 'Connect',
    description: 'Sürətli və etibarlı internet. Sadə və aydın paketlər.',
    coverage: ['Bakı', 'Sumqayıt', 'Gəncə'],
    packages: [
      {
        name: 'Connect',
        speed: '45 Mbps',
        price: 26,
        features: ['Sürətli internet', 'WiFi router', 'Texniki dəstək']
      },
      {
        name: 'Connect Plus',
        speed: '90 Mbps',
        price: 38,
        features: ['Yüksək sürət', 'WiFi router', 'Statik IP', 'Texniki dəstək']
      },
      {
        name: 'Connect Pro',
        speed: '180 Mbps',
        price: 58,
        features: ['Maksimum sürət', 'WiFi router', 'Statik IP', 'Prioritet dəstək']
      }
    ],
    pros: [
      'Sadə paketlər',
      'Yaxşı qiymət-sürət nisbəti',
      'Etibarlı xidmət',
      'Sürətli qurulum'
    ],
    cons: [
      'Məhdud ərazi örtüyü',
      'Məhdud paket seçimi',
      'Köhnə texnologiyalar'
    ],
    website: 'https://connect.az',
    logo: '/images/connect-logo.png',
    ourRating: 4.0,
    userRating: 3.9,
    totalReviews: 743,
    speedTiers: ['45 Mbps', '90 Mbps', '180 Mbps'],
    priceRange: { min: 26, max: 58 },
    established: 2015,
    technology: ['ADSL', 'Fiber', 'WiFi']
  }
];

export const ratingWeights = {
  speed: 0.4,
  price: 0.3,
  coverage: 0.2,
  support: 0.1
};

export function calculateOverallRating(provider: Provider): number {
  const speedScore = Math.min(provider.ourRating, 5);
  const priceScore = 5 - ((provider.priceRange.min + provider.priceRange.max) / 2 - 15) / 10;
  const coverageScore = Math.min(provider.coverage.length * 0.8, 5);
  const supportScore = provider.ourRating;
  
  return (
    speedScore * ratingWeights.speed +
    Math.max(0, Math.min(5, priceScore)) * ratingWeights.price +
    coverageScore * ratingWeights.coverage +
    supportScore * ratingWeights.support
  );
}
