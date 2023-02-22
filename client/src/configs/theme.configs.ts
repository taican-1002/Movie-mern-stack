import { createTheme } from "@mui/material/styles";
import { colors, PaletteMode } from "@mui/material";

interface ThemeModes {
  dark: string;
  light: string;
}

interface Mode {
  mode: PaletteMode | undefined;
}

export const themeModes: ThemeModes = {
  dark: "dark",
  light: "light",
};

const themeConfigs = {
  custom: ({ mode }: Mode) => {
    const customPalette =
      mode === themeModes.dark
        ? {
            primary: {
              main: "#ff0000",
              contrastText: "#ffffff",
            },
            secondary: {
              main: "#f44336",
              contrastText: "#ffffff",
            },
            background: {
              default: "#000000",
              paper: "#131313",
            },
          }
        : {
            primary: {
              main: "#ff0000",
            },
            secondary: {
              main: "#f44336",
            },
            background: {
              default: colors.grey["100"],
            },
          };

    return createTheme({
      palette: {
        mode,
        ...customPalette,
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
        },
      },
    });
  },
};

export default themeConfigs;
