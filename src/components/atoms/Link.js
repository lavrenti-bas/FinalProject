import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {Box} from '@mui/material';

export const Link = ({ children, to, sx = {} }) => {
    return (
        <Box component={RouterLink} to={to} sx={{
            textDecoration: "none",
            color: "black",
            ...sx,
        }}>
            {children}
        </Box>
    );
};





