import { InvestmentWeights } from "../../models/pof/InvestmentWeights";
import React, { useState } from "react";

type InputAssetAllocationProps = {
  t: any;
  setCash: (cash: number) => void;
  cash: number;
  setStocks: (stocks: number) => void;
  stocks: number;
  setRealEstate: (realEstate: number) => void;
  realEstate: number;
  setPreciousMetals: (preciousMetals: number) => void;
  preciousMetals: number;
  setOther: (other: number) => void;
  other: number;
  crypto: number;
  setCrypto: (crypto: number) => void;
};

const InputAssetAllocation: React.FC<InputAssetAllocationProps> = ({
  t,
  crypto,
  setCrypto,
  other,
  setOther,
  preciousMetals,
  setPreciousMetals,
  realEstate,
  setRealEstate,
  setCash,
  cash,
  stocks,
  setStocks,
}) => {
  /**
   * Handles the change of the inflation rate
   * @param event the event that triggered the change
   */
  const handleCashChange = (event: { target: { value: string } }) => {
    setCash(event.target.value === "" ? 0 : parseFloat(event.target.value));
  };

  /**
   * Handles the change of the expected growth rate
   * @param event the event that triggered the change
   */
  const handleStocksChange = (event: { target: { value: string } }) => {
    setStocks(event.target.value === "" ? 0 : parseFloat(event.target.value));
  };

  /**
   * Handles the change of the expected growth rate
   * @param event the event that triggered the change
   */
  const handleRealEstateChange = (event: { target: { value: string } }) => {
    setRealEstate(
      event.target.value === "" ? 0 : parseFloat(event.target.value)
    );
  };

  /**
   * Handles the change of the expected growth rate
   * @param event the event that triggered the change
   */
  const handlePreciousMetalsChange = (event: { target: { value: string } }) => {
    setPreciousMetals(
      event.target.value === "" ? 0 : parseFloat(event.target.value)
    );
  };

  /**
   * Handles the change of the expected growth rate
   * @param event the event that triggered the change
   */
  const handleCryptoChange = (event: { target: { value: string } }) => {
    setCrypto(event.target.value === "" ? 0 : parseFloat(event.target.value));
  };

  /**
   * Handles the change of the expected growth rate
   * @param event the event that triggered the change
   */
  const handleOtherChange = (event: { target: { value: string } }) => {
    setOther(event.target.value === "" ? 0 : parseFloat(event.target.value));
  };

  return (
    <div className="card max-w-md">
      <div className="card-body">
        <div className="form-group">
          <label className="form-label">{t("cash")}</label>
          <div className="form-control relative w-full">
            <input
              type="number"
              className="input input-lg max-w-full pl-10"
              value={cash}
              onChange={handleCashChange}
            />
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">%</h5>
            </span>
          </div>
          <label className="form-label">{t("precious_metals")}</label>
          <div className="form-control relative w-full">
            <input
              type="number"
              className="input input-lg max-w-full pl-10"
              value={preciousMetals}
              onChange={handlePreciousMetalsChange}
            />
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">%</h5>
            </span>
          </div>
          <label className="form-label">{t("crypto_currency")}</label>
          <div className="form-control relative w-full">
            <input
              type="number"
              className="input input-lg max-w-full pl-10"
              value={crypto}
              onChange={handleCryptoChange}
            />
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">%</h5>
            </span>
          </div>
          <label className="form-label">{t("real_estate")}</label>
          <div className="form-control relative w-full">
            <input
              type="number"
              className="input input-lg max-w-full pl-10"
              value={realEstate}
              onChange={handleRealEstateChange}
            />
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">%</h5>
            </span>
          </div>
          <label className="form-label">{t("stocks")}</label>
          <div className="form-control relative w-full">
            <input
              type="number"
              className="input input-lg max-w-full pl-10"
              value={stocks}
              onChange={handleStocksChange}
            />
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">%</h5>
            </span>
          </div>
          <label className="form-label">{t("other")}</label>
          <div className="form-control relative w-full">
            <input
              type="number"
              className="input input-lg max-w-full pl-10"
              value={other}
              onChange={handleOtherChange}
            />
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">%</h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputAssetAllocation;
