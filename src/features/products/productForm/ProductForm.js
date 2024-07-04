import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productFormValidationSchema } from "./productFormValidation";
import { FormContainer, Text, Input, Snackbar } from "../../../components/atoms";
import { useTranslation } from "react-i18next";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { saveProduct, setSelectProduct, clearError } from "../../../redux/slices";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../../hooks";
import { Stack, Box, Typography, Button } from "@mui/material";
import { FaImage } from "react-icons/fa";

export const ProductForm = () => {
    const { t } = useTranslation();
    const [fileName, setFileName] = useState("Choose Image");

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(productFormValidationSchema),
        mode: "onChange",
    });

    const { selectedProduct, error } = useProduct();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const onSubmit = (data) => {
        dispatch(saveProduct({ product: data, productId: selectedProduct?._id }))
            .unwrap()
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                console.log(data);
            });
        console.log(data);
    };

    useEffect(() => {
        if (selectedProduct) {
            const { name, brand, description, price, category, image } = selectedProduct;
            setValue("name", name);
            setValue("description", description);
            setValue("brand", brand);
            setValue("price", price);
            setValue("category", category);
            setValue("image", image);
        }
    }, [selectedProduct, setValue]);

    useEffect(() => {
        return () => {
            dispatch(setSelectProduct(null));
        };
    }, [dispatch]);

    const handleCustomFileButtonClick = () => {
        fileInputRef.current.querySelector("input[type='file']").click();
    };

    const handleFileDone = ({ base64, file }) => {
        setValue("image", base64);
        setFileName(file.name);
    };

    return (
        <FormContainer>
            <Stack spacing={2} alignContent="flex-start">
                <Text
                    variant="h5"
                    sx={{ fontSize: 24, fontWeight: 'bold', color: 'black', mb: 2, textAlign: 'center' }}
                >
                    {t("save_product")}
                </Text>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <Input
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            helperText={errors.name?.message}
                            error={Boolean(errors.name)}
                            label={t("product_name")}
                        />
                    )}
                />
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <Input
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            helperText={errors.description?.message}
                            error={Boolean(errors.description)}
                            label={t("product_description")}
                        />
                    )}
                />
                <Controller
                    name="brand"
                    control={control}
                    render={({ field }) => (
                        <Input
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            helperText={errors.brand?.message}
                            error={Boolean(errors.brand)}
                            label={t("product_brand")}
                        />
                    )}
                />
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <Input
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            helperText={errors.category?.message}
                            error={Boolean(errors.category)}
                            label={t("product_category")}
                        />
                    )}
                />
                <Controller
                    name="price"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="number"
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            helperText={errors.price?.message}
                            error={Boolean(errors.price)}
                            label={t("product_price")}
                        />
                    )}
                />
                <Box ref={fileInputRef} sx={{ display: 'none' }}>
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={handleFileDone}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FaImage
                        size={35}
                        color="primary"
                        onClick={handleCustomFileButtonClick}
                        style={{ cursor: 'pointer' }}
                    />
                    {fileName && (
                        <Typography
                            variant="body1"
                            sx={{
                                ml: 2,
                                fontWeight: "bold",
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                maxWidth: '200px',
                            }}
                        >
                            {fileName}
                        </Typography>
                    )}
                </Box>
                <Button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    {t("submit")}
                </Button>
            </Stack>
            <Snackbar
                message={error}
                severity="error"
                onClose={() => { dispatch(clearError()) }}
            />
        </FormContainer>
    );
};

export default ProductForm;


