import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        ring: "var(--ring)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
      },
    },
  },
  plugins: [],
};

export default config;