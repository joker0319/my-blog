/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 告诉 Tailwind 扫描这些目录下的文件，识别类名
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 这里后续用来注册你的可爱字体（fontFamily）
      fontFamily: {
         // 关联 CSS 变量 --font-cute，实现类名和变量绑定
        cute: ['var(--font-cute)'], 
      },
    },
  },
  plugins: [],
};