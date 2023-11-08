import React, {useEffect, useState} from "react";
import {AssetGroup} from "../../../models/startingcapital/AssetGroup";
import CryptoCurrencyInput from "./CryptoCurrencyInput";
import StockInput from "./StockInput";
import RealestateInput from "./RealEstateInput";
import LiquidAssetInput from "./LiquidAssetInput";
import OtherAssetsInput from "./OtherAssetsInput";
import {GROWTH_RATE} from "../../../constants/assets/growthrate";

type ActivaInputProps = {
    t: any,
    assets: AssetGroup[],
    setAssets: (assets: AssetGroup[]) => void,
    valid: boolean
}

const ActivaInput : React.FC<ActivaInputProps> = ({t, assets, setAssets, valid}) => {
    const [activeTab, setActiveTab] = useState(1);

    const cryptoCurrency = new AssetGroup("cryptoCurrency", GROWTH_RATE.crypto, 0.0);
    const stocks = new AssetGroup("stocks", GROWTH_RATE.stocks, 0.0);
    const realestate = new AssetGroup("realestate", GROWTH_RATE.realestate, 0.0);
    const liquidAssets = new AssetGroup("liquidAssets", GROWTH_RATE.cash, 0.0);
    const otherAssets = new AssetGroup("otherAssets", GROWTH_RATE.other, 0.0);
    const preciousMetals = new AssetGroup("preciousMetals", GROWTH_RATE.preciousMetals, 0.0);

    /**
     * Updates the assets array with the new values
     */
    const updateAssets = () => {
        setAssets([cryptoCurrency, stocks, realestate, liquidAssets, otherAssets, preciousMetals]);
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
                <LiquidAssetInput valid={valid}
                                  t={t}
                                  cash={liquidAssets}
                                  preciousMetals={preciousMetals} />
                :
                    activeTab === 2 ?
                        <RealestateInput t={t}
                                         realestate={realestate}
                                         valid={valid}/>
                :
                    activeTab === 3 ?
                        <StockInput />
                :
                    activeTab === 4 ?
                        <CryptoCurrencyInput cryptoCurrency={cryptoCurrency}
                                             t={t}
                                             valid={valid}/>
                :
                    activeTab === 5 ?
                        <OtherAssetsInput t={t}
                                          other={otherAssets}
                                          valid={valid}/>
                :
            <h2>{t('404')}</h2>
        }
        {
            valid ?
                <button className="btn btn-success mt-4 btn-block" disabled>{t('save_activa')}</button>
                :
                <button className="btn btn-success mt-4 btn-block" onClick={() => {}}>{t('save_activa')}</button>
        }
        </div>
    </>
)
}

export default ActivaInput;
