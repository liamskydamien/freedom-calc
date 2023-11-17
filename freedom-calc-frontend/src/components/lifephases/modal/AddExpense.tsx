import { Expenses } from "../../../models/lifephases/Expenses";
import React, { useState } from "react";

type AddExpenseProps = {
  t: any;
  setExpense: any;
  setStatus: any;
  expense: Expenses;
};

const AddExpense: React.FC<AddExpenseProps> = ({
  t,
  setExpense,
  setStatus,
  expense,
}) => {
  //TODO: Integrate useRef do clear inputs
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
        <div className="form-field">
          <label className="form-label">{t("taxes")}</label>
          <input
            value={taxes}
            type="number"
            className="input max-w-full"
            onChange={taxesChangeHandler}
          />
        </div>
        <div className="form-field">
          <label className="form-label">{t("rent")}</label>
          <input
            value={rent}
            type="number"
            className="input max-w-full"
            onChange={rentChangeHandler}
          />
        </div>
        <div className="form-field">
          <label className="form-label">{t("consumption")}</label>
          <input
            value={consumption}
            type="number"
            className="input max-w-full"
            onChange={consumptionChangeHandler}
          />
        </div>
        <div className="form-field">
          <label className="form-label">{t("insurance")}</label>
          <input
            value={insurance}
            type="number"
            className="input max-w-full"
            onChange={insuranceChangeHandler}
          />
        </div>
        <div className="form-field">
          <label className="form-label">{t("interest")}</label>
          <input
            value={interest}
            type="number"
            className="input max-w-full"
            onChange={interestChangeHandler}
          />
        </div>
        <div className="form-field">
          <label className="form-label">{t("socialSecurity")}</label>
          <input
            value={socialSecurity}
            type="number"
            className="input max-w-full"
            onChange={socialSecurityChangeHandler}
          />
        </div>
        <div className="form-field">
          <label className="form-label">{t("maintenance")}</label>
          <input
            value={maintenance}
            type="number"
            className="input max-w-full"
            onChange={maintenanceChangeHandler}
          />
        </div>
        <div className="form-field">
          <label className="form-label">{t("otherCosts")}</label>
          <input
            value={otherCosts}
            type="number"
            className="input max-w-full"
            onChange={otherCostsChangeHandler}
          />
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
