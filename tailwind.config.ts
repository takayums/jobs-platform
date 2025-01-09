import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          shade: {
            5: "#000C06",
            10: "#1B3227",
            40: "#126E41",
            60: "#0C9653",
            80: "#06BE64",
            100: "#00E676",
          },
          thin: {
            2: "#FAFEFC",
            3: "#F7FEFB",
            10: "#E6FCF1",
            30: "#B3F8D6",
            40: "#99F5C8",
            60: "#66F0AD",
            80: "#33EB91",
          },
        },
        secondary: {
          shade: {
            10: "#0D0618",
            40: "#321961",
            60: "#4C2691",
            80: "#6532C1",
            100: "#7E3FF2",
          },
          thin: {
            3: "#FBF9FF",
            5: "#F9F5FF",
            10: "#F2ECFE",
            40: "#CBB2FA",
            60: "#B28CF7",
            80: "#9865F5",
          },
        },
        neutral: {
          shade: {
            10: "#1D1E1D",
            20: "#333434",
            30: "#4A4B4A",
            40: "#606261",
            50: "#767977",
            60: "#8C8F8E",
            70: "#A2A6A4",
            80: "#B8BDBB",
            90: "#CFD4D1",
            100: "#E5EAE8",
          },
          thin: {
            10: "#FBFCFB",
            30: "#F7F9F8",
            60: "#EFF3F1",
            80: "#EAEEEC",
          },
        },
        accept: {
          100: "#E5EAE8",
          shade: { 400: "#065000" },
          thin: { 40: "#9FE999" },
        },
        error: {
          100: "#E90000",
          shade: { 40: "#5D0000" },
          thin: { 10: "#FDE5E5" },
        },
        warning: {
          100: "#F6B500",
          shade: { 50: "#7B5A00" },
          thin: { 40: "#FBE199" },
        },
        info: {
          100: "#4890E5",
        },
        link: { 100: "#6532C1" },
      },
      fontFamily: {
        righteous: ["var(--font-righteous)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: { themes: ["light", "dark", "cupcake"] },
} satisfies Config;
