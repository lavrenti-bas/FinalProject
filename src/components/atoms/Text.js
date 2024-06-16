import React from "react";
import { Typography } from "@mui/material";

export const Text = ({ variant = "body1", children, style }) => {
    return (
        <Typography variant={variant} sx={{ ...style }}>
            {children}
        </Typography>
    );
};

