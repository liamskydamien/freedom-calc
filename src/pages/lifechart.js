import {useTranslation} from "react-i18next";
const LifeChart = () => {
    const { i18n, t } = useTranslation();
    return (
        <div>
            <h1>Life chart</h1>
            <p>{t('title')}</p>
        </div>
    )
}

export default LifeChart
