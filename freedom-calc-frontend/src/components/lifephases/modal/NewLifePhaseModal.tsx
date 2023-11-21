import React, { useState } from "react";
import AddNameAndAge from "./AddNameAndAge";
import AddIncome from "./AddIncome";
import AddExpense from "./AddExpense";
import { Expenses } from "../../../models/lifephases/Expenses";
import { Income } from "../../../models/lifephases/Income";

type NewLifePhaseModalProps = {
  addPhase: (
    name: string,
    endAge: number,
    income: Income,
    expense: Expenses,
  ) => void;
  startAge: number;
  t: any;
  expectedAge: number;
  valid: boolean;
    currentCurrency: string;
};
const NewLifePhaseModal: React.FC<NewLifePhaseModalProps> = ({
  addPhase,
  startAge,
  t,
  expectedAge,
    currentCurrency
}) => {
  const [income, setIncome] = useState(
    new Income(0.0, 0.0, 0.0, 0.0, 0.0, 0.0),
  );
  const [expense, setExpense] = useState(
    new Expenses(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0),
  );
  const [name, setName] = useState("");
  const [endAge, setEndAge] = useState(expectedAge);
  const [status, setStatus] = useState("name");

  const clear = () => {
    setName("");
    setEndAge(expectedAge);
    setStatus("name");
    setIncome(new Income(0.0, 0.0, 0.0, 0.0, 0.0, 0.0));
    setExpense(new Expenses(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0));
  };

  const addPhaseHandler = () => {
    addPhase(name, endAge, income, expense);
    clear();
  };

  return (
    <div className="flex justify-center">
      <label className="btn btn-primary" htmlFor="modal-3">
        {t("new_life_phase")}
      </label>
      <input
        className="modal-state"
        id="modal-3"
        type="checkbox"
        onChange={() => {
          clear();
        }}
      />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-3"></label>
        <div className="modal-content flex flex-col gap-5 max-w-full">
          <label
            htmlFor="modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl">Add a new Life Phase</h2>
          {status === "name" ? (
            <AddNameAndAge
              t={t}
              name={name}
              setName={setName}
              endAge={endAge}
              setEndAge={setEndAge}
              setStatus={setStatus}
              clear={clear}
              startAge={startAge}
              expectedAge={expectedAge}
            />
          ) : status === "income" ? (
            <AddIncome
              t={t}
              income={income}
              setIncome={setIncome}
              setStatus={setStatus}
              currentCurrency={currentCurrency}
            />
          ) : status === "expense" ? (
            <AddExpense
              t={t}
              expense={expense}
              setStatus={setStatus}
              setExpense={setExpense}
              currentCurrency={currentCurrency}
            />
          ) : (
            status === "summary" && (
              <div>
                <h3 className="text-sm font-bold pb-0">{t("summary")}</h3>
                <div className="flex flex-col gap-1.5 mb-3">
                  <div className="flex justify-between">
                    <div className="flex mt-auto mb-auto">
                      <p className="mb-0">{t("name_of_phase")}</p>
                    </div>
                    <input
                      value={name}
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
                      value={startAge}
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
                      value={endAge}
                      type="number"
                      className="input max-w-fit"
                      readOnly
                      disabled
                    />
                  </div>

                  <div className="flex justify-between">
                    <div className="flex mt-auto mb-auto">
                      <p className="mb-0 mr-5">{t("income")}</p>
                    </div>
                    <div className="form-control">
                    <input
                      value={income.getTotalIncome()}
                      type="number"
                      className="input pl-10"
                      readOnly
                      disabled
                    /><span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
                    </div>

                  </div>

                  <div className="flex justify-between">
                    <div className="flex mt-auto mb-auto">
                      <p className="mb-0 mr-5">{t("expenses")}</p>
                    </div>
                    <div className="form-control">
                      <input
                          value={expense.getTotalExpenses()}
                          type="number"
                          className="input pl-10"
                          readOnly
                          disabled
                      />
                      <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <label
                    className="btn btn-primary btn-block"
                    htmlFor="modal-3"
                    onClick={addPhaseHandler}
                  >
                    {t("save")}
                  </label>
                  <label
                    className="btn btn-block"
                    htmlFor="modal-3"
                    onClick={clear}
                  >
                    {t("cancel")}
                  </label>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NewLifePhaseModal;
