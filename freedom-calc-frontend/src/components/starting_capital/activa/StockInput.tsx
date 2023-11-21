import { AssetGroup } from "../../../models/startingcapital/AssetGroup";
import React, { useEffect } from "react";
import { StockState } from "../../../models/types/AssetContextTypes";
import { GROWTH_RATE } from "../../../constants/assets/growthrate";

type StockInputProps = {
  t: any;
  stocks: AssetGroup;
  valid: boolean;
  stockStates: StockState;
  currentCurrency: string;
};

const StockInput: React.FC<StockInputProps> = ({
  stockStates,
  t,
  stocks,
  valid,
  currentCurrency,
}) => {
  const {
    singleStocks,
    fund,
    etf,
    derivative,
    activeCorporateParticipation,
    passiveCorporateParticipation,
    otherStocks,
    setSingleStocks,
    setFund,
    setEtf,
    setDerivative,
    setActiveCorporateParticipation,
    setPassiveCorporateParticipation,
    setOtherStocks,
  } = stockStates;

  /**
   * Updates the assets array with the new values
   */
  const updateStocks = () => {
    stocks.startingValue =
      singleStocks +
      fund +
      etf +
      derivative +
      activeCorporateParticipation +
      passiveCorporateParticipation +
      otherStocks;
    stocks.growthRate = GROWTH_RATE.stocks;
  };

  /**
   * Updates the assets array with the new values
   */
  useEffect(() => {
    updateStocks();
  }, [
    singleStocks,
    fund,
    etf,
    derivative,
    activeCorporateParticipation,
    passiveCorporateParticipation,
    otherStocks,
  ]);

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const singleStocksChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setSingleStocks(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const fundChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setFund(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const etfChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setEtf(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const derivativeChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setDerivative(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const activeCorporateParticipationChangeHandler = (event: {
    target: { value: any };
  }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setActiveCorporateParticipation(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const passiveCorporateParticipationChangeHandler = (event: {
    target: { value: any };
  }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setPassiveCorporateParticipation(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const otherChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setOtherStocks(value === "" ? 0 : parseFloat(value));
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="form-group">
        <h3 className="text-sm font-bold mt-2">{t("stocks")}</h3>
        <label className="form-label">{t("single_stocks")}</label>
        <div className="form-control relative w-full">
          {valid ? (
            <input
              value={singleStocks}
              type="number"
              className="input input-lg max-w-full pl-10"
              disabled={true}
            />
          ) : (
            <input
              value={singleStocks === 0 ? "" : singleStocks}
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              onChange={singleStocksChangeHandler}
            />
          )}
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <h3 className="text-sm font-bold mt-2">{t("stock_funds")}</h3>
        <label className="form-label">{t("fund")}</label>
        <div className="form-control relative w-full">
          {valid ? (
            <input
              value={fund}
              type="number"
              className="input input-lg max-w-full pl-10"
              disabled={true}
            />
          ) : (
            <input
              value={fund === 0 ? "" : fund}
              placeholder="0"
              type="number"
              className="input input-lg max-w-full pl-10"
              onChange={fundChangeHandler}
            />
          )}
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">{t("etf")}</label>
        <div className="form-control relative w-full">
          {valid ? (
            <input
              value={etf}
              type="number"
              className="input input-lg max-w-full pl-10"
              disabled={true}
            />
          ) : (
            <input
              value={etf === 0 ? "" : etf}
              placeholder="0"
              type="number"
              className="input input-lg max-w-full pl-10"
              onChange={etfChangeHandler}
            />
          )}
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">{t("derivative")}</label>
        <div className="form-control relative w-full">
          {valid ? (
            <input
              value={derivative}
              type="number"
              className="input input-lg max-w-full pl-10"
              disabled={true}
            />
          ) : (
            <input
              value={derivative === 0 ? "" : derivative}
              placeholder="0"
              type="number"
              className="input input-lg max-w-full pl-10"
              onChange={derivativeChangeHandler}
            />
          )}
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <h3 className="text-sm font-bold mt-2">
          {t("corporate_participation")}
        </h3>
        <label className="form-label">
          {t("active_corporate_participation")}
        </label>
        <div className="form-control relative w-full">
          {valid ? (
            <input
              value={activeCorporateParticipation}
              type="number"
              className="input input-lg max-w-full pl-10"
              disabled={true}
            />
          ) : (
            <input
              value={
                activeCorporateParticipation === 0
                  ? ""
                  : activeCorporateParticipation
              }
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              onChange={activeCorporateParticipationChangeHandler}
            />
          )}
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <label className="form-label">
          {t("passive_corporate_participation")}
        </label>
        <div className="form-control relative w-full">
          {valid ? (
            <input
              value={passiveCorporateParticipation}
              type="number"
              className="input input-lg max-w-full pl-10"
              disabled={true}
            />
          ) : (
            <input
              value={
                passiveCorporateParticipation === 0
                  ? ""
                  : passiveCorporateParticipation
              }
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              onChange={passiveCorporateParticipationChangeHandler}
            />
          )}
          <span className="absolute inset-y-0 left-3 inline-flex items-center">
            <h5 className="text-lg font-bold">{currentCurrency}</h5>
          </span>
        </div>
        <h3 className="text-sm font-bold mt-2">{t("other")}</h3>
        <label className="form-label">{t("other")}</label>
        <div className="form-control relative w-full">
          {valid ? (
            <input
              value={otherStocks}
              type="number"
              className="input input-lg max-w-full pl-10"
              disabled={true}
            />
          ) : (
            <input
              value={otherStocks === 0 ? "" : otherStocks}
              type="number"
              placeholder="0"
              className="input input-lg max-w-full pl-10"
              onChange={otherChangeHandler}
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

export default StockInput;
