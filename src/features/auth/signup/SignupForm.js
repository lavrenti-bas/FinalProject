import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupValidationSchema } from "./SignupFormValidation";
import { Input, Button } from "../../../components/atoms";
import { authenticateUser } from "../../../redux/slices";
import { styled } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledFormContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    width: "100%",
});

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
    const { t } = useTranslation();

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
                        label={t("first_name")}
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
                        label={t("last_name")}
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
                        label={t("email")}
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
                        label={t("password")}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                    />
                )}
            />
            <Button
                onClick={handleSubmit(onSignup)}
                sx={{ mt: 3 }}
            >
                {t("sign_up")}
            </Button>
        </StyledFormContainer>
    );
};
