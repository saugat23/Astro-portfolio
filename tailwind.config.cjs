/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "fira-mono": ["Fira Mono", "monospace"],
        // Optional: Add Inter for body text
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
