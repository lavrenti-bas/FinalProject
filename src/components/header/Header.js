import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link, Text } from '../atoms';
import { AppBar, Toolbar, Box, Button, Badge } from '@mui/material';
import { IoCart } from "react-icons/io5";
import LanguageSelect from "./LanguageSelect";
import { UserIcon } from "./UserIcon";
import { CartModal } from './CartModal';
import { useCart } from '../../hooks';
import { ProductCategories } from './ProductCategories';
import { SearchBar } from './SearchBar';
import LogoImage from "../../assets/images/Logo.png";
import { useTranslation } from 'react-i18next';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary,
    padding: theme.spacing(0, 2),
    width: '99%',
    margin: '0 auto',
    borderRadius: theme.spacing(4),
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0.5, 0),
}));

const LogoLink = styled(Link)({
    display: 'flex',
    alignItems: 'center',
});

const LogoImg = styled('img')({
    width: 65,
    height: 60,
    objectFit: 'cover',
    paddingTop: "2px"
});

const FlexBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
}));

export const Header = () => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const { cartItems } = useCart();
    const cartItemsQuantity = cartItems?.reduce((acc, curr) => acc + curr.quantity, 0) || 0;

    return (
        <div>
            <Box>
                <StyledAppBar position="static">
                    <StyledToolbar>
                        <FlexBox>
                            <LogoLink to="/">
                                <LogoImg src={LogoImage} alt="logo" />
                            </LogoLink>
                            <Text
                                sx={{
                                    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
                                    fontWeight: 'bold',
                                    fontSize: "20px",
                                    maxWidth: '350px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {t("the_best_for_shopping")}
                            </Text>
                        </FlexBox>
                        <FlexBox>
                            <SearchBar />
                            <Box sx={{ marginLeft: 2 }}>
                                <ProductCategories />
                            </Box>
                        </FlexBox>
                        <FlexBox>
                            <Button onClick={() => setOpen(true)}>
                                <Badge color="secondary" badgeContent={cartItemsQuantity}>
                                    <IoCart size={32} color='black' />
                                </Badge>
                            </Button>
                            <UserIcon />
                            <LanguageSelect />
                        </FlexBox>
                    </StyledToolbar>
                </StyledAppBar>
                <CartModal open={open} setOpen={setOpen} cartItems={cartItems} totalQuantity={cartItemsQuantity} />
            </Box>
        </div>
    );
};
