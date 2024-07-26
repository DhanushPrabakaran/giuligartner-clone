import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "xxs": ".5rem",
        "xs": ".75rem",
        "sm": "11px",
        "logo":"24px",
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(16px)',
      },
      colors: {
        "primary-black": "#0e1012",
        "primary-white": "#f3f6fa",
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'Revans':['Revans','sans-serif'],
        'MintGrotesk':['Mint-Grotesk','sans-serif'],
        'roslindale':['roslindale','sans-serif'],
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
