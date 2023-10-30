import {useState} from "react";
import LiquidAssetsInput from "./liquid_assets/LiquidAssetsInput";

const AssetsInput = ({assets, t}) => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <div className="tabs gap-1">
                <input type="radio"
                       id="tab-10"
                       name="tab-4"
                       className="tab-toggle"
                       defaultChecked
                       onClick={() => setActiveTab(1)}/>
                <label htmlFor="tab-10" className="tab tab-pill">{t('liquid_assets')}</label>

                <input type="radio"
                       id="tab-11"
                       name="tab-4"
                       className="tab-toggle"
                       onClick={() => setActiveTab(2)} />
                <label htmlFor="tab-11" className="tab tab-pill">{t('realestate')}</label>

                <input type="radio"
                       id="tab-11"
                       name="tab-4"
                       className="tab-toggle"
                       onClick={() => setActiveTab(2)} />
                <label htmlFor="tab-15" className="tab tab-pill">{t('stocks')}</label>

                <input type="radio"
                       id="tab-12"
                       name="tab-4"
                       className="tab-toggle"
                       onClick={() => setActiveTab(3)} />
                <label htmlFor="tab-12" className="tab tab-pill">{t('corporate')}</label>

                <input type="radio"
                       id="tab-12"
                       name="tab-4"
                       className="tab-toggle"
                       onClick={() => setActiveTab(4)} />
                <label htmlFor="tab-13" className="tab tab-pill">{t('other_assets')}</label>
            </div>
            {
                activeTab === 1 ?
                    <LiquidAssetsInput t={t} setLiquidCapital={assets.setLiquidCapital}/>
                    :
                    <h2>Not implemented yet</h2>
            }
        </>
    );
}

export default AssetsInput;
