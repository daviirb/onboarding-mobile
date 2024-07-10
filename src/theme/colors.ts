import { Palette, Theme } from "./themeTypes";

export const palette: Palette = {
  magenta: "#6759FF",
  white: "#FFFFFF",
  gray: "#EFEFEF",
  gray2: "#F5F5F5",
  gray3: "#535763",
  gray4: "#D1D3D4",

  darkBlue: "#0F1621",
  darkBlue2: "#1A1D1F",
  darkBlue3: "#0F1621",
  darkBlue4: "#2F3643",
  darkBlue5: "#2C2B46",
  darkBlue6: "#29303C",
  darkBlue7: "#18202E",

  pink: "#FFCACA",
  lightBlue: "#CAD2FF",

  green: "#B5EBCD",
};

export const lightTheme: Theme = {
  ...palette,

  primary: palette.magenta,
  text: palette.darkBlue2,
  textSecondary: palette.gray3,
  textTertiary: palette.darkBlue5,

  inputText: palette.gray2,
  placeholderTextColor: palette.gray4,

  buttonPrimary: palette.magenta,
  buttonSecondary: palette.gray,
  buttonTertiary: palette.gray3,

  background: palette.white,

  icon: palette.green,
  iconSecondary: palette.gray,

  activeDot: palette.magenta,
  inactiveDot: palette.magenta,
};

export const darkTheme: Theme = {
  ...palette,

  primary: palette.magenta,
  text: palette.white,
  textSecondary: palette.gray4,
  textTertiary: palette.darkBlue5,

  inputText: palette.darkBlue7,
  placeholderTextColor: palette.gray3,

  buttonPrimary: palette.magenta,
  buttonSecondary: palette.darkBlue4,
  buttonTertiary: palette.darkBlue6,

  background: palette.darkBlue,

  icon: palette.green,
  iconSecondary: palette.darkBlue6,

  activeDot: palette.magenta,
  inactiveDot: palette.white,
};

export const colors = { palette, lightTheme, darkTheme };
