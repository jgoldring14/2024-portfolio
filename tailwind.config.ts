import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

/**
 * A raised neumorphic shadow pair, lit from the top left. Every length is scaled by
 * --lift (1 when unset), which FadeIn animates from 0 so panels rise as they scroll in.
 */
function raised(x: number, y: number, blur: number) {
  let lift = (px: number) => `calc(${px}px * var(--lift, 1))`
  return `${lift(x)} ${lift(y)} ${lift(blur)} rgb(var(--shade-dark)), ${lift(-x)} ${lift(-y)} ${lift(blur)} rgb(var(--shade-light))`
}

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.02em' }],
      '6xl': ['3rem', { lineHeight: '3.25rem', letterSpacing: '-0.025em' }],
      '7xl': ['4rem', { lineHeight: '4.25rem', letterSpacing: '-0.03em' }],
      '8xl': ['5rem', { lineHeight: '5.25rem', letterSpacing: '-0.035em' }],
    },
    extend: {
      colors: {
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          ink: 'rgb(var(--primary-ink) / <alpha-value>)',
          text: 'rgb(var(--primary-text) / <alpha-value>)',
        },
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      boxShadow: {
        'neu-sm': raised(4, 4, 8),
        neu: raised(9, 9, 18),
        'neu-lg': raised(16, 16, 32),
        'neu-inset':
          'inset 5px 5px 10px rgb(var(--shade-dark)), inset -5px -5px 10px rgb(var(--shade-light))',
        'neu-inset-sm':
          'inset 3px 3px 6px rgb(var(--shade-dark)), inset -3px -3px 6px rgb(var(--shade-light))',
        'neu-primary': `${raised(5, 5, 12)}, inset 1px 1px 1px rgb(255 255 255 / 0.25)`,
        // For elements turned 45deg: an x-only offset lands on the screen diagonal,
        // so the light still falls from the top left.
        'neu-diamond': raised(22, 0, 32),
        'neu-diamond-inset':
          'inset 7px 0 10px rgb(var(--shade-dark)), inset -7px 0 10px rgb(var(--shade-light))',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      backgroundImage: {
        convex:
          'linear-gradient(145deg, rgb(var(--shade-light) / 0.5), rgb(var(--shade-dark) / 0.25))',
        'convex-diamond':
          'linear-gradient(100deg, rgb(var(--shade-light) / 0.5), rgb(var(--shade-dark) / 0.25))',
        'primary-convex':
          'linear-gradient(145deg, rgb(255 255 255 / 0.14), rgb(0 0 0 / 0.12))',
      },
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['Mona Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      transitionTimingFunction: {
        'apple-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
