module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "white": "#FFFFFF",
      "black": "#000000",
      "danger": "#F94D03",
      "gray-100": "#e1e1e6",
      "gray-300": "#a8a8b3",
      "gray-800": "#29292e",
      "gray-850": "#1f2729",
      "gray-900": "#121214",
      "blue-500": "#2D3736",
      "blue-600": "#1D2B3D",
      "blue-700": "#182334",
      "yellow-500": "#CDA83D",
      "yellow-600": "#967E2F",
    },
  },
  plugins: [],
}
