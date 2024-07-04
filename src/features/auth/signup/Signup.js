import React from "react";
import { Link, Snackbar, Text } from "../../../components/atoms";
import { FormContainer } from "../../../components/atoms/FormContainer";
import { Box, Stack, styled } from "@mui/material";
import { SignupForm } from "./SignupForm";
import { clearError } from "../../../redux/slices";
import { useDispatch } from "react-redux";
import { useUser } from "../../../hooks";
import LogoImage from "../../../assets/images/Logo.png";
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

export const Signup = () => {
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
                        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
                        padding: '10px',
                        fontWeight: 'bold',
                        fontSize: "15px",
                        maxWidth: '350px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
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
                            sx={{ fontWeight: 'bold', }}
                        > {t("sign_up")}</Text>
                    </Stack>
                    <SignupForm />
                </Stack>
                <Snackbar
                    message={error} severity="error"
                    onClose={() => { dispatch(clearError()) }}
                />
            </FormContainer >
        </PageContainer>
    );
};

export default Signup;
