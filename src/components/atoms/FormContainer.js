import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

const StyledStack = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const FormPageContainer = ({ children }) => {
    return (
        <StyledContainer>
            <Link to="/">Home</Link>
            <StyledStack>{children}</StyledStack>
        </StyledContainer>
    );
};
