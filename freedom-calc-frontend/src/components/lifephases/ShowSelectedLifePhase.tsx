import React, { useContext } from "react";
import { SelectedLifePhaseContext } from "../../context/SelectedLifePhaseContext";

type ShowSelectedLifePhaseProps = {
  t: any;
  currentCurrency: string;
};
const ShowSelectedLifePhase: React.FC<ShowSelectedLifePhaseProps> = ({ t , currentCurrency}) => {
  const { selectedLifePhase } = useContext(SelectedLifePhaseContext);

  /**
   * Returns the total expenses of the selected life phase
   */
  const getIncome = () => {
    return selectedLifePhase.income
      ? selectedLifePhase.income.getTotalIncome()
      : 0;
  };

  /**
   * Returns the total expenses of the selected life phase
   */
  const getExpenses = () => {
    return selectedLifePhase.expenses
      ? selectedLifePhase.expenses.getTotalExpenses()
      : 0;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="text-xl font-bold">{t("selected_lifephase")}</h2>
        {selectedLifePhase ? (
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between">
              <div className="flex mt-auto mb-auto">
                <p className="mb-0">{t("name_of_phase")}</p>
              </div>
              <input
                value={selectedLifePhase.name}
                type="text"
                className="input max-w-fit"
                readOnly
                disabled
              />
            </div>

            <div className="flex justify-between">
              <div className="flex mt-auto mb-auto">
                <p className="mb-0">{t("start_of_phase")}</p>
              </div>
              <input
                value={selectedLifePhase.fromAge}
                type="number"
                className="input max-w-fit"
                readOnly
                disabled
              />
            </div>

            <div className="flex justify-between">
              <div className="flex mt-auto mb-auto">
                <p className="mb-0">{t("end_of_phase")}</p>
              </div>
              <input
                value={selectedLifePhase.toAge}
                type="number"
                className="input max-w-fit"
                readOnly
                disabled
              />
            </div>

            <div className="flex justify-between">
              <div className="flex mt-auto mb-auto">
                <p className="mb-0 mr-2">{t("income")}</p>
              </div>
              <div className="form-control relative w-full">
                <input
                    value={getIncome()}
                    type="number"
                    className="input input-lg max-w-full pl-10"
                    readOnly
                    disabled
                />
                <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex mt-auto mb-auto">
                <p className="mb-0 mr-2">{t("expenses")}</p>
              </div>
              <div className="form-control relative w-full">
              <input
                value={getExpenses()}
                type="number"
                className="input input-lg max-w-full pl-10"
                readOnly
                disabled
              />
                <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
            </div>
              </div>
          </div>
        ) : (
          <p>{t("no_lifephase_selected")}</p>
        )}
      </div>
    </div>
  );
};

export default ShowSelectedLifePhase;
