import {useState} from "react";
import LiquidAssetsInput from "./liquid_assets/LiquidAssetsInput";
import RealEstateInput from "./realestate/RealEstateInput";
import StockAssetInput from "./stocks/StockAssetInput";
import CryptoCurrencyInput from "./crypto_currency/CryptoCurrencyInput";
import InsuranceInput from "./insurance/InsuranceInput";
import OtherAssetsInput from "./other/OtherAssetsInput";

const AssetsInput = ({assets, t}) => {
    const [activeTab, setActiveTab] = useState(1);

    const checkForActiveTab = (tab) => {
        return tab === activeTab ? "tab-active" : "";
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
                    <LiquidAssetsInput t={t}
                                       setLiquidCapital={assets.setLiquidCapital}
                                       setPreciousMetals={assets.setPreciousMetals}/>
                    :
                activeTab === 2 ?
                    <RealEstateInput t={t}
                                         setRealEstate={assets.setRealEstate}/>
                    :
                activeTab === 3 ?
                    <StockAssetInput t={t}
                                     setStocks={assets.setStocks}/>
                    :
                activeTab === 4 ?
                    <CryptoCurrencyInput t={t}
                                         setCryptoCurrency={assets.setCryptoCurrency}/>
                    :
                activeTab === 5 ?
                    <OtherAssetsInput t={t}
                                      setOtherAssets={assets.setOther}/>
                    :
                activeTab === 6 ?
                    <InsuranceInput t={t} setInsurance={assets.setInsurance}
                                    setPension={assets.setPensionInsurance}
                                    setBuildingSavingsContract={assets.setBuildingSavingContract}/>
                    :
                    <h2>{t('404')}</h2>
            }
            </div>

            </>
    )
}

export default AssetsInput;
