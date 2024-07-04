import { useParams } from "react-router-dom";
import { useFetchData } from "../../../hooks";
import { LoadingWrapper, Text } from "../../../components/atoms";
import { Stack, styled, Box, Divider } from "@mui/material";
import { useEffect } from "react";

const StyledImage = styled("img")({
  width: "460px",
  height: "500px",
  objectFit: "cover",
  border: "2.5px solid #dc2f2f",
  borderRadius: 10,
});

const Description = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: theme.spacing(5),
}));

const CenteredContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const SingleProduct = () => {
  const { id, categoryName } = useParams();
  const { getData, loading, data } = useFetchData();

  useEffect(() => {
    getData(`/products/category/${categoryName}/${id}`);
  }, [id, categoryName, getData]);

  const { image, name, brand, description } = data?.product || {};

  return (
    <LoadingWrapper isLoading={loading}>
      <CenteredContainer>
        <Stack direction="row" alignItems="center">
          <StyledImage src={image} alt={`${brand}-${name}`} />
          <Box sx={{ marginLeft: "25px" }}>
            <Description>
              <Text variant="h4" sx={{ color: "#dc2f2f" }}>Product name:</Text>
              <Text sx={{ mt: 2, fontSize: "1.7rem" }}>{name}</Text>
            </Description>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Description>
              <Text variant="h4" sx={{ color: "#dc2f2f" }}>Product brand:</Text>
              <Text sx={{ mt: 2, fontSize: "1.7rem" }}>{brand}</Text>
            </Description>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Description>
              <Text variant="h4" sx={{ color: "#dc2f2f" }}>Product description:</Text>
              <Text sx={{ mt: 2, fontSize: "1.7rem" }}>{description}</Text>
            </Description>
          </Box>
        </Stack>
      </CenteredContainer>
    </LoadingWrapper>
  );
};
