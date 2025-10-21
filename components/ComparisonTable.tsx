'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { providers, calculateOverallRating } from '../data/providers';
import { Star, ExternalLink, ArrowUpDown } from 'lucide-react';

type SortField = 'name' | 'speed' | 'price' | 'rating';
type SortOrder = 'asc' | 'desc';

export default function ComparisonTable() {
  const t = useTranslations('comparison');
  const [sortField, setSortField] = useState<SortField>('rating');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const sortedProviders = [...providers].sort((a, b) => {
    let aValue: number | string;
    let bValue: number | string;

    switch (sortField) {
      case 'name':
        aValue = a.name;
        bValue = b.name;
        break;
      case 'speed':
        aValue = Math.max(...a.packages.map(p => parseInt(p.speed)));
        bValue = Math.max(...b.packages.map(p => parseInt(p.speed)));
        break;
      case 'price':
        aValue = a.priceRange.min;
        bValue = b.priceRange.min;
        break;
      case 'rating':
        aValue = calculateOverallRating(a);
        bValue = calculateOverallRating(b);
        break;
      default:
        aValue = 0;
        bValue = 0;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortOrder === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return sortOrder === 'asc' 
      ? (aValue as number) - (bValue as number)
      : (bValue as number) - (aValue as number);
  });

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const scrollToProvider = (providerId: string) => {
    const element = document.querySelector(`#${providerId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="comparison" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('name')}
                      className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-primary-600 transition-colors"
                    >
                      <span>{t('table.provider')}</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('speed')}
                      className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-primary-600 transition-colors"
                    >
                      <span>{t('table.speed')}</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('price')}
                      className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-primary-600 transition-colors"
                    >
                      <span>{t('table.price')}</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('rating')}
                      className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-primary-600 transition-colors"
                    >
                      <span>{t('table.ourRating')}</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    {t('table.userRating')}
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    {t('table.coverage')}
                  </th>
                  <th className="px-6 py-4 text-center text-gray-700 font-semibold">
                    {t('table.details')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedProviders.map((provider) => (
                  <tr key={provider.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <span className="text-primary-600 font-bold text-sm">
                            {provider.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{provider.name}</div>
                          <div className="text-sm text-gray-500">{provider.established} ildən</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900 font-medium">
                        {Math.max(...provider.packages.map(p => parseInt(p.speed)))} Mbps
                      </div>
                      <div className="text-sm text-gray-500">
                        {provider.speedTiers.join(', ')}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900 font-medium">
                        {provider.priceRange.min}-{provider.priceRange.max} AZN
                      </div>
                      <div className="text-sm text-gray-500">aylıq</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-gray-900">
                          {calculateOverallRating(provider).toFixed(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-gray-900">
                          {provider.userRating.toFixed(1)}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({provider.totalReviews})
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {provider.coverage.slice(0, 2).map((city) => (
                          <span
                            key={city}
                            className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                          >
                            {city}
                          </span>
                        ))}
                        {provider.coverage.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{provider.coverage.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => scrollToProvider(provider.id)}
                        className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Ətraflı
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
