/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 4s ease infinite',
        'reveal': 'reveal 0.7s ease-in-out forwards',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 5s ease-in-out infinite',
        'float-bounce': 'floatBounce 7s ease-in-out infinite',
        'float-zigzag': 'floatZigzag 9s ease-in-out infinite',
        'float-circle': 'floatCircle 10s linear infinite',
        'float-wave': 'floatWave 8s ease-in-out infinite',
        'float-pulse': 'floatPulse 7s ease infinite',
        'float-twist': 'floatTwist 9s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        reveal: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        floatBounce: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        floatZigzag: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -15px)' },
          '50%': { transform: 'translate(0, -30px)' },
          '75%': { transform: 'translate(-10px, -15px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        floatCircle: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(15px, -15px) rotate(90deg)' },
          '50%': { transform: 'translate(0, -20px) rotate(180deg)' },
          '75%': { transform: 'translate(-15px, -15px) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        floatWave: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(10px) translateY(-5px)' },
          '50%': { transform: 'translateX(20px) translateY(-15px)' },
          '75%': { transform: 'translateX(10px) translateY(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        floatPulse: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.2)' },
        },
        floatTwist: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(90deg)' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)' },
          '75%': { transform: 'translateY(-15px) rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
