import type { Config } from 'tailwindcss';

// Helper function to reference CSS variables
function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue?: number }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector', 
  theme: {
    extend: {
      colors: {
        // Define semantic names mapping to CSS variables
        'primary-background': withOpacity('--color-primary-background'),
        primary: withOpacity('--color-primary'),
        secondary: withOpacity('--color-secondary'),
        emphasis: withOpacity('--color-emphasis'),
        accent: withOpacity('--color-accent'),
        'text-primary': withOpacity('--color-text-primary'),
        'text-emphasized': withOpacity('--color-text-emphasized'),
      },
      // Add other extensions like fonts or animations if needed
    },
  },
  plugins: [],
};
export default config;