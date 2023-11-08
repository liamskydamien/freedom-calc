import React, {useEffect, useState} from "react";
import {AssetGroup} from "../../../models/startingcapital/AssetGroup";
import CryptoCurrencyInput from "./CryptoCurrencyInput";
import StockInput from "./StockInput";
import RealestateInput from "./RealEstateInput";
import LiquidAssetInput from "./LiquidAssetInput";
import OtherAssetsInput from "./OtherAssetsInput";

type ActivaInputProps = {
    t: any,
    assets: AssetGroup[],
    setAssets: (assets: AssetGroup[]) => void,
    valid: boolean,
    setActiva: (valid: boolean) => void,
    activaValid: boolean
}

const ActivaInput : React.FC<ActivaInputProps> = ({activaValid,setActiva,t, assets, setAssets, valid}) => {
    const [activeTab, setActiveTab] = useState(1);

    const cryptoCurrency = assets.find(asset => asset.name === "crypto") as AssetGroup;
    const stocks = assets.find(asset => asset.name === "stocks") as AssetGroup;
    const realestate = assets.find(asset => asset.name === "realestate") as AssetGroup;
    const liquidAssets = assets.find(asset => asset.name === "cash") as AssetGroup;
    const otherAssets = assets.find(asset => asset.name === "other") as AssetGroup;
    const preciousMetals = assets.find(asset => asset.name === "preciousMetals") as AssetGroup;

    /**
     * Updates the assets array with the new values
     */
    const updateAssets = () => {
        setAssets([cryptoCurrency, stocks, realestate, liquidAssets, otherAssets, preciousMetals]);
    }

    const saveHandler = () => {
        updateAssets();
        setActiva(true);
    }

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
                className="tab tab-pill">
                    {t('realestate')}
                </label>

                <input type="radio"
                    id="tab-corporate"
                    name="tab-4"
                    className="tab-toggle"
                    onClick={() => setActiveTab(3)} />
                <label htmlFor="tab-corporate"
                    className="tab tab-pill">
                    {t('stocks')}
                </label>

                <input type="radio"
                    id="tab-crypto"
                    name="tab-4"
                    className="tab-toggle"
                    onClick={() => setActiveTab(4)} />
                <label htmlFor="tab-crypto"
                className="tab tab-pill">
                    {t('crypto_currency')}
                </label>

                <input type="radio"
                    id="tab-other-assets"
                    name="tab-4"
                    className="tab-toggle"
                    onClick={() => setActiveTab(5)} />
                <label htmlFor="tab-other-assets"
                className="tab tab-pill">
                    {t('other_assets')}
                </label>
        </div>
    <div>
            {
                activeTab === 1 ?
                <LiquidAssetInput valid={activaValid}
                                  t={t}
                                  cash={liquidAssets}
                                  preciousMetals={preciousMetals} />
                :
                    activeTab === 2 ?
                        <RealestateInput t={t}
                                         realestate={realestate}
                                         valid={activaValid}/>
                :
                    activeTab === 3 ?
                        <StockInput t={t}
                                    stocks={stocks}
                                    valid={activaValid} />
                :
                    activeTab === 4 ?
                        <CryptoCurrencyInput cryptoCurrency={cryptoCurrency}
                                             t={t}
                                             valid={activaValid}/>
                :
                    activeTab === 5 ?
                        <OtherAssetsInput t={t}
                                          other={otherAssets}
                                          valid={activaValid}/>
                :
            <h2>{t('404')}</h2>
        }
        {
            activaValid ?
                <button className="btn btn-success mt-4 btn-block" disabled>{t('save_activa')}</button>
                :
                <button className="btn btn-success mt-4 btn-block" onClick={() => {saveHandler()}}>{t('save_activa')}</button>
        }
        </div>
    </>
)
}

export default ActivaInput;
