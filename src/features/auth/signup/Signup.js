import React from "react";
import { Snackbar, Text } from "../../../components/atoms";
import { FormContainer } from "../../../components/atoms/FormContainer";
import { Stack } from "@mui/material";
import { SignupForm } from "./SignupForm";
import { clearError } from "../../../redux/slices";
import { useDispatch } from "react-redux";
import { useUser } from "../../../hooks";

export const Signup = () => {
    const { error } = useUser();
    const dispatch = useDispatch();

    return (
        <FormContainer>
            <Stack>
                <Text
                    variant="h5"
                    sx={{ fontSize: 24, fontWeight: 'bold', color: '#1976d2', mb: 2, textAlign: 'center' }}
                >Sign up</Text>
                <SignupForm />
            </Stack>
            <Snackbar
                message={error} severity="error"
                onClose={() => { dispatch(clearError()) }}
            />
        </FormContainer>
    );
};

export default Signup;
