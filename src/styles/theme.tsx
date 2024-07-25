import { createTheme } from "@mui/material";

import scssVariables from "styles/sass-variables.module.scss";

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});
const { breakpoints } = defaultTheme;

export const theme = createTheme({
  typography: {
    fontFamily: [""].join(","),
    h1: {
      fontSize: 54,
      fontWeight: 700,
      [breakpoints.down("sm")]: {
        fontSize: 32,
        fontWeight: 700,
      },
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "fit-content",
          padding: "0px",
          color: scssVariables.dark_graylish_blue,
          textTransform: "capitalize",
          boxShadow: "none",
          "&:hover": {
            color: scssVariables.very_dark_graylish_blue,
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          ".MuiFormHelperText-root": {
            display: "none",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          backgroundColor: "#fff",
          "& fieldset": {
            border: `1px solid transparent`,
          },
          "&:hover fieldset": {
            border: "transparent",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
        },
        input: {
          padding: "18px 24px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.focused": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});
