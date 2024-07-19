import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#F6F5EE",
        "yellow-500": "#EEECE1",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.20rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".display-linebreak": {
          "white-space": "pre-line",
        },
        ".min-images": {
          "min-width": "36.8rem",
        },
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
} satisfies Config;
