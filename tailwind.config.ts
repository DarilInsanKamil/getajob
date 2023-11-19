import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        bottom: '21px',
      },
      backgroundImage: {
        'hero-pattern': "url('/bg.png')",
      },
      fontFamily: {
        'firacode': 'var(--fira)',
        'inter': 'var(--inter)'
      },
    },
  },
  plugins: [],
}
export default config
