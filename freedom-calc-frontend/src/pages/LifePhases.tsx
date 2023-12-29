import AddLifePhase from "../components/lifephases/AddLifePhase";
import { useTranslation } from "react-i18next";
import { InputContext } from "../context/InputContext";
import { useContext, useEffect, useState } from "react";
import { SelectedLifePhaseContextProvider } from "../context/SelectedLifePhaseContext";
import ShowSelectedLifePhase from "../components/lifephases/ShowSelectedLifePhase";
import { useNavigate } from "react-router";
import { ProgressContext } from "../context/ProgressContext";
import LifePhaseGraph from "../components/lifephases/LifePhaseGraph";
import { getCurrencySymbol } from "../calculations/utility/getCurrencySymbol";

const LifePhases = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { progress, updateProgress } = useContext(ProgressContext);

  const { phases, setPhases, personalInformation } = useContext(InputContext);
  const [valid, setValid] = useState(false);

  const currentCurrency = getCurrencySymbol(personalInformation.currency);

  /**
   * Checks if the user has entered a phase that ends at the expected age
   */
  useEffect(() => {
    checkForPhaseEnd();
  }, [phases]);

  /**
   * Checks if the user has entered a phase that ends at the expected age
   */
  const checkForPhaseEnd = () => {
    phases.phase.forEach((phase) => {
      if (phase.toAge >= personalInformation.expectedAge) {
        setValid(true);
      }
    });
  };

  /**
   * Saves the input and proceeds to the next page
   */
  const saveAndProceed = () => {
    updateLifePhaseProgress();
    navigate("/pof");
  };

  /**
   * Updates the progress context to indicate that the user has entered life phases
   */
  const updateLifePhaseProgress = () => {
    progress.setLifephases(true);
    updateProgress(progress);
  };

  return (
    <div className="flex flex-row gap-2">
      <SelectedLifePhaseContextProvider>
        <div className="flex flex-col max-w-fit gap-2">
          <AddLifePhase
            t={t}
            lifephase={{ phases, setPhases }}
            expectedAge={personalInformation.expectedAge}
            age={personalInformation.getAge()}
            valid={valid}
            currentCurrency={currentCurrency}
          />
          <ShowSelectedLifePhase t={t} currentCurrency={currentCurrency} />
          {valid ? (
            <div className="flex justify-center">
              <button
                className="btn btn-primary btn-block"
                onClick={saveAndProceed}
              >
                {t("save_and_proceed")}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="alert alert-info">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 34C22.9 34 22 33.1 22 32V24C22 22.9 22.9 22 24 22C25.1 22 26 22.9 26 24V32C26 33.1 25.1 34 24 34ZM26 18H22V14H26V18Z"
                    fill="#0085FF"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="text-content2">
                    {t("create_lifephases_first")}
                  </span>
                </div>
              </div>
              <button className="btn btn-primary btn-block" disabled={true}>
                {t("save_and_proceed")}
              </button>
            </div>
          )}
        </div>
      </SelectedLifePhaseContextProvider>
      <div>
        <LifePhaseGraph t={t} currentCurrency={currentCurrency} />
      </div>
    </div>
  );
};
export default LifePhases;
