/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      // Extend the background gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(81.67% 81.67% at 50% 16.82%, #1E7962 0%, #0E3A2F 80.77%)',
      },

    },
  },
  plugins: [],
}
