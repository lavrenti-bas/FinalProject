import { useParams } from "react-router-dom";
import { useFetchData } from "../../../hooks";
import { LoadingWrapper, Text } from "../../../components/atoms";
import { Stack, styled, Box } from "@mui/material";
import { useEffect } from "react";

const StyledImage = styled("img")({
  width: "350px",
  height: "350px",
  objectFit: "cover",
  borderRadius: 10,
});

const Description = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: theme.spacing(2 ), // Adjust spacing as needed
}));


export const SingleProduct = () => {
  const { id, categoryName } = useParams();
  const { getData, loading, data } = useFetchData();

  useEffect(() => {
    getData(`/products/category/${categoryName}/${id}`);
  }, [id, categoryName, getData]);

  const { image, name, brand, description } = data?.product || {}; // ADD PRICE other details 

  return (
    <LoadingWrapper isLoading={loading}>
      <Stack direction="row" justifyContent="space-around">
        <StyledImage src={image} />
        <Box>
          <Description>
            <Text variant="4">Product name</Text>
            <Text variant="4">{name}</Text>
          </Description>
          <Description>
            <Text variant="4">Product brand</Text>
            <Text variant="4">{brand}</Text>
          </Description>
          <Description>
            <Text variant="4">Product description</Text>
            <Text variant="4">{description}</Text>
          </Description>
        </Box>
      </Stack>
    </LoadingWrapper>
  );
};
