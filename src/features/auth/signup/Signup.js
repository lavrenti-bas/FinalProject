import React from "react";
import { Text } from "../../../components/atoms";
import { FormContainer } from "../../../components/atoms/FormContainer";
import { Stack } from "@mui/material";
import { SignupForm } from "./SignupForm";

export const Signup = () => {
    return (
        <FormContainer>
            <Stack>
                <Text
                    variant="h5"
                    sx={{ fontSize: 24, fontWeight: 'bold', color: '#1976d2', mb: 2, textAlign: 'center' }}
                >Sign up</Text>
                <SignupForm />
            </Stack>
        </FormContainer>
    );
};

export default Signup;
