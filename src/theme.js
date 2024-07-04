import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#a7cd78',
        },
        secondary: {
            main: "#dc2f2f",
            secondary: "black",
            third: "#42b883",
        },

    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
    spacing: 8, 
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
   
});

export { theme };
