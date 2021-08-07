module.exports = {
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")],
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
};
