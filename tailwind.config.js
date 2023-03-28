/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0c2340',
        secondary: '#030b17',
        background: '#f5f5f5',
        boxinner: '#e8eaf0',
        boxtext: '#eaeaea',
        line: '#d7d7d7',
        black: '#212121',
        white: '#ffffff',
        gray: '#8a8a8a',
      },
      fontSize: {
        h1: ['24px', {
          lineHeight: '30px',
          fontWeight: '500'
        }],
        h2: ['20px', {
          lineHeight: '25px',
          fontWeight: '500'
        }],
        h3: ['15px', {
          lineHeight: '18.75px',
          fontWeight: '400'
        }],
        body: ['15px', {
          lineHeight: '18.75px',
          fontWeight: '300'
        }],
        sideText: ['13px', {
          lineHeight: '16.25px',
          fontWeight: '400'
        }],
        bigButton: ['16px', {
          lineHeight: '20px',
          fontWeight: '600'
        }],
        smallButton: ['10px', {
          lineHeight: '12.5px',
          fontWeight: '600'
        }],
        sideNumber: ['10px', {
          lineHeight: '12.5px',
          fontWeight: '275'
        }],
      },
    },
  },
  plugins: [],
};
