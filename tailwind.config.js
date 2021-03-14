module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        circles: "url('/circles.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
