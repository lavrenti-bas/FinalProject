import { Box, Stack } from "@mui/material";
import styled from "@emotion/styled";
// import { Button } from "../Button";

export const StyledContainer = styled(Box)`
 width: 100%;
  max-width: 400px;
  background-color: #ffffff; /* Add a white background for the form */
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add some shadow for better appearance */
  border-radius: 10px;
`;

export const StyledStack = styled(Stack)`
  width: 100%;
  max-width: 400px;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const HomeLinkContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  a {
    text-decoration: none;
    font-size:25px;
    font-weight:bold;
    color:black;
    &:hover {
      color: #1565c0;
    }
  }
`;
