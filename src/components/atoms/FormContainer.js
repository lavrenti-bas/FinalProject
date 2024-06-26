import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer, StyledStack, HomeLinkContainer } from "./FormAndSignupStyles";

export const FormContainer = ({ children }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
            <HomeLinkContainer>
                <Link to="/">Home</Link>
            </HomeLinkContainer>
            <StyledContainer>
                <StyledStack>{children}</StyledStack>
            </StyledContainer>
        </div>
    );
};
