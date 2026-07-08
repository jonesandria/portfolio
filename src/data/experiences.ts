// ============================================================
// EXPERIENCES — cards bordées.
// ============================================================

export interface Experience {
  role: string;
  org: string;
  period: string;
  desc: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Bénévole',
    org: 'Operation Smile',
    period: 'Mai 2026',
    desc: 'Mission humanitaire santé : accueil, orientation et accompagnement des patients.',
    tags: ['Humanitaire', 'Santé'],
  },
  {
    role: 'Contact Service Agent',
    org: 'CAPTCHAT S.L.',
    period: '2025 — présent',
    desc: 'Suivi patients, CRM, planification des rendez-vous, coordination internationale.',
    tags: ['CRM', 'International'],
  },
  {
    role: 'Video Editor',
    org: 'AGLT',
    period: "Jusqu'en avril 2025",
    desc: 'Montage vidéo et création de contenus visuels, Adobe Premiere Pro & After Effects.',
    tags: ['Montage', 'Créativité'],
  },
  {
    role: 'Vaccinateur',
    org: 'Campagne antipoliomyélite',
    period: 'Octobre 2024',
    desc: 'Administration du vaccin et sensibilisation à Ambohibary, Madagascar.',
    tags: ['Santé publique', 'Prévention'],
  },
  {
    role: 'Échange académique — ERASMUS+',
    org: 'Programme COIL HVL – UAZ, Norvège',
    period: 'Sept. 2024',
    desc: 'Immersion interculturelle : système éducatif, autonomie et ouverture internationale.',
    tags: ['International', 'Erasmus+'],
  },
];
