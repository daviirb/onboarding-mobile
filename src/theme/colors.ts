import { Palette, Theme } from "./themeTypes";

export const palette: Palette = {
  magenta: "#6759FF",
  white: "#FFFFFF",
  gray: "#EFEFEF",
  gray2: "#F5F5F5",
  gray3: "#535763",
  gray4: "#D1D3D4",
  gray5: "#FCFCFC",
  gray6: "#9A9FA5",

  darkBlue: "#0F1621",
  darkBlue2: "#1A1D1F",
  darkBlue3: "#0F1621",
  darkBlue4: "#2F3643",
  darkBlue5: "#2C2B46",
  darkBlue6: "#29303C",
  darkBlue7: "#18202E",
  darkBlue8: "#535763",

  black: "#000000",

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
  textNeutral: palette.gray6,

  inputText: palette.gray2,
  placeholderTextColor: palette.gray4,

  buttonPrimary: palette.magenta,
  buttonSecondary: palette.gray,
  buttonTertiary: palette.gray3,

  background: palette.white,
  splashBackground: palette.magenta,

  icon: palette.green,
  iconSecondary: palette.gray,

  activeDot: palette.magenta,
  inactiveDot: palette.magenta,

  dynamicLogo: palette.magenta,
  dynamicIconBG: palette.gray5,
  dynamicIconBorder: palette.gray,
  dynamicIconLogo: palette.black,
};

export const darkTheme: Theme = {
  ...palette,

  primary: palette.magenta,
  text: palette.white,
  textSecondary: palette.gray4,
  textTertiary: palette.darkBlue5,
  textNeutral: palette.gray6,

  inputText: palette.darkBlue7,
  placeholderTextColor: palette.gray3,

  buttonPrimary: palette.magenta,
  buttonSecondary: palette.darkBlue4,
  buttonTertiary: palette.darkBlue6,

  background: palette.darkBlue,
  splashBackground: palette.darkBlue,

  icon: palette.green,
  iconSecondary: palette.darkBlue6,

  activeDot: palette.magenta,
  inactiveDot: palette.white,

  dynamicLogo: palette.white,
  dynamicIconBG: palette.darkBlue4,
  dynamicIconBorder: palette.darkBlue8,
  dynamicIconLogo: palette.white,
};

export const colors = { palette, lightTheme, darkTheme };
