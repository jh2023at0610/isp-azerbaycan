import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ən yaxşı Wi-Fi router necə seçməli? (2025 Bələdçi) | ISP Azərbaycan',
  description: 'Ev və ofis üçün ən yaxşı Wi-Fi router necə seçilir? Wi-Fi 5/6 (802.11ac/ax), Dual-Band 2.4/5 GHz, AX1800/AX3000 sürətləri, anten gücü (dBi), Gigabit port, MU-MIMO, QoS, Mesh sistemlər və təhlükəsizlik (WPA3) haqqında tam bələdçi.',
  keywords: 'wi-fi router seçimi, azərbaycan router, wi-fi 6, dual-band, gigabit router, mesh wi-fi, wpa3, mu-mimo',
  openGraph: {
    title: 'Ən yaxşı Wi-Fi router necə seçməli? (2025 Bələdçi)',
    description: 'Wi-Fi standartları, AX/AC sürətləri, Dual-Band, anten, Gigabit LAN/WAN, Mesh, MU-MIMO, QoS və WPA3 təhlükəsizliyi — seçim üçün hər şey.',
    type: 'article',
    publishedTime: '2025-10-25T00:00:00.000Z',
    modifiedTime: '2025-10-25T00:00:00.000Z',
    authors: ['ISP Azərbaycan'],
  },
  alternates: {
    canonical: 'https://ispazerbaycan.vercel.app/blog/en-yaxsi-wifi-router-nece-secmeli',
  },
}

export default function RouterArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">Ana səhifə</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-blue-600">Bloq</Link>
            <span>›</span>
            <span className="text-gray-900">Ən yaxşı Wi-Fi router necə seçməli?</span>
          </nav>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Texnologiya
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                Wi-Fi 6
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                Dual-Band
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                Gigabit
              </span>
            </div>
            <time className="text-sm text-gray-500">25 oktyabr 2025</time>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ən yaxşı Wi-Fi router necə seçməli? (2025 Bələdçi)
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Wi-Fi standartları, AX/AC sürətləri, Dual-Band, anten, Gigabit LAN/WAN, Mesh, MU-MIMO, QoS və WPA3 təhlükəsizliyi — seçim üçün hər şey.
          </p>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="prose prose-lg max-w-none">
          
          {/* Table of Contents */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Mündəricat</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#niye" className="text-blue-600 hover:text-blue-700">Router niyə vacibdir?</a></li>
              <li><a href="#gostericiler" className="text-blue-600 hover:text-blue-700">Əsas göstəricilər: standart, sürət, tezlik</a></li>
              <li><a href="#antena-port" className="text-blue-600 hover:text-blue-700">Anten, dBi və portlar (Gigabit)</a></li>
              <li><a href="#smart" className="text-blue-600 hover:text-blue-700">Ağıllı funksiyalar: MU-MIMO, Beamforming, QoS</a></li>
              <li><a href="#mesh" className="text-blue-600 hover:text-blue-700">Mesh Wi-Fi nədir və nə vaxt lazımdır?</a></li>
              <li><a href="#tehlukesizlik" className="text-blue-600 hover:text-blue-700">Təhlükəsizlik: WPA3, tətbiqlə idarəetmə</a></li>
              <li><a href="#secmek" className="text-blue-600 hover:text-blue-700">İstifadə ssenarilərinə görə seçim cədvəli</a></li>
              <li><a href="#qurulus" className="text-blue-600 hover:text-blue-700">Quraşdırma: provayder uyğunluğu və yerləşdirmə</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-700">Tez-tez verilən suallar</a></li>
            </ol>
          </div>

          {/* Quick Summary */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <p className="text-gray-800">
              <strong>Qısa nəticə:</strong> 2025 üçün ideal seçim — <em>Wi-Fi 6 (AX1800/AX3000)</em>, <em>Dual-Band (2.4+5 GHz)</em>, <em>Gigabit WAN/LAN</em>, və ehtiyac varsa <em>Mesh</em> dəstəyi.
            </p>
          </div>

          {/* Section 1 */}
          <section id="niye" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Router niyə vacibdir?</h2>
            <p className="text-gray-700 mb-4">
              Router provayderdən gələn siqnalı bütün cihazlara paylayır. Köhnə model sürəti boğa, əhatəni azalda və gecikməni artıra bilər. Düzgün seçim provayder sürətini tam istifadə etməyə imkan verir.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link 
                href="/" 
                className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Provayderləri müqayisə et
              </Link>
              <Link 
                href="/blog/en-yaxsi-internet-provayderi-nece-secmeli" 
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Provayder seçimi bələdçisi
              </Link>
            </div>
          </section>

          {/* Section 2 */}
          <section id="gostericiler" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Əsas göstəricilər: standart, sürət, tezlik</h2>
            <p className="text-gray-700 mb-4">
              <strong>Standart:</strong> Wi-Fi 4 (802.11n) köhnədir; minimum Wi-Fi 5 (AC), ideal Wi-Fi 6 (AX) seçin.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Sürət sinfi:</strong> AC1200, AX1800, AX3000 və s. — ümumi nəzəri bant genişliyini göstərir. Real şərtlərdə daha aşağıdır, ancaq yüksək siniflər daha dayanıqlıdır.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">Sinif</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">Standart</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">Nəzəri maksimum</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">Tipik real</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">Qısa şərh</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">AC750</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Wi-Fi 5</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">~750 Mbps</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">100–200 Mbps</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Kiçik mənzil, az cihaz</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">AC1200</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Wi-Fi 5</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">~1200 Mbps</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">200–400 Mbps</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Giriş səviyyəsi Dual-Band</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">AX1800</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Wi-Fi 6</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">~1800 Mbps</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">400–800 Mbps</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Ən yaxşı qiymət/performans</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">AX3000</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Wi-Fi 6</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">~3000 Mbps</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">800–1000 Mbps</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Böyük ailə, yüksək tələbat</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700">
              <strong>Tezlik:</strong> 2.4 GHz daha geniş əhatə, 5 GHz daha yüksək sürət verir. <em>Dual-Band</em> modellər üstünlük təşkil edir.
            </p>
          </section>

          {/* Section 3 */}
          <section id="antena-port" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Anten, dBi və portlar (Gigabit)</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Anten sayı və dBi:</strong> 2–6 anten; ən azı 5 dBi güc məsləhətdir.</li>
              <li><strong>Portlar:</strong> WAN/LAN üçün <em>Gigabit (1 Gbps)</em> vacibdir; 100 Mbps portlar yüksək sürəti məhdudlaşdırır.</li>
              <li><strong>USB:</strong> Fayl/paylaşım və 4G/5G modem ehtiyatı üçün faydalı ola bilər.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="smart" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ağıllı funksiyalar: MU-MIMO, Beamforming, QoS</h2>
            <p className="text-gray-700">
              <strong>MU-MIMO</strong> çox cihazda eyni vaxtda ötürməni, <strong>Beamforming</strong> siqnalın hədəf cihazlara yönəldilməsini, <strong>QoS</strong> isə video/oyun kimi tətbiqlərə prioritet verir.
            </p>
          </section>

          {/* Section 5 */}
          <section id="mesh" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mesh Wi-Fi nədir və nə vaxt lazımdır?</h2>
            <p className="text-gray-700">
              Böyük və ya çoxmərtəbəli evlərdə tək router kifayət etmir. <strong>Mesh</strong> 2–3 nodedan ibarət şəbəkədir, otaqdan otağa keçiddə siqnalı kəsmədən sabit bağlantı yaradır.
            </p>
          </section>

          {/* Section 6 */}
          <section id="tehlukesizlik" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Təhlükəsizlik: WPA3, tətbiqlə idarəetmə</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>WPA3</strong> şifrələmə və qonaq şəbəkəsi aktiv edin.</li>
              <li><strong>Mobil tətbiq</strong> (TP-Link Tether, ASUS Router və s.) ilə quraşdırma və valideyn nəzarəti rahatdır.</li>
              <li>Firmware-i mütəmadi yeniləyin.</li>
            </ul>
          </section>

          {/* Section 7 - Selection Table */}
          <section id="secmek" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">İstifadə ssenarilərinə görə seçim cədvəli</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">Ssenari</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">Tövsiyə olunan sinif</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">Qeyd</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Kiçik mənzil, 3–4 cihaz</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">AC1200 Dual-Band</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Ucuz və kifayət</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Orta/böyük mənzil, çox cihaz</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">AX1800 Wi-Fi 6</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Ən yaxşı balans</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Yüksək tələbat (4K, oyun, ofis)</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">AX3000 Wi-Fi 6</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Gigabit şəbəkə ilə</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Villa, çoxmərtəbəli ev</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Mesh sistemi</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">2–3 node ilə vahid şəbəkə</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 8 */}
          <section id="qurulus" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quraşdırma: provayder uyğunluğu və yerləşdirmə</h2>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>Provayder ayarlarına (PPPoE/DHCP) uyğun konfiqurasiya edin.</li>
              <li>Routeri mərkəzi, açıq və yüksək (1–1.5 m) nöqtədə saxlayın.</li>
              <li>Metal/Beton maneələrdən uzaq, mümkün olduqda kabel (Ethernet) istifadə edin.</li>
            </ul>
            <p className="text-gray-700">
              Daha geniş məlumat üçün: <Link href="/blog/en-yaxsi-internet-provayderi-nece-secmeli" className="text-blue-600 hover:text-blue-700">Provayder seçimi bələdçisi</Link> və <Link href="/blog" className="text-blue-600 hover:text-blue-700">digər məqalələr</Link>.
            </p>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tez-tez verilən suallar</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Routeri dəyişsəm sürət artar?</h3>
                <p className="text-gray-700">Əgər köhnə və ya 100 Mbps portlu modeldən istifadə edirsinizsə, Wi-Fi 6 və Gigabit portlu yeni router real sürəti və sabitliyi artıracaq.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dual-Band nə verir?</h3>
                <p className="text-gray-700">2.4 GHz uzaq məsafə, 5 GHz isə yüksək sürət verir. Cihazlar ehtiyacına görə avtomatik seçim edir.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mesh ilə range-extender fərqi?</h3>
                <p className="text-gray-700">Extender ayrıca SSID yarada bilər və keçiddə kəsinti ola bilər; Mesh tək SSID ilə problemsiz dolaşma təmin edir.</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Bu məqalə <Link href="/blog" className="text-blue-600 hover:text-blue-700">ISP Azərbaycan Bloq</Link> üçün hazırlanıb. 
              Daha çox bələdçi üçün <Link href="/" className="text-blue-600 hover:text-blue-700">ana səhifə</Link> və <Link href="/" className="text-blue-600 hover:text-blue-700">müqayisə alətinə</Link> keçin.
            </p>
          </footer>
        </article>
      </main>
    </div>
  )
}
