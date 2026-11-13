/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#801F3D',
          dark: '#571C35',
          light: '#9E2A4E',
        },
        burgundy: {
          DEFAULT: '#571C35',
          dark: '#2A0B19',
          light: '#6E2343',
        },
        rani: {
          DEFAULT: '#E85D8F',
          light: '#F48EAF',
          dark: '#C7386B',
        },
        saffron: {
          DEFAULT: '#F4A340',
          light: '#F8BC6D',
          dark: '#DB8317',
        },
        gold: {
          DEFAULT: '#D8B56D',
          light: '#F4E3B5',
          dark: '#9F7E39',
          metallic: '#C5A059',
        },
        ivory: {
          DEFAULT: '#FFF6E9',
          light: '#FFFDF9',
          dark: '#F5E6CE',
        },
        emerald: {
          DEFAULT: '#24765B',
          light: '#38A180',
          dark: '#164F3C',
        },
        plum: {
          DEFAULT: '#542746',
          dark: '#3A1530',
          light: '#723B60',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
        hindi: ['"Rozha One"', '"Yatra One"', 'serif'],
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(216, 181, 109, 0.35)',
        'gold-lg': '0 10px 30px -4px rgba(216, 181, 109, 0.45)',
        'maroon': '0 4px 20px -2px rgba(128, 31, 61, 0.35)',
        'royal': '0 20px 40px -15px rgba(87, 28, 53, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F4E3B5 0%, #D8B56D 50%, #9F7E39 100%)',
        'royal-gradient': 'linear-gradient(135deg, #801F3D 0%, #571C35 50%, #542746 100%)',
        'rani-gradient': 'linear-gradient(135deg, #E85D8F 0%, #C7386B 100%)',
        'saffron-gradient': 'linear-gradient(135deg, #F8BC6D 0%, #F4A340 50%, #DB8317 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 253, 249, 0.95) 0%, rgba(255, 246, 233, 0.98) 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
