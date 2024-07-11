/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				grey: {
					100: 'var(--grey-100)',
					200: 'var(--grey-200)',
					300: 'var(--grey-300)',
					400: 'var(--grey-400)',
					500: 'var(--grey-500)',
					600: 'var(--grey-600)',
					700: 'var(--grey-700)',
					800: 'var(--grey-800)',
					900: 'var(--grey-900)',
				},
				blackAccent: {
					100: 'var(--black-accent-100)',
					200: 'var(--black-accent-200)',
					300: 'var(--black-accent-300)',
					400: 'var(--black-accent-400)',
					500: 'var(--black-accent-500)',
					600: 'var(--black-accent-600)',
					700: 'var(--black-accent-700)',
					800: 'var(--black-accent-800)',
					900: 'var(--black-accent-900)',
				},
				greenAccent: {
					100: 'var(--green-accent-100)',
					200: 'var(--green-accent-200)',
					300: 'var(--green-accent-300)',
					400: 'var(--green-accent-400)',
					500: 'var(--green-accent-500)',
					600: 'var(--green-accent-600)',
					700: 'var(--green-accent-700)',
					800: 'var(--green-accent-800)',
					900: 'var(--green-accent-900)',
				},
				redAccent: {
					100: 'var(--red-accent-100)',
					200: 'var(--red-accent-200)',
					300: 'var(--red-accent-300)',
					400: 'var(--red-accent-400)',
					500: 'var(--red-accent-500)',
					600: 'var(--red-accent-600)',
					700: 'var(--red-accent-700)',
					800: 'var(--red-accent-800)',
					900: 'var(--red-accent-900)',
				},
				blueAccent: {
					100: 'var(--blue-accent-100)',
					200: 'var(--blue-accent-200)',
					300: 'var(--blue-accent-300)',
					400: 'var(--blue-accent-400)',
					500: 'var(--blue-accent-500)',
					600: 'var(--blue-accent-600)',
					700: 'var(--blue-accent-700)',
					800: 'var(--blue-accent-800)',
					900: 'var(--blue-accent-900)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
