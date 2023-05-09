/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {

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

