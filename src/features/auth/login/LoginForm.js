import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { LoginValidationSchema } from "./LoginFormValidation";
import { FormPageContainer, Input, Button } from "../../../components/atoms";
import styled from "styled-components";
// import { useDispatch } from "react-redux";

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const LoginForm = () => {
    const {
        control,
        formState: { isValid, errors },
        handleSubmit,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(LoginValidationSchema),
    });
    const onLogin = (data) => {
        console.log(data)
    };

    return (
        <FormPageContainer>
            <StyledFormContainer>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => {
                        const { name, onChange } = field;
                        return (
                            <Input
                                name={name}
                                onChange={onChange}
                                label="Email"
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message}
                            />
                        );
                    }}
                />
                <Controller
                    type="password"
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => {
                        const { name, onChange } = field;
                        return (
                            <Input
                                name={name}
                                onChange={onChange}
                                label="password"
                                error={Boolean(errors.password)}
                                helperText={errors.password?.message}
                            />
                        );
                    }}
                />
                <Button disabled={!isValid} onClick={handleSubmit(onLogin)}>Login</Button>
            </StyledFormContainer>
        </FormPageContainer >
    );
};
