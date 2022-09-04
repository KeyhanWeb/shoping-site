/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1440px'
    },
    fontFamily: {
      yekan: ['yekan']
    },
    extend: {
      colors: {
        neutral000: '#fff',
        neutral100: '#f0f0f1',
        neutral200: '#e0e0e2',
        neutral300: '#c0c2c5',
        neutral400: '#a1a3a8',
        neutral500: '#81858b',
        neutral600: '#62666d',
        neutral700: '#424750',
        neutral800: '#232933',
        neutral900: '#0c0c0c',

        primary100: '#ffe440',
        primary300: '#f37a8a',
        primary500: '#ef4056',
        primary700: '#ef394e',

        secondary100: '#e6f4f7',
        secondary300: '#008deb',
        secondary500: '#19bfd3',
        secondary700: '#008eb2',

        green300: '#9dc44d',
        green500: '#6bb927',
        green700: '#39ae00',

        buttonPrimary: '#ef4056',
        buttonSecondary: '#19bfd3',
        buttonBrand: '#e6123d',
        buttonWhite: '#fff',
        buttonBlack: '#0c0c0c',
        buttonDisable: '#e0e0e2',
        buttonerror: '#b2001a',
        buttonTextPrimary: '#fff',
        buttonTextBlack: '#0c0c0c',

        iconPrimary: '#ef4056',
        iconPrimary100: '#ffe440',
        iconSecondary: '#19bfd3',
        iconBrand: '#e6123d',
        iconWhite: '#e6123d',
        iconBlack: '#0c0c0c',
        iconDisable: '#e0e0e2',
        iconLowEmphasis: '#a1a3a8',
        iconHighEmphasis: '#424750',
        iconSuccess: '#4caf50',
        iconWarning: '#f9a825',
        iconNeutralHint: '#81858b',
        iconRating02: '#f9bc00',
        iconRating23: '#b1b64d',
        iconRating34: '#65aa57',
        iconRating45: '#00a049',
        iconEror: '#d32f2f',

        appBackground: '#f2f2f2',
        brandPrimary: '#e6123d',

      }
    },
  },
  plugins: [
  ],
}