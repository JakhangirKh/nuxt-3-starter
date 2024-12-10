/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,ts,vue}", "./components/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: ["Proxima", "sans-serif"],
      },
    },
  },
  plugins: [],
};

