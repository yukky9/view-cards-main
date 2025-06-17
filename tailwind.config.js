/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      kalam:['Kalam','cursive'],
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
        'primary-1': 'var(--primary-1)',
        'primary-2': 'var(--primary-2)',
        'secondary': 'var(--secondary)',
        'dark-grey': 'var(--dark-grey)',
        'white': 'var(--white)',
        'black': 'var(--black)',
        'dark-blue': 'var(--dark-blue)',
        'light-black': 'var(--light-black)',
      }
    },
  },
  plugins: [],
}

