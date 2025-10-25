import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bloq - ISP Azərbaycan',
  description: 'Azərbaycanda internet provayderləri haqqında məqalələr, bələdçilər və məsləhətlər. Ən yaxşı internet provayderini seçmək üçün tam bələdçi.',
  keywords: 'internet provayder bloq, azərbaycan internet, provayder məqalələri, internet bələdçi',
  openGraph: {
    title: 'Bloq - ISP Azərbaycan',
    description: 'Azərbaycanda internet provayderləri haqqında məqalələr və bələdçilər',
    type: 'website',
  },
}

const articles = [
  {
    slug: 'en-yaxsi-internet-provayderi-nece-secmeli',
    title: 'Ən yaxşı internet provayderi necə seçməli? (2025 Bələdçi)',
    description: 'Azərbaycanda ən yaxşı internet provayderini seçmək üçün tam bələdçi: sürət, sabitlik, texnologiya, qiymət və müqayisə.',
    date: '2025-10-25',
    readTime: '8 dəqiqə',
    category: 'Bələdçi',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Ana səhifə</Link>
            <span>›</span>
            <span className="text-gray-900">Bloq</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Bloq</h1>
          <p className="text-gray-600 mt-2">Azərbaycanda internet provayderləri haqqında məqalələr və bələdçilər</p>
        </div>
      </header>

      {/* Articles */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {article.category}
                  </span>
                  <time className="text-sm text-gray-500">{article.date}</time>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime} oxumaq</span>
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Oxumağa davam et →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Provayderləri müqayisə edin</h3>
          <p className="text-gray-600 mb-6">Bloq məqalələrini oxuyandan sonra, ən yaxşı internet provayderini seçmək üçün müqayisə alətimizdən istifadə edin.</p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Müqayisə et
          </Link>
        </div>
      </main>
    </div>
  )
}
