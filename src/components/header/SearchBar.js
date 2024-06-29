import React, { useEffect, useState } from "react";
import { Autocomplete, InputAdornment, Stack, TextField, styled } from "@mui/material";
import { Link, Loading, Text } from "../atoms";
import { BsSearch } from "react-icons/bs";
import { useDebounce, useFetchData } from "../../hooks";

const StyleAutoComplete = styled(Autocomplete)(({ width }) => ({
    width: width || "300px",
    ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {},
    borderRadius: 4,
    borderColor: "#ec5e2a",
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ec5e2a",
    },
}));

const StyledImage = styled("img")({
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: 3,
});

export const SearchBar = ({ width }) => {
    const [searchValue, setSearchValue] = useState("");
    const [debouncedSearch] = useDebounce(searchValue, 500);
    const { getData, loading, data, setState } = useFetchData();

    useEffect(() => {
        if (debouncedSearch) {
            getData(`/products/search?name=${debouncedSearch}`);
        } else {
            setState((prev) => ({ ...prev, data: null }));
        }
    }, [debouncedSearch, getData, setState]);

    return (
        <StyleAutoComplete
            freeSolo
            disableClearable
            width={width}
            loading={loading}
            loadingText={<Loading size={50} />}
            options={data?.products || []}
            getOptionLabel={(option) => option.name}
            renderOption={(_, option) => (
                <Link to={`/products/categories/${option.category}/${option._id}`}>
                    <Stack direction="row" mt={2} alignItems="center">
                        <StyledImage src={option.image} alt={`${option.category}-${option.name}`} />
                        <Text>{option.name}</Text>
                        <Text sx={{ marginLeft: 10 }}>{option.price}</Text>
                    </Stack>
                </Link>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <BsSearch color="red" size={20} style={{ marginLeft: 10 }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ input: { color: "#ffffff" } }} // Changed color to white (#ffffff)
                    inputLabelProps={{ style: { color: "blue" } }} // Adjusted style for input label
                />
            )}
        />
    );
};
