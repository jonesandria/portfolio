// ============================================================
// SKILLS — compétences par groupe, soft skills et centres d'intérêt.
// Profil hybride : santé + technologie + photographie + outils.
// ============================================================

export interface SkillGroup {
  group: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    group: 'Santé',
    items: [
      'Soins infirmiers',
      'Surveillance clinique',
      'Constantes vitales',
      'Pansements',
      'Injections',
      'Perfusions',
      'Prélèvements',
      'Éducation thérapeutique',
      'Prévention',
      'Santé publique',
      'Santé mentale',
      'Burnout',
      'MBI',
      "Relation d'aide",
    ],
  },
  {
    group: 'Développement',
    items: [
      'Flutter',
      'Dart',
      'Firebase',
      'Git',
      'GitHub',
      'HTML',
      'CSS',
      'JavaScript',
      'UI/UX',
      'Responsive Design',
      "Architecture d'application",
      'Export PDF',
      'Tableaux de bord',
      'Gestion de données',
    ],
  },
  {
    group: 'Photographie',
    items: [
      'Portrait',
      'Street photography',
      'Nature',
      'Voyage',
      'Composition',
      'Lumière naturelle',
      'Retouche photo',
      'Sens du détail',
      'Direction visuelle',
    ],
  },
  {
    group: 'Outils professionnels',
    items: [
      'Google Workspace',
      'Trengo',
      'SAP',
      'HubSpot',
      'Slack',
      'Excel',
      'Word',
      'PowerPoint',
      'Canva',
      'CRM',
      'Adobe Premiere Pro',
      'After Effects',
    ],
  },
  {
    group: 'Soft skills',
    items: [
      'Empathie',
      'Curiosité',
      'Créativité',
      'Autonomie',
      'Organisation',
      'Communication',
      "Travail d'équipe",
      'Adaptabilité',
      'Persévérance',
      "Sens de l'observation",
    ],
  },
];

export const softSkills: string[] = [
  'Empathie',
  'Curiosité',
  'Créativité',
  'Autonomie',
  'Persévérance',
  'Communication',
  'Adaptabilité',
];

export const interests: string[] = [
  'Psychologie',
  'Voyages',
  'Design',
  'Lecture',
  'Musique',
  'Nature',
  'Création de contenu',
  'Innovation',
];
