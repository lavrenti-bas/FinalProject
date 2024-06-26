import React, { useState } from "react";
import { Avatar, Box, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Button, Link } from "../atoms";
import { useUser } from "../../hooks";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices";
import { isUserAdmin } from "../../helpers/utils";



const getUserInitials = (userData) => {
    if (!userData || !userData.user) return "";

    const { firstName, lastName } = userData.user;

    if (!firstName || !lastName) return "";

    const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;

    return initials;
};


export const UserIcon = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { userData } = useUser();
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logout());
        handleClose();
    };

    return (
        <Box>
            <IconButton onClick={handleClick}>
                <Avatar>{getUserInitials(userData)}</Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Stack>
                    {!userData ? (
                        <>
                            <MenuItem onClick={handleClose}>
                                <Link to="/login">{t("login")}</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/signup">{t("sign up")}</Link>
                            </MenuItem>
                        </>
                    ) : (
                        <MenuItem onClick={handleLogout}>
                            <Button>{t("logout")}</Button>
                        </MenuItem>
                    )}
                    {isUserAdmin(userData) && (
                        <MenuItem onClick={handleClose}>
                            <Link to="/products/add">{t("add product")}</Link>
                        </MenuItem>
                    )}
                </Stack>
            </Menu>
        </Box>
    );
};
