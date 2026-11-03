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
        maroon: {
          DEFAULT: "#72263D",
          dark: "#4D1729",
          light: "#8C324D",
          50: "#FAF3F5",
          100: "#F4E4E8",
          200: "#E9CDD5",
          300: "#D9ABBA",
          400: "#A84E69",
          500: "#72263D",
          600: "#5E1D31",
          700: "#4D1729",
          800: "#38101E",
          900: "#220912",
        },
        gold: {
          DEFAULT: "#C89B52",
          light: "#DFC085",
          dark: "#A37833",
          50: "#FAF6EF",
          100: "#F4ECD9",
          200: "#E7D6B0",
          300: "#DABF86",
          400: "#C89B52",
          500: "#B7863C",
          600: "#966A2C",
        },
        warm: {
          bg: "#FFFCF7",
          surface: "#FFFFFF",
          border: "#EAE6E0",
          card: "#FFFFFF",
          muted: "#F7F4EE",
        },
        content: {
          primary: "#202124",
          secondary: "#667085",
          muted: "#98A2B3",
        },
        status: {
          success: "#16805D",
          error: "#C83B3B",
          warning: "#B54708",
          info: "#026AA2",
        }
      },
      fontFamily: {
        devanagari: ["var(--font-noto-sans-devanagari)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        desktop: "1280px",
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(114, 38, 61, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -4px rgba(114, 38, 61, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 12px 32px -6px rgba(114, 38, 61, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
} satisfies Config;
