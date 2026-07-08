// ============================================================
// TIMELINE — Parcours chronologique.
// Structure : année/date + titre + description courte.
// Ordre chronologique. Le champ `tag` (optionnel) colore le marqueur
// par domaine : sante | international | tech | formation | projet.
// ============================================================

export type TimelineTag = 'sante' | 'international' | 'tech' | 'formation' | 'projet';

export interface TimelineStep {
  year: string;
  title: string;
  desc: string;
  tag?: TimelineTag;
}

export const timeline: TimelineStep[] = [
  {
    year: '2022',
    title: 'Licence en Sciences infirmières',
    desc: 'Début du cursus à l’Université Adventiste Zurcher (UAZ), Antsirabe.',
    tag: 'sante',
  },
  {
    year: '2024',
    title: 'Diplôme en Sciences infirmières',
    desc: 'Obtention du diplôme d’État après trois ans de formation.',
    tag: 'sante',
  },
  {
    year: '2024',
    title: 'COIL HVL – UAZ',
    desc: 'Collaboration internationale en ligne entre la Norvège et Madagascar.',
    tag: 'international',
  },
  {
    year: 'Septembre 2024',
    title: 'Erasmus+ en Norvège',
    desc: 'Échange académique : immersion interculturelle et ouverture internationale.',
    tag: 'international',
  },
  {
    year: 'Octobre 2024',
    title: 'Campagne antipoliomyélite',
    desc: 'Vaccinateur et sensibilisation communautaire à Ambohibary.',
    tag: 'sante',
  },
  {
    year: '2024 — présent',
    title: 'CAPTCHAT S.L. — Contact Service Agent',
    desc: 'Suivi patients et coordination internationale, en remote.',
    tag: 'international',
  },
  {
    year: 'Novembre 2024 - Juin 2026',
    title: 'Fin de l’expérience AGLT',
    desc: 'Aboutissement du poste de Video Editor (montage et contenus visuels).',
    tag: 'projet',
  },
  {
    year: 'Juillet 2025',
    title: 'Harvard — Stem Cell Medicine',
    desc: 'Certification : de la recherche scientifique aux soins du patient.',
    tag: 'formation',
  },
  {
    year: 'Août 2025',
    title: 'NASA — Open Science Essentials',
    desc: 'Fondamentaux de la science ouverte et du partage des données.',
    tag: 'formation',
  },
  {
    year: 'Août 2025',
    title: 'Google AI Essentials',
    desc: 'Bases de l’IA appliquée et bonnes pratiques d’usage.',
    tag: 'tech',
  },
  {
    year: 'Mai 2026',
    title: 'Operation Smile',
    desc: 'Bénévolat humanitaire : accueil et accompagnement des patients.',
    tag: 'sante',
  },
  {
    year: '2026',
    title: 'Portfolio web',
    desc: 'Conception et développement de ce portfolio (Astro + Tailwind).',
    tag: 'projet',
  },
  {
    year: '2026',
    title: 'LumaCare',
    desc: 'Application santé numérique dédiée au suivi du burnout et du bien-être professionnel.',
    tag: 'sante',
  },
];
