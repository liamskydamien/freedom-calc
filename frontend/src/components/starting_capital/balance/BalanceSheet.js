import {useTranslation} from "react-i18next";
import AssetsLiabilities from "./AssetsLiabilities";

const BalanceSheet = () => {
    const { t } = useTranslation();
    return (
        <div className="flex-col card p-5 max-w-full">
            <h1 className="text-xl font-bold">{t('balance_sheet')}</h1>
            <AssetsLiabilities t={t} />
        </div>
    )
}

export default BalanceSheet
