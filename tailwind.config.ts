import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          deep: "var(--gold-deep)",
          foreground: "var(--gold-foreground)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          foreground: "var(--ink-foreground)",
          muted: "var(--ink-muted)",
        },
        whatsapp: "#25D366",
        border: "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        urdu: ["var(--font-urdu)", "serif"],
      },
      boxShadow: {
        elegant: "0 10px 30px -10px rgba(15, 29, 23, 0.15)",
        gold: "0 8px 24px -6px rgba(212, 175, 55, 0.35)",
        card: "0 4px 20px -2px rgba(15, 29, 23, 0.06)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #ECC274 0%, #D4AF37 50%, #B8860B 100%)",
        "hero-overlay": "linear-gradient(100deg, rgba(15, 29, 23, 0.96) 0%, rgba(18, 36, 29, 0.88) 50%, rgba(20, 42, 33, 0.5) 100%)",
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
