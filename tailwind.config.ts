import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        mobile: '375px',
        md: '768px',
        '2md': '900px',
        lg: '1024px',
        xl: '1440px',
      },
      fontSize: {
        '3xs': ['8px', '12px'],
      },
      colors: {},
      backgroundColor: {},
      borderColor: {},
    },
  },
  plugins: [],
}
export default config
