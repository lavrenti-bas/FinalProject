import React from "react";
import { MenuItem, Select, styled } from "@mui/material";

const StyledSelect = styled(Select)(() => ({
    order: "none",
    backgroundColor: "#ffff",
    boxShadow: "rgba(1, 1, 1, 0.7) 0px 2px 1px",
    ".MuiOutlinedInput-notchedOutline": { border: "none" }
}));

export const Sort = ({ value, changeSort }) => (
    <StyledSelect
        value={value || "sort,asc"}
        onChange={(e) => changeSort("sort", e.target.value)}
        displayEmpty
        inputProps={{ "aria-label": "Sort" }}
    >
        <MenuItem value="price,desc">Sort by price: high to low</MenuItem>
        <MenuItem value="price,asc">Sort by price: low to high</MenuItem>
        <MenuItem value="name,desc">Sort by name: Z to A</MenuItem>
        <MenuItem value="name,asc">Sort by name: A to Z</MenuItem>
    </StyledSelect>
);

