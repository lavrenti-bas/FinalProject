import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginValidationSchema } from "./LoginFormValidation";
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


export const LoginForm = () => {
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(LoginValidationSchema),
    });
    const { t } = useTranslation();
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
                        label= {t("email")}
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
                        label= {t("password")}
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
