import React, { useContext, useState } from "react";
import { StartingCapitalContext } from "../../../context/StartingCapitalContext";
import { PassivaState } from "../../../models/types/AssetContextTypes";
import { AssetGroup } from "../../../models/startingcapital/AssetGroup";
import LiabilitiesInput from "./LiabilitiesInput";
import ReservedEquityInput from "./ReservedEquityInput";

type PassivaInputProps = {
  t: any;
  passiva: AssetGroup[];
  valid: boolean;
  passivaValid: boolean;
  setLiabilitiesValid: (valid: boolean) => void;
  setPassiva: (liabilites: AssetGroup[]) => void;
  currentCurrency: string;
};

const PassivaInputs: React.FC<PassivaInputProps> = ({
  passivaValid,
  setLiabilitiesValid,
  valid,
  setPassiva,
  passiva,
    currentCurrency,
  t,
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const startingcapitalStates = useContext(StartingCapitalContext);
  const passivaStates = startingcapitalStates.passiva as PassivaState;
  const { liabilities, reservedEquity } = passivaStates;

  const liabilitiesGroup = passiva.find(
    (asset) => asset.name === "liabilities",
  ) as AssetGroup;
  const reservedEquityGroup = passiva.find(
    (asset) => asset.name === "reservedEquity",
  ) as AssetGroup;

  /**
   * Updates the assets array with the new values
   */
  const updateAssets = () => {
    setPassiva([liabilitiesGroup, reservedEquityGroup]);
  };

  /**
   * Saves the liabilities
   */
  const saveHandler = () => {
    updateAssets();
    setLiabilitiesValid(true);
  };

  return (
    <>
      <div className="tabs gap-1">
        <input
          type="radio"
          id="tab-liabilities"
          name="tab-4"
          className="tab-toggle"
          defaultChecked
          onClick={() => setActiveTab(1)}
        />
        <label htmlFor="tab-liabilities" className="tab tab-pill">
          {t("liabilities")}
        </label>

        <input
          type="radio"
          id="tab-reserved-equity"
          name="tab-4"
          className="tab-toggle"
          onClick={() => setActiveTab(2)}
        />
        <label htmlFor="tab-reserved-equity" className="tab tab-pill">
          {t("reserved_equity")}
        </label>
      </div>
      <div>
        {activeTab === 1 ? (
          <LiabilitiesInput
            t={t}
            liabilities={liabilitiesGroup}
            liabilitiesState={liabilities}
            liabilitiesValid={valid}
            currentCurrency={currentCurrency}
          />
        ) : activeTab === 2 ? (
          <ReservedEquityInput
            t={t}
            reservedEquity={reservedEquityGroup}
            liabilitiesValid={valid}
            reservedEquityState={reservedEquity}
            currentCurrency={currentCurrency}
          />
        ) : (
          <h2>{t("404")}</h2>
        )}
        {passivaValid ? (
          <button className="btn btn-success mt-4 btn-block" disabled>
            {t("save_activa")}
          </button>
        ) : (
          <button
            className="btn btn-success mt-4 btn-block"
            onClick={() => {
              saveHandler();
            }}
          >
            {t("save_passiva")}
          </button>
        )}
      </div>
    </>
  );
};
export default PassivaInputs;
