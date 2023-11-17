import { AssetGroup } from "../../../models/startingcapital/AssetGroup";
import { LiabilitiesState } from "../../../models/types/AssetContextTypes";
import { useEffect } from "react";

type LiabilitiesInputProps = {
  t: any;
  liabilities: AssetGroup;
  liabilitiesValid: boolean;
  liabilitiesState: LiabilitiesState;
};

const LiabilitiesInput: React.FC<LiabilitiesInputProps> = ({
  liabilitiesValid,
  liabilitiesState,
  liabilities,
  t,
}) => {
  const {
    objectRelatedLiabilities,
    setNonObjectRelatedLiabilities,
    nonObjectRelatedLiabilities,
    setOtherLiabilities,
    setObjectRelatedLiabilities,
    setProvisions,
    provisions,
    otherLiabilities,
  } = liabilitiesState;

  /**
   * Updates the liabilities array with the new values
   */
  const updateLiabilities = () => {
    liabilities.startingValue =
      objectRelatedLiabilities +
      nonObjectRelatedLiabilities +
      otherLiabilities +
      provisions;
  };

  /**
   * Updates the liabilities array with the new values
   */
  useEffect(() => {
    updateLiabilities();
  }, [
    otherLiabilities,
    objectRelatedLiabilities,
    nonObjectRelatedLiabilities,
    provisions,
  ]);

  const objectRelatedLiabilitiesChangeHandler = (event: {
    target: { value: any };
  }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setObjectRelatedLiabilities(value === "" ? 0 : parseFloat(value));
    }
  };

  const nonObjectRelatedLiabilitiesChangeHandler = (event: {
    target: { value: any };
  }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setNonObjectRelatedLiabilities(value === "" ? 0 : parseFloat(value));
    }
  };

  const otherLiabilitiesChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setOtherLiabilities(value === "" ? 0 : parseFloat(value));
    }
  };

  const provisionsChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setProvisions(value === "" ? 0 : parseFloat(value));
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="form-group">
        <h3 className="text-sm font-bold mt-2">{t("liabilities")}</h3>
        <div>
          <div className="form-field">
            <label className="form-label">
              {t("object_related_liabilities")}
            </label>
            {liabilitiesValid ? (
              <input
                value={objectRelatedLiabilities}
                type="number"
                className="input max-w-full"
                disabled={true}
              />
            ) : (
              <input
                value={objectRelatedLiabilities === 0 ? "" : objectRelatedLiabilities}
                type="number"
                placeholder="0"
                className="input max-w-full"
                onChange={objectRelatedLiabilitiesChangeHandler}
              />
            )}
          </div>
          <div className="form-field">
            <label className="form-label">
              {t("non_object_related_liabilities")}
            </label>
            {liabilitiesValid ? (
              <input
                value={nonObjectRelatedLiabilities === 0 ? "" : nonObjectRelatedLiabilities}
                type="number"
                placeholder="0"
                className="input max-w-full"
                disabled={true}
              />
            ) : (
              <input
                value={nonObjectRelatedLiabilities === 0 ? "" : nonObjectRelatedLiabilities}
                type="number"
                placeholder="0"
                className="input max-w-full"
                onChange={nonObjectRelatedLiabilitiesChangeHandler}
              />
            )}
          </div>
          <div className="form-field">
            <label className="form-label">{t("other_liabilities")}</label>
            {liabilitiesValid ? (
              <input
                value={otherLiabilities}
                type="number"
                className="input max-w-full"
                disabled={true}
              />
            ) : (
              <input
                value={otherLiabilities === 0 ? "" : otherLiabilities}
                type="number"
                placeholder="0"
                className="input max-w-full"
                onChange={otherLiabilitiesChangeHandler}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiabilitiesInput;
