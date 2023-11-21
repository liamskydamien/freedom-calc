import { AssetGroup } from "../../../models/startingcapital/AssetGroup";
import React from "react";

type BalanceSheetProps = {
  t: any;
  assets: AssetGroup[];
  passiva: AssetGroup[];
  totalCapital: number;
  currrentCurrency: string;
};
const BalanceSheet: React.FC<BalanceSheetProps> = ({
  totalCapital,
  t,
  assets,
  passiva,
  currrentCurrency,
}) => {
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
          <p className="text-lg">{totalCapital + " " + currrentCurrency}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default BalanceSheet;
