import React from "react";
import { FormContainer } from "../../../components/atoms/FormContainer";
import { Snackbar, Text } from "../../../components/atoms";
import { LoginForm } from "./LoginForm";
import { Stack, Box, styled } from "@mui/material";
import { useUser } from "../../../hooks";
import { useDispatch } from "react-redux";
import { clearError } from "../../../redux/slices";
import LogoImage from "../../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PageContainer = styled('div')({
    minHeight: '100vh',
    backgroundColor: '#a7cd78',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const HeaderContainer = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5px',
});

export const Login = () => {
    const { error } = useUser();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    return (
        <PageContainer>
            <HeaderContainer>
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        padding: '10px',
                        fontWeight: 'bold',
                        fontSize: "15px",
                        maxWidth: '350px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                    }}
                >
                    <h1>{t("home")}</h1>
                </Link>
            </HeaderContainer>
            <FormContainer>
                <Stack spacing={2} alignItems="center">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Link to='/'> <Box component="img" src={LogoImage} alt="Logo" sx={{ width: 45, height: 40 }} />
                        </Link>
                        <Text
                            variant="h5"
                            sx={{ fontWeight: 'bold' }}
                        >
                            {t("login")}
                        </Text>
                    </Stack>
                    <LoginForm />
                </Stack>
                <Snackbar
                    message={error}
                    onClose={() => { dispatch(clearError()) }}
                    severity="error"
                />
            </FormContainer>
        </PageContainer>
    );
};

export default Login;

