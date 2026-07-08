// ============================================================
// PROJECTS — projets avec statut et placeholder d'image.
// `image` : laissez vide ('') pour afficher le placeholder,
// ou renseignez un chemin (ex : '/projects/lumacare.jpg')
// après avoir déposé l'image dans le dossier public/.
// ============================================================

export interface Project {
  name: string;
  category: string;
  status: string;
  desc: string;
  tags: string[];
  placeholder: string;
  image?: string;
}

export const projects: Project[] = [
  {
    name: 'LumaCare',
    category: 'Health-tech',
    status: 'Développement avancé',
    desc: 'Suivi du burnout et de la santé mentale : test MBI, tableau de bord, export PDF.',
    tags: ['Flutter', 'Firebase', 'Santé mentale'],
    placeholder: 'LumaCare — capture',
    image: "/images/Lumacare.png",
  },
  {
    name: 'Auralis OS',
    category: 'Technologie',
    status: 'Concept / conception',
    desc: 'Écosystème personnel intelligent pour organiser santé, apprentissage et projets.',
    tags: ['Flutter', 'IA', 'Architecture'],
    placeholder: 'Auralis OS — capture',
    image: "/images/Auralis.png",
  },
  {
    name: 'Bulletin scolaire',
    category: 'Éducation',
    status: 'En développement',
    desc: 'Gestion des notes, classements et bulletins scolaires avec export PDF.',
    tags: ['Flutter', 'PDF', 'Base de données'],
    placeholder: 'Bulletin scolaire — capture',
    image: "/images/Bulletin.png",
  },
  {
    name: 'Photography',
    category: 'Portfolio',
    status: 'Projet évolutif',
    desc: 'Galerie et identité visuelle : portraits, voyages, nature et street photography.',
    tags: ['Portrait', 'Voyage', 'Street'],
    placeholder: 'Photography — capture',
    image: "/images/Photography.png",
  },
];
