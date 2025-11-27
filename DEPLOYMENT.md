# Déploiement Burger Bliss

## Dépôt GitHub
- URL : https://github.com/jeanloup33/burger-bliss
- Branche principale : `main`
- Commandes clés : `npm install`, `npm run dev`, `npm run build`, `npm run preview`

## Netlify
- URL de production : https://burgertruck.netlify.app/
- Build command : `npm run build`
- Publish directory : `dist`
- Node : 18+
- SPA fallback : `_redirects` déjà présent (/* /index.html 200)
- SEO : `public/robots.txt` et `public/sitemap.xml` seront servis automatiquement
- PWA : manifest et service worker générés via `vite-plugin-pwa` (auto-update)

## À adapter après déploiement
- Mettre le domaine final (`https://burgertruck.netlify.app/`) dans `index.html` (balise `canonical`, metas OG/Twitter) et dans `public/sitemap.xml`
- Mettre à jour `public/robots.txt` si domaine personnalisé
- Vérifier l’adresse/horaires du JSON-LD dans `index.html`
- Lancer un audit Lighthouse (Performance/SEO/Accessibilité)
