import React from "react";
import { Box, CircularProgress, styled } from "@mui/material";

const StyledLoadingContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minHeight: "100vh",
    padding: "30px",
}));

export const Loading = ({ size = 100, color = "success" }) => {
    return (
        <StyledLoadingContainer>
            <CircularProgress size={size} color={color} />
        </StyledLoadingContainer>
    );
};

export const LoadingWrapper = ({ isLoading, children }) => {
    if (isLoading) {
        return <Loading />;
    }
    return children;
};

