# Portfolio — Andrianina Jonès

Portfolio éditorial premium d'Andrianina Jonès — infirmier diplômé d'État, développeur Flutter et photographe. Construit avec **Astro**, **Tailwind CSS** et **TypeScript**.

## Fonctionnalités

- Design éditorial premium (Sora / Inter / Playfair Display, accent or)
- **Dark mode par défaut** + **light mode ivoire**
- Bascule de thème avec sauvegarde `localStorage` (aucun flash au chargement)
- Navigation responsive avec menu hamburger sur mobile
- Cards d'expériences et de certifications bordées
- Projets avec statut, galerie photo filtrable (placeholders)
- Sections : Accueil, À propos, Parcours, Expériences, Projets, Compétences, Certifications, Photographie, Langues, Valeurs, Philosophie, Contact
- Contact : email, téléphone, WhatsApp, GitHub, LinkedIn, Facebook, Instagram
- Mobile-first, animations légères (fade-up au scroll)
- **Contenu séparé du design** : toutes les données dans `src/data/`
- Aucune date de naissance affichée publiquement

## Prérequis

- [Node.js](https://nodejs.org) 18.14 ou plus récent
- npm (fourni avec Node)

## Commandes

```bash
npm install     # installe les dépendances
npm run dev     # serveur de développement → http://localhost:4321
npm run build   # génère le site statique dans dist/
npm run preview # prévisualise le build de production localement
```

## Structure du projet

```
Portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── data/              # ← Contenu (à modifier librement)
│   │   ├── profile.ts        # identité, hero, à propos, philosophie
│   │   ├── timeline.ts       # parcours
│   │   ├── experiences.ts    # expériences
│   │   ├── projects.ts       # projets + statut
│   │   ├── certifications.ts # formations & certifications
│   │   ├── skills.ts         # compétences, soft skills, intérêts
│   │   ├── languages.ts      # langues
│   │   ├── values.ts         # valeurs
│   │   └── socials.ts        # email, téléphone, réseaux
│   ├── components/        # ← Design (une section = un composant)
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Timeline.astro
│   │   ├── Experiences.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   ├── Certifications.astro
│   │   ├── Photography.astro
│   │   ├── Languages.astro
│   │   ├── Values.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── BaseLayout.astro   # <head>, polices, init du thème, reveal
│   ├── pages/
│   │   └── index.astro        # assemble toutes les sections
│   └── styles/
│       └── global.css         # tokens de thème (dark/ivoire) + Tailwind
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Comment modifier le contenu

Tout le texte du site vit dans `src/data/`. Vous n'avez pas besoin de toucher au HTML pour mettre à jour votre portfolio.

- **Ajouter une expérience** → `src/data/experiences.ts`
- **Ajouter un projet** → `src/data/projects.ts` (mettez `image: '/projects/xxx.jpg'` après avoir déposé l'image dans `public/projects/`)
- **Changer une coordonnée** → `src/data/socials.ts`

### Retirer le téléphone

Le téléphone est isolé dans son propre bloc. Dans `src/data/socials.ts`, passez :

```ts
export const phone = { show: false, ... };
```

Le bloc disparaît alors de la section Contact (aucune autre modification nécessaire).

### Compléter les liens réseaux

Dans `src/data/socials.ts`, remplacez les `href: '#'` de LinkedIn, Facebook et Instagram par vos vraies URL et retirez `pending: true`.

## Thème & couleurs

Les couleurs sont pilotées par des variables CSS dans `src/styles/global.css` :
`[data-theme="dark"]` (défaut) et `[data-theme="light"]` (ivoire). Modifiez-y une valeur pour ajuster toute la palette. Les classes Tailwind (`bg-bg`, `text-ink`, `border-line`, `text-gold-text`, …) sont définies dans `tailwind.config.mjs`.
