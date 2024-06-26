import { useSelector } from "react-redux";

export const useProduct = () => {
    const loading = useSelector((state) => state.product.loading);
    const homePageProducts = useSelector((state) => state.product.homePageProducts);
    const error = useSelector((state) => state.product.error);
    const selectedProduct = useSelector((state) => state.product.selectedProduct)
    return { loading, homePageProducts, error, selectedProduct };
};
