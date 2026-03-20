import { createSystem, defaultConfig, defineTokens } from '@chakra-ui/react';

const tokens = defineTokens({
  fonts: {
    heading: { value: 'var(--font-body)' },
    body: { value: 'var(--font-body)' },
  },

  colors: {
    brand: {
      primary: { value: 'rgb(216, 119, 63)' },
      hover: { value: '#e08a50' },
      glow: { value: 'rgba(216,119,63,0.4)' },
    },

    bg: {
      main: { value: '#0f1115' },
      surface: { value: '#1a1d23' },
      elevated: { value: '#232730' },
    },

    text: {
      primary: { value: '#f3f4f6' },
      secondary: { value: '#a1a1aa' },
    },

    shadow: {
      primary: { value: 'rgba(0,0,0,0.15)' },
      hover: { value: 'rgba(0,0,0,0.25)' },
    },
  },
});

export const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens,
  },
});
