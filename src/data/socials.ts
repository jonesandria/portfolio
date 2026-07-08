// ============================================================
// SOCIALS — coordonnées et réseaux affichés dans la section Contact.
//
// • `email` et `phone` sont séparés : le TÉLÉPHONE est isolé dans son
//   propre objet `phone` afin de pouvoir être retiré très facilement.
//   Pour masquer le téléphone : passez `phone.show` à false (ou
//   supprimez le bloc correspondant dans Contact.astro).
// • Les liens marqués « à compléter » attendent votre vraie URL.
// ============================================================

export const email = 'andrianinajones44@gmail.com';

// --- Bloc téléphone (autonome, facile à retirer) -----------------
export const phone = {
  show: true,
  display: '+261 34 37 541 59',
  href: 'tel:+261343754159',
};
// -----------------------------------------------------------------

export interface Social {
  key: string;
  label: string;
  href: string;
  // `pending` = lien à compléter (affiche une mention discrète).
  pending?: boolean;
}

export const socials: Social[] = [
  { key: 'whatsapp', label: 'Me contacter sur WhatsApp', href: 'https://wa.me/26134375459' },
  { key: 'github', label: 'github.com/jonesandria', href: 'https://github.com/jonesandria' },
  { key: 'linkedin', label: 'LinkedIn — Andrianina Jonès', href: '#', pending: true },
  { key: 'facebook', label: 'Facebook', href: '#', pending: true },
  { key: 'instagram', label: 'Instagram', href: '#', pending: true },
];

// Accès direct par clé (pratique dans les composants).
export const socialByKey = Object.fromEntries(socials.map((s) => [s.key, s])) as Record<string, Social>;
