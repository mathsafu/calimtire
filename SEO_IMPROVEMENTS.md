# Améliorations SEO - ClaimTire.com

## ✅ Optimisations réalisées

### 1. Métadonnées enrichies ([layout.tsx](src/app/layout.tsx))
- ✅ `metadataBase` configuré avec le domaine **claimtire.com**
- ✅ Titre avec template pour les pages futures
- ✅ Description optimisée
- ✅ Keywords enrichis (ajout de "ClaimTire", fabricants, termes juridiques)
- ✅ `formatDetection` pour éviter la détection auto de numéros/emails
- ✅ Balises robots et googleBot optimisées
- ✅ Canonical URL configurée
- ✅ Google verification placeholder

### 2. Open Graph & Twitter Cards
- ✅ Open Graph configuré avec image og-image.jpg (1200x630)
- ✅ Twitter Cards (summary_large_image)
- ✅ Locale FR configurée
- ⚠️ **ACTION REQUISE** : Créer l'image `/public/og-image.jpg` (1200x630px)

### 3. Structured Data (JSON-LD)
- ✅ Schema.org LegalService
- ✅ Schema.org WebSite
- ✅ Schema.org Organization
- ✅ Graph complet avec références croisées

### 4. Progressive Web App (PWA)
- ✅ Manifest.json créé avec nom ClaimTire
- ✅ Icônes configurées (192x192 et 512x512)
- ✅ Theme color et background color définis
- ⚠️ **ACTION REQUISE** : Créer les icônes PNG
  - `/public/icon-192.png` (192x192px)
  - `/public/icon-512.png` (512x512px)
  - `/public/apple-touch-icon.png` (180x180px)
  - `/public/favicon.ico` (32x32px ou multi-size)

### 5. Favicons
- ✅ Icon SVG créé ([/public/icon.svg](public/icon.svg))
- ✅ Configuration dans metadata
- ⚠️ **ACTION REQUISE** : Créer favicon.ico

### 6. SEO On-Page
- ✅ Balises `<strong>` ajoutées pour keywords importants :
  - "Cartel des Pneus"
  - "indemnisation"
  - "entreprise", "transporteur"
  - "pneus entre 2016 et 2025"
  - "entente anticoncurrentielle"
  - Fabricants : Michelin, Continental, Pirelli, etc.
  - "LEXPORT", "acteur de référence"
  - "contentieux de masse", "pratiques anticoncurrentielles"
- ✅ CSS modifié pour que `<strong>` ne modifie PAS le rendu visuel (`font-weight: inherit`)

### 7. Analytics & Performance
- ✅ @vercel/analytics installé et configuré
- ✅ @vercel/speed-insights installé et configuré

### 8. Fichiers techniques
- ✅ robots.txt créé ([/public/robots.txt](public/robots.txt))
- ✅ sitemap.ts créé (génération dynamique)
- ✅ Sitemap accessible à `/sitemap.xml`

## 📋 Actions requises

### Images à créer

1. **OG Image** - `/public/og-image.jpg`
   - Dimensions : 1200x630px
   - Format : JPG ou PNG
   - Contenu suggéré : Logo LEX-PORT + titre "Cartel des Pneus - Réclamez votre indemnisation"

2. **Favicons**
   ```
   /public/
   ├── favicon.ico          (32x32 ou multi-size)
   ├── icon-192.png         (192x192)
   ├── icon-512.png         (512x512)
   └── apple-touch-icon.png (180x180)
   ```

### Outil recommandé pour générer les favicons
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

Vous pouvez partir de `/public/icon.svg` comme base.

### Vérification Google Search Console
1. Créer un compte Google Search Console
2. Ajouter le site claimtire.com
3. Remplacer `'google-site-verification-code'` dans [layout.tsx:93](src/app/layout.tsx#L93) par le vrai code

## 🔍 Prochaines optimisations recommandées

### Contenu
- [ ] Ajouter une page FAQ avec schema.org FAQPage
- [ ] Créer une page mentions légales
- [ ] Créer une page politique de confidentialité
- [ ] Ajouter un blog pour content marketing

### Technique
- [ ] Configurer les redirects 301 si ancien domaine
- [ ] Implémenter le lazy loading pour les images
- [ ] Optimiser les images avec next/image (déjà fait partiellement)
- [ ] Ajouter un service worker pour PWA offline

### Analytics
- [ ] Configurer Google Analytics 4
- [ ] Configurer les conversions (formulaire contact)
- [ ] Mettre en place des event tracking

### Performance
- [ ] Optimiser les Core Web Vitals
- [ ] Tester sur PageSpeed Insights
- [ ] Vérifier la version mobile

## 📊 Outils de vérification SEO

Testez votre site avec :
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema.org Validator](https://validator.schema.org/)
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 📝 Notes

- Les balises `<strong>` sont invisibles visuellement (CSS : `font-weight: inherit`) mais bénéfiques pour le SEO
- Le sitemap se génère automatiquement via Next.js
- Vercel Analytics fonctionnera automatiquement lors du déploiement sur Vercel

---

**Date de mise à jour** : $(date +%Y-%m-%d)
**Version** : 1.0.0
