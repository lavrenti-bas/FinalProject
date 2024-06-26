import React from "react";
import { Grid } from "@mui/material";

const GridContainer = ({ children }) => {
    return (
        <Grid
            container
            sx={{
                width: "100%",
                justifyContent: "center",
                "& > .MuiGrid-item": {
                    paddingRight: 0
                }
            }}
            rowGap={2}
            columnGap={3}
        >
            {children}
        </Grid>
    );
};

export default GridContainer;
