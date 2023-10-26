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
                personal_information: 'Personal Information',
                firstname: 'First Name',
                type_here: 'Type here',
                surname: 'Surname',
                gender: 'Gender',
                female: 'Female',
                male: 'Male',
                date_of_birth: 'Date of Birth',
                expected_age: 'Expected Age',
                currency: 'Currency',
                eur: 'Euro',
                vnd: 'Vietnamese Dong',
                save_and_proceed: 'Save and Proceed',
                starting_capital: 'Starting Capital',
                income_costs: 'Income and Costs',
                pof: 'Point of Financial Freedom',
                optimisation: 'Optimisation',
            }
        },
        de: {
            translation: {
                personal_information: 'Persönliche Informationen',
                firstname: 'Vorname',
                type_here: 'Hier eingeben',
                surname: 'Nachname',
                gender: 'Geschlecht',
                female: 'Frau',
                male: 'Mann',
                date_of_birth: 'Geburtsdatum',
                expected_age: 'Erwartetes Alter',
                currency: 'Währung',
                eur: 'Euro',
                vnd: 'Vietnamesischer Dong',
                save_and_proceed: 'Speichern und fortfahren',
                starting_capital: 'Startkapital',
                income_costs: 'Einkommen und Kosten',
                pof: 'Punkt der finanziellen Freiheit',
                optimisation: 'Optimierung',
            }
        },
        vn: {
            translation: {
                personal_information: 'Thông Tin Cá Nhân',
                firstname: 'Tên',
                type_here: 'Nhập vào đây',
                surname: 'Họ',
                gender: 'Giới Tính',
                female: 'Nữ',
                male: 'Nam',
                date_of_birth: 'Ngày Sinh',
                expected_age: 'Tuổi Dự Kiến',
                currency: 'Tiền Tệ',
                eur: 'Euro',
                vnd: 'Đồng Việt Nam',
                save_and_proceed: 'Lưu và Tiếp Tục',
                starting_capital: 'Vốn Ban Đầu',
                income_costs: 'Thu Nhập và Chi Phí',
                pof: 'Điểm Tự Do Tài Chính',
                optimisation: 'Tối Ưu Hóa',
            }
        }
    },
}).then(r => console.log(r));
export default i18n;
