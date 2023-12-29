import { AssetGroup } from "../../../models/startingcapital/AssetGroup";
import React, { useContext, useEffect } from "react";
import { InputContext } from "../../../context/InputContext";

type BalanceSheetProps = {
  t: any;
  currrentCurrency: string;
};
const BalanceSheet: React.FC<BalanceSheetProps> = ({ t, currrentCurrency }) => {
  const { startingCapital } = useContext(InputContext);
  const { assetGroups: assets, liabilities: passiva } = startingCapital;
  useEffect(() => {
    console.log("Context has updated");
  }, [InputContext, assets, passiva, startingCapital]);

  return (
    <div>
      <div>
        <h2 className="text-lg font-bold text-left">{t("activa")}</h2>
        {assets.map((assetGroup: AssetGroup) => {
          return (
            <div className="flex flex-row justify-between">
              <p>{t(assetGroup.name)}</p>
              <p>{assetGroup.startingValue + " " + currrentCurrency}</p>
            </div>
          );
        })}
        <div className="divider"></div>
        <h2 className="text-lg font-bold text-left">{t("passiva")}</h2>
        {passiva.map((assetGroup: AssetGroup) => {
          return (
            <div className="flex flex-row justify-between">
              <p>{t(assetGroup.name)}</p>
              <p>{assetGroup.startingValue + " " + currrentCurrency}</p>
            </div>
          );
        })}
        <div className="divider"></div>
        <div className="flex flex-row justify-between">
          <h2 className="text-lg font-bold">{t("total_capital")}</h2>
          <p className="text-lg">
            {startingCapital.getTotalCapital() + " " + currrentCurrency}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default BalanceSheet;
