// ============================================================
// PHOTOGRAPHY — galerie éditoriale (masonry).
//
// Une entrée = une vraie image de public/images/photography/.
// Chaque carte affiche : l'image, la catégorie (toujours visible),
// le titre (au survol) et la description courte (au clic).
//
// Pour ajouter une photo : déposez le fichier dans
// public/images/photography/ puis ajoutez un objet ci-dessous.
// Les catégories définissent aussi les filtres de la section.
// ============================================================

export interface Photo {
  src: string;
  title: string;
  category: string;
  description: string;
}

export const photos: Photo[] = [
  {
    src: '/images/photography/photo-portrait-smile.jpg',
    title: 'Sourire',
    category: 'Portrait',
    description: 'Un portrait spontané, capté dans la lumière naturelle.',
  },
  {
    src: '/images/photography/photo-photographer.jpg',
    title: 'Le photographe',
    category: 'Portrait',
    description: "Derrière l'objectif : celui qui regarde et raconte.",
  },
  {
    src: '/images/photography/photo-street-city.jpg',
    title: 'Ville en mouvement',
    category: 'Rue',
    description: "Le rythme quotidien d'une rue animée d'Antsirabe.",
  },
  {
    src: '/images/photography/photo-street-horse.jpg',
    title: 'Charrette',
    category: 'Rue',
    description: 'Transport traditionnel, encore au cœur de la vie locale.',
  },
  {
    src: '/images/photography/photo-street-motorbike.jpg',
    title: 'Deux-roues',
    category: 'Rue',
    description: 'Un instant de circulation saisi sur le vif.',
  },
  {
    src: '/images/photography/photo-street-transport.jpg',
    title: 'Transport local',
    category: 'Rue',
    description: 'Scène de mobilité urbaine, entre travail et déplacements.',
  },
  {
    src: '/images/photography/photo-street-walking.jpg',
    title: 'Passants',
    category: 'Rue',
    description: 'Des silhouettes qui traversent la ville, chacune son histoire.',
  },
  {
    src: '/images/photography/photo-street-worker.jpg',
    title: 'Au travail',
    category: 'Rue',
    description: 'Le geste du quotidien, dignité du travail de rue.',
  },
  {
    src: '/images/photography/photo-daily-life-walker.jpg',
    title: 'Sur le chemin',
    category: 'Quotidien',
    description: 'Un moment ordinaire devenu image, entre deux pas.',
  },
  {
    src: '/images/photography/photo-daily-street-group.jpg',
    title: 'Scène de rue',
    category: 'Quotidien',
    description: "La vie collective d'un quartier, captée sans mise en scène.",
  },
  {
    src: '/images/photography/photo-event-group.jpg',
    title: 'Rassemblement',
    category: 'Événement',
    description: "L'énergie d'un moment partagé, entre proches et inconnus.",
  },
  {
    src: '/images/photography/photo-graduation-event.jpg',
    title: 'Remise de diplômes',
    category: 'Événement',
    description: "Une célébration, la fierté d'un cap franchi.",
  },
  {
    src: '/images/photography/photo-urban-city.jpg',
    title: 'Panorama urbain',
    category: 'Urbain',
    description: 'La ville dans son ensemble, entre lignes et perspectives.',
  },
  {
    src: '/images/photography/photo-urban-landscape.jpg',
    title: 'Paysage urbain',
    category: 'Urbain',
    description: "Un cadrage large sur l'architecture et l'horizon.",
  },
  {
    src: '/images/photography/photo-architecture-ekar.jpg',
    title: 'Architecture',
    category: 'Urbain',
    description: "Les lignes d'un édifice, jeu de formes et de matière.",
  },
  {
    src: '/images/photography/photo-ambiance-silhouette.jpg',
    title: 'Silhouette',
    category: 'Ambiance',
    description: "Un contre-jour où l'émotion se lit dans l'ombre.",
  },
  {
    src: '/images/photography/photo-light-trail.jpg',
    title: 'Traînées de lumière',
    category: 'Ambiance',
    description: "La lumière qui s'étire, poésie de la longue exposition.",
  },
];

// Filtres dérivés des catégories présentes (ordre stable, « Tous » en tête).
export const photoFilters: string[] = [
  'Tous',
  ...Array.from(new Set(photos.map((p) => p.category))),
];
