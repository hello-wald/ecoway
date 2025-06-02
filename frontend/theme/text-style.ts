import {responsiveFontSize as rf} from "react-native-responsive-dimensions";

export const FontFamily = {
  BOLD: 'PJS-Bold',
  SEMI_BOLD: 'PJS-SemiBold',
  MEDIUM: 'PJS-Medium',
  REGULAR: 'PJS-Regular',
};

export const FontSize = {
  // Headings
  H3: rf(4),
  H4: rf(3.5),
  H5: rf(3),
  H6: rf(2.5),
  // Body text
  LARGE: rf(2),
  MEDIUM: rf(1.75),
  SMALL: rf(1.5),
}

export const Font = {
  h3: {
    fontSize: FontSize.H3,
    fontFamily: FontFamily.BOLD,
  },
  h4: {
    fontSize: FontSize.H4,
    fontFamily: FontFamily.BOLD,
  },
  h5: {
    fontSize: FontSize.H5,
    fontFamily: FontFamily.BOLD,
  },
  h6: {
    fontSize: FontSize.H6,
    fontFamily: FontFamily.BOLD,
  },
  lg: {
    bold: {
      fontSize: FontSize.LARGE,
      fontFamily: FontFamily.BOLD,
    },
    semiBold: {
      fontSize: FontSize.LARGE,
      fontFamily: FontFamily.SEMI_BOLD,
    },
    medium: {
      fontSize: FontSize.LARGE,
      fontFamily: FontFamily.MEDIUM,
    },
    regular: {
      fontSize: FontSize.LARGE,
      fontFamily: FontFamily.REGULAR,
    },
  },
  md: {
    bold: {
      fontSize: FontSize.MEDIUM,
      fontFamily: FontFamily.BOLD,
    },
    semiBold: {
      fontSize: FontSize.MEDIUM,
      fontFamily: FontFamily.SEMI_BOLD,
    },
    medium: {
      fontSize: FontSize.MEDIUM,
      fontFamily: FontFamily.MEDIUM,
    },
    regular: {
      fontSize: FontSize.MEDIUM,
      fontFamily: FontFamily.REGULAR,
    },
  },
  sm: {
    bold: {
      fontSize: FontSize.SMALL,
      fontFamily: FontFamily.BOLD,
    },
    semiBold: {
      fontSize: FontSize.SMALL,
      fontFamily: FontFamily.SEMI_BOLD,
    },
    medium: {
      fontSize: FontSize.SMALL,
      fontFamily: FontFamily.MEDIUM,
    },
    regular: {
      fontSize: FontSize.SMALL,
      fontFamily: FontFamily.REGULAR,
    },
  },
}

