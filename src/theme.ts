import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme ({
  config: {
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#0F1923", 
      },
    },
  },
});