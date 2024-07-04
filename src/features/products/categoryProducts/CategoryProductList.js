import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../../../redux/slices";
import { useParams } from "react-router-dom";
import { useProduct, useQueryParams } from "../../../hooks";
import { LoadingWrapper } from "../../../components/atoms";
import { Stack } from "@mui/material";
import GridContainer from "../components/GridContainer";
import ProductCard from "../components/ProductCard";
import { Paginate } from "./Paginate";
import { Sort } from "./Sort";

export const CategoryProductList = () => {
    const { categoryName } = useParams();
    const { categoryProducts, totalPages, loading } = useProduct();
    const { value: page, changeQueryValue: changePage } = useQueryParams("page");
    const { value: sort, changeQueryValue: changeSort } = useQueryParams("sort");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryProducts({ category: categoryName, queryUrl: `?size=6&sort=${sort},asc&page=${page}` }));
    }, [categoryName, dispatch, page, sort]);

    return (
        <LoadingWrapper isLoading={loading}>
            <Stack alignItems="center" justifyContent="space-between" height="100%" spacing={2}>
                <Sort value={sort} changeSort={changeSort} />
                <GridContainer>
                    {categoryProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </GridContainer>
                <Paginate totalPages={totalPages} currentPage={page} changePage={changePage} />
            </Stack>
        </LoadingWrapper>
    );
};
