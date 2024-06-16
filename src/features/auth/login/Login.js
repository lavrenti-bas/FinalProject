import React from "react";
import { FormPageContainer, Text } from "../../../components/atoms";
import { LoginForm } from "./LoginForm";
import { Stack } from "@mui/material";


export const Login = () => {
    return (
        <FormPageContainer>
            <Stack>
                <Text>Log in</Text>
                <LoginForm />
            </Stack>
        </FormPageContainer>
    );
};


export default Login;