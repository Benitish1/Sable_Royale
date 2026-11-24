import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Slate-charcoal — the grey stone columns of the building
        ink: {
          DEFAULT: '#1D2127',
          900: '#1D2127',
          800: '#262B33',
          700: '#323843',
          600: '#454C58',
          500: '#5E6673',
        },
        // Warm sand — the façade walls
        sand: {
          DEFAULT: '#F4EEDC',
          50: '#FAF7EE',
          100: '#F4EEDC',
          200: '#E9DFC2',
          300: '#D9CA9C',
        },
        // Copper / terracotta — window trims, roof edges and brick pavers
        copper: {
          DEFAULT: '#C4855A',
          300: '#E8C2A0',
          400: '#D69F78',
          500: '#C4855A',
          600: '#9A5A35',
          700: '#7A4127',
        },
        // Glass blue — the tall glazed stairwell
        glass: { DEFAULT: '#6F9CC4', 300: '#B5CEE4', 600: '#3F6E99' },
        // Palm green — the gardens
        palm: { DEFAULT: '#4F6B3A', 300: '#A9BE8E', 600: '#3A5229' },
        stone: { 450: '#857E6E' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { luxe: '0.28em' },
      boxShadow: {
        luxe: '0 30px 60px -20px rgba(29, 33, 39, 0.35)',
        soft: '0 10px 30px -12px rgba(29, 33, 39, 0.18)',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'none' } },
        kenburns: { from: { transform: 'scale(1)' }, to: { transform: 'scale(1.12)' } },
        slideIn: { from: { transform: 'translateX(100%)' }, to: { transform: 'none' } },
      },
      animation: {
        fadeUp: 'fadeUp .9s cubic-bezier(.2,.7,.2,1) both',
        kenburns: 'kenburns 18s ease-out both',
        slideIn: 'slideIn .35s cubic-bezier(.2,.7,.2,1) both',
      },
    },
  },
  plugins: [],
};
export default config;
