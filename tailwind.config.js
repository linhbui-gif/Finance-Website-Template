/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    colors: {
      '01': '#ffffff',
      black: '#070707',
      'dark-green': '#244b45',
      gray: '#7f7f7f',
      'secondary-green': '#5baea1',
      white: '#ffffff',
      'white-brand-color': '#DCEEFF',
      'white-green': '#e6f0ec',
      'white-60': '#ffffff99',
      'white-80': '#ffffffcc',
      primary: '#38A1FF',
      secondary: '#F4B100'
    },
    fontSize: {
      'text-xs': '1.2rem',
      'text-sm': '1.4rem',
      'text-base': '1.6rem',
      'text-lg': '1.8rem',
      'text-xl': '2.0rem',
      'text-2xl': '2.4rem',
      'text-3xl': '3rem',
      'text-4xl': '3.6rem',
      'text-5xl': '4.8rem',
      'text-6xl': '6rem',
      'text-7xl': '7.2rem',
      'text-8xl': '9.6rem',
      'text-9xl': '12.8rem'
    },
    borderRadius: {
      sm: '1rem',
      full: '50%'
    }
  },
  plugins: []
}
