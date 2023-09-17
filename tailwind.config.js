/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				ghostWhite : '#F4F7FE',
				blue       : '#4318FF',
			}
		},
	},
	plugins: [],
};

// module.exports = {
// 	theme: {
// 		colors: {
// 			transparent: 'transparent',
// 			current: 'currentColor',
// 			black : '#555'
// 		},
// 	},
// }

