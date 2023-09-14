module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        primary: 'Poppins',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1234px',
      },
      extend: {
        colors: {
          primary: '#101828',
          secondary: '#7F56D9',
          vorreiter: '#6D8AAD',
          vorr: '#b6c5d6',
        },
        boxShadow: {
          1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    plugins: [],
  };
  