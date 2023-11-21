import React, { useContext, useState } from "react";
import { InputContext } from "../../context/InputContext";
import StartingCapitalGraph from "./showcase/StartingCapitalGraph";
import BalanceSheet from "./showcase/BalanceSheet";

type StartingCapitalDisplayProps = {
  t: any;
  currentCurrency: string;
};

const StartingCapitalDisplay: React.FC<StartingCapitalDisplayProps> = ({
  t,
  currentCurrency,
}) => {
  const { startingCapital } = useContext(InputContext);
  const { assetGroups, liabilities } = startingCapital;

  const [active, setActive] = useState(1);

  return (
    <div className="card max-w-full">
      <div className="card-body">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl font-bold">{t("starting_capital_display")}</h1>
          <div className="tabs">
            <div className="flex flex-row gap-2">
              <button
                className={`tab tab-pill ${active === 1 ? "tab-active" : ""}`}
                onClick={() => setActive(1)}
              >
                {t("balance_sheet")}
              </button>
              <button
                className={`tab tab-pill ${active === 2 ? "tab-active" : ""}`}
                onClick={() => setActive(2)}
              >
                {t("Active")}
              </button>
              <button
                className={`tab tab-pill ${active === 3 ? "tab-active" : ""}`}
                onClick={() => setActive(3)}
              >
                {t("passiva")}
              </button>
            </div>
          </div>
        </div>
        {active === 1 && (
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold text-left">
              {t("balance_sheet")}
            </h2>
            <BalanceSheet
              totalCapital={startingCapital.getTotalCapital()}
              t={t}
              assets={assetGroups}
              passiva={liabilities}
              currrentCurrency={currentCurrency}
            />
          </div>
        )}
        {active === 2 && (
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold text-left">{t("activa")}</h2>
            <StartingCapitalGraph
              t={t}
              data={startingCapital ? startingCapital.assetGroups : []}
            />
          </div>
        )}
        {active === 3 && (
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold text-left">{t("passiva")}</h2>
            <StartingCapitalGraph
              t={t}
              data={startingCapital ? startingCapital.liabilities : []}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StartingCapitalDisplay;
