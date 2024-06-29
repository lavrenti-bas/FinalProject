import React from "react";
import { FormContainer } from "../../../components/atoms/FormContainer";
import { Snackbar, Text } from "../../../components/atoms";
import { LoginForm } from "./LoginForm";
import { Stack } from "@mui/material";
import { useUser } from "../../../hooks";
import { useDispatch } from "react-redux";
import { clearError } from "../../../redux/slices";


export const Login = () => {
    const { error } = useUser()
    const dispatch = useDispatch();

    return (
        <FormContainer>
            <Stack>
                <Text
                    variant="h5"
                    sx={{ fontSize: 24, fontWeight: 'bold', color: '#1976d2', mb: 2, textAlign: 'center' }}
                >Log in</Text>
                <LoginForm />
            </Stack>
            <Snackbar message={error} onClose={() => {
                dispatch(clearError())
            }}
                severity="error"
            />
        </FormContainer >
    );
};


export default Login;