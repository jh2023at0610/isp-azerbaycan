'use client';

import React, { useState } from 'react';

export default function RootPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Azərbaycanda ən sürətli internet provayderi hansıdır?",
      answer: "2025-ci il üçün KaTV və BirLink ən yaxşı sürət göstəricilərinə malikdir. Lakin konkret sürət provayderin paketindən və yaşadığınız ərazidən asılıdır."
    },
    {
      question: "Internet provayderlərinin qiymətləri necədir?",
      answer: "Internet qiymətləri paketə və sürətə görə dəyişir. Aylıq ödənişlər 15-100 AZN arasında ola bilər. Ən uyğun paketi seçmək üçün müqayisə edin."
    },
    {
      question: "Hansı provayderin örtük sahəsi genişdir?",
      answer: "AzTelekom bütün Azərbaycan ərazisində xidmət göstərir. Digər provayderlər əsasən Bakı və ətraf rayonlarda fəaliyyət göstərir."
    },
    {
      question: "Internet provayderini necə dəyişə bilərəm?",
      answer: "Yeni provayderlə müqavilə bağladıqdan sonra köhnə provayderlə müqaviləni pozun. Çox vaxt provayderlər köçürmə xidməti təklif edir."
    }
  ];

  return (
    <div className="min-h-screen bg-blue-100">
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />

      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-extrabold tracking-tight">ISP Azərbaycan</h1>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="hover:text-blue-200 transition-colors">Ana səhifə</a>
              <a href="/blog" className="hover:text-blue-200 transition-colors">Bloq</a>
              <a href="#mukayise" className="hover:text-blue-200 transition-colors">Müqayisə</a>
              <a href="#faq" className="hover:text-blue-200 transition-colors">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight animate-slideUp">
            ən yaxşı internet provayder 2025
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed animate-slideUp">
            Azərbaycanın aparıcı internet provayderlərini müqayisə edin və ən yaxşı seçimi edin
          </p>
          <button className="bg-white text-blue-600 px-12 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 animate-slideUp">
            Provayderləri müqayisə et
          </button>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
            Internet Provayderləri Müqayisəsi
          </h2>
          
          <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-800">
            <table className="min-w-full text-sm text-gray-600 dark:text-gray-300">
              <thead className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 uppercase text-xs font-bold">
                <tr>
                  <th className="px-8 py-6 text-left">Provayder</th>
                  <th className="px-8 py-6 text-left">Sürət</th>
                  <th className="px-8 py-6 text-left">Qiymət</th>
                  <th className="px-8 py-6 text-left">Reytinq</th>
                  <th className="px-8 py-6 text-left">Örtük</th>
                  <th className="px-8 py-6 text-left">Sayt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-gray-900 dark:text-gray-100 text-lg">KaTV</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">100 Mbps</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">25 AZN/ay</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl mr-3">★★★★★</span>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">4.8</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300">Bakı və ətraf rayonlar</td>
                  <td className="px-8 py-6">
                    <a href="https://www.katv.az" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                      Sayta keç
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-gray-900 dark:text-gray-100 text-lg">BirLink</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">150 Mbps</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">30 AZN/ay</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl mr-3">★★★★★</span>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">4.7</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300">Bakı, Sumqayıt, Gəncə</td>
                  <td className="px-8 py-6">
                    <a href="https://www.birlink.az" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                      Sayta keç
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-gray-900 dark:text-gray-100 text-lg">CityNet</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">80 Mbps</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">22 AZN/ay</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl mr-3">★★★★☆</span>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">4.2</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300">Bakı və ətraf şəhərlər</td>
                  <td className="px-8 py-6">
                    <a href="https://www.citynet.az" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                      Sayta keç
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-gray-900 dark:text-gray-100 text-lg">AzTelekom</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">50 Mbps</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">18 AZN/ay</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl mr-3">★★★☆☆</span>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">3.5</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300">Bütün Azərbaycan</td>
                  <td className="px-8 py-6">
                    <a href="https://www.aztelekom.az" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                      Sayta keç
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-gray-900 dark:text-gray-100 text-lg">AzerOnline</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">120 Mbps</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">28 AZN/ay</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl mr-3">★★★★☆</span>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">4.3</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300">Bakı və regionlar</td>
                  <td className="px-8 py-6">
                    <a href="https://www.azeronline.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                      Sayta keç
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-gray-900 dark:text-gray-100 text-lg">Connect</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">90 Mbps</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">24 AZN/ay</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl mr-3">★★★★☆</span>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">4.1</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300">Bakı və ətraf rayonlar</td>
                  <td className="px-8 py-6">
                    <a href="https://www.connect.az" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                      Sayta keç
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-gray-900 dark:text-gray-100 text-lg">AzEuroTel</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">200 Mbps</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">35 AZN/ay</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl mr-3">★★★★★</span>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">4.6</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300">Bakı, Gəncə, Sumqayıt</td>
                  <td className="px-8 py-6">
                    <a href="https://www.azeurotel.az" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                      Sayta keç
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-gray-900 dark:text-gray-100 text-lg">Delta Telecom</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">100 Mbps</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">26 AZN/ay</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl mr-3">★★★★☆</span>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">4.0</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300">Bakı və Abşeron rayonu</td>
                  <td className="px-8 py-6">
                    <a href="https://www.delta.az" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                      Sayta keç
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-gray-900 dark:text-gray-100 text-lg">Ultel</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">60 Mbps</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">20 AZN/ay</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl mr-3">★★★☆☆</span>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">3.8</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300">Bakı şəhəri</td>
                  <td className="px-8 py-6">
                    <a href="https://www.ultel.az" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                      Sayta keç
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-gray-900 dark:text-gray-100 text-lg">Naxtel</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">75 Mbps</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">21 AZN/ay</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl mr-3">★★★☆☆</span>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">3.9</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300">Bakı və ətraf rayonlar</td>
                  <td className="px-8 py-6">
                    <a href="https://www.naxtel.az" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                      Sayta keç
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-gray-900 dark:text-gray-100 text-lg">SuperOnline</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">250 Mbps</td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300 font-medium">40 AZN/ay</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl mr-3">★★★★★</span>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">4.5</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-600 dark:text-gray-300">Bakı, Sumqayıt</td>
                  <td className="px-8 py-6">
                    <a href="https://www.superonline.az" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                      Sayta keç
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
            İstifadəçi Rəyləri
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div className="rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-2xl mr-4">
                  ★★★★★
                </div>
                <span className="text-lg font-bold text-gray-600 dark:text-gray-300">4.8/5</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed mb-6">
                "KaTV-nin xidməti çox yaxşıdır. Sürət sabitdir və texniki dəstək 24/7 mövcuddur."
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                – Əli M., Bakı
              </div>
            </div>
            
            <div className="rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-2xl mr-4">
                  ★★★★★
                </div>
                <span className="text-lg font-bold text-gray-600 dark:text-gray-300">4.7/5</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed mb-6">
                "BirLink-dən məmnunam. Yüksək sürət və uyğun qiymət. Məsləhət verirəm."
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                – Leyla K., Sumqayıt
              </div>
            </div>
            
            <div className="rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-2xl mr-4">
                  ★★★★☆
                </div>
                <span className="text-lg font-bold text-gray-600 dark:text-gray-300">4.2/5</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed mb-6">
                "CityNet yaxşı provayderdir. Bəzən kəsilmələr olsa da, ümumiyyətlə məmnunam."
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                – Rəşad Ə., Bakı
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="btn btn-primary text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:scale-105 transition-all duration-300">
              Rəy əlavə et
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Bloq və Bələdçilər
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Internet provayderləri haqqında ətraflı məqalələr, bələdçilər və məsləhətlər
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Articles */}
            <div className="lg:col-span-2 space-y-6">
              {/* First Article */}
              <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Bələdçi
                    </span>
                    <time className="text-sm text-gray-500 dark:text-gray-400">25 oktyabr 2025</time>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a href="/blog/en-yaxsi-internet-provayderi-nece-secmeli" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Ən yaxşı internet provayderi necə seçməli? (2025 Bələdçi)
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Azərbaycanda ən yaxşı internet provayderini seçmək üçün tam bələdçi: sürət, sabitlik, texnologiya, qiymət və müqayisə meyarları.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">8 dəqiqə oxumaq</span>
                    <a 
                      href="/blog/en-yaxsi-internet-provayderi-nece-secmeli"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center"
                    >
                      Oxumağa davam et →
                    </a>
                  </div>
                </div>
              </article>

              {/* Second Article */}
              <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Texnologiya
                    </span>
                    <time className="text-sm text-gray-500 dark:text-gray-400">25 oktyabr 2025</time>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <a href="/blog/en-yaxsi-wifi-router-nece-secmeli" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Ən yaxşı Wi-Fi router necə seçməli? (2025 Bələdçi)
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Wi-Fi standartları, AX/AC sürətləri, Dual-Band, anten, Gigabit LAN/WAN, Mesh, MU-MIMO, QoS və WPA3 təhlükəsizliyi haqqında tam bələdçi.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">10 dəqiqə oxumaq</span>
                    <a 
                      href="/blog/en-yaxsi-wifi-router-nece-secmeli"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center"
                    >
                      Oxumağa davam et →
                    </a>
                  </div>
                </div>
              </article>
            </div>
            
            {/* Blog CTA */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Daha çox məqalə</h3>
                <p className="text-blue-100 mb-6">
                  Internet provayderləri haqqında daha çox məqalə və bələdçi üçün bloqumuzu ziyarət edin.
                </p>
                <a 
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Bütün məqalələrə bax
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
            Tez-tez verilən suallar
          </h2>
          
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg bg-white dark:bg-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300">
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 flex justify-between items-center transition-all duration-300"
                >
                  <span className="text-lg">{item.question}</span>
                  <span className="text-gray-400 dark:text-gray-500 transform transition-transform duration-300 text-2xl">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6 text-gray-600 dark:text-gray-300 animate-fadeIn text-lg leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
            Bizimlə Əlaqə
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                Provayder seçimi üçün kömək lazımdır?
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
                    placeholder="Adınızı daxil edin"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
                    placeholder="+994 XX XXX XX XX"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Yaşadığınız ərazi
                  </label>
                  <select
                    id="location"
                    className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
                  >
                    <option value="">Ərazini seçin</option>
                    <option value="baku">Bakı</option>
                    <option value="sumgayit">Sumqayıt</option>
                    <option value="ganja">Gəncə</option>
                    <option value="other">Digər</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Aylıq büdcə
                  </label>
                  <select
                    id="budget"
                    className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
                  >
                    <option value="">Büdcəni seçin</option>
                    <option value="15-25">15-25 AZN</option>
                    <option value="25-35">25-35 AZN</option>
                    <option value="35-50">35-50 AZN</option>
                    <option value="50+">50+ AZN</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Əlavə məlumat
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
                    placeholder="Tələblərinizi və suallarınızı yazın..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary text-white py-4 px-8 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Məsləhət al
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                Əlaqə məlumatları
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 p-4 rounded-xl mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px'}}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Telefon</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">+994 XX XXX XX XX</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Həftə içi 9:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900 dark:to-accent-800 p-4 rounded-xl mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-600 dark:text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px'}}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">info@ispazerbaycan.az</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">24 saat ərzində cavab</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 p-4 rounded-xl mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px'}}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Ünvan</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">Bakı, Azərbaycan</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Ofis ziyarəti üçün randevu</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-6 text-xl">Niyə bizə müraciət edin?</h4>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-accent-500 mr-4 text-xl">✓</span>
                    <span className="font-medium">Pulsuz məsləhət və müqayisə</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-500 mr-4 text-xl">✓</span>
                    <span className="font-medium">Ən yaxşı qiymət təklifləri</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-500 mr-4 text-xl">✓</span>
                    <span className="font-medium">Texniki dəstək və quraşdırma</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-500 mr-4 text-xl">✓</span>
                    <span className="font-medium">Müştəri xidmətləri 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">ISP Azərbaycan</h3>
          <p className="text-gray-300 mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
            Azərbaycanın ən yaxşı internet provayderlərini müqayisə edin və ən uyğun seçimi edin.
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 ISP Azərbaycan. Bütün hüquqlar qorunur.
          </p>
        </div>
      </footer>
    </div>
  );
}
