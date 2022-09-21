import {extendTheme, v33xTheme} from 'native-base';

export const theme = extendTheme(v33xTheme, {
  components: {
    Input: {
      baseStyle: {
        _focus: {
          backgroundColor: 'white',
        },
      },
    },
  },
  //   fontConfig: {
  //     RobotoMono: {
  //       100: {
  //         normal: 'RobotoMono-Light',
  //         italic: 'RobotoMono-LightItalic',
  //       },
  //       200: {
  //         normal: 'RobotoMono-Light',
  //         italic: 'RobotoMono-LightItalic',
  //       },
  //       300: {
  //         normal: 'RobotoMono-Light',
  //         italic: 'RobotoMono-LightItalic',
  //       },
  //       400: {
  //         normal: 'RobotoMono-Regular',
  //         italic: 'RobotoMono-Italic',
  //       },
  //       500: {
  //         normal: 'RobotoMono-Medium',
  //       },
  //       600: {
  //         normal: 'RobotoMono-Medium',
  //         italic: 'RobotoMono-MediumItalic',
  //       },
  //       700: {
  //         normal: 'RobotoMono-Bold',
  //       },
  //     },
  //     OpenSans: {
  //       100: {
  //         normal: 'OpenSans-Light',
  //         italic: 'OpenSans-LightItalic',
  //       },
  //       200: {
  //         normal: 'OpenSans-Light',
  //         italic: 'OpenSans-LightItalic',
  //       },
  //       300: {
  //         normal: 'OpenSans-Light',
  //         italic: 'OpenSans-LightItalic',
  //       },
  //       400: {
  //         normal: 'OpenSans-Regular',
  //         italic: 'OpenSans-Italic',
  //       },
  //       500: {
  //         normal: 'OpenSans-Medium',
  //       },
  //       600: {
  //         normal: 'OpenSans-Medium',
  //         italic: 'OpenSans-MediumItalic',
  //       },
  //       700: {
  //         normal: 'OpenSans-Bold',
  //       },
  //     },
  //   },
  //   fonts: {
  //     heading: 'RobotoMono',
  //     body: 'RobotoMono',
  //     mono: 'RobotoMono',
  //     sans: 'OpenSans',
  //   },
  colors: {
    primary: {
      600: '#f0ad4e',
      700: '#f0ad4e',
      800: '#f3982c',
      900: '#742BD9',
    },
    purple: {
      800: '#d93900',
      900: '#C177F2',
    },
    dark: {
      300: '#868686',
      600: '#2b2b2b',
      800: '#252526',
      900: '#000000',
    },
    light: {
      800: '#F2F2F2',
      900: '#FFFFFF',
    },
    pink: {
      900: '#F2509C',
    },
    yellow: {
      900: '#F2CD5C',
    },
    lightBlue: {
      300: '#d3d9de',
    },
    lightGray: 'rgba(72, 72, 72, 0.2)',
    underlineColor: 'transparent',
  },
  spacing: {
    tiny: 8,
    small: 16,
    base: 24,
    medium: 20,
    large: 48,
    xLarge: 64,
  },
});
