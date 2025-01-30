import plugin from 'tailwindcss/plugin'

export default {
  content: ['./src/**/*.{pug,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.33, 1, 0.68, 1)'
      },
      transitionDuration: {
        DEFAULT: '0.5s'
      },
      fontSize: {
        '90px': '5.625rem',
        '32px': '2rem',
        '20px': '1.25rem'
      },
      spacing: {
        '60px': '3.75rem',
        '40px': '2.5rem'
      },
      lineHeight: {
        140: '1.4',
        120: '1.2'
      },
      borderRadius: {
        '20px': '1.25rem'
      },
      borderWidth: {
        '1px': '1px'
      },
      height: {
        '200px': '12.5rem'
      },
      padding: {
        '24px': '1.5rem'
      },
      gap: {
        '24px': '1.5rem'
      }
    },
    colors: {
      black: '#0B1226',
      greyBorder: '#E4E4E4',
      greyText: '#747884'
    },
    screens: {
      desktop: { min: '1201px' },
      devices: { max: '1200px' },
      tablet: { max: '1200px', min: '769px' },
      mobile: { max: '768px' },
      xxl: { max: '1920px' },
      ll: { max: '1440px' },
      d: { max: '1201px' },
      t: { max: '1024px' },
      lg: { max: '992px' },
      m: { max: '768px' },
      s: { max: '576px' },
      xs: { max: '375px' }
    }
  },
  plugins: [
    plugin(function ({ theme, addUtilities }) {
      const screens = theme('screens')

      const newUtilities = {
        '.desktop': {
          [`@media (max-width: ${screens.tablet.max})`]: {
            display: 'none !important'
          }
        },
        '.mobile': {
          [`@media (min-width: ${screens.tablet.min})`]: {
            display: 'none !important'
          }
        },
        '.tablet': {
          [`@media (min-width: ${screens.desktop.min})`]: {
            display: 'none !important'
          },
          [`@media (max-width: ${screens.mobile.max})`]: {
            display: 'none !important'
          }
        },
        '.devices': {
          [`@media (min-width: ${screens.desktop.min})`]: {
            display: 'none !important'
          }
        }
      }

      addUtilities(newUtilities, ['responsive'])
    })
  ]
}
