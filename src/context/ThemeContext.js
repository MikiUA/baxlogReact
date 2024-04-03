import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

export default function MuiThemeProvider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}