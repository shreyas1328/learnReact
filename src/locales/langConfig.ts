import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./en.json";
import frTranslations from "./fr.json";
import { store } from "../redux/store";

console.log("myValues", store.getState().lang.lang);


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    fr: { translation: frTranslations },
  },
  lng: store.getState().lang.lang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
