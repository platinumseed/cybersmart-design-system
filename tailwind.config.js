/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./stories/**/*.{vue,js,ts,jsx,tsx}"
	],
	theme: {
		fontFamily: {
			'roboto': ['Roboto', 'sans-serif'],
		},
		transitionDuration: {
			DEFAULT: '300ms'
		},
		extend: {
			colors: {
				'blue': '#209FD6',
				'navy': '#021B31',
				'light-blue': '#F0FAFE',
				'digital-black': '#231F20',
				'primary': '#231F20',
				'secondary': '#64748B',
				'teal': '#AEF8D8' 
			},
		},
	},
	plugins: [
		require('tailwindcss-3d'),
	],
}