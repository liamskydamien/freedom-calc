import React, { useEffect } from "react";
import { AssetGroup } from "../../../models/startingcapital/AssetGroup";
import { CryptoState } from "../../../models/types/AssetContextTypes";
import { GROWTH_RATE } from "../../../constants/assets/growthrate";

type CryptoCurrencyInputProps = {
  t: any;
  cryptoCurrency: AssetGroup;
  valid: boolean;
  cryptoStates: CryptoState;
  currentCurrency: string;
};

const CryptoCurrencyInput: React.FC<CryptoCurrencyInputProps> = ({
  cryptoStates,
  t,
  cryptoCurrency,
  valid,
  currentCurrency
}) => {
  const {
    bitcoin,
    ethereum,
    otherCryptos,
    setBitcoin,
    setEthereum,
    setOtherCryptos,
  } = cryptoStates;

  useEffect(() => {
    updateCryptoCurrency();
  }, [bitcoin, ethereum, otherCryptos]);
  const updateCryptoCurrency = () => {
    cryptoCurrency.startingValue = bitcoin + ethereum + otherCryptos;
    cryptoCurrency.growthRate = GROWTH_RATE.crypto;
  };

  const bitcoinChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setBitcoin(value === "" ? 0 : parseFloat(value));
    }
  };

  const ethereumChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setEthereum(value === "" ? 0 : parseFloat(value));
    }
  };

  const otherChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setOtherCryptos(value === "" ? 0 : parseFloat(value));
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="form-group">
        <h3 className="text-sm font-bold mt-2">{t("crypto_currency")}</h3>
          <label className="form-label">{t("bitcoin")}</label>
          <div className="form-control relative w-full">
            {valid ? (
              <input
                value={bitcoin}
                type="number"
                className="input input-lg max-w-full pl-10"
                disabled={true}
              />
            ) : (
              <input
                value={bitcoin === 0 ? "" : bitcoin}
                type="number"
                className="input input-lg max-w-full pl-10"
                placeholder="0"
                onChange={bitcoinChangeHandler}
              />
            )}
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
          </div>
          <label className="form-label">{t("ethereum")}</label>
          <div className="form-control relative w-full">

            {valid ? (
              <input
                value={ethereum}
                type="number"
                className="input input-lg max-w-full pl-10"
                disabled={true}
              />
            ) : (
              <input
                value={ethereum === 0 ? "" : ethereum}
                type="number"
                placeholder="0"
                className="input input-lg max-w-full pl-10"
                onChange={ethereumChangeHandler}
              />
            )}
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
          </div>
          <label className="form-label">{t("other")}</label>
          <div className="form-control relative w-full">
            {valid ? (
              <input
                value={otherCryptos}
                type="number"
                className="input input-lg max-w-full pl-10"
                disabled={true}
              />
            ) : (
              <input
                value={otherCryptos === 0 ? "" : otherCryptos}
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

export default CryptoCurrencyInput;
