/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				body: ['Inter', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
