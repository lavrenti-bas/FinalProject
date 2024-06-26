import React from "react";
import { useTranslation } from "react-i18next";
import Home from "../features/products/home/Home";


export const HomePage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t("home")}</h1>
            <Home />
        </div>
    )
}