import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3B',
          light: '#152D4D',
          dark: '#061528',
          soft: '#1E3A5F',
        },
        emerald: {
          DEFAULT: '#0D9488',
          light: '#14B8A6',
          dark: '#0F766E',
          muted: '#CCFBF1',
          soft: '#F0FDFA',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E8D48A',
          dark: '#A68520',
          muted: 'rgba(201, 162, 39, 0.14)',
        },
        cream: {
          DEFAULT: '#FAF9F6',
          dark: '#F3F1EC',
        },
        slate: {
          text: '#1A2332',
          muted: '#5C6478',
        },
        card: {
          bg: '#FFFFFF',
          border: '#E5E3DC',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '76rem',
        narrow: '48rem',
        form: '40rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(11 31 59 / 0.04), 0 8px 24px -4px rgb(11 31 59 / 0.07)',
        cardHover: '0 16px 40px -8px rgb(11 31 59 / 0.12), 0 4px 16px -4px rgb(13 148 136 / 0.08)',
        soft: '0 2px 12px -2px rgb(11 31 59 / 0.06)',
        emerald: '0 4px 20px -4px rgba(13, 148, 136, 0.3)',
        elevated: '0 24px 56px -12px rgb(11 31 59 / 0.14)',
      },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(13, 148, 136, 0.12) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(201, 162, 39, 0.08) 0%, transparent 50%)',
        'dark-gradient': 'linear-gradient(160deg, #0B1F3B 0%, #152D4D 55%, #1E3A5F 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A227 0%, #E8D48A 100%)',
      },
    },
  },
  plugins: [],
}
export default config
