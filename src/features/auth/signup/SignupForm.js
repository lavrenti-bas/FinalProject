import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { signupValidationSchema } from "./SignupFormValidation";
import { Button, Input } from "../../../components/atoms";
import { FormPageContainer } from "../../../components/atoms";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../../redux/slices";


const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
  width: 100%;
`;

export const SignupForm = () => {
    const {
        control,
        formState: { errors }, //isValid could add
        handleSubmit,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(signupValidationSchema),
    });
    const dispatch = useDispatch();
    const onSignup = (data) => {
        dispatch(authenticateUser({ formValues: data }))
        console.log("Data", data);
    };

    return (
        <FormPageContainer>
            <StyledFormContainer>
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="First Name"
                            error={Boolean(errors.firstName)}
                            helperText={errors.firstName?.message}
                        />
                    )}
                />
                <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Last Name"
                            error={Boolean(errors.lastName)}
                            helperText={errors.lastName?.message}
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Email"
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            type="password"
                            label="Password"
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                        />
                    )}
                />
                <StyledButton onClick={handleSubmit(onSignup)}>
                    Sign up
                </StyledButton>
            </StyledFormContainer>
        </FormPageContainer>
    );
};
