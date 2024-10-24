import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#BE3DFB",
      light: "#7346F1",
    },
    secondary: {
      main: "#214FF3",
      light: "#6FE5FF",
      dark: "#002577",
    },
  },
  typography: {
    fontFamily: '"Roboto", "system-ui", "-apple-system", "BlinkMacSystemFont"',
  },
});
