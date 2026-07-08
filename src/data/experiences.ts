// ============================================================
// EXPERIENCES — cards bordées.
// Structure uniforme : rôle, organisation, période, lieu, description
// courte, et outils/compétences (tags).
// ============================================================

export interface Experience {
  role: string;
  org: string;
  period: string;
  location: string;
  desc: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Contact Service Agent',
    org: 'CAPTCHAT S.L.',
    period: '2024 — présent',
    location: 'Remote · Barcelone / Madagascar',
    desc: 'Suivi patients, planification des rendez-vous et coordination internationale.',
    tags: ['CRM', 'Trengo', 'International'],
  },
  {
    role: 'Bénévole',
    org: 'Operation Smile',
    period: 'Mai 2026',
    location: 'Madagascar',
    desc: 'Accueil, orientation et accompagnement des patients en mission humanitaire.',
    tags: ['Humanitaire', 'Santé'],
  },
  {
    role: 'Vaccinateur',
    org: 'Campagne antipoliomyélite',
    period: 'Octobre 2024',
    location: 'Ambohibary, Madagascar',
    desc: 'Administration du vaccin et sensibilisation communautaire.',
    tags: ['Santé publique', 'Prévention'],
  },
  {
    role: 'Video Editor',
    org: 'AGLT',
    period: "Jusqu'en avril 2025",
    location: 'Madagascar',
    desc: 'Montage vidéo et création de contenus visuels.',
    tags: ['Premiere Pro', 'After Effects', 'Montage'],
  },
  {
    role: 'Échange académique — ERASMUS+',
    org: 'Programme COIL HVL – UAZ',
    period: 'Sept. 2024',
    location: 'Norvège',
    desc: 'Immersion interculturelle : système éducatif et ouverture internationale.',
    tags: ['International', 'Erasmus+'],
  },
];
