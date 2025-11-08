import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5E4AE3',
        accent: '#F39C12',
        slate: {
          950: '#0f1729',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(94, 74, 227, 0.25) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
