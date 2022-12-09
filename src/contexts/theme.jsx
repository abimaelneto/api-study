import { createContext, useEffect, useMemo, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [useDarkMode, setUseDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          // fontFamily: ["Open Sans", "sans-serif"].join(),
          h1: {
            fontWeight: "300",
            fontSize: "2rem",
            lineHeight: "116.7%",
          },
          h2: {
            fontWeight: "300",
            fontSize: "1.5rem",
            lineHeight: "120%",
          },
          h3: {
            fontWeight: "400",
            fontSize: "1.17rem",
            lineHeight: "116.7%",
          },
          h4: {
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "123.5%",
          },
          h5: {
            fontWeight: "400",
            fontSize: "0.83rem",
            lineHeight: "133.4%",
          },
          h6: {
            fontWeight: "500",
            fontSize: "0.67rem",
            lineHeight: "160%",
          },
          body1: {
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "150%",
          },
          body2: {
            fontWeight: "400",
            fontSize: "0.875rem",
            lineHeight: "143%",
          },
          subtitle1: {
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "175%",
          },
          subtitle2: {
            fontWeight: "500",
            fontSize: "0.875rem",
            lineHeight: "157%",
          },
          overline: {
            fontWeight: "400",
            fontSize: "0.75rem",
            lineHeight: "266%",
          },
          caption: {
            fontWeight: "400",
            fontSize: "0.75rem",
            lineHeight: "166%",
          },
        },
      }),
    [useDarkMode]
  );
  const handleToggleColorTheme = () => {
    setUseDarkMode((oldState) => {
      const newMode = !oldState;
      localStorage.setItem("useDarkMode", newMode);
      return newMode;
    });
  };
  const prefersDarkMode = useMediaQuery("prefers-color-scheme: dark");

  useEffect(() => {
    const savedColorMode = localStorage.getItem("useDarkMode");

    if (savedColorMode && savedColorMode !== "undefined") {
      setUseDarkMode(savedColorMode);
      return;
    }

    setUseDarkMode(prefersDarkMode);
  }, []);

  return (
    <ThemeContext.Provider value={{ handleToggleColorTheme, useDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
