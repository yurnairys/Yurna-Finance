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
        background: {
          DEFAULT: '#ffffff',
          secondary: '#f8fafc',
          muted: '#f1f5f9',
        },
        foreground: {
          DEFAULT: '#0f172a',
          muted: '#64748b',
          subtle: '#94a3b8',
        },
        brand: {
          blue: '#1a5fad',
          'blue-dark': '#1e3a5f',
          violet: '#8b5cf6',
          navy: '#1a2e4a',
          green: '#059669',
        },
        corporate: {
          blue: '#1e3a5f',
          navy: '#0f2744',
        },
        border: {
          DEFAULT: '#e2e8f0',
          strong: '#cbd5e1',
        },
        // aliases for gradual migration
        navy: {
          DEFAULT: '#1e3a5f',
          light: '#1a5fad',
          dark: '#0f2744',
          soft: '#1a2e4a',
        },
        emerald: {
          DEFAULT: '#059669',
          light: '#10b981',
          dark: '#047857',
          muted: '#ecfdf5',
          soft: '#f0fdf4',
        },
        slate: {
          text: '#0f172a',
          muted: '#64748b',
        },
        card: {
          bg: '#ffffff',
          border: '#e2e8f0',
        },
      },
      fontFamily: {
        display: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '80rem',
        narrow: '48rem',
        form: '40rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(15 23 42 / 0.06), 0 4px 16px -2px rgb(15 23 42 / 0.08)',
        cardHover: '0 8px 30px -4px rgb(26 95 173 / 0.15), 0 4px 12px -2px rgb(15 23 42 / 0.08)',
        soft: '0 2px 8px -2px rgb(15 23 42 / 0.06)',
        md: '0 4px 6px -1px rgb(15 23 42 / 0.08), 0 2px 4px -2px rgb(15 23 42 / 0.06)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #1a5fad, #1e3a5f)',
        'hero-mesh':
          'radial-gradient(ellipse 80% 60% at 80% 20%, rgba(26, 95, 173, 0.06) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
export default config
