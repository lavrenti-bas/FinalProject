import React from "react";
import { FormPageContainer } from "../../../components/atoms/formContainer/FormContainer";
import { Text } from "../../../components/atoms";
import { LoginForm } from "./LoginForm";
import { Stack } from "@mui/material";


export const Login = () => {
    return (
        <FormPageContainer>
            <Stack>
                <Text
                    variant="h5"
                    sx={{ fontSize: 24, fontWeight: 'bold', color: '#1976d2', mb: 2, textAlign: 'center' }}
                >Log in</Text>
                <LoginForm />
            </Stack>
        </FormPageContainer>
    );
};


export default Login;