import { Expenses } from "../../../models/lifephases/Expenses";
import React, { useState } from "react";

type AddExpenseProps = {
  t: any;
  setExpense: any;
  setStatus: any;
  expense: Expenses;
  currentCurrency: string;
};

const AddExpense: React.FC<AddExpenseProps> = ({
  t,
  setExpense,
  setStatus,
  expense,
  currentCurrency,
}) => {
  const [taxes, setTaxes] = useState(expense.taxes);
  const [rent, setRent] = useState(expense.housing);
  const [consumption, setConsumption] = useState(expense.consumptions);
  const [insurance, setInsurance] = useState(expense.insurance);
  const [otherCosts, setOtherCosts] = useState(expense.other);
  const [interest, setInterest] = useState(expense.interest);
  const [socialSecurity, setSocialSecurity] = useState(expense.socialSecurity);
  const [maintenance, setMaintenance] = useState(expense.maintenance);
  const addExpenseHandler = () => {
    const expense: Expenses = new Expenses(
      taxes,
      rent,
      consumption,
      socialSecurity,
      maintenance,
      insurance,
      interest,
      otherCosts,
    );
    setExpense(expense);
    setStatus("summary");
  };

  const backHandler = () => {
    setTaxes(0.0);
    setRent(0.0);
    setConsumption(0.0);
    setInsurance(0.0);
    setOtherCosts(0.0);
    setInterest(0.0);
    setSocialSecurity(0.0);
    setMaintenance(0.0);
    setStatus("income");
  };

  const taxesChangeHandler = (event: { target: { value: string } }) => {
    setTaxes(event.target.value === "" ? 0 : parseFloat(event.target.value));
  };

  const rentChangeHandler = (event: { target: { value: string } }) => {
    setRent(event.target.value === "" ? 0 : parseFloat(event.target.value));
  };

  const consumptionChangeHandler = (event: { target: { value: string } }) => {
    setConsumption(
      event.target.value === "" ? 0 : parseFloat(event.target.value),
    );
  };

  const insuranceChangeHandler = (event: { target: { value: string } }) => {
    setInsurance(
      event.target.value === "" ? 0 : parseFloat(event.target.value),
    );
  };

  const otherCostsChangeHandler = (event: { target: { value: string } }) => {
    setOtherCosts(
      event.target.value === "" ? 0 : parseFloat(event.target.value),
    );
  };

  const interestChangeHandler = (event: { target: { value: string } }) => {
    setInterest(event.target.value === "" ? 0 : parseFloat(event.target.value));
  };

  const socialSecurityChangeHandler = (event: {
    target: { value: string };
  }) => {
    setSocialSecurity(
      event.target.value === "" ? 0 : parseFloat(event.target.value),
    );
  };

  const maintenanceChangeHandler = (event: { target: { value: string } }) => {
    setMaintenance(
      event.target.value === "" ? 0 : parseFloat(event.target.value),
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="form-group">
        <h2 className="text-sm font-bold pb-0">{t("expenses")}</h2>
        <label className="form-label">{t("taxes")}</label>
        <div className="form-control relative w-full">
          <input
            value={taxes === 0 ? "" : taxes}
            type="number"
            className="input input-lg max-w-full pl-10"
            placeholder="0"
            onChange={taxesChangeHandler}
          />
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">{t("rent")}</label>
        <div className="form-control relative w-full">
          <input
            value={rent === 0 ? "" : rent}
            type="number"
            placeholder="0"
            className="input input-lg max-w-full pl-10"
            onChange={rentChangeHandler}
          />
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">{t("consumption")}</label>
        <div className="form-control relative w-full">
          <input
            value={consumption === 0 ? "" : consumption}
            type="number"
            placeholder="0"
            className="input input-lg max-w-full pl-10"
            onChange={consumptionChangeHandler}
          />
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">{t("insurance")}</label>
        <div className="form-control relative w-full">
          <input
            value={insurance === 0 ? "" : insurance}
            type="number"
            placeholder="0"
            className="input input-lg max-w-full pl-10"
            onChange={insuranceChangeHandler}
          />
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">{t("interest")}</label>
        <div className="form-control relative w-full">
          <input
            value={interest === 0 ? "" : interest}
            type="number"
            placeholder="0"
            className="input input-lg max-w-full pl-10"
            onChange={interestChangeHandler}
          />
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">{t("socialSecurity")}</label>
        <div className="form-control relative w-full">
          <input
            value={socialSecurity === 0 ? "" : socialSecurity}
            type="number"
            placeholder="0"
            className="input input-lg max-w-full pl-10"
            onChange={socialSecurityChangeHandler}
          />
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">{t("maintenance")}</label>
        <div className="form-control relative w-full">
          <input
            value={maintenance === 0 ? "" : maintenance}
            type="number"
            placeholder="0"
            className="input input-lg max-w-full pl-10"
            onChange={maintenanceChangeHandler}
          />
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">{t("otherCosts")}</label>
        <div className="form-control relative w-full">
          <input
            value={otherCosts === 0 ? "" : otherCosts}
            type="number"
            placeholder="0"
            className="input input-lg max-w-full pl-10"
            onChange={otherCostsChangeHandler}
          />
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-primary" onClick={addExpenseHandler}>
            {t("save_proceed")}
          </button>
          <button className="btn" onClick={backHandler}>
            {t("back")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
