import React, { useState } from "react";
import { Income } from "../../../models/lifephases/Income";

type AddIncomeProps = {
  t: any;
  setIncome: any;
  setStatus: any;
  income: Income;
  currentCurrency: string;
};
const AddIncome: React.FC<AddIncomeProps> = ({
  t,
  setIncome,
  setStatus,
  income,
    currentCurrency
}) => {
  const [dependent, setDependent] = useState(income.dependent);
  const [selfemployed, setSelfemployed] = useState(income.selfemployed);
  const [rentingIncome, setRentingIncome] = useState(income.renting);
  const [capitalIncome, setCapitalIncome] = useState(income.capitalgains);
  const [pension, setPension] = useState(income.pension);
  const [otherIncome, setOtherIncome] = useState(income.other);

  const addIncomeHandler = () => {
    const income = new Income(
      dependent,
      selfemployed,
      rentingIncome,
      capitalIncome,
      pension,
      otherIncome,
    );
    setIncome(income);
    setStatus("expense");
  };

  const backHandler = () => {
    setDependent(0.0);
    setSelfemployed(0.0);
    setRentingIncome(0.0);
    setCapitalIncome(0.0);
    setPension(0.0);
    setOtherIncome(0.0);
    setStatus("name");
  };

  const dependentChangeHandler = (event: { target: { value: string } }) => {
    setDependent(
      event.target.value === "" ? 0 : parseFloat(event.target.value),
    );
  };

  const selfemployedChangeHandler = (event: { target: { value: string } }) => {
    setSelfemployed(
      event.target.value === "" ? 0 : parseFloat(event.target.value),
    );
  };

  const rentingIncomeChangeHandler = (event: { target: { value: string } }) => {
    setRentingIncome(
      event.target.value === "" ? 0 : parseFloat(event.target.value),
    );
  };

  const capitalIncomeChangeHandler = (event: { target: { value: string } }) => {
    setCapitalIncome(
      event.target.value === "" ? 0 : parseFloat(event.target.value),
    );
  };

  const pensionChangeHandler = (event: { target: { value: string } }) => {
    setPension(event.target.value === "" ? 0 : parseFloat(event.target.value));
  };

  const otherIncomeChangeHandler = (event: { target: { value: string } }) => {
    setOtherIncome(
      event.target.value === "" ? 0 : parseFloat(event.target.value),
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="form-group">
        <h2 className="text-sm font-bold pb-0">{t("income")}</h2>
        <label className="form-label">{t("dependent")}</label>
        <div className="form-control relative w-full">
          <input
            value={dependent === 0 ? "" : dependent}
            type="number"
            placeholder="0"
            className="input input-lg max-w-full pl-10"
            onChange={dependentChangeHandler}
          />
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
        </div>
        <label className="form-label">{t("selfemployed")}</label>
        <div className="form-control relative w-full">
          <input
            value={selfemployed === 0 ? "" : selfemployed}
            type="number"
            placeholder="0"
            className="input input-lg max-w-full pl-10"
            onChange={selfemployedChangeHandler}
          />
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
        </div>
        <label className="form-label">{t("rentingIncome")}</label>
        <div className="form-control relative w-full">
          <div className="form-control">
            <input
              value={rentingIncome === 0 ? "" : rentingIncome}
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              onChange={rentingIncomeChangeHandler}
            />
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
          </div>
        </div>
        <label className="form-label">{t("capitalIncome")}</label>
        <div className="form-control relative w-full">
          <div className="form-control">
            <input
              value={capitalIncome === 0 ? "" : capitalIncome}
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              onChange={capitalIncomeChangeHandler}
            />
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
          </div>
        </div>
        <label className="form-label">{t("pensionIncome")}</label>
        <div className="form-control relative w-full">
          <div className="form-control">
            <input
              value={pension === 0 ? "" : pension}
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              onChange={pensionChangeHandler}
            />
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
          </div>
        </div>
        <label className="form-label">{t("otherIncome")}</label>
        <div className="form-control relative w-full">
          <div className="form-control">
            <input
              value={otherIncome === 0 ? "" : otherIncome}
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              onChange={otherIncomeChangeHandler}
            />
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="btn btn-primary btn-block"
            onClick={addIncomeHandler}
          >
            {t("save_proceed")}
          </button>
          <button className="btn btn-block" onClick={backHandler}>
            {t("back")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddIncome;
