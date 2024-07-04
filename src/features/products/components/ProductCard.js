// import React from "react";
// import { Grid, Card, Stack, styled, Box } from "@mui/material";
// import { Link, Typography } from "@mui/material";
// import { ProductCardActions } from "./ProductCardAction";

// const StyledImage = styled("img")({
//     objectFit: "cover",
//     width: "100%",
//     height: "250px",
//     borderRadius: "20px 20px 0 0",
// });

// const StyledCard = styled(Card)(() => ({
//     minWidth: "320px",
//     height: "100%",
//     backgroundColor: "#fff",
//     border: "2.5px solid #dc2f2f",
//     padding: "20px",
//     borderRadius: "20px",
//     boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     "&:hover": {
//         transform: "translateY(-10px)",
//         boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.2)",
//     },
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
// }));

// const ProductCard = ({ product }) => {
//     const { name, image, brand, category, price, _id } = product;
//     return (
//         <Grid item xs={12} sm={12} md={4} lg={3}>
//             <StyledCard>
//                 <Link href={`/products/categories/${category}/${_id}`} underline="none">
//                     <StyledImage src={image} alt={`${brand}-${name}`} />
//                 </Link>
//                 <Stack spacing={1.5} mt={2} mb={2} flexGrow={1}>
//                     <Typography variant="h6" fontWeight="bold">{name}</Typography>
//                     <Typography variant="body1" color="textSecondary">{brand}</Typography>
//                     <Typography variant="h6" color="black">${price}</Typography>
//                 </Stack>
//                 <Box sx={{ mt: "auto" }}>
//                     <ProductCardActions product={product} />
//                 </Box>
//             </StyledCard>
//         </Grid>
//     );
// };

// export default ProductCard;


import React from "react";
import { Grid, Card, Stack, styled, Box } from "@mui/material";
import { Link, Typography } from "@mui/material";
import { ProductCardActions } from "./ProductCardAction";

const StyledImage = styled("img")({
    objectFit: "cover",
    width: "100%",
    height: "280px",
    borderRadius: "20px 20px 0 0",
});

const StyledCard = styled(Card)(() => ({
    minWidth: "250px",
    height: "100%",
    backgroundColor: "#fff",
    border: "2.5px solid #dc2f2f",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0px 2px 10px rgba(0, 0, 3, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.2)",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}));

const ProductCard = ({ product }) => {
    const { name, image, brand, category, price, _id } = product;
    return (
        <Grid item xs={12} sm={12} md={4} lg={3}>
            <StyledCard>
                <Link href={`/products/categories/${category}/${_id}`} underline="none">
                    <StyledImage src={image} alt={`${brand}-${name}`} />
                </Link>
                <Stack spacing={1.5} mt={2} mb={2} flexGrow={1}>
                    <Typography variant="h5" fontWeight="bold">{name}</Typography>
                    <Typography variant="h6" fontWeight="bold">{brand}</Typography>
                    <Typography variant="h5" fontWeight="bold" color="secondary.third">${price}</Typography>
                </Stack>
                <Box sx={{ mt: "auto", flexDirection: "column", display: 'flex', justifyContent: 'space-between' }}>
                    <ProductCardActions product={product} />
                </Box>
            </StyledCard>
        </Grid>
    );
};

export default ProductCard;
