import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../../context/InputContext";
import { InputContextProviderState } from "../../models/InputContextProviderState";
import { StartingCapital } from "../../models/startingcapital/StartingCapital";
import ActivaInput from "./activa/ActivaInput";
import StartingCapitalProvider from "../../context/StartingCapitalContext";
import PassivaInput from "./passiva/PassivaInput";
import { ProgressContext } from "../../context/ProgressContext";
import { useNavigate } from "react-router";
import { AssetGroup } from "../../models/startingcapital/AssetGroup";

type StartingCapitalInputProps = {
  t: any;
  currentCurrency: string;
};

const StartingCapitalInput: React.FC<StartingCapitalInputProps> = ({
  t,
  currentCurrency,
}) => {
  // Import Hooks
  const navigate = useNavigate();

  const { progress, updateProgress } = useContext(ProgressContext);

  const { startingCapital, setStartingCapital }: InputContextProviderState =
    useContext(InputContext);
  const [active, setActive] = useState(1);
  const [assets, setAssets] = useState(startingCapital.assetGroups);
  const [passiva, setPassiva] = useState(startingCapital.liabilities);
  const [valid, setValid] = useState(false);
  const [activaSet, setActivaSet] = useState(false);
  const [passivaSet, setPassivaSet] = useState(false);

  useEffect(() => {
    checkForExistingData();
    if (activaSet && passivaSet) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [activaSet, passivaSet]);

  /**
   * Submits the data to the context
   */
  const submitHandler = () => {
    upddateStartingCapital();
    updateProgressStartingCapital();
    navigate("/lifephases");
  };

  /**
   * Submits the assets to the context
   */
  const submitAssets = (assets: AssetGroup[]) => {
    setAssets(assets);
    upddateStartingCapital();
  };

  /**
   * Submits the passiva to the context
   */
  const submitPassiva = (passiva: AssetGroup[]) => {
    setPassiva(passiva);
    upddateStartingCapital();
  };

  /**
   * Update the progress of the personal information
   */
  const updateProgressStartingCapital = () => {
    progress.setStartingCapital(true);
    updateProgress(progress);
  };

  /**
   * Update the progress of the personal information
   */
  const upddateStartingCapital = () => {
    const newStartingCapital = new StartingCapital(assets, passiva);
    setStartingCapital(newStartingCapital);
  };

  /**
   * Checks if there is already data in the context
   */
  const checkForExistingData = () => {
    progress.startingCapital && setActiveStates();
  };

  /**
   * Sets the active states to true
   */
  const setActiveStates = () => {
    setPassivaSet(true);
    setActivaSet(true);
  };

  return (
    <div className="flex-col card p-5">
      <h1 className="text-xl font-bold">{t("starting_capital")}</h1>
      <div className="tabs">
        <input
          type="radio"
          id="tab-4"
          name="tab-2"
          className="tab-toggle"
          defaultChecked
          onClick={() => setActive(1)}
        />
        <label htmlFor="tab-4" className="tab tab-bordered px-6 pr-16 pl-16">
          {t("activa")}
        </label>

        <input
          type="radio"
          id="tab-5"
          name="tab-2"
          className="tab-toggle"
          onClick={() => setActive(2)}
        />
        <label htmlFor="tab-5" className="tab tab-bordered px-6 pr-16 pl-16">
          {t("passiva")}
        </label>
      </div>
      <StartingCapitalProvider>
        {active === 1 ? (
          <ActivaInput
            t={t}
            assets={assets}
            setAssets={submitAssets}
            valid={valid}
            setActiva={setActivaSet}
            activaValid={activaSet}
            currentCurrency={currentCurrency}
          />
        ) : (
          <PassivaInput
            t={t}
            passivaValid={passivaSet}
            passiva={passiva}
            valid={valid}
            setLiabilitiesValid={setPassivaSet}
            setPassiva={submitPassiva}
            currentCurrency={currentCurrency}
          />
        )}
      </StartingCapitalProvider>
      {!valid ? (
        <button className="btn mt-4 btn-primary" disabled>
          {t("save_starting_capital")}
        </button>
      ) : (
        <button
          className="btn btn-primary mt-4"
          onClick={() => {
            submitHandler();
          }}
        >
          {t("save_starting_capital")}
        </button>
      )}
    </div>
  );
};

export default StartingCapitalInput;
