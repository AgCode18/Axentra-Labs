import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#FFFFFF",
        surface: "#F7F8FC",
        "surface-2": "#EFF1F8",
        "surface-3": "#E6E9F5",
        line: "#E2E5F2",
        "line-soft": "#ECEEF7",
        muted: "#666D8A",
        "muted-2": "#9AA0BD",
        fog: "#0B0D18",
        blue: {
          DEFAULT: "#3E6BFF",
          soft: "#3457D9",
        },
        violet: {
          DEFAULT: "#7C3AED",
          soft: "#6B2FCB",
        },
      },
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(135deg, #3E6BFF 0%, #7C3AED 100%)",
        "grad-brand-soft": "linear-gradient(135deg, rgba(62,107,255,0.15) 0%, rgba(124,58,237,0.15) 100%)",
        "grad-radial-fade": "radial-gradient(60% 60% at 50% 40%, rgba(62,107,255,0.16) 0%, rgba(7,9,15,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,58,237,0.15), 0 20px 60px -20px rgba(62,107,255,0.35)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "gradient-shift": "gradientShift 6s ease infinite",
        shine: "shine 1.1s ease forwards",
        "pop-in": "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
