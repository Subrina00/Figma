

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {              
      center: true,
      padding: '0',
      screens: {
         xs: "407px",
        sm: "600px",
        md: "720px",
        lg: "960px",
        xl: "1200px",
        xxl: "1440px",
      },
    },
    extend: {
      colors: {
        grin: '#0F4E23',
        yelo: '#F1F68E',
        lgrin: '#DAFFC2',
        llgrin: '#E0F0E5',
        blak: '#141414',
        silver: '#686868', 
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        manrope: ['"Manrope"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      screens: {
        xs: "435px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  }
}
