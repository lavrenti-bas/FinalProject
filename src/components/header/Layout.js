import React from 'react';
import { Grid } from '@mui/material';
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <Grid container direction="column" sx={{ minHeight: "100vh" }}>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    minHeight: "calc(100vh - 70px)",
                    boxShadow: "0px 0px 10px rgba(5, 2, 5, 0.5)",
                    paddingTop: { xs: 3, sm: 4 },
                    marginTop: { xs: 1, sm: 2 },
                    flexGrow: 1,
                    backgroundColor: "#a7cd78",
                    paddingBottom: 0,
                    paddingLeft: { xs: 1, sm: 3, md: 5 },
                    paddingRight: { xs: 1, sm: 3, md: 5 }
                }}
            >
                <Outlet />
            </Grid>
        </Grid>
    );
};
