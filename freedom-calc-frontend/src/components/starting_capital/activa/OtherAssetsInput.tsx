import { AssetGroup } from "../../../models/startingcapital/AssetGroup";
import React, { useEffect } from "react";
import { OtherState } from "../../../models/types/AssetContextTypes";
import { GROWTH_RATE } from "../../../constants/assets/growthrate";

type OtherAssetsInputProps = {
  t: any;
  other: AssetGroup;
  valid: boolean;
  otherAssetStates: OtherState;
  currentCurrency: string;
};

const OtherAssetsInput: React.FC<OtherAssetsInputProps> = ({
  otherAssetStates,
  t,
  other,
  valid,
    currentCurrency
}) => {
  const {
    collectibles,
    art,
    claims,
    insurance,
    otherAssets,
    setCollectibles,
    setArt,
    setClaims,
    setInsurance,
    setOtherAssets,
  } = otherAssetStates;
  /**
   * Updates the assets array with the new values
   */
  const updateOtherAssets = () => {
    other.startingValue = collectibles + art + claims + insurance + otherAssets;
    other.growthRate = GROWTH_RATE.other;
  };

  /**
   * Updates the assets array with the new values
   */
  useEffect(() => {
    updateOtherAssets();
  }, [collectibles, art, claims, insurance, otherAssets]);

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const collectiblesChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setCollectibles(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const artChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setArt(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const claimsChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setClaims(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const insuranceChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setInsurance(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const otherAssetsChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setOtherAssets(value === "" ? 0 : parseFloat(value));
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="form-group">
        <h3 className="text-sm font-bold mt-2">{t("other_assets")}</h3>
          <label className="form-label">{t("art")}</label>
          <div className="form-control relative w-full">
            {valid ? (
              <input
                value={art}
                type="number"
                className="input input-lg max-w-full pl-10"
                disabled={true}
              />
            ) : (
              <input
                value={art === 0 ? "" : art}
                type="number"
                placeholder="0"
                className="input input-lg max-w-full pl-10"
                onChange={artChangeHandler}
              />
            )}
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
          </div>
          <label className="form-label">{t("collectibles")}</label>
          <div className="form-control relative w-full">
            {valid ? (
              <input
                value={collectibles}
                type="number"
                className="input input-lg max-w-full pl-10"
                disabled={true}
              />
            ) : (
              <input
                value={collectibles === 0 ? "" : collectibles}
                type="number"
                placeholder="0"
                className="input input-lg max-w-full pl-10"
                onChange={collectiblesChangeHandler}
              />
            )}
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
          </div>
          <label className="form-label">{t("claims")}</label>
          <div className="form-control relative w-full">
            {valid ? (
              <input
                value={claims}
                type="number"
                className="input input-lg max-w-full pl-10"
                disabled={true}
              />
            ) : (
              <input
                value={claims === 0 ? "" : claims}
                type="number"
                placeholder="0"
                className="input input-lg max-w-full pl-10"
                onChange={claimsChangeHandler}
              />
            )}
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
          </div>
          <label className="form-label">{t("insurance")}</label>
          <div className="form-control relative w-full">
            {valid ? (
              <input
                value={insurance}
                type="number"
                className="input input-lg max-w-full pl-10"
                disabled={true}
              />
            ) : (
              <input
                value={insurance === 0 ? "" : insurance}
                type="number"
                placeholder="0"
                className="input input-lg max-w-full pl-10"
                onChange={insuranceChangeHandler}
              />
            )}
            <span className="absolute inset-y-0 left-3 inline-flex items-center">
              <h5 className="text-lg font-bold">{currentCurrency}</h5>
            </span>
          </div>
          <label className="form-label">{t("other_assets")}</label>
          <div className="form-control relative w-full">
            {valid ? (
              <input
                value={otherAssets}
                type="number"
                className="input input-lg max-w-full pl-10"
                disabled={true}
              />
            ) : (
              <input
                value={otherAssets === 0 ? "" : otherAssets}
                type="number"
                placeholder="0"
                className="input input-lg max-w-full pl-10"
                onChange={otherAssetsChangeHandler}
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
export default OtherAssetsInput;
