// ============================================================
// LANGUAGES — langues parlées et niveau.
// ============================================================

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: 'Malgache', level: 'Langue maternelle' },
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Bon niveau professionnel' },
  { name: 'Allemand', level: 'Intermédiaire, en progression' },
  { name: 'Espagnol', level: 'Base professionnelle' },
  { name: 'Norvégien', level: 'Notions culturelles' },
];
