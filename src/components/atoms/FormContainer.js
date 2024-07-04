import React from "react";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100%;
`;

const BoxContainer = styled.div`
  width: 100%;
  max-width: 400px; /* Adjust max-width as needed */
  background-color: #ffffff;
  padding: 40px; /* Adjust padding as needed */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const StackContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const FormContainer = ({ children }) => {
    return (
        <StyledContainer>
            <BoxContainer>
                <StackContainer>{children}</StackContainer>
            </BoxContainer>
        </StyledContainer>
    );
};

export default FormContainer;
