import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

const languageCodes = {
  en: "English",
  ka: "Georgian",
};

const LanguageSelect = () => {
  const [langCode, setLangCode] = useState(() => localStorage.getItem("langCode") || "en");
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(langCode);
  }, [i18n, langCode]);

  return (
    <FormControl sx={{ minWidth: 80 }}>
      <Select
        sx={{
          color: "#fff",
          border: "none", // Remove border
          backgroundColor: "#dc2f2f", // Set background color
          height: "30px",
          fontSize: "0.875rem",
          "& .MuiSelect-select": {
            padding: "5px 10px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Ensure no border for outlined style
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Border color when focused
          },
        }}
        value={langCode}
        defaultValue={langCode}
        onChange={(e) => {
          setLangCode(e.target.value);
          localStorage.setItem("langCode", e.target.value);
        }}
      >
        {Object.entries(languageCodes).map(([languageKey, languageValue]) => (
          <MenuItem key={languageKey} value={languageKey}>
            {languageValue}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
