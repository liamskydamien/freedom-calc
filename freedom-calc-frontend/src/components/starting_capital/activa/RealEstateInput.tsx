import { AssetGroup } from "../../../models/startingcapital/AssetGroup";
import { useEffect } from "react";
import { RealEstateState } from "../../../models/types/AssetContextTypes";

type RealEstateInput = {
  t: any;
  realestate: AssetGroup;
  valid: boolean;
  realEstateStates: RealEstateState;
};

const RealEstateInput: React.FC<RealEstateInput> = ({
  realEstateStates,
  t,
  realestate,
  valid,
}) => {
  const {
    occupiedProperties,
    rentedProperties,
    commercialProperties,
    forest,
    agriculturalLand,
    realEstateFunds,
    otherRealEstate,
    setOccupiedProperties,
    setRentedProperties,
    setCommercialProperties,
    setForest,
    setAgriculturalLand,
    setRealEstateFunds,
    setOtherRealEstate,
  } = realEstateStates;

  /**
   * Updates the assets array with the new values
   */
  const updateRealEstate = () => {
    realestate.startingValue =
      occupiedProperties +
      rentedProperties +
      commercialProperties +
      forest +
      agriculturalLand +
      realEstateFunds +
      otherRealEstate;
  };

  /**
   * Updates the assets array with the new values
   */
  useEffect(() => {
    updateRealEstate();
  }, [
    occupiedProperties,
    rentedProperties,
    commercialProperties,
    forest,
    agriculturalLand,
    realEstateFunds,
    otherRealEstate,
  ]);

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const occupiedPropertiesChangeHandler = (event: {
    target: { value: any };
  }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setOccupiedProperties(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const rentedPropertiesChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setRentedProperties(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const commercialPropertiesChangeHandler = (event: {
    target: { value: any };
  }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setCommercialProperties(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const forestChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setForest(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const agriculturalLandChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setAgriculturalLand(value === "" ? 0 : parseFloat(value));
    }
  };

  /**
   * Updates the assets array with the new values
   * @param event
   */
  const realEstateFundsChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setRealEstateFunds(value === "" ? 0 : parseFloat(value));
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
      setOtherRealEstate(value === "" ? 0 : parseFloat(value));
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="form-group">
        <h3 className="text-sm font-bold mt-2">{t("realestate")}</h3>
        <div>
          <div className="form-field">
            <label className="form-label">{t("occupied_properties")}</label>
            {valid ? (
              <input
                value={occupiedProperties}
                type="number"
                className="input max-w-full"
                disabled={true}
              />
            ) : (
              <input
                value={occupiedProperties}
                type="number"
                className="input max-w-full"
                onChange={occupiedPropertiesChangeHandler}
              />
            )}
          </div>
          <div className="form-field">
            <label className="form-label">{t("rented_properties")}</label>
            {valid ? (
              <input
                value={rentedProperties}
                type="number"
                className="input max-w-full"
                disabled={true}
              />
            ) : (
              <input
                value={rentedProperties}
                type="number"
                className="input max-w-full"
                onChange={rentedPropertiesChangeHandler}
              />
            )}
          </div>
          <div className="form-field">
            <label className="form-label">{t("commercial_properties")}</label>
            {valid ? (
              <input
                value={commercialProperties}
                type="number"
                className="input max-w-full"
                disabled={true}
              />
            ) : (
              <input
                value={commercialProperties}
                type="number"
                className="input max-w-full"
                onChange={commercialPropertiesChangeHandler}
              />
            )}
          </div>
          <h3 className="text-sm font-bold mt-2">
            {t("agricultural_land_forest")}
          </h3>
          <div className="form-field">
            <label className="form-label">{t("forest")}</label>
            {valid ? (
              <input
                value={forest}
                type="number"
                className="input max-w-full"
                disabled={true}
              />
            ) : (
              <input
                value={forest}
                type="number"
                className="input max-w-full"
                onChange={forestChangeHandler}
              />
            )}
          </div>
          <div className="form-field">
            <label className="form-label">{t("agricultural_land")}</label>
            {valid ? (
              <input
                value={agriculturalLand}
                type="number"
                className="input max-w-full"
                disabled={true}
              />
            ) : (
              <input
                value={agriculturalLand}
                type="number"
                className="input max-w-full"
                onChange={agriculturalLandChangeHandler}
              />
            )}
          </div>
          <h3 className="text-sm font-bold mt-2">{t("funds")}</h3>
          <div className="form-field">
            <label className="form-label">{t("real_estate_funds")}</label>
            {valid ? (
              <input
                value={realEstateFunds}
                type="number"
                className="input max-w-full"
                disabled={true}
              />
            ) : (
              <input
                value={realEstateFunds}
                type="number"
                className="input max-w-full"
                onChange={realEstateFundsChangeHandler}
              />
            )}
          </div>
          <h3 className="text-sm font-bold mt-2">{t("other")}</h3>
          <div className="form-field">
            <label className="form-label">{t("other")}</label>
            {valid ? (
              <input
                value={otherRealEstate}
                type="number"
                className="input max-w-full"
                disabled={true}
              />
            ) : (
              <input
                value={otherRealEstate}
                type="number"
                className="input max-w-full"
                onChange={otherChangeHandler}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RealEstateInput;
