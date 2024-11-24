import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'slide-up': 'slide-up 8s linear infinite reverse',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(0)', opacity: "1" },
          '50%': { transform: 'translateY(-284%)', opacity: "0.4" },
          '100%': { transform: 'translateY(-568%)', opacity: "1" },
        },
      },  
    },
  },
  plugins: [],
} satisfies Config;
