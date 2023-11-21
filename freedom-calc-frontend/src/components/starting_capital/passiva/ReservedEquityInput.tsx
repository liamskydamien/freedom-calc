import { AssetGroup } from "../../../models/startingcapital/AssetGroup";
import { ReservedEquityState } from "../../../models/types/AssetContextTypes";
import React, { useEffect } from "react";

type ReservedEquityInputProps = {
  t: any;
  reservedEquity: AssetGroup;
  liabilitiesValid: boolean;
  reservedEquityState: ReservedEquityState;
  currentCurrency: string;
};

const ReservedEquityInput: React.FC<ReservedEquityInputProps> = ({
  liabilitiesValid,
  reservedEquityState,
  reservedEquity,
  currentCurrency,
  t,
}) => {
  const {
    reservedEquityForConsumption,
    setReservedEquityForOther,
    reservedEquityForOther,
    setReservedEquityForConsumption,
    setReservedEquityForPensionProvision,
    reservedEquityForPensionProvision,
  } = reservedEquityState;

  /**
   * Updates the liabilities array with the new values
   */
  const updateReservedEquity = () => {
    reservedEquity.startingValue =
      reservedEquityForConsumption +
      reservedEquityForOther +
      reservedEquityForPensionProvision;
  };

  /**
   * Updates the liabilities array with the new values
   */
  useEffect(() => {
    updateReservedEquity();
  }, [
    reservedEquityForConsumption,
    reservedEquityForOther,
    reservedEquityForPensionProvision,
  ]);

  const reservedEquityForConsumptionChangeHandler = (event: {
    target: { value: any };
  }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setReservedEquityForConsumption(value === "" ? 0 : parseFloat(value));
    }
  };

  const reservedEquityForOtherChangeHandler = (event: {
    target: { value: any };
  }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setReservedEquityForOther(value === "" ? 0 : parseFloat(value));
    }
  };

  const reservedEquityForPensionProvisionChangeHandler = (event: {
    target: { value: any };
  }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setReservedEquityForPensionProvision(
        value === "" ? 0 : parseFloat(value),
      );
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="form-group">
        <h3 className="text-sm font-bold mt-2">{t("reserved_equity")}</h3>
        <label className="form-label">
          {t("reserved_equity_for_consumption")}
        </label>
        <div className="form-control relative w-full">
          {liabilitiesValid ? (
            <input
              value={reservedEquityForConsumption}
              type="number"
              className="input input-lg max-w-full pl-10"
              disabled={true}
            />
          ) : (
            <input
              value={
                reservedEquityForConsumption === 0
                  ? ""
                  : reservedEquityForConsumption
              }
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              onChange={reservedEquityForConsumptionChangeHandler}
            />
          )}
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">
          {t("reserved_equity_for_pension_provision")}
        </label>
        <div className="form-control relative w-full">
          {liabilitiesValid ? (
            <input
              value={
                reservedEquityForPensionProvision === 0
                  ? ""
                  : reservedEquityForPensionProvision
              }
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              disabled={true}
            />
          ) : (
            <input
              value={
                reservedEquityForPensionProvision === 0
                  ? ""
                  : reservedEquityForPensionProvision
              }
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              onChange={reservedEquityForPensionProvisionChangeHandler}
            />
          )}
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">{t("reserved_equity_for_other")}</label>
        <div className="form-control relative w-full">
          {liabilitiesValid ? (
            <input
              value={reservedEquityForOther}
              type="number"
              className="input input-lg max-w-full pl-10"
              disabled={true}
            />
          ) : (
            <input
              value={reservedEquityForOther === 0 ? "" : reservedEquityForOther}
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              onChange={reservedEquityForOtherChangeHandler}
            />
          )}
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReservedEquityInput;
