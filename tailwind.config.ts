import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      keyframes: {
        autoRun: {
          "0%": {
            transform: "perspective(1000px) rotateX(-16deg) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(1000px) rotateX(-16deg) rotateY(360deg)",
          },
        },
      },
      animation: {
        autoRun: "autoRun 20s linear infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-outline": {
          "-webkit-text-stroke": "2px #d2d2d2",
        },
        ".text-outline-hover:hover": {
          "-webkit-text-stroke": "2px #d2d2d2",
        },
      };

      addUtilities(newUtilities);
    }),

    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),

    plugin(function ({ addUtilities }) {
      addUtilities({
        ".custom-transform-z-550": {
          transform:
            "rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)",
        },
        ".custom-transform-z-180": {
          transform:
            "rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(180px)",
        },
        // Add more variations as needed
      });
    }),
    require("tailwindcss-3d"),
  ],
};
export default config;
