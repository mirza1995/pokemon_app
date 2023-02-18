/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DF9186',
        'primary-dark': '#334144',
        'primary-light': '#EAA9A0',
        gray: '#949EA0',
        'gray-1': '#F5F6F7',
        'gray-2': '#DFE5EA',
        'gray-3': '#D4D8D9',
        'neutral-gray': '#F2F2F2'
      },
      fontSize: {
        xs: ['10px', '10px'],
        sm: ['12px', '12px'],
        md: ['13px', '13px'],
        base: ['14px', '14px'],
        subtitle: ['17px', '17px'],
        title: ['18px', '18px'],
        lg: ['20px', '20px'],
        xl: ['25px', '25px'],
        '4xl': ['40px', '40px']
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif']
      },
      screens: {
        sm: '420px',
        md: '768px',
        lg: '1220px',
        xl: '1535px'
      },
      spacing: {
        '5px': '5px',
        4.5: '18px',
        6: '25px',
        7: '30px'
      },
      borderRadius: {
        3: '3px',
        50: '50px'
      },
      boxShadow: {
        '3xl': '0px 15px 20px rgba(234, 168, 159, 0.2)',
        xs: '0px 15px 30px rgba(0, 0, 0, 0.05)'
      },
      backgroundImage: {
        banner:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%), url("src/img/banner.png")',
        'photo-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%)'
      }
    }
  },
  plugins: []
};
