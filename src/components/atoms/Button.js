import React from "react";
import { Button as MuiButton } from "@mui/material";

export const Button = ({ variant = "contained", color = "primary", children, onClick, sx = {} }) => {
    return (
        <MuiButton variant={variant} color={color} onClick={onClick} sx={sx}>
            {children}
        </MuiButton>
    );
};
