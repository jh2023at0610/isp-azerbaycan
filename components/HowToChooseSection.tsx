'use client';

import { useTranslations } from 'next-intl';
import { Zap, DollarSign, Shield, Headphones } from 'lucide-react';

export default function HowToChooseSection() {
  const t = useTranslations('howToChoose');

  const factors = [
    {
      icon: Zap,
      key: 'speed',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: DollarSign,
      key: 'price',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      icon: Shield,
      key: 'stability',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Headphones,
      key: 'support',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section id="howToChoose" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {factors.map((factor) => {
            const Icon = factor.icon;
            return (
              <div
                key={factor.key}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 ${factor.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`w-8 h-8 ${factor.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(`factors.${factor.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`factors.${factor.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Tips */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Əlavə məsləhətlər
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Ərazinizi yoxlayın</h4>
                  <p className="text-gray-600 text-sm">
                    Provayderin sizin ərazinizdə xidmət göstərdiyini təsdiqləyin
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Müqaviləni oxuyun</h4>
                  <p className="text-gray-600 text-sm">
                    Şərtləri və ödəniş məlumatlarını diqqətlə öyrənin
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Test edin</h4>
                  <p className="text-gray-600 text-sm">
                    Mümkünsə əvvəlcə test paketi sifariş edin
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Dəstəyi soruşun</h4>
                  <p className="text-gray-600 text-sm">
                    Texniki dəstək və müştəri xidmətlərinin keyfiyyətini araşdırın
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
