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
    console.log(langCode)
    i18n.changeLanguage(langCode);
  }, [i18n, langCode])

  return (
    <FormControl>
      <Select sx={{ color: "#FF9900", border: "2px solid blue" }} value={langCode} defaultValue={langCode} onChange={(e) => {
        setLangCode(e.target.value)
      }}>
        {Object.entries(languageCodes).map((item) => {
          const [languageKey, languageValue] = item;
          return (
            <MenuItem key={languageKey} value={languageKey}>
              {languageValue}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
