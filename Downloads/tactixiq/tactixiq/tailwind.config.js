/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        pitch: {
          50:  '#e8f5ee',
          100: '#c3e6d0',
          200: '#8dcfac',
          300: '#52b585',
          400: '#24a066',
          500: '#0b8a4f',
          600: '#07713f',
          700: '#055830',
          800: '#033f21',
          900: '#012712',
        },
        surface: {
          900: '#060a0f',
          800: '#0a0f16',
          700: '#0d1520',
          600: '#111c2b',
          500: '#162336',
          400: '#1e2f44',
        },
        foundry: {
          cyan:    '#00d4ff',
          violet:  '#a78bfa',
          amber:   '#f59e0b',
          emerald: '#10b981',
          rose:    '#fb7185',
        },
      },
      boxShadow: {
        'glow-emerald': '0 0 20px rgba(16,185,129,0.25)',
        'glow-cyan':    '0 0 20px rgba(0,212,255,0.25)',
        'glow-violet':  '0 0 20px rgba(167,139,250,0.25)',
        'card':         '0 1px 3px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
      },
      animation: {
        'blink':        'blink 1.1s step-end infinite',
        'scan':         'scan 2.5s linear infinite',
        'pulse-slow':   'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-in':     'slideIn 0.35s ease-out forwards',
        'fade-up':      'fadeUp 0.4s ease-out forwards',
      },
      keyframes: {
        blink:   { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        scan:    { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(400%)' } },
        slideIn: { from: { opacity: 0, transform: 'translateX(-8px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        fadeUp:  { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
