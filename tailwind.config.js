module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Epilogue'],
      'mono': ['"Press Start 2P"'],
      'mono-two': ['VT323']
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
  daisyui: {
    themes: false,
  }
}
