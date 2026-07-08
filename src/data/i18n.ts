// ============================================================
// I18N — traductions anglaises (le FR reste la langue par défaut,
// affichée dans le DOM ; l'EN est fourni ici et injecté via data-en).
//
// Mécanisme : chaque élément traduisible porte le texte FR visible +
// un attribut data-en (ou data-en-ph pour les placeholders). Un petit
// script global (BaseLayout) bascule le texte selon la langue choisie,
// mémorisée dans localStorage. Aucun composant n'est dupliqué.
//
// Les noms propres ne sont PAS traduits : LumaCare, Auralis OS,
// CAPTCHAT S.L., Operation Smile, Harvard, NASA, Google, UAZ, HVL.
// ============================================================

// --- UI statique (labels, titres de section, boutons, etc.) -------
export const ui = {
  nav: [
    'Home',
    'About',
    'Journey',
    'Experience',
    'Projects',
    'Skills',
    'Photography',
    'Languages',
    'Contact',
  ],
  eyebrow: {
    about: '— About —',
    journey: '— Journey —',
    experience: '— Experience —',
    projects: '— Projects —',
    skills: '— Skills —',
    interests: "— Interests —",
    certifications: '— Education & Certifications —',
    photography: '— Photography —',
    languages: '— Languages —',
    values: '— Values —',
    philosophy: '— Philosophy —',
    contact: '— Contact —',
  },
  hero: {
    tagline:
      'I craft human-centered digital solutions at the intersection of healthcare, technology and creativity.',
    btnProjects: 'View my projects',
    btnContact: 'Contact me',
  },
  contact: {
    intro: 'A question, an opportunity or a collaboration? Write to me.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    subMessage: 'Direct message',
    subProfile: 'Profile',
    phone: 'Phone',
  },
  photography: {
    quote: '“Photography lets me capture emotions, moments and stories.”',
    hint: 'Use the arrows, keyboard or swipe to browse the gallery.',
  },
  footerTop: 'Back to top ↑',
};

// --- Contenu miroir des données (même ordre que les fichiers data) ---
export const enData = {
  profile: {
    role: 'Registered Nurse • Flutter Developer • Photographer',
    aboutLead:
      'Registered Nurse, Flutter developer and passionate photographer, I build projects that connect healthcare, technology and creativity — for useful, human and accessible solutions.',
    pillars: ['Health', 'Technology', 'Photography', 'International'],
    philosophy:
      'I care because health begins with attention to the human being. I develop because technology can simplify and support real needs. I photograph because images tell what words cannot. And I keep learning because my path connects several worlds rather than one.',
    vision: [
      { term: '2 years', desc: 'Strengthen my development skills and build a solid portfolio.' },
      { term: '5 years', desc: 'Work on digital health, AI and public health projects, internationally.' },
      { term: '10 years', desc: 'Connect health, technology and innovation into useful solutions at scale.' },
    ],
  },

  // timeline.ts (ordre identique)
  timeline: [
    { year: '2022', title: 'Bachelor in Nursing Science', desc: 'Start of the program at Adventist University Zurcher (UAZ), Antsirabe.' },
    { year: '2024', title: 'Nursing Degree', desc: 'State-certified nursing diploma after three years of training.' },
    { year: 'April 2024', title: 'COIL HVL – UAZ', desc: 'Online international collaboration between Norway and Madagascar.' },
    { year: 'Sep. 2024', title: 'Erasmus+ in Norway', desc: 'Academic exchange: intercultural immersion and international openness.' },
    { year: 'Oct. 2024', title: 'Anti-polio campaign', desc: 'Vaccinator and community outreach in Ambohibary.' },
    { year: '2024 — present', title: 'CAPTCHAT S.L. — Contact Service Agent', desc: 'Patient follow-up and international coordination, remote.' },
    { year: 'April 2025', title: 'End of the AGLT role', desc: 'Completion of the Video Editor position (editing and visual content).' },
    { year: 'July 2025', title: 'Harvard — Stem Cell Medicine', desc: 'Certification: from scientific research to patient care.' },
    { year: 'August 2025', title: 'NASA — Open Science Essentials', desc: 'Fundamentals of open science and data sharing.' },
    { year: 'August 2025', title: 'Google AI Essentials', desc: 'Applied AI basics and good usage practices.' },
    { year: 'May 2026', title: 'Operation Smile', desc: 'Humanitarian volunteering: welcoming and supporting patients.' },
    { year: '2026', title: 'Web portfolio', desc: 'Design and development of this portfolio (Astro + Tailwind).' },
    { year: '2026', title: 'Auralis OS — concept', desc: 'Smart personal ecosystem: health, learning and projects.' },
  ],

  // experiences.ts (ordre identique)
  experiences: [
    { role: 'Contact Service Agent', period: '2024 — present', location: 'Remote · Barcelona / Madagascar', desc: 'Patient follow-up, appointment scheduling and international coordination.', tags: ['CRM', 'Trengo', 'International'] },
    { role: 'Volunteer', period: 'May 2026', location: 'Madagascar', desc: 'Welcoming, guiding and supporting patients on a humanitarian mission.', tags: ['Humanitarian', 'Health'] },
    { role: 'Vaccinator', period: 'October 2024', location: 'Ambohibary, Madagascar', desc: 'Vaccine administration and community outreach.', tags: ['Public health', 'Prevention'] },
    { role: 'Video Editor', period: 'Until April 2025', location: 'Madagascar', desc: 'Video editing and visual content creation.', tags: ['Premiere Pro', 'After Effects', 'Editing'] },
    { role: 'Academic exchange — ERASMUS+', period: 'Sep. 2024', location: 'Norway', desc: 'Intercultural immersion: education system and international openness.', tags: ['International', 'Erasmus+'] },
  ],

  // projects.ts (ordre identique) — noms non traduits
  projects: [
    { category: 'Health-tech', status: 'Advanced development', desc: 'Burnout and mental-health tracking: MBI test, dashboard, PDF export.', tags: ['Flutter', 'Firebase', 'Mental health'] },
    { category: 'Technology', status: 'Concept / design', desc: 'Smart personal ecosystem to organize health, learning and projects.', tags: ['Flutter', 'AI', 'Architecture'] },
    { category: 'Education', status: 'In development', desc: 'Grades, rankings and school reports management with PDF export.', tags: ['Flutter', 'PDF', 'Database'] },
    { category: 'Portfolio', status: 'Evolving project', desc: 'Gallery and visual identity: portraits, travel, nature and street photography.', tags: ['Portrait', 'Travel', 'Street'] },
  ],

  // skills.ts groups (ordre identique)
  skills: {
    groups: [
      { group: 'Health', items: ['Nursing care', 'Clinical monitoring', 'Vital signs', 'Wound care', 'Injections', 'Infusions', 'Sampling', 'Therapeutic education', 'Prevention', 'Public health', 'Mental health', 'Burnout', 'MBI', 'Supportive care'] },
      { group: 'Development', items: ['Flutter', 'Dart', 'Firebase', 'Git', 'GitHub', 'HTML', 'CSS', 'JavaScript', 'UI/UX', 'Responsive Design', 'App architecture', 'PDF export', 'Dashboards', 'Data management'] },
      { group: 'Photography', items: ['Portrait', 'Street photography', 'Nature', 'Travel', 'Composition', 'Natural light', 'Photo editing', 'Eye for detail', 'Visual direction'] },
      { group: 'Professional tools', items: ['Google Workspace', 'Trengo', 'SAP', 'HubSpot', 'Slack', 'Excel', 'Word', 'PowerPoint', 'Canva', 'CRM', 'Adobe Premiere Pro', 'After Effects'] },
      { group: 'Soft skills', items: ['Empathy', 'Curiosity', 'Creativity', 'Autonomy', 'Organization', 'Communication', 'Teamwork', 'Adaptability', 'Perseverance', 'Observation'] },
    ],
    interests: ['Psychology', 'Travel', 'Design', 'Reading', 'Music', 'Nature', 'Content creation', 'Innovation'],
  },

  // certifications.ts (ordre identique)
  certifications: [
    { title: 'Stem Cell Medicine: From Scientific Research to Patient Care', date: 'July 2025' },
    { title: 'NASA Open Science Essentials', date: 'August 2025' },
    { title: 'Google AI Essentials', date: 'August 2025' },
    { title: 'Generative AI & Prompt Engineering', date: 'August 2025' },
    { title: 'COIL — International Collaboration', date: 'April 2024' },
    { title: 'TEFL Certificate', date: '2025' },
  ],

  // languages.ts (ordre identique)
  languages: [
    { name: 'Malagasy', level: 'Native language' },
    { name: 'French', level: 'Fluent' },
    { name: 'English', level: 'Strong professional level' },
    { name: 'German', level: 'Intermediate, improving' },
    { name: 'Spanish', level: 'Professional basics' },
    { name: 'Norwegian', level: 'Cultural notions' },
  ],

  // values.ts (ordre identique)
  values: [
    { title: 'Humanity', desc: 'Caring for people first, a direct legacy of nursing.' },
    { title: 'Innovation', desc: 'Exploring technology and AI without ever losing the essentials.' },
    { title: 'Creativity', desc: 'Imagining different projects, between code and photography.' },
    { title: 'Perseverance', desc: 'Moving forward even when the path is not yet clear.' },
  ],

  // photography.ts (ordre identique) — categories, titres, descriptions
  photography: [
    { category: 'Portrait', title: 'Smile', description: 'A spontaneous portrait, caught in natural light.' },
    { category: 'Portrait', title: 'The photographer', description: 'Behind the lens: the one who looks and tells.' },
    { category: 'Street', title: 'City in motion', description: 'The daily rhythm of a busy street in Antsirabe.' },
    { category: 'Street', title: 'Cart', description: 'Traditional transport, still central to local life.' },
    { category: 'Street', title: 'Two wheels', description: 'A traffic moment captured on the spot.' },
    { category: 'Street', title: 'Local transport', description: 'Urban mobility scene, between work and travel.' },
    { category: 'Street', title: 'Passers-by', description: 'Silhouettes crossing the city, each with a story.' },
    { category: 'Street', title: 'At work', description: 'The everyday gesture, dignity of street work.' },
    { category: 'Daily', title: 'On the way', description: 'An ordinary moment turned image, between two steps.' },
    { category: 'Daily', title: 'Street scene', description: 'The collective life of a neighborhood, unstaged.' },
    { category: 'Event', title: 'Gathering', description: 'The energy of a shared moment, among friends and strangers.' },
    { category: 'Event', title: 'Graduation', description: 'A celebration, the pride of a milestone reached.' },
    { category: 'Urban', title: 'Urban panorama', description: 'The city as a whole, between lines and perspectives.' },
    { category: 'Urban', title: 'Urban landscape', description: 'A wide frame on architecture and the horizon.' },
    { category: 'Urban', title: 'Architecture', description: 'The lines of a building, a play of shapes and matter.' },
    { category: 'Mood', title: 'Silhouette', description: 'A backlight where emotion reads in the shadow.' },
    { category: 'Mood', title: 'Light trails', description: 'Light stretching out, the poetry of long exposure.' },
  ],

  // filtres photographie — EN parallèle (les valeurs internes restent FR)
  photoFilters: {
    Tous: 'All',
    Portrait: 'Portrait',
    Rue: 'Street',
    Quotidien: 'Daily',
    Événement: 'Event',
    Urbain: 'Urban',
    Ambiance: 'Mood',
  } as Record<string, string>,
};
