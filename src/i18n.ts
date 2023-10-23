import i18n from "i18next";
// @ts-ignore
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources:{
        en: {
            translation: {
                title: 'Multi-language app',
            }
        },
        de: {
            translation: {
                title: 'Aplicación en varios idiomas',
            }
        },
        vn: {
            translation: {
                title: 'Ứng dụng đa ngôn ngữ',
            }
        }
    },
}).then(r => console.log(r));
export default i18n;
