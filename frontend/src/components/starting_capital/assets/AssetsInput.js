import {useState} from "react";
import LiquidAssetsInput from "./liquid_assets/LiquidAssetsInput";
import RealEstateInput from "./realestate/RealEstateInput";
import StockAssetInput from "./stocks/StockAssetInput";
import CryptoCurrencyInput from "./crypto_currency/CryptoCurrencyInput";

const AssetsInput = ({assets, t}) => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <div className="tabs gap-1">
                <input type="radio"
                       id="liquid-assets"
                       name="liquid-assets-tab"
                       className="tab-toggle"
                       defaultChecked
                       onClick={() => setActiveTab(1)}/>
                <label htmlFor="liquid-assets" className="tab tab-pill">{t('liquid_assets')}</label>

                <input type="radio"
                       id="real-estate"
                       name="real-estate-tab"
                       className="tab-toggle"
                       onClick={() => setActiveTab(2)} />
                <label htmlFor="real-estate" className="tab tab-pill">{t('realestate')}</label>

                <input type="radio"
                       id="corporate"
                       name="corporate-tab"
                       className="tab-toggle"
                       onClick={() => setActiveTab(3)} />
                <label htmlFor="corporate" className="tab tab-pill">{t('stocks')}</label>

                <input type="radio"
                          id="crypto"
                          name="crypto-tab"
                          className="tab-toggle"
                          onClick={() => setActiveTab(4)} />
                <label htmlFor="crypto" className="tab tab-pill">{t('crypto_currency')}</label>

                <input type="radio"
                       id="other-assets"
                       name="other-assets-tab"
                       className="tab-toggle"
                       onClick={() => setActiveTab(5)} />
                <label htmlFor="other-assets" className="tab tab-pill">{t('other_assets')}</label>

                <input type="radio"
                       id="insurance"
                       name="insurance-tab"
                       className="tab-toggle"
                       onClick={() => setActiveTab(6)} />
                <label htmlFor="insurance" className="tab tab-pill">{t('insurance')}</label>

            </div>
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
                    <CryptoCurrencyInput t={t} setCryptoCurrency={assets.setCryptoCurrency}/>
                    :
                activeTab === 5 ?
                    <h2>Not implemented yet</h2>
                    :
                    <></>
            }
        </>
    );
}

export default AssetsInput;
