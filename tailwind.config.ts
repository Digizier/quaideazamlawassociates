import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FBF9F5",
        foreground: "#14251F",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#14251F",
        },
        primary: {
          DEFAULT: "#1C3B32",
          foreground: "#FBF9F5",
        },
        secondary: {
          DEFAULT: "#F3EFE7",
          foreground: "#14251F",
        },
        muted: {
          DEFAULT: "#EDE6DA",
          foreground: "#556860",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#ECC274",
          deep: "#A67C2E",
          foreground: "#0F1D17",
        },
        ink: {
          DEFAULT: "#0F1D17",
          deep: "#09130F",
          card: "#14251E",
          foreground: "#F4EFE6",
          muted: "#8E9F97",
        },
        cream: {
          DEFAULT: "#F4EFE6",
          light: "#FAF7F2",
          muted: "#C5C1B9",
          dark: "#8E9F97",
        },
        whatsapp: "#25D366",
        border: "#E5DFD5",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        urdu: ["var(--font-urdu)", "serif"],
      },
      boxShadow: {
        elegant: "0 10px 30px -10px rgba(15, 29, 23, 0.25)",
        gold: "0 8px 24px -6px rgba(212, 175, 55, 0.35)",
        card: "0 4px 20px -2px rgba(15, 29, 23, 0.06)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #ECC274 0%, #D4AF37 50%, #B8860B 100%)",
        "hero-overlay": "linear-gradient(100deg, rgba(14, 27, 21, 0.96) 0%, rgba(18, 36, 29, 0.85) 45%, rgba(20, 42, 33, 0.35) 100%)",
        "ink-overlay": "linear-gradient(to bottom, rgba(15, 29, 23, 0.92), rgba(15, 29, 23, 0.98))",
      },
      animation: {
        "slow-zoom": "slow-zoom 20s ease-out infinite alternate",
        "rise": "rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "rise": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
