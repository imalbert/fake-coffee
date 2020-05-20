const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [ './src/**/*.js' ],
	theme: {
		extend: {
			fontFamily: {
				sans: [ 'Raleway', ...defaultTheme.fontFamily.sans ]
			}
		},
		screens: {
			sm: '768px',
			lg: '1024px'
		},
		colors: {
			black: '#160000',
			white: '#ffffe4',
			primary: {
				light: '#ffe24c',
				default: '#fcb001',
				dark: '#c48100'
			},
			gray: {
				'100': '#F7FAFC',
				'200': '#EDF2F7',
				'300': '#E2E8F0',
				'400': '#CBD5E0',
				'600': '#718096',
				'700': '#4A5568',
				'800': '#2D3748',
				'900': '#1A202C'
			}
		}
	},
	variants: {},
	plugins: []
};
