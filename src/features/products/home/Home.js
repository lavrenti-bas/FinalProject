// import React, { useEffect } from "react";
import { useProduct } from "../../../hooks";
import GridContainer from "../components/GridContainer";
import ProductCard from "../components/ProductCard";
import { LoadingWrapper } from "../../../components/atoms";
// import { useDispatch } from "react-redux";
// import { fetchHomePageProducts } from "../../../redux/slices";

const Home = () => {
    const { homePageProducts, loading } = useProduct();
    // const dispatch = useDispatch();
    // console.log("homepage", homePageProducts);

    //added use effect to reload automatically, might require update...
    // useEffect(() => {   
    //     dispatch(fetchHomePageProducts());
    // }, [dispatch]);

    return (
        <LoadingWrapper isLoading={loading}>
            <GridContainer>
                {homePageProducts.map((homePageProduct) => {
                    return <ProductCard key={homePageProduct._id} product={homePageProduct} />
                })}
            </GridContainer>
        </LoadingWrapper>
    );
};

export default Home;

