/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'white': {
          100: '#FFFFFF',
          200: '#F0F0F0',
        },
        'grey' :{
          100: '#D9D9D9',
          200: '#6D6E71',
        },
        'black' : {
          100: '#000000',
        },
        'red' : {
          100: '#D6001C',
        },
        'yellow' :{
          100: '#FFCD00',
        },
        'green' :{
          100: '#47A67C',
        },
        'rubine': {
          100: '#ED0A72',
        },
        'orange':{
          100: '#FFA300',
        },
        'open': '#92BDD6',
        'closed': '#FF0000',
        'waitlist': '#FFCD00',
        'grade' : {
          'A' : '#47A67C',
          'A-background'  : '#08482C',
          'A-text': '#FFFFFF',
          'B': '#FFCD00',
          'B-background' : '#9D8830',
          'B-text': '#6D6E71',
          'C': '#FFA300',
          'C-background' : '#976B1C',
          'C-text': '#6D6E71',
          'D': '#D6001C',
          'D-background' : '#721420',
          'D-text': '#FFFFFF',
          'F': '#D6001C',
          'F-background' : '#721420',
          'F-text': '#FFFFFF',
        },
        'course': {
          100: '#DEEC89',
          200: '#EED785',
          300: '#A9DD91',
          400: '#FC8787',
          500: '#A2D4F0',
          600: '#F4BEEF',
          700: '#FDBED4',
          800: '#C9C1FC',
          900: '#98C3F6',
        },
      }
    },
  },
  plugins: [],
}

