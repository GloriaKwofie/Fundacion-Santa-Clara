// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: require("./Local/en.json"),
      },
      es: {
        translation: require("./Local/es.json"),
      },
      ca: {
        translation: require("./Local/ca.json"),
      },
    },
    lng: "es", // default language
    fallbackLng: "es", // fallback language
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  });

export default i18n;
