module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", //ダークモードを有効化する
  theme: {
    extend: {
      colors: {
        darkgreyafter: "#4b5058", //darkModeで使用したい色を拡張定義
        darkgrey: "#222831", //darkModeで使用したい色を拡張定義
        whitegrey: "#e6e6e6",
        whitegreyafter: "#f0f0f0",
      },
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/3": "33%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    screens: {
      // xl: { min: "1279px" },
      // // => @media (min-width: 1279px) { ... }

      // lg: { min: "1023px" },
      // // => @media (min-width: 1023px) { ... }

      // md: { min: "767px" },
      // // => @media (min-width: 767px) { ... }

      // sm: { min: "639px" },
      // // => @media (min-width: 639px) { ... }
      sm: "639px",
      md: "767px",
      lg: "1023px",
      xl: "1279px",
      "3xl": "1800px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    // spacing: { 96: "96%" },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
