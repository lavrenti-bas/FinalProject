import { useSelector } from "react-redux";

export const useProduct = () => {
    const loading = useSelector((state) => state.product.loading);
    const homePageProducts = useSelector((state) => state.product.homePageProducts);
    const error = useSelector((state) => state.product.error);
    const selectedProduct = useSelector((state) => state.product.selectedProduct);
    const categories = useSelector((state) => state.product.categories) || [];
    const categoryProducts = useSelector((state) => state.product.categoryProducts);
    const totalPages = useSelector((state) => state.product.totalPages);

    return { loading, homePageProducts, categories, categoryProducts, totalPages, error, selectedProduct, };
};
