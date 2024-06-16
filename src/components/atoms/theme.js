import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2", // Primary color
        },
        secondary: {
            main: "#dc004e", // Secondary color
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif", // Default font family
    },
    spacing: 8, // Default spacing unit
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    // Other theme configurations...
});

export { theme };
