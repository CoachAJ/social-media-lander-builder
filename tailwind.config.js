/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'health-blue': '#0068B3',
        'blue-sky': '#3CAADF',
        'tangy-yellow': '#FFB81C',
        'glorious-sunset': '#F58A34',
        'hot-chocolate': '#784434',
      },
      fontFamily: {
        'proxima': ['Poppins', 'Proxima Nova', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 104, 179, 0.08)',
        'soft-lg': '0 12px 40px -4px rgba(0, 104, 179, 0.12)',
      },
    },
  },
  plugins: [],
}
