import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#123f31',
        muted: '#65746c',
        berry: '#0f3329',
        rose: '#b7c8b9',
        blush: '#f7f1e3',
        violet: '#315f45',
        mint: '#9bb99a',
        skyglass: '#edf5e8',
        cream: '#fffaf0',
        ivory: '#f8f1df',
        sage: '#b7c8b9',
        herb: '#1f5a43',
        pine: '#0f3329',
        gold: '#c89235',
        amber: '#e7c873',
      },
      boxShadow: {
        glass: '0 24px 80px rgba(31, 90, 67, 0.13)',
        lift: '0 18px 42px rgba(18, 63, 49, 0.14)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Montserrat',
          'PingFang SC',
          'Microsoft YaHei',
          'Noto Sans SC',
          'system-ui',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'page-glow':
          'radial-gradient(circle at 8% 12%, rgba(214, 224, 194, 0.72), transparent 28%), radial-gradient(circle at 88% 8%, rgba(232, 205, 136, 0.28), transparent 24%), radial-gradient(circle at 70% 82%, rgba(183, 200, 185, 0.42), transparent 30%), linear-gradient(135deg, #fffaf0 0%, #fbf4e7 42%, #f1f6eb 76%, #fffaf0 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
