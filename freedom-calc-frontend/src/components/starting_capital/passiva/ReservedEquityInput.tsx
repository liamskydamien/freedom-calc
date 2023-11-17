import { AssetGroup } from "../../../models/startingcapital/AssetGroup";
import {
  LiabilitiesState,
  ReservedEquityState,
} from "../../../models/types/AssetContextTypes";
import { useEffect } from "react";

type ReservedEquityInputProps = {
  t: any;
  reservedEquity: AssetGroup;
  liabilitiesValid: boolean;
  reservedEquityState: ReservedEquityState;
};

const ReservedEquityInput: React.FC<ReservedEquityInputProps> = ({
  liabilitiesValid,
  reservedEquityState,
  reservedEquity,
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
        <div className="form-field">
          <label className="form-label">
            {t("reserved_equity_for_consumption")}
          </label>
          {liabilitiesValid ? (
            <input
              value={reservedEquityForConsumption}
              type="number"
              className="input max-w-full"
              disabled={true}
            />
          ) : (
            <input
              value={reservedEquityForConsumption}
              type="number"
              className="input max-w-full"
              onChange={reservedEquityForConsumptionChangeHandler}
            />
          )}
        </div>
        <div className="form-field">
          <label className="form-label">
            {t("reserved_equity_for_pension_provision")}
          </label>
          {liabilitiesValid ? (
            <input
              value={reservedEquityForPensionProvision}
              type="number"
              className="input max-w-full"
              disabled={true}
            />
          ) : (
            <input
              value={reservedEquityForPensionProvision}
              type="number"
              className="input max-w-full"
              onChange={reservedEquityForPensionProvisionChangeHandler}
            />
          )}
        </div>
        <div className="form-field">
          <label className="form-label">{t("reserved_equity_for_other")}</label>
          {liabilitiesValid ? (
            <input
              value={reservedEquityForOther}
              type="number"
              className="input max-w-full"
              disabled={true}
            />
          ) : (
            <input
              value={reservedEquityForOther}
              type="number"
              className="input max-w-full"
              onChange={reservedEquityForOtherChangeHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservedEquityInput;
