/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      // Colors are driven by CSS variables (see src/styles/global.css)
      // so the same class works in dark mode and ivory light mode.
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-soft': 'var(--surface-soft)',
        ink: 'var(--text)',
        muted: 'var(--text-secondary)',
        line: 'var(--border)',
        gold: '#D6B46A', // constant accent (buttons, dots)
        navy: '#0B1220', // constant accent (text on gold)
        'gold-text': 'var(--gold-text)',
        'teal-text': 'var(--teal-text)',
        'blue-text': 'var(--blue-text)',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease both',
      },
    },
  },
  plugins: [],
};
