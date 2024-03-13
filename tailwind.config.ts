import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        cursive: ["var(--font-cursive)", "cursive", ...fontFamily.serif],
      },
      colors: {
        dark: "rgb(26,27,38)",
        oj: "rgb(248,79,56)",
      },
    },
  },
  plugins: [],
} satisfies Config;
