/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
   
      fontSize: {
        xs: '0.65rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },

    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '90%',
          '@screen sm': {
            maxWidth: '90%',
          },
          '@screen md': {
            maxWidth: '80%',
          },
          '@screen lg': {
            maxWidth: '80%',
          },
          '@screen xl': {
            maxWidth: '1152px',
          },
        }
      })
    }
  ],
}

