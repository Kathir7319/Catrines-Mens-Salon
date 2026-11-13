/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0a0c0f',
          900: '#101318',
          850: '#151921',
          800: '#1c222c',
          750: '#222936',
          700: '#2a3342',
          600: '#3d4a5f',
        },
        gold: {
          200: '#fef08a',
          300: '#fde047',
          400: '#f2c94c',
          500: '#d4af37', // Classic metallic gold
          600: '#b8860b',
          700: '#926a06',
        },
        silver: {
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        'gold-metallic': 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 25%, #b38728 50%, #fbf5b7 75%, #aa771c 100%)',
        'charcoal-gradient': 'linear-gradient(180deg, #161a22 0%, #0d0f14 100%)',
      }
    },
  },
  plugins: [],
}
