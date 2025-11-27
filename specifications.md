# Cahier des Charges - Burger Bliss

## 1. Présentation Générale du Projet

### 1.1 Contexte
Burger Bliss est un foodtruck américain fictif spécialisé dans les burgers gourmets, les frites maison et le poulet croustillant. Le projet consiste à développer une **Single Page Application (SPA)** moderne, immersive et rassurante pour présenter l'activité, le menu et les emplacements du camion.

### 1.2 Objectifs & Cibles
*   **Objectifs Marketing :**
    *   **Attirer :** Donner faim immédiatement grâce à un design très visuel ("Food Porn" qualitatif).
    *   **Rassurer :** Mettre en avant le professionnalisme, l'hygiène et la qualité des produits.
    *   **Convertir :** Faciliter l'accès aux informations cruciales (Où nous trouver ? Quoi manger ?).
*   **Promesse de Marque :** "Le meilleur du fast-food US, rapide, généreux et rassurant."
*   **Cibles :** Jeunes actifs, étudiants, familles, amateurs de street-food US.

## 2. Identité de Marque & Univers Graphique

### 2.1 Direction Artistique
*   **Style :** Fast-food US chaleureux, légèrement vintage mais résolument moderne et "clean". Pas de "cheap".
*   **Ambiance :** Conviviale, gourmande, dynamique.
*   **Mascotte (Inspiration) :** Poulet cuistot jovial (ne pas copier l'image de réf, s'en inspirer pour l'esprit).

### 2.2 Palette de Couleurs
*   **Primaire Brun :** `#5D4037` (Base solide, rappel du grillé/viande)
*   **Primaire Orange :** `#E65100` (Appétit, dynamisme, cheddar)
*   **Secondaire Ocre/Moutarde :** `#FFB300` (Frites, touches vintage)
*   **Secondaire Crème :** `#FFF8E1` (Fond chaleureux, lisibilité)
*   **Accent Vert :** `#2E7D32` (Fraîcheur, veggie, bio)
*   **Neutres :** Gris ardoise pour les textes, Blanc pur pour les cartes.

### 2.3 Typographie
*   **Titres (Headings) :** *Anton* ou *Bebas Neue* (Impact, esprit poster/enseigne).
*   **Corps de texte :** *Inter* ou *Outfit* (Lisibilité, modernité, géométrique).

## 3. Architecture de la Single Page

La navigation se fait au scroll vertical avec un menu sticky pour l'accès rapide (ancres).

### 3.1 Hero / Above the fold
*   **Visuel :** Grand visuel haute qualité (burger juteux ou foodtruck en action) avec effet Parallax.
*   **Contenu :**
    *   Logo Burger Bliss.
    *   Baseline : "Le vrai goût de l'Amérique, au coin de votre rue."
    *   CTA Principal : "Voir le Menu" (Scroll vers Menu).
    *   CTA Secondaire : "Nous Trouver" (Scroll vers Emplacements).

### 3.2 Section "Notre Histoire"
*   **But :** Humaniser et ancrer la marque.
*   **Contenu :** Storytelling court sur l'origine du camion, la passion du "vrai" burger.
*   **Visuel :** Photo du chef/équipe, ambiance cuisine.

### 3.3 Section "Menu"
*   **Structure :** Onglets ou grille filtrable (Burgers, Frites, Chicken, Menus, Desserts).
*   **Composants :** "Product Cards" interactives.
    *   Photo détourée ou zoomée.
    *   Nom, Ingrédients clés.
    *   Prix.
    *   Tags : 🌶️ Spicy, 🌱 Veggie, ⭐ Best-seller.
*   **Interaction :** Hover effect (zoom, glow), clic pour détail (Dialog/Modal optionnel).

### 3.4 Section "Qualité & Engagements"
*   **But :** Rassurer (Hygiène, Sourcing).
*   **Contenu :**
    *   Icônes + Textes courts : "Viande 100% Française", "Frites Maison", "Normes HACCP respectées", "Emballages recyclables".

### 3.5 Section "Le Foodtruck & Emplacements"
*   **But :** Information critique (Où et Quand ?).
*   **Contenu :**
    *   Timeline ou Slider des prochains spots.
    *   Liste claire : "Lundi : Place de la Mairie", "Mardi : Zone Tech".
    *   Carte interactive (Google Maps embed ou stylisée).

### 3.6 Section "Avis Clients"
*   **Format :** Carrousel de témoignages.
*   **Style :** Cartes avec étoiles, citation, prénom. Preuve sociale forte.

### 3.7 Section "FAQ"
*   **Format :** Accordéon (Accordion shadcn/ui).
*   **Questions types :** "Acceptez-vous la CB ?", "Options végétariennes ?", "Privatisation possible ?".

### 3.8 Section "Contact & Footer"
*   **Formulaire :** Nom, Email, Message.
*   **Infos :** Liens réseaux sociaux (Insta, FB), Téléphone/WhatsApp.
*   **Footer :** Copyright, Mentions légales, Liens rapides.

## 4. Spécifications UX/UI & Animations

### 4.1 Navigation & Layout
*   **Menu Sticky :** Reste visible au scroll. Changement d'état au scroll (fond transparent -> fond plein).
*   **Scroll-to-top :** Bouton flottant (bas-droite) apparaissant après 300px de scroll.

### 4.2 Animations (Framer Motion)
*   **Apparition (Scroll Reveal) :** Fade-in + Slide-up progressif pour chaque section.
*   **Parallax :**
    *   Hero Background : Vitesse 0.5x.
    *   Section Emplacements : Fond carte ou texture vitesse 0.2x.
    *   *Désactivé sur mobile* pour la performance.
*   **Micro-interactions :**
    *   **Boutons :** Scale 0.95 au clic (tap), légère ombre au hover.
    *   **Cartes Menu :** Scale 1.03 + Ombre portée accentuée au hover.
    *   **Tags :** Changement de couleur de fond au hover.

## 5. Spécifications Techniques

### 5.1 Stack Technique
*   **Framework :** React 19.2
*   **Langage :** TypeScript 5.9 (Strict mode activé)
*   **Build Tool :** Vite 7.2
*   **Styling :** TailwindCSS 3.4
*   **UI Library :** shadcn/ui (basé sur Radix UI)
*   **Animations :** Framer Motion
*   **Icônes :** Lucide React

### 5.2 Architecture du Code (Proposition)
```
src/
├── assets/          # Images, fonts, static files
├── components/      # Composants réutilisables
│   ├── ui/          # Composants shadcn/ui (Button, Card, etc.)
│   ├── layout/      # Header, Footer, Container
│   └── shared/      # SectionTitle, ProductCard
├── sections/        # Composants majeurs de la page (Hero, Menu, etc.)
├── hooks/           # Custom hooks (useScrollPosition, etc.)
├── lib/             # Utilitaires (utils.ts, constants.ts)
├── types/           # Définitions TypeScript globales
├── App.tsx          # Point d'entrée principal
└── main.tsx         # Montage React
```

### 5.3 Performance
*   **Lazy Loading :** Chargement différé des images (loading="lazy") et des composants lourds (ex: Map) si nécessaire.
*   **Optimisation Images :** Format WebP/AVIF.
*   **Bundle Size :** Utilisation du code splitting de Vite.

## 6. Accessibilité (WCAG AA)

*   **Sémantique :** Utilisation correcte de `<header>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h6>`.
*   **Navigation Clavier :** Focus visible (`ring-offset`, `ring`) sur tous les éléments interactifs.
*   **Couleurs :** Ratio de contraste texte/fond > 4.5:1.
*   **Images :** Attributs `alt` descriptifs pour toutes les images de contenu.
*   **ARIA :** Labels pour les boutons sans texte (ex: icônes réseaux sociaux).

## 7. Contenus Textuels (Exemples)

*   **Baseline Hero :** "Burger Bliss : L'Amérique dans votre assiette."
*   **Intro Histoire :** "Tout a commencé par un voyage sur la Route 66..."
*   **Item Menu (Ex) :**
    *   *Le Classic Bliss* : "Steak haché Black Angus, Cheddar affiné, Salade, Tomate, Oignons caramélisés, Sauce secrète Bliss." - 12€
*   **Avis Client :** "Les meilleures frites de la ville, sans hésitation ! Et le service est top." - Thomas D.

---
*Document généré par l'assistant Antigravity pour Burger Bliss.*
