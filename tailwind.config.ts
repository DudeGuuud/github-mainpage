import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: colors.slate,
        cyan: colors.cyan,
        zinc: colors.zinc,
        blue: colors.blue,
        emerald: colors.emerald,
        green: colors.green,
        orange: colors.orange,
        red: colors.red,
        purple: colors.purple,
        pink: colors.pink,
      },
    },
  },
  plugins: [],
};

export default config;
