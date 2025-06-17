/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    extend: {
      colors:{
        'light-blue': 'var(--light-blue)',
        'blue-1': 'var(--blue-1)',
        'tan': 'var(--tan)',
        'tan-light': 'var(--tan-light)',
        'ton-red': 'var(--ton-red)',
        'ton-red-light': 'var(--ton-red-light)',
        'dark-ton-red': 'var(--dark-ton-red)',
        'dark-ton-red-light': 'var(--dark-ton-red-light)',
        'gray-general': 'var(--gray-general)',
        'gray-light': 'var(--gray-light)',
        'gray-dark': 'var(--gray-dark)',
        'gray-light-dark': 'var(--gray-light-dark)',
        'dark-khaki': 'var(--dark-khaki)',
        'sienna': 'var(--sienna)',
        'sienna-light': 'var(--sienna-light)',
      }
    },
  },
  plugins: [],
}

