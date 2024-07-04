import React, { useEffect, useState } from "react";
import { Autocomplete, InputAdornment, Stack, TextField, styled, Divider } from "@mui/material";
import { Link, Text } from "../atoms";
import { BsSearch } from "react-icons/bs";
import { useDebounce, useFetchData } from "../../hooks";

const StyledAutoComplete = styled(Autocomplete)(({ width }) => ({
    width: width || "300px",
    ".MuiOutlinedInput-root": {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },
    },
    borderRadius: 4,
    ".MuiAutocomplete-option": {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
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
    const { getData, data, setState } = useFetchData();

    useEffect(() => {
        if (debouncedSearch) {
            getData(`/products/search?name=${debouncedSearch}`);
        } else {
            setState((prev) => ({ ...prev, data: null }));
        }
    }, [debouncedSearch, getData, setState]);

    return (
        <StyledAutoComplete
            freeSolo
            disableClearable
            width={width}
            options={data?.products || []}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
                <Link to={`/products/categories/${option.category}/${option._id}`}>
                    <Stack direction="row" alignItems="center" spacing={2} paddingY={1}>
                        <StyledImage src={option.image} alt={`${option.category}-${option.name}`} />
                        <Text>{option.name}</Text>
                        <Text sx={{ marginLeft: 'auto', fontWeight: 'bold' }}>${option.price}</Text>
                    </Stack>
                    <Divider />
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
                                <BsSearch color="#dc2f2f" size={20} style={{ marginLeft: 10 }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            input: { color: "black", minWidth: 0 },
                            "&.Mui-focused input": { color: "black" },
                        },
                        "& .MuiInputLabel-root": {
                            color: "blue",
                        },
                        "& .Mui-focused .MuiInputLabel-root": {
                            color: "white",
                        },
                        "& .MuiInputBase-input": {
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        },
                    }}
                />
            )}
        />
    );
};

