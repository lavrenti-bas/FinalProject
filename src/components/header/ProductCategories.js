import React, { useState } from "react";
import { useProduct } from "../../hooks";
import { Button, Menu, MenuItem, styled, Typography } from "@mui/material";
import { Link } from "../atoms";
import { useTranslation } from "react-i18next";

const StyledButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.secondary,
    },
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(1),
    textTransform: "none",
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    padding: theme.spacing(1, 2),
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

export const ProductCategories = () => {
    const { categories } = useProduct();
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <StyledButton
                aria-controls="categories-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                {t("categories")}
            </StyledButton>
            <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                keepMounted
            >
                {categories.map((item) => {
                    const { _id, name } = item;
                    return (
                        <Link key={_id} to={`/products/categories/${name}?sort=price,asc&page=1`} onClick={handleClose} style={{ textDecoration: 'none' }}>
                            <StyledMenuItem>
                                <Typography color="textPrimary">{name}</Typography>
                            </StyledMenuItem>
                        </Link>
                    );
                })}
            </Menu>
        </div>
    );
};

