module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '0',
					sm: '0',
					md: '0',
					lg: '5rem',
					xl: '11rem',
					'2xl': '15rem'
				}
			},
		}
	},
	plugins: []
};
