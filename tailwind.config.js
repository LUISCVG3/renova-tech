export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        nimbus: ['"Nimbus Sans"', 'sans-serif'],
        sans: ['"Inter"', '"Nimbus Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}