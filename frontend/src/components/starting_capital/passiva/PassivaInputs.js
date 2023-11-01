import {useState} from "react";
import LiabilitiesInput from "./liabilities/LiabilitiesInput";
import ReservedEquityInput from "./reserved_equity/ReservedEquityInput";

const PassivaInputs = ({passiva, t}) => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <div className="tabs gap-1">
                <input type="radio"
                       id="tab-liabilities"
                       name="tab-4"
                       className="tab-toggle"
                       defaultChecked
                       onClick={() => setActiveTab(1)}
                />
                <label htmlFor="tab-liabilities"
                       className="tab tab-pill">
                    {t('liabilities')}
                </label>

                <input type="radio"
                       id="tab-reserved-equity"
                       name="tab-4"
                       className="tab-toggle"
                       onClick={() => setActiveTab(2)} />
                <label htmlFor="tab-reserved-equity"
                       className="tab tab-pill">{t('reserved_equity')}</label>

            </div>
            <div>
                {
                    activeTab === 1 ?
                        <LiabilitiesInput t={t} setLiabilities={passiva.setLiabilities}/>
                        :
                    activeTab === 2 ?
                        <ReservedEquityInput t={t} setReservedEquity={passiva.setReservedEquity}/>
                        :
                        <h2>{t('404')}</h2>
                }
            </div>
        </>
    )
}
export default PassivaInputs;
