import { Pagination } from "@mui/material";
import React from "react";

export const Paginate = ({ totalPages, currentPage, changePage }) => {
    const handleChange = (event, value) => {
        changePage("page", value);
    };

    return (
        <Pagination
            color="secondary"
            count={totalPages}
            page={Number(currentPage)}
            onChange={handleChange}
        />
    );
};

