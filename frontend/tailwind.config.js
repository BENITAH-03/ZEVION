/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        zevion: {
          black: '#050505',
          charcoal: '#121212',
          panel: '#17171a',
          border: '#2a2a2e',
          gold: '#d4a638',
          'gold-light': '#f2c464',
          'gold-dark': '#a97c1f',
          gray: '#9a9a9f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Rajdhani"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f2c464 0%, #d4a638 45%, #a97c1f 100%)',
        'radial-fade': 'radial-gradient(ellipse at center, rgba(212,166,56,0.12) 0%, rgba(0,0,0,0) 70%)',
      },
      boxShadow: {
        gold: '0 0 40px -10px rgba(212, 166, 56, 0.45)',
        card: '0 10px 30px -12px rgba(0,0,0,0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'arrow-flow': 'arrowFlow 1.6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        arrowFlow: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
