/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		colors: {
						background: 'hsl(var(--background))',
						foreground: 'hsl(var(--foreground))',
						card: {
							DEFAULT: 'hsl(var(--card))',
							foreground: 'hsl(var(--card-foreground))'
						},
						popover: {
							DEFAULT: 'hsl(var(--popover))',
							foreground: 'hsl(var(--popover-foreground))'
						},
						primary: {
							DEFAULT: 'hsl(var(--primary))',
							foreground: 'hsl(var(--primary-foreground))'
						},
						secondary: {
							DEFAULT: 'hsl(var(--secondary))',
							foreground: 'hsl(var(--secondary-foreground))'
						},
						muted: {
							DEFAULT: 'hsl(var(--muted))',
							foreground: 'hsl(var(--muted-foreground))'
						},
						accent: {
							DEFAULT: 'hsl(var(--accent))',
							foreground: 'hsl(var(--accent-foreground))'
						},
						destructive: {
							DEFAULT: 'hsl(var(--destructive))',
							foreground: 'hsl(var(--destructive-foreground))'
						},
						border: 'hsl(var(--border))',
						input: 'hsl(var(--input))',
						ring: 'hsl(var(--ring))',
						chart: {
							'1': 'hsl(var(--chart-1))',
							'2': 'hsl(var(--chart-2))',
							'3': 'hsl(var(--chart-3))',
							'4': 'hsl(var(--chart-4))',
							'5': 'hsl(var(--chart-5))'
						}
					},
					borderRadius: {
						lg: 'var(--radius)',
						md: 'calc(var(--radius) - 2px)',
						sm: 'calc(var(--radius) - 4px)'
					},
					keyframes: {
						float: {
							'0%, 100%': {
								transform: 'translateY(0) rotate(0deg)',
								opacity: '0.5'
							},
							'50%': {
								transform: 'translateY(-20px) rotate(180deg)',
								opacity: '0.8'
							},
						}
					},
					animation: {

						float: 'float 6s ease-in-out infinite',
					}
		},
	},
	plugins: [],
}
