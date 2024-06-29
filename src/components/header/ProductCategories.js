import React from "react";
import { useProduct } from "../../hooks";
import { List, ListItem, styled } from "@mui/material";
import { Link, Text } from "../atoms";

const StyledListItem = styled(ListItem)(() => ({
    padding: "5px 8px 3px 15px",
    margin: "0px"
}));

export const ProductCategories = () => {
    const { categories } = useProduct();

    return (
        <List sx={{ display: "flex" }}>
            {categories.map((item) => {
                const { _id, name } = item;
                return (
                    <Link key={_id} to={`/products/categories/${name}?sort=price,asc&page=1`}>
                        <StyledListItem>
                            <Text color="#FF9900">{name}</Text>
                        </StyledListItem>
                    </Link>
                );
            })}
        </List>
    );
};
