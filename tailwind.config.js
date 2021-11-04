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
        darkgrey: "#222831", //darkModeで使用したい色を拡張定義
        whitegrey: "rgb(230,230,230)",
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
    // spacing: { 96: "96%" },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
