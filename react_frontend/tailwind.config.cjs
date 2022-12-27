/** @type {import('tailwindcss').Config} */
module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-color": "var(--text-color)",
        "text-dark-color": "var(--text-dark-color)",
        "theme-color": "var(--theme-color)",
        "bg-color": "var(--bg-color)",
        "app-color": "var(--app-color)"
      },
    },
  },
  plugins: [],
}