import { extendTheme } from '@chakra-ui/react';

// example theme

const generalButtonProps = {
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '20px',
  textAlign: 'center',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  padding: '18px 40px',
  borderRadius: '50px',
};

const colors = {
  primary: {
    50: '#dbfcff',
    100: '#b4edf9',
    200: '#8ae0f2',
    300: '#5ed3ea',
    400: '#35c6e3',
    500: '#199BB5',
    600: '#0b869e',
    700: '#006072',
    800: '#003b46',
    900: '#00151b',
  },
  gray: {
    500: '#B4B7BC',
    600: '#8B8E92',
    700: '#686D71',
    800: '#50555B',
    900: '#35353D',
  },
  button: {
    default: '#199BB5',
    hover: '#47AFC4',
    active: '#108CA5',
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'Cera Pro', sans-serif`,
    body: `'Cera Pro', sans-serif`,
  },
  colors,
  components: {
    Button: {
      variants: {
        'outline-white': {
          ...generalButtonProps,
          backgroundColor: 'transparent',
          border: '4px solid white',
          color: 'white',
          boxShadow: 'none',
          _disabled: {
            opacity: 0.37,
            boxShadow: 'none',
          },
        },
        outline: {
          ...generalButtonProps,
          backgroundColor: 'white',
          border: '4px solid',
          borderColor: 'button.default',
          color: 'button.default',
        },
        primary: {
          ...generalButtonProps,
          color: 'white',
          boxShadow:
            '0px 0px 1px rgba(32, 37, 43, 0.1), 0px 4px 8px rgba(51, 91, 130, 0.12)',
          backgroundColor: 'button.default',
          _hover: {
            backgroundColor: 'button.hover',
            boxShadow: 'none',
          },
          _active: {
            backgroundColor: 'button.active',
            boxShadow: 'none',
          },
          _disabled: {
            opacity: 0.3,
            boxShadow: 'none',
            pointerEvents: 'none',
          },
        },
      },
    },
  },
});

export default theme;
