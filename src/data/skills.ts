// ============================================================
// SKILLS — compétences par groupe, soft skills et centres d'intérêt.
// ============================================================

export interface SkillGroup {
  group: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { group: 'Santé', items: ['Surveillance clinique & constantes', 'Vaccination & prévention', "Relation d'aide & écoute", 'Pansements, injections, perfusions'] },
  { group: 'Développement', items: ['Flutter & Dart', 'UI/UX mobile', 'Firebase', "Architecture d'application"] },
  { group: 'IA & Données', items: ['Google AI Essentials', 'Prompt Engineering', 'Analyse & tableaux de bord', 'Export PDF'] },
  { group: 'Outils professionnels', items: ['Google Workspace', 'CRM & Trengo', 'Excel & SAP', 'Canva & Figma'] },
  { group: 'Photographie', items: ['Portrait', 'Retouche', 'Composition', 'Lumière naturelle'] },
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
