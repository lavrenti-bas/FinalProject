import React from "react";
import { useUser } from "../../../hooks";
import { isUserAdmin } from "../../../helpers/utils";
import { Stack, styled, Fab } from "@mui/material";
import { Button, Text } from "../../../components/atoms";
import { useDispatch } from "react-redux";
import { deleteProduct, setSelectProduct } from "../../../redux/slices";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/slices/cartSlice";
import { FaPlus } from "react-icons/fa";



const StyledFab = styled(Fab)(() => ({
    backgroundColor: "black",
    "&:hover": {
        backgroundColor: "black",
    },
}));

export default StyledFab;


export const ProductCardActions = ({ product }) => {
    const { userData } = useUser();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (isUserAdmin(userData)) {
        return (
            <Stack>
                <Button onClick={() => {
                    dispatch(setSelectProduct(product));
                    navigate(`/products/${product._id}/edit`)
                }}>
                    edit
                </Button>
                <Button
                    onClick={() => {
                        dispatch(deleteProduct({ id: product._id }));
                    }}
                >
                    delete
                </Button>
            </Stack>
        );
    }
    return (
        <StyledFab variant="extended" onClick={() => {
            dispatch(addToCart(product))
        }}>
            <FaPlus color="white" style={{ marginRight: 4 }} />
            <Text color="#ffff">Add to cart</Text>
        </StyledFab>
    );
};



