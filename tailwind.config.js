/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "space": ["Space Grotesk", 'serif']
            },
            colors: {
                "knime-yellow" : "#f9d63b",
                "grayscale": {
                    "50": "rgb(247, 247, 247)",
                    "100": "rgb(239, 239, 239)",
                    "200": "rgb(223, 223, 223)",
                    "300": "rgb(202, 202, 202)",
                    "400": "rgb(168, 168, 168)",
                    "500": "rgb(135, 135, 135)",
                    "600": "rgb(109, 109, 109)",
                    "700": "rgb(95, 95, 95)",
                    "800": "rgb(74, 74, 74)",
                    "900": "rgb(61, 61, 61)"
                },
                "blue_scale": {
                    "50": "rgb(248, 247, 255)",
                    "100": "rgb(240, 237, 254)",
                    "200": "rgb(226, 220, 254)",
                    "300": "rgb(206, 195, 253)",
                    "400": "rgb(172, 154, 251)",
                    "500": "rgb(140, 115, 250)",
                    "600": "rgb(107, 75, 248)",
                    "700": "rgb(90, 55, 247)",
                    "800": "rgb(50, 9, 234)",
                    "900": "rgb(42, 8, 197)"
                }
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwind-heropatterns")({
            // as per tailwind docs you can pass variants
            variants: [],

            // the list of patterns you want to generate a class for
            // the names must be in kebab-case
            // an empty array will generate all 87 patterns
            patterns: [],

            // The foreground colors of the pattern
            colors: {
                default: "#9C92AC",
                "blue-dark": "#000044", //also works with rgb(0,0,205)
            },

            // The foreground opacity
            opacity: {
                default: "0.4",
                100: "1.0",
            },
        }),
    ],
};
