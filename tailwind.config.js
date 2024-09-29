/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calibre: [
          "__calibre_33aa17",
          "__calibre_Fallback_33aa17",
          "system-ui",
          "ui-sans-serif",
        ],
      },
      colors: {
        customTeal: "rgb(0, 112, 110)",
        customTxt: "rgb(30, 48, 110)",
      },
      fontSize: {
        "custom-xl": ["24px", "32px"], // 24px font size with 32px line height
      },
    },
  },
  plugins: [],
};
