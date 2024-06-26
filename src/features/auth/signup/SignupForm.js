import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupValidationSchema } from "./SignupFormValidation";
import { Input, Button } from "../../../components/atoms";
import { authenticateUser } from "../../../redux/slices";
import { StyledFormContainer } from "../../../components/atoms/FormAndSignupStyles";

export const SignupForm = () => {
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(signupValidationSchema),

    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSignup = (data) => {
        dispatch(authenticateUser({ formValues: data }))
            .unwrap()
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                console.log("rejected")
            })

        console.log("Data", data);
    };

    return (
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
            <Button
                onClick={handleSubmit(onSignup)}
                sx={{ mt: 3 }}
            >
                Sign up
            </Button>
        </StyledFormContainer>
    );
};
