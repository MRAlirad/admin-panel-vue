/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				ghostWhite: '#F4F7FE',
				blue: '#4318FF',
				delftBlue: '#2B3674',
				powderBlue: '#A3AED0',
			}
		},
	},
	plugins: [],
};

