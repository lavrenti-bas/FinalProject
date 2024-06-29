import React from "react";
import { Grid, Card, Stack, styled } from "@mui/material";
import { Link, Text } from "../../../components/atoms";
import { ProductCardActions } from "./ProductCardAction";

const StyledImage = styled("img")({
    objectFit: "cover",
    width: "100%",
    height: "311px",
    borderRadius: 20,
});

const StyledCard = styled(Card)(() => ({
    minWidth: "320px",
    height: "450px",
    backgroundColor: "transparent",
    border: "none",
    padding: "24px",
    borderRadius: "20px",
    boxShadow: "none",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
        boxShadow: "0px 30px 100px rgba(0, 0, 0, 0.1)",
        borderRadius: 20,
    },
}));

const ProductCard = ({ product }) => {
    const { name, image, brand, category, price, _id } = product;
    return (
        <Grid item xs={12} sm={12} md={4} lg={3}>
            <StyledCard>
                <Link to={`/products/categories/${category}/${_id}`}>
                    <StyledImage src={image} alt={`${brand}-${name}`} />
                </Link>
                <Stack direction="row" justifyContent="space-between" mt="29px">
                    <Stack spacing={1.5}>
                        <Text>{name}</Text>
                        <Text color="#252b42">{brand}</Text>
                        <Text color="#2E2E2E" fontWeight="bold">${price}</Text>
                    </Stack>
                    <ProductCardActions product={product} />
                </Stack>
            </StyledCard>
        </Grid >
    );
};

export default ProductCard;


