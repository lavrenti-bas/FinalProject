import { useProduct } from "../../../hooks";
import GridContainer from "../components/GridContainer";
import ProductCard from "../components/ProductCard";
import { LoadingWrapper } from "../../../components/atoms";


const Home = () => {
    const { homePageProducts, loading } = useProduct();
    

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
