import React, {useState} from "react";
import {AssetGroup} from "../../../models/startingcapital/AssetGroup";
import CryptoCurrencyInput from "./CryptoCurrencyInput";
import StockInput from "./StockInput";
import InsuranceInput from "./InsuranceInput";
import RealestateInput from "./RealestateInput";
import LiquidAssetInput from "./LiquidAssetInput";
import OtherAssetsInput from "./OtherAssetsInput";

type ActivaInputProps = {
    t: any,
    assets: AssetGroup[]
}

const ActivaInput : React.FC<ActivaInputProps> = ({t, assets}) => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <div className="tabs gap-1">
        <input type="radio"
            id="tab-liquid-assets"
            name="tab-4"
            className="tab-toggle"
            defaultChecked
            onClick={() => setActiveTab(1)}
            />
    <label htmlFor="tab-liquid-assets"
    className="tab tab-pill">
        {t('liquid_assets')}
    </label>

    <input type="radio"
    id="tab-real-estate"
    name="tab-4"
    className="tab-toggle"
    onClick={() => setActiveTab(2)} />
    <label htmlFor="tab-real-estate"
    className="tab tab-pill">{t('realestate')}</label>

    <input type="radio"
    id="tab-corporate"
    name="tab-4"
    className="tab-toggle"
    onClick={() => setActiveTab(3)} />
    <label htmlFor="tab-corporate"
    className="tab tab-pill">{t('stocks')}</label>

    <input type="radio"
    id="tab-crypto"
    name="tab-4"
    className="tab-toggle"
    onClick={() => setActiveTab(4)} />
    <label htmlFor="tab-crypto"
    className="tab tab-pill">{t('crypto_currency')}</label>

    <input type="radio"
    id="tab-other-assets"
    name="tab-4"
    className="tab-toggle"
    onClick={() => setActiveTab(5)} />
    <label htmlFor="tab-other-assets"
    className="tab tab-pill">
        {t('other_assets')}</label>

    <input type="radio"
    id="tab-insurance"
    name="tab-4"
    className="tab-toggle"
    onClick={() => setActiveTab(6)} />
    <label htmlFor="tab-insurance"
    className="tab tab-pill">{t('insurance')}</label>
    </div>
    <div>
    {
        activeTab === 1 ?
        <LiquidAssetInput />
:
    activeTab === 2 ?
        <RealestateInput />
:
    activeTab === 3 ?
        <StockInput />
:
    activeTab === 4 ?
        <CryptoCurrencyInput/>
:
    activeTab === 5 ?
        <OtherAssetsInput />
:
    activeTab === 6 ?
        <InsuranceInput />
:
    <h2>{t('404')}</h2>
}
    </div>
    </>
)
}

export default ActivaInput;
