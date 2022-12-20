import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, ru } from "./locales/locales";


export const resources = {
    "en-US": {
        translation: en
    },
    "ru-RU": {
        translation: ru
    }
} as const;

i18next.use(initReactI18next).init({
    lng: 'ru-RU',
    fallbackLng: 'en-US',
    debug: true,
    resources
})
