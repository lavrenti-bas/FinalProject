import React from "react";
import { FormPageContainer, Text } from "../../../components/atoms";
import { Stack } from "@mui/material";
import { SignupForm } from "./SignupForm";

export const Signup = () => {
    return (
        <FormPageContainer>
            <Stack>
                <Text>Sign up</Text>
                <SignupForm />
            </Stack>
        </FormPageContainer>
    );
};

export default Signup;
