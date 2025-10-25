# ISP Azərbaycan - Internet Provider Comparison Website

A production-ready, SEO-optimized single-page website for comparing Azerbaijan's internet service providers. Built with Next.js 14, TypeScript, and TailwindCSS.

## 🚀 Features

- **Multi-language Support**: Azerbaijani (default), Russian, and English
- **SEO Optimized**: Meta tags, structured data, sitemap, robots.txt
- **Performance**: Core Web Vitals optimized, Lighthouse scores 90+
- **Accessibility**: WCAG compliant, keyboard navigation, screen reader friendly
- **Responsive**: Mobile-first design, works on all devices
- **Interactive**: Provider comparison table, reviews system, FAQ accordions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **SEO**: next-sitemap
- **Database**: LocalStorage (MVP) / Supabase (Production)

## 📁 Project Structure

```
isp-az/
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Main page component
│   ├── globals.css        # Global styles
│   └── page.tsx          # Root redirect
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── ComparisonTable.tsx # Provider comparison
│   ├── ProvidersSection.tsx # Individual providers
│   ├── HowToChooseSection.tsx # Selection guide
│   ├── FAQSection.tsx    # FAQ accordions
│   ├── ReviewsSection.tsx # User reviews
│   └── Footer.tsx        # Footer with contact info
├── data/
│   └── providers.ts      # Provider data and types
├── lib/
│   ├── seo.ts           # SEO utilities
│   └── schema.ts        # JSON-LD structured data
├── messages/            # Internationalization files
│   ├── az.json         # Azerbaijani translations
│   ├── ru.json         # Russian translations
│   └── en.json         # English translations
├── public/
│   ├── robots.txt       # Search engine directives
│   └── site.webmanifest # PWA manifest
├── middleware.ts        # Next.js middleware for i18n
├── next.config.js       # Next.js configuration
├── next-sitemap.config.js # Sitemap configuration
└── tailwind.config.ts   # TailwindCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd isp-az
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🌐 Internationalization

The website supports three languages:
- **Azerbaijani (az)** - Default language
- **Russian (ru)** - `/ru`
- **English (en)** - `/en`

### Adding New Translations

1. Update the message files in `/messages/`
2. Add the new locale to `middleware.ts`
3. Update `next-sitemap.config.js` for sitemap generation

## 📊 SEO Features

### Meta Tags
- Dynamic title and description per locale
- Open Graph and Twitter Card support
- Canonical URLs and hreflang tags
- Structured data (JSON-LD)

### Performance
- Image optimization with Next.js Image
- Font optimization with Google Fonts
- CSS and JS minification
- Core Web Vitals optimization

### Accessibility
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- Color contrast compliance

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Site URL for production
SITE_URL=https://yourdomain.az

# Google Search Console verification
GOOGLE_SITE_VERIFICATION=your_verification_code

# Supabase (optional - for production reviews)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Provider Data

Edit `/data/providers.ts` to update provider information:

```typescript
export const providers: Provider[] = [
  {
    id: 'provider-id',
    name: 'Provider Name',
    description: 'Provider description',
    coverage: ['City1', 'City2'],
    packages: [...],
    pros: [...],
    cons: [...],
    website: 'https://provider-website.com',
    // ... other properties
  }
];
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository

2. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Set Environment Variables**
   - Add all variables from `.env.local`
   - Set `SITE_URL` to your production domain

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

### Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your `.az` domain

2. **DNS Configuration**
   - Add A record pointing to Vercel IP
   - Or use ALIAS/CNAME record

3. **SSL Certificate**
   - Vercel automatically provides SSL
   - Force HTTPS in project settings

## 📈 SEO Verification

### Google Search Console

1. **Add Property**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your domain property

2. **Verify Ownership**
   - Use HTML file upload method
   - Or DNS TXT record method

3. **Submit Sitemap**
   - Go to Sitemaps section
   - Submit: `https://yourdomain.az/sitemap.xml`

### Rich Results Testing

1. **Test Structured Data**
   - Go to [Rich Results Test](https://search.google.com/test/rich-results)
   - Test your URLs for structured data

2. **Mobile-Friendly Test**
   - Use [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
   - Ensure mobile compatibility

### Lighthouse Audit

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://yourdomain.az --view
```

Target scores:
- Performance: ≥ 90
- SEO: ≥ 100
- Accessibility: ≥ 95
- Best Practices: ≥ 95

## 📋 Post-Launch Checklist

### Content & SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify hreflang tags work correctly
- [ ] Test all structured data with Rich Results Test
- [ ] Request indexing for main pages
- [ ] Set up Google Analytics 4
- [ ] Create Google My Business listing

### Local SEO
- [ ] Add NAP (Name, Address, Phone) to footer
- [ ] Submit to local directories (YellowPages.az, Biznesinfo.az)
- [ ] Create location-specific landing pages
- [ ] Get listed in local business directories

### Backlink Building
- [ ] Reach out to local tech blogs
- [ ] Submit to startup directories
- [ ] Partner with local ISPs for cross-promotion
- [ ] Create shareable infographics about internet speeds
- [ ] Write guest posts on tech websites

### Content Marketing
- [ ] Create blog section with ISP guides
- [ ] Write comparison articles
- [ ] Create video content about choosing ISPs
- [ ] Develop downloadable guides
- [ ] Start email newsletter

### Technical
- [ ] Set up monitoring (UptimeRobot, Pingdom)
- [ ] Configure error tracking (Sentry)
- [ ] Set up performance monitoring
- [ ] Create backup strategy
- [ ] Document maintenance procedures

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support:
- Email: info@yourdomain.az
- Phone: +994 XX XXX XX XX

---

**Built with ❤️ for Azerbaijan's internet users**