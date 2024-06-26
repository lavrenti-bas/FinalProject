// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import LanguageSelect from "./LanguageSelect";
// import { Link } from '../atoms';
// import styled from 'styled-components';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import { Badge, Box, Button } from '@mui/material';
// import { UserIcon } from "./UserIcon";
// import { IoCart } from "react-icons/io5";
// import CartModal from './CartModal';
// import { useCart } from '../../hooks';

// const StyledAppBar = styled(AppBar)(() => ({
//     backgroundColor: "#131921",
//     padding: "0 37px 0 30px",
// }));

// const StyledToolbar = styled(Toolbar)(() => ({
//     display: "flex",
//     width: "100%",
//     justifyContent: "space-between",
//     paddingTop: 8,
//     paddingBottom: 8,
// }));


// export const Header = () => {

//     const [open, setOpen] = useState(false);
//     const { cartItems } = useCart;
//     const { t } = useTranslation();

//     return (
//         <div>
//             <Box>
//                 <StyledAppBar position="static">
//                     <StyledToolbar>
//                         <Link to="/">{t("home")}</Link>
//                         <Box sx={{ display: 'flex', alignItems: "center" }}>
//                             <Button onClick={() => {
//                                 setOpen(true);
//                             }}>
//                                 <Badge color="success" badgeContent={10}>
//                                     <IoCart size={30} color='black' />
//                                 </Badge>
//                             </Button>
//                             <UserIcon />
//                             <LanguageSelect />
//                         </Box>
//                     </StyledToolbar>
//                     <CartModal open={open} setOpen={setOpen} cartItems={cartItems} totalQuantity={1} />
//                 </StyledAppBar>
//             </Box>
//         </div >
//     );
// };

// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import LanguageSelect from "./LanguageSelect";
// import { Link } from '../atoms';
// import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import { Badge, Box, Button } from '@mui/material';
// import { UserIcon } from "./UserIcon";
// import { IoCart } from "react-icons/io5";
// import CartModal from './CartModal';
// import { useCart } from '../../hooks';

// const StyledAppBar = styled(AppBar)(() => ({
//     backgroundColor: "#131921",
//     padding: "0 37px 0 30px",
// }));

// const StyledToolbar = styled(Toolbar)(() => ({
//     display: "flex",
//     width: "100%",
//     justifyContent: "space-between",
//     paddingTop: 8,
//     paddingBottom: 8,
// }));

// export const Header = () => {
//     const [open, setOpen] = useState(false);
//     const { cartItems } = useCart(); // Correctly invoking the hook
//     const { t } = useTranslation();

//     return (
//         <div>
//             <Box>
//                 <StyledAppBar position="static">
//                     <StyledToolbar>
//                         <Link to="/">{t("home")}</Link>
//                         <Box sx={{ display: 'flex', alignItems: "center" }}>
//                             <Button onClick={() => setOpen(true)}>
//                                 <Badge color="success" badgeContent={10}> {/* Using the totalQuantity from the cart */}
//                                     <IoCart size={30} color='black' />
//                                 </Badge>
//                             </Button>
//                             <UserIcon />
//                             <LanguageSelect />
//                         </Box>
//                     </StyledToolbar>
//                     <CartModal open={open} setOpen={setOpen} cartItems={cartItems} totalQuantity={10} />
//                 </StyledAppBar>
//             </Box>
//         </div>
//     );
// };


import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelect from "./LanguageSelect";
import { Link } from '../atoms';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Badge, Box, Button } from '@mui/material';
import { UserIcon } from "./UserIcon";
import { IoCart } from "react-icons/io5";
import { CartModal } from './CartModal';
import { useCart } from '../../hooks';

const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: "green",
    padding: "0 37px 0 30px",
}));

const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 8,
}));

export const Header = () => {
    const [open, setOpen] = useState(false);
    const { cartItems } = useCart(); // Correctly invoking the hook
    const { t } = useTranslation();
    const cartItemsQuantity = cartItems?.reduce((acc, curr) => acc + curr.quantity, 0)

    return (
        <div>
            <Box>
                <StyledAppBar position="static">
                    <StyledToolbar>
                        <Link to="/">{t("home")}</Link>
                        <Box sx={{ display: 'flex', alignItems: "center" }}>
                            <Button onClick={() => setOpen(true)}>
                                <Badge color="success" badgeContent={cartItemsQuantity}> {/* Using the totalQuantity from the cart */}
                                    <IoCart size={30} color='black' />
                                </Badge>
                            </Button>
                            <UserIcon />
                            <LanguageSelect />
                        </Box>
                    </StyledToolbar>
                    <CartModal open={open} setOpen={setOpen} cartItems={cartItems} totalQuantity={cartItemsQuantity} />
                </StyledAppBar>
            </Box>
        </div>
    );
};


