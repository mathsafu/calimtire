# Système de Boutons Premium - Cartel des Pneus

## Vue d'ensemble

Système de boutons cohérent avec effet glossy premium basé sur le design LEX-PORT V2, optimisé pour Tailwind CSS 4.

## Variantes disponibles

### 1. **Primary** - Glassmorphism transparent
**Usage:** Navigation header, boutons secondaires
- Effet glass avec `backdrop-blur-md`
- Border subtile `border-white/30`
- Multi-layer shadows pour profondeur 3D
- Effet glossy avec inset shadows
- Hover: translation vers le haut + intensification shadows

**Composants:** Header navigation

### 2. **Secondary** - Gradient bleu premium
**Usage:** CTA principal, bouton submit formulaire
- Gradient `from-primary-600 to-primary-500`
- Glow effect coloré (ombre bleue)
- Inset shadows pour effet glossy
- Hover: changement gradient + scale + translation
- Police bold pour emphase

**Composants:** Hero CTA "Évaluation gratuite", Formulaire "Envoyer ma demande"

### 3. **Glossy Light** - Ultra premium blanc
**Usage:** Bouton héro secondaire "En savoir plus"
- Background noir avec blend mode
- Multiples inset shadows pour effet 3D intense
- Backdrop blur 35px
- Texte noir sur fond clair
- Effet ultra premium

**Composants:** Hero section "En savoir plus"

### 4. **Glossy Dark** - Premium sombre
**Usage:** Alternative pour navigation (non utilisé actuellement)
- Background sombre #171717
- Inset shadows pour relief
- Texte blanc
- Style discret et élégant

### 5. **Outline** - Bordure simple
**Usage:** Boutons tertiaires
- Transparent avec border
- Hover: inversion couleurs

### 6. **Ghost** - Minimal
**Usage:** Boutons discrets
- Transparent
- Hover: légère teinte

## Tailles disponibles

```typescript
xs: "px-3 py-1.5 text-xs"    // Très petit
sm: "px-6 py-2.5 text-sm"    // Header navigation
md: "px-8 py-3 text-base"    // Standard
lg: "px-12 py-4 text-lg"     // Hero CTA
```

## Utilisation

```tsx
import { Button } from "@/components/ui/button"

// Navigation header
<Button variant="primary" size="sm">
  L'affaire
</Button>

// Hero CTA principal
<Button variant="secondary" size="lg">
  Évaluation gratuite
</Button>

// Hero CTA secondaire
<Button variant="glossy-light" size="lg">
  En savoir plus
</Button>

// Formulaire submit
<Button variant="secondary" size="lg" isLoading={isSubmitting}>
  Envoyer ma demande
</Button>
```

## Élément spécial: Scroll Indicator

Bouton circulaire en bas du hero avec:
- Style glassmorphism cohérent
- Animation bounce
- Même système de shadows que primary
- Icon ChevronDown

## Technologies

- **Tailwind CSS 4**: Utilisation de la syntaxe moderne
- **Classes inline**: Shadows complexes via `shadow-[...]`
- **Backdrop filters**: `backdrop-blur-md` pour effet glass
- **Transitions**: `duration-300` pour animations fluides
- **Focus states**: Ring blanc semi-transparent

## Détails techniques

### Multi-layer shadows pour effet glossy
```
shadow-[
  0_0_3px_rgba(0,0,0,0.1),                    // Ombre extérieure subtile
  0_2px_14px_rgba(0,0,0,0.12),                // Ombre profondeur
  inset_5px_5px_1px_-5px_rgba(255,255,255,0.75),   // Highlight top-left
  inset_-5px_-5px_1px_-5px_rgba(255,255,255,0.8), // Highlight bottom-right
  inset_2px_2px_2px_-1px_rgba(255,255,255,0.75),  // Shine interne
  inset_-2px_-2px_2px_-1px_rgba(255,255,255,0.75), // Shine interne 2
  inset_0_0_2px_2px_rgba(255,255,255,0.15),       // Glow interne
  inset_0_0_2px_2px_#999999,                       // Border interne
  inset_0_0_27px_#F2F2F2                          // Lumière centrale
]
```

Cette combinaison crée:
- Profondeur 3D
- Effet brillant/glossy
- Border subtile interne
- Glow lumineux au centre

### Border premium
```
border-[0.5px] border-white/30
```
Border ultra-fine avec opacité pour effet premium sans être trop marquée.

## Consistance

✅ Tous les boutons utilisent `rounded-full`
✅ Transitions uniformes `duration-300`
✅ Hover effects cohérents (translate-y, scale)
✅ Active states avec `scale-95`
✅ Focus rings accessibles
✅ Disabled states avec `opacity-50`

## Accessibilité

- Focus visible avec ring
- Curseur disabled pour états désactivés
- Labels appropriés (aria-label sur scroll indicator)
- Contraste suffisant pour lisibilité
- États hover/active/focus bien définis

---

*Design system v1.0 - Compatible Tailwind CSS 4*
