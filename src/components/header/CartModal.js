import React from "react";
import { Box, Modal, IconButton, Divider, Stack, Typography, Chip, Button, styled } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { FaTrashCan } from "react-icons/fa6";
import { addToCart, removeFromCart, removeProductFromCart } from "../../redux/slices/cartSlice";
import { useTranslation } from "react-i18next";

const containerStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: 5,
    boxShadow: 24,
    p: 2,
};

const StyledButton = styled(Button)(() => ({
    cursor: 'pointer',
    padding: 0,
    minHeight: 0,
    minWidth: 0,
    width: '29px',
    outline: 'none',
    '&:focus': {
        outline: 'none',
    },
}));

export const CartModal = ({ open, setOpen, cartItems, totalQuantity }) => {

    const handleClose = () => setOpen(false);
    const { t } = useTranslation();
    const totalSum = cartItems.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                sx={{ backdropFilter: 'blur(3px)' }}
            >
                <Box sx={containerStyles}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton onClick={handleClose}>
                            <IoMdClose />
                        </IconButton>
                    </Box>
                    <Typography variant="h6" component="h2"> {t("cart_items")}</Typography>
                    <Typography variant="subtitle1"> {t("total_quantity")}: {totalQuantity}</Typography>
                    <Divider sx={{ mt: 1, mb: 2 }} />
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.product._id}>
                                <CartItem
                                    product={item.product}
                                    quantity={item.quantity}
                                />
                                <Divider sx={{ mt: 1, mb: 2 }} />
                            </div>
                        ))
                    ) : (
                        <Typography variant="body1"> {t("no_items_in_cart")}.</Typography>
                    )}
                    <Stack direction="row" gap="2px">
                        <Typography fontSize="2rem" fontWeight="bold"> {t("total")}:</Typography>
                        <Typography fontSize="2rem" color="#42b883" fontWeight="bold">${totalSum}</Typography>

                    </Stack>
                </Box>
            </Modal >
        </div >
    );
};

const CartItem = ({ product, quantity }) => {
    const { _id, name, price, image } = product;
    const dispatch = useDispatch();
    const { t } = useTranslation();

    return (
        <Box>
            <Stack direction="row" spacing={2} alignItems="center">
                <img
                    src={image}
                    style={{ width: 120, height: 120, borderRadius: 5 }}
                    alt={name}
                />
                <Stack spacing={2} width="100%" paddingX={1.5}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography fontWeight="400">{name}</Typography>
                        <Typography fontWeight="400" sx={{ marginRight: 1, color: "#42b883", }}>
                            ${price.toFixed(2)}
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={0.2}
                        sx={{
                            border: "1px solid #ec5e2a",
                            borderRadius: "30px"
                        }}>
                        <StyledButton onClick={() => dispatch(removeFromCart(_id))}>
                            -
                        </StyledButton>
                        <Typography>Quantity: {quantity}</Typography>
                        <StyledButton onClick={() => dispatch(addToCart(product))}>
                            +
                        </StyledButton>
                    </Stack>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Chip label={t("in_stock")} color="primary" sx={{ borderRadius: 4, minWidth: 70, height: 30 }} />
                        <Stack direction="row" alignItems="center" onClick={() => dispatch(removeProductFromCart(_id))}
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: '#f1807e',
                                    borderRadius: '5px',
                                },
                            }}>
                            <Typography> {t("remove")}</Typography>
                            <FaTrashCan size={20} />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

