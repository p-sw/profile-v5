/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:is(.system *) }",
      "&:is(.dark *)",
      "@media (prefers-color-scheme: dark) { &.system }",
      "&.dark",
    ],
  ],
  theme: {
    extend: {
      colors: {
        "foreground-dark": "#f2e5de",
        "background-dark": "#180c07",
        "primary-dark": "#ffb894",
        "secondary-dark": "#a24110",
        "accent-dark": "#fb6b23",
        "foreground-light": "#21140d",
        "background-light": "#f8ece7",
        "primary-light": "#6b2400",
        "secondary-light": "#ef8d5d",
        "accent-light": "#dc4c04",
      },
    },
  },
  plugins: [],
};
