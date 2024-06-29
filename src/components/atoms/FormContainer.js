import React from "react";
import { StyledContainer, StyledStack } from "./FormAndSignupStyles";
// import { Link } from "./Link";
// import LogoImage from "../../assets/images/Logo.png";
// import { Stack } from "@mui/material";

export const FormContainer = ({ children }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>

            <StyledContainer>
                <StyledStack>{children}</StyledStack>
            </StyledContainer>
        </div>
    );
};

// {/* <Stack>
// <Link>
//     <img src={LogoImage} width={250} height={250} alt="logo" />
// </Link>
// </Stack> */}
// //may add image 