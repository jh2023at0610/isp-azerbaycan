'use client';

import { useTranslations } from 'next-intl';
import { providers } from '../data/providers';
import { Star, Check, X, ExternalLink, Wifi, MapPin, Calendar } from 'lucide-react';

export default function ProvidersSection() {
  const t = useTranslations('providers');

  return (
    <section id="providers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Internet Provayderləri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Azərbaycanın aparıcı internet provayderlərinin ətraflı məlumatları
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProviderCard({ provider }: { provider: typeof providers[0] }) {
  const t = useTranslations('providers');

  return (
    <div id={provider.id} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">{provider.name}</h3>
            <p className="text-primary-100">{provider.description}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-xl font-bold">{provider.userRating.toFixed(1)}</span>
            </div>
            <div className="text-sm text-primary-100">
              {provider.totalReviews} rəy
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Coverage */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <MapPin className="w-5 h-5 text-primary-600" />
            <h4 className="font-semibold text-gray-900">Örtük sahəsi</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {provider.coverage.map((city) => (
              <span
                key={city}
                className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Wifi className="w-5 h-5 text-primary-600" />
            <h4 className="font-semibold text-gray-900">Paketlər</h4>
          </div>
          <div className="space-y-3">
            {provider.packages.map((pkg, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{pkg.name}</div>
                  <div className="text-sm text-gray-600">{pkg.speed}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary-600">{pkg.price} AZN</div>
                  <div className="text-sm text-gray-500">aylıq</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="font-semibold text-green-700 mb-2 flex items-center">
              <Check className="w-4 h-4 mr-1" />
              Üstünlüklər
            </h4>
            <ul className="space-y-1">
              {provider.pros.map((pro, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-700 mb-2 flex items-center">
              <X className="w-4 h-4 mr-1" />
              Çatışmazlıqlar
            </h4>
            <ul className="space-y-1">
              {provider.cons.map((con, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <X className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{provider.established} ildən fəaliyyətdə</span>
          </div>
          <a
            href={provider.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Rəsmi sayt
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
