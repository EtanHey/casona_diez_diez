import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
      screens: {
        xs: "458.304px",
      },
      width: {
        "1/40": "2.5%",
        "2/40": "5%",
        "3/40": "7.5%",
        "4/40": "10%",
        "5/40": "12.5%",
        "6/40": "15%",
        "7/40": "17.5%",
        "8/40": "20%",
        "9/40": "22.5%",
        "10/40": "25%",
        "11/40": "27.5%",
        "12/40": "30%",
        "13/40": "32.5%",
        "14/40": "35%",
        "15/40": "37.5%",
        "16/40": "40%",
        "17/40": "42.5%",
        "18/40": "45%",
        "19/40": "47.5%",
        "20/40": "50%",
        "21/40": "52.5%",
        "22/40": "55%",
        "23/40": "57.5%",
        "24/40": "60%",
        "25/40": "62.5%",
        "26/40": "65%",
        "27/40": "67.5%",
        "28/40": "70%",
        "29/40": "72.5%",
        "30/40": "75%",
        "31/40": "77.5%",
        "32/40": "80%",
        "33/40": "82.5%",
        "33.5/40": "83.75%",
        "34/40": "85%",
        "35/40": "87.5%",
        "36/40": "90%",
        "37/40": "92.5%",
        "38/40": "95%",
        "39/40": "97.5%",
        "40/40": "100%",
      },
      height: {
        "1/40": "2.5%",
        "2/40": "5%",
        "3/40": "7.5%",
        "4/40": "10%",
        "5/40": "12.5%",
        "6/40": "15%",
        "7/40": "17.5%",
        "8/40": "20%",
        "9/40": "22.5%",
        "10/40": "25%",
        "11/40": "27.5%",
        "12/40": "30%",
        "13/40": "32.5%",
        "14/40": "35%",
        "15/40": "37.5%",
        "16/40": "40%",
        "17/40": "42.5%",
        "18/40": "45%",
        "19/40": "47.5%",
        "20/40": "50%",
        "21/40": "52.5%",
        "22/40": "55%",
        "23/40": "57.5%",
        "24/40": "60%",
        "25/40": "62.5%",
        "26/40": "65%",
        "27/40": "67.5%",
        "28/40": "70%",
        "29/40": "72.5%",
        "30/40": "75%",
        "31/40": "77.5%",
        "32/40": "80%",
        "33/40": "82.5%",
        "34/40": "85%",
        "35/40": "87.5%",
        "36/40": "90%",
        "37/40": "92.5%",
        "38/40": "95%",
        "39/40": "97.5%",
        "40/40": "100%",
      },
      minWidth: {
        "1/40": "2.5%",
        "2/40": "5%",
        "3/40": "7.5%",
        "4/40": "10%",
        "5/40": "12.5%",
        "6/40": "15%",
        "7/40": "17.5%",
        "8/40": "20%",
        "9/40": "22.5%",
        "10/40": "25%",
        "11/40": "27.5%",
        "12/40": "30%",
        "13/40": "32.5%",
        "14/40": "35%",
        "15/40": "37.5%",
        "16/40": "40%",
        "17/40": "42.5%",
        "18/40": "45%",
        "19/40": "47.5%",
        "20/40": "50%",
        "21/40": "52.5%",
        "22/40": "55%",
        "23/40": "57.5%",
        "24/40": "60%",
        "25/40": "62.5%",
        "26/40": "65%",
        "27/40": "67.5%",
        "28/40": "70%",
        "29/40": "72.5%",
        "30/40": "75%",
        "31/40": "77.5%",
        "32/40": "80%",
        "33/40": "82.5%",
        "34/40": "85%",
        "35/40": "87.5%",
        "36/40": "90%",
        "37/40": "92.5%",
        "38/40": "95%",
        "39/40": "97.5%",
        "40/40": "100%",
      },
      inset: {
        "1/40": "2.5%",
        "2/40": "5%",
        "3/40": "7.5%",
        "4/40": "10%",
        "5/40": "12.5%",
        "6/40": "15%",
        "7/40": "17.5%",
        "8/40": "20%",
        "9/40": "22.5%",
        "10/40": "25%",
        "11/40": "27.5%",
        "12/40": "30%",
        "13/40": "32.5%",
        "14/40": "35%",
        "15/40": "37.5%",
        "16/40": "40%",
        "17/40": "42.5%",
        "18/40": "45%",
        "19/40": "47.5%",
        "20/40": "50%",
        "21/40": "52.5%",
        "22/40": "55%",
        "23/40": "57.5%",
        "24/40": "60%",
        "25/40": "62.5%",
        "26/40": "65%",
        "27/40": "67.5%",
        "28/40": "70%",
        "29/40": "72.5%",
        "30/40": "75%",
        "31/40": "77.5%",
        "32/40": "80%",
        "33/40": "82.5%",
        "34/40": "85%",
        "35/40": "87.5%",
        "36/40": "90%",
        "37/40": "92.5%",
        "38/40": "95%",
        "39/40": "97.5%",
        "40/40": "100%",
      },
      colors: {
        "cdd-black": "#1A0B06",
        "cdd-red": "#FC1E32",
        "cdd-yellow": "#F7A600",
        "cdd-green": "#04986F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      fontSize: {
        "2xs": "10px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
