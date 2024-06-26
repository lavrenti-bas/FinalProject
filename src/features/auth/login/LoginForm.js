import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginValidationSchema } from "./LoginFormValidation";
import { Input, Button } from "../../../components/atoms";
import { StyledFormContainer } from "../../../components/atoms/FormAndSignupStyles";
import { authenticateUser } from "../../../redux/slices";

export const LoginForm = () => {
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(LoginValidationSchema),
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = (data) => {
        dispatch(authenticateUser({ formValues: data, isLogin: true }))
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
            <Button onClick={handleSubmit(onLogin)}
                sx={{ mt: 3 }}
            >
                Log in
            </Button>
        </StyledFormContainer>
    );
};
