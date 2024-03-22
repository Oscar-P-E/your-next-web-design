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
        oj: {
          50: "hsl(7, 94%, 93%)",
          100: "hsl(7, 94%, 87%)",
          200: "hsl(7, 94%, 80%)",
          300: "hsl(7, 93%, 73%)",
          400: "hsl(7, 93%, 66%)",
          500: "hsl(7, 93%, 60%)",
          600: "hsl(7, 62%, 50%)",
          700: "hsl(7, 63%, 40%)",
          800: "hsl(7, 62%, 30%)",
          900: "hsl(7, 63%, 20%)",
          950: "hsl(6, 61%, 10%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
