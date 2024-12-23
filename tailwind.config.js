/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // App.tsx 포함
    "./app/**/*.{js,jsx,ts,tsx}", // app 디렉토리 내 모든 파일 포함
    "./components/**/*.{js,jsx,ts,tsx}", // components 디렉토리 내 모든 파일 포함 (필요 시 추가)
  ],
  presets: [require("nativewind/preset")], // NativeWind 프리셋 추가
  theme: {
    extend: {},
  },
  plugins: [],
};
