// ============================================================
// TIMELINE — Parcours chronologique.
// ============================================================

export interface TimelineStep {
  year: string;
  title: string;
  desc: string;
}

export const timeline: TimelineStep[] = [
  {
    year: '2022',
    title: 'Début de la Licence en Sciences infirmières',
    desc: 'Université Adventiste Zurcher (UAZ), Antsirabe, Madagascar.',
  },
  {
    year: '2024',
    title: 'Diplôme en Sciences infirmières',
    desc: 'Programme COIL HVL–UAZ, échange ERASMUS+ en Norvège, campagne de vaccination contre la poliomyélite.',
  },
  {
    year: '2025 — présent',
    title: 'Contact Service Agent',
    desc: 'CAPTCHAT S.L., en remote entre Barcelone et Madagascar.',
  },
  {
    year: '2025',
    title: 'Formations complémentaires',
    desc: 'Harvard (Stem Cell Medicine), NASA Open Science Essentials, Google AI Essentials, Prompt Engineering, TEFL.',
  },
  {
    year: '2026',
    title: "Aujourd'hui",
    desc: 'Bénévolat Operation Smile, portfolio et projets LumaCare, Bulletin scolaire, Auralis OS et photographie.',
  },
];
