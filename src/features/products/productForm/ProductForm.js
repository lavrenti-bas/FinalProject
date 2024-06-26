import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productFormValidationSchema } from "./productFormValidation";
import { FormContainer, Text, Input } from "../../../components/atoms";
import { useTranslation } from "react-i18next";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { saveProduct, setSelectProduct } from "../../../redux/slices";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../../hooks";


export const ProductForm = () => {
    const { t } = useTranslation();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(productFormValidationSchema),
        mode: "onChange",
    });

    const { selectedProduct } = useProduct();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(saveProduct({ product: data, productId: selectedProduct?._id })).unwrap().then(() => {
            navigate("/");
        }).catch((err) => {
            console.log(data)
        })
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
            dispatch(setSelectProduct(null))
        }
    }, [dispatch]);

    return (
        <FormContainer>
            <Text>{t("save_product")}</Text>
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
                        label="product_name" // Assuming "product_name" is a translation key
                    // label={t("product_name")} // Assuming "product_name" is a translation key
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
                        label="product_description" // Assuming "product_name" is a translation key
                    // label={t("product_description")} // Assuming "product_name" is a translation key
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
                        label="product_brand" // Assuming "product_name" is a translation key
                    // label={t("product_brand")} // Assuming "product_name" is a translation key
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
                        label="product_category"// Assuming "product_name" is a translation key
                    // label={t("product_category")} // Assuming "product_name" is a translation key
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
                        label="product_price" // Assuming "product_price" is a translation key
                    // label={t("product_price")} // Assuming "product_price" is a translation key
                    />
                )}
            />
            <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                    setValue("image", base64);
                }}
            />
            <button type="submit" onClick={handleSubmit(onSubmit)}>
                submit
            </button>
        </FormContainer>
    );
};

export default ProductForm;
