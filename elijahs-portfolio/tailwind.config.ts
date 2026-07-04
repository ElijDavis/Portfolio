import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purphaze: '#5B15FF',
        DS2TopBlue: '#2917E2',
        DS2MidPink: '#F02AAC',
        moodyblue: '#15334F',
        darkcoral: '#FF6A75',
      },
      backgroundPosition: {
        'center-20px': 'center 160px',
      },
    },
  },
  plugins: [],
} satisfies Config;
