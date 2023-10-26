import {useTranslation} from "react-i18next";

const StartingCapitalInput = () => {
    const { t } = useTranslation();
    return (
        <div className="flex-col card p-5 max-w-fit">
            <h1 className="text-xl font-bold">{t('personal_information')}</h1>
            <div className="tabs">
                <input type="radio" id="tab-4" name="tab-2" className="tab-toggle" defaultChecked />
                <label htmlFor="tab-4" className="tab tab-bordered px-6 pr-20 pl-20">{t('activa')}</label>

                <input type="radio" id="tab-5" name="tab-2" className="tab-toggle" />
                <label htmlFor="tab-5" className="tab tab-bordered px-6 pr-20 pl-20">{t('passiva')}</label>
            </div>
        </div>
    )
}

export default StartingCapitalInput;
