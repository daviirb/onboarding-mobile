const palette = {
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

  green: "#B5EBCD",
};

const lightTheme = {
  ...palette,

  primary: palette.magenta,
  text: palette.darkBlue2,
  textSecondary: palette.gray3,
  textTertiary: palette.darkBlue5,

  buttonPrimary: palette.magenta,
  buttonSecondary: palette.gray,
  buttonTertiary: palette.gray3,

  icon: palette.green,
  iconSecondary: palette.gray,
};

const darkTheme = {
  ...palette,

  primary: palette.magenta,
  text: palette.white,
  textSecondary: palette.gray4,
  textTertiary: palette.darkBlue5,

  buttonPrimary: palette.magenta,
  buttonSecondary: palette.darkBlue4,
  buttonTertiary: palette.darkBlue6,

  icon: palette.green,
  iconSecondary: palette.darkBlue6,
};

export const colors = { palette, lightTheme, darkTheme };
