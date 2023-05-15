import { extendTheme } from '@chakra-ui/react';

// example theme
const theme = extendTheme({
  colors: {
    brand: {
      50: '#F5FDFB',
      100: '#EAFBF7',
      200: '#C8F4E9',
      300: '#A7EEDC',
      400: '#64D6C4',
      500: '#21BEAD',
      600: '#1DAA98',
      700: '#146F64',
      800: '#0E524B',
      900: '#093531',
    },
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.50',
        color: 'brand.700',
      },
      a: {
        color: 'brand.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
        fontWeight: 'bold',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
            color: 'brand.700',
          },
        },
      },
    },
  },
});

export default theme;
