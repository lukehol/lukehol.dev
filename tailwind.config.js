const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
			fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
			keyframes: {
				wiggle: {
					'0%, 50% 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(-10deg)' },
					'75%': { transform: 'rotate(10deg)' },
				},
			},
			animation: {
				wiggle: 'wiggle .6s 3 ease-in-out',
			},
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
