module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
