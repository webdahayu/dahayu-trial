# Quick SEO Reference - Dahayu Jewelry

## 🎯 URLs to Verify After Deployment

```
✅ https://dahayujewelry.com/sitemap.xml
✅ https://dahayujewelry.com/robots.txt
✅ https://dahayujewelry.com/ (view source - check metadata)
✅ https://dahayujewelry.com/koleksi
✅ https://dahayujewelry.com/tentang
✅ https://dahayujewelry.com/kontak
✅ https://dahayujewelry.com/produk/1
```

## 📊 SEO Files Created

| File                                | Purpose                | Status     |
| ----------------------------------- | ---------------------- | ---------- |
| `app/sitemap.ts`                    | Generate sitemap.xml   | ✅ Working |
| `app/robots.ts`                     | Generate robots.txt    | ✅ Working |
| `lib/seo.ts`                        | SEO utilities & config | ✅ Working |
| `app/components/StructuredData.tsx` | JSON-LD schemas        | ✅ Working |
| `app/components/Analytics.tsx`      | Google Analytics       | ✅ Working |
| `app/layout.tsx`                    | Root metadata          | ✅ Updated |
| `app/page.tsx`                      | Homepage metadata      | ✅ Updated |
| `app/koleksi/layout.tsx`            | Collection metadata    | ✅ Created |
| `app/tentang/layout.tsx`            | About metadata         | ✅ Created |
| `app/kontak/layout.tsx`             | Contact metadata       | ✅ Created |
| `app/produk/[id]/layout.tsx`        | Product metadata       | ✅ Created |

## 🔑 Keywords Used

### Primary Keywords (Indonesian)

- perhiasan bali
- emas 18k
- perak 925
- jewelry bali
- dahayu jewelry

### Secondary Keywords

- perhiasan handmade
- cincin emas bali
- anting emas bali
- bros emas bali
- perhiasan tradisional bali
- luxury jewelry indonesia
- perhiasan premium
- perhiasan bermakna
- jewelry with soul

## 📱 Social Media Tags

### OpenGraph (Facebook, LinkedIn)

```typescript
{
  type: "website",
  locale: "id_ID",
  url: "https://dahayujewelry.com",
  siteName: "Dahayu Jewelry",
  images: [{
    url: "/og-image.jpg",
    width: 1200,
    height: 630
  }]
}
```

### Twitter Cards

```typescript
{
  card: "summary_large_image",
  title: "Dahayu Jewelry",
  images: ["/og-image.jpg"],
  creator: "@dahayu.jewelry"
}
```

## 🏗️ Structured Data Schemas

1. **Organization** - Company info, contact
2. **LocalBusiness** - JewelryStore type
3. **Website** - Search action enabled
4. **Product** - Individual products with offers
5. **Breadcrumb** - Navigation paths
6. **Article** - Blog posts

## 🚀 Post-Deployment Tasks

### 1. Google Search Console (CRITICAL)

```
1. Go to https://search.google.com/search-console
2. Add property: https://dahayujewelry.com
3. Verify ownership (HTML tag method)
4. Submit sitemap: https://dahayujewelry.com/sitemap.xml
5. Request indexing for key pages
```

### 2. Google Analytics

```
1. Go to https://analytics.google.com
2. Create property for dahayujewelry.com
3. Get tracking ID (G-XXXXXXXXXX)
4. Add to .env.local: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
5. Redeploy site
```

### 3. Test SEO Implementation

```bash
# Rich Results Test
https://search.google.com/test/rich-results?url=https://dahayujewelry.com

# Facebook Debugger
https://developers.facebook.com/tools/debug/?q=https://dahayujewelry.com

# Twitter Card Validator
https://cards-dev.twitter.com/validator?url=https://dahayujewelry.com

# PageSpeed Insights
https://pagespeed.web.dev/?url=https://dahayujewelry.com
```

### 4. Monitor Rankings

Track these keywords in Google Search Console:

- perhiasan bali
- emas 18k bali
- jewelry bali
- dahayu jewelry
- perhiasan handmade bali

## 📈 Expected Results Timeline

| Timeframe  | Expected               |
| ---------- | ---------------------- |
| 1-3 days   | Google starts crawling |
| 1 week     | First pages indexed    |
| 2-4 weeks  | Most pages indexed     |
| 1-3 months | Ranking improves       |
| 3-6 months | Steady organic traffic |

## 🎨 Images to Create

For best SEO, create these images:

- `/og-image.jpg` - 1200x630px (OpenGraph)
- `/favicon.ico` - 16x16px, 32x32px
- `/icon-192.png` - 192x192px (PWA)
- `/icon-512.png` - 512x512px (PWA)
- `/apple-icon.png` - 180x180px (iOS)

## 💡 Content Tips

### Product Descriptions

Include:

- Material (18K gold, 925 silver)
- Weight in grams
- Inspiration/meaning
- Craftsmanship details
- "Handmade in Bali"

### Homepage

- Unique value proposition
- "Premium jewelry from Bali"
- Craftsmanship emphasis
- WhatsApp call-to-action

### Collection Page

- Category filters
- Material filters
- "Handmade by Balinese artisans"

## 🔗 Internal Linking Strategy

```
Homepage
├─ Koleksi (collection)
│  ├─ Product 1
│  ├─ Product 2
│  └─ Product N
├─ Tentang (about)
├─ Kontak (contact)
└─ Blog
   ├─ Article 1
   └─ Article 2
```

Each blog post should link to:

- 2-3 relevant products
- 1-2 related articles
- Collection page

## 📊 Build Stats

```
✓ Static pages: 40
✓ Product pages: 28 (SSG)
✓ Total routes: 11
✓ Build time: ~90s
✓ No errors: YES
```

## 🔧 Maintenance

### Weekly

- Check Google Search Console for errors
- Monitor page speed
- Review top search queries

### Monthly

- Add new blog content
- Update product descriptions
- Check broken links
- Review analytics data

### Quarterly

- Audit keywords
- Update meta descriptions
- Refresh OpenGraph images
- Check competitor rankings

---

**Questions?** Check the full documentation in `SEO-IMPLEMENTATION.md`
