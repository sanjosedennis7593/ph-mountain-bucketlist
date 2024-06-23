/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("rippleui")],

  rippleui: {
    defaultStyle: false,
    // removeThemes: ["dark", "light"],
    themes: [
			{
				themeName: "light",
				colorScheme: "custom",
        prefersColorScheme: true,
				colors: {
					primary: "#195741",
					backgroundPrimary: "#3CB179",
				},
			},
			{
				themeName: "dark",
				colorScheme: "dark",
        prefersColorScheme: false,
				colors: {
					primary: "#195741",
					backgroundPrimary: "#195741",
				},
			},
		],
	},
}

