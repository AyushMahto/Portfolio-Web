/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060A',
          900: '#0A0C14',
          800: '#12141F',
          700: '#1A1D2B',
        },
        surface: {
          light: '#F7F8FB',
          card: '#FFFFFF',
        },
        violet: {
          400: '#9B7FFF',
          500: '#7C5CFC',
          600: '#6440E8',
        },
        cyan: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-light': 'linear-gradient(rgba(124,92,252,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.06) 1px, transparent 1px)',
        'aurora': 'radial-gradient(60% 50% at 20% 20%, rgba(124,92,252,0.35) 0%, transparent 60%), radial-gradient(50% 40% at 80% 0%, rgba(34,211,238,0.25) 0%, transparent 60%), radial-gradient(40% 40% at 50% 100%, rgba(245,158,11,0.15) 0%, transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(124,92,252,0.35)',
        'glow-cyan': '0 0 40px rgba(34,211,238,0.3)',
        card: '0 8px 40px rgba(0,0,0,0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
    },
  },
  plugins: [],
}
