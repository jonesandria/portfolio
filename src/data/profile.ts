// ============================================================
// PROFILE — informations générales, Hero, À propos, Philosophie.
// Modifiez librement ces valeurs : elles alimentent tout le site.
// NB : aucune date de naissance n'est affichée publiquement.
// ============================================================

export const profile = {
  // Identité
  firstName: 'Jonès',
  lastName: 'ANDRIANINA',
  initials: 'AJ',

  // Hero
  eyebrow: 'Healthcare • Technology • Photography • Innovation',
  role: "Infirmier diplômé d'État • Développeur Flutter • Photographe",
  tagline:
    "Je conçois des solutions numériques humaines à l'intersection de la santé, de la technologie et de la créativité.",
  portraitPlaceholder: 'Photo professionnelle',

  // À propos
  aboutLead:
    "Infirmier diplômé d'État, développeur Flutter et photographe passionné, je construis des projets qui relient la santé, le numérique et la créativité — pour des solutions utiles, humaines et accessibles.",
  aboutPillars: [
    { label: 'Santé', accent: 'teal' as const },
    { label: 'Technologie', accent: 'blue' as const },
    { label: 'Photographie', accent: 'gold' as const },
    { label: 'International', accent: 'teal' as const },
  ],

  // Localisation
  location: 'Antsirabe, Madagascar',

  // Philosophie & vision
  philosophy:
    "Je soigne parce que la santé commence par l'attention portée à l'humain. Je développe parce que la technologie peut simplifier et accompagner de vrais besoins. Je photographie parce que l'image raconte ce que les mots ne disent pas. Et j'apprends parce que mon parcours relie plusieurs mondes plutôt qu'un seul.",
  vision: [
    { term: '2 ans', desc: 'Renforcer mes compétences en développement et construire un portfolio solide.' },
    { term: '5 ans', desc: "Travailler sur des projets en santé digitale, IA et santé publique, à l'international." },
    { term: '10 ans', desc: 'Relier santé, technologie et innovation pour des solutions utiles à grande échelle.' },
  ],

  // Copyright (pied de page)
  copyrightYear: 2026,
};

export type Profile = typeof profile;
