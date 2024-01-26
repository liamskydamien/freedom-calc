import "./RiskAssementStyles.css";
import React, { useContext, useEffect, useState } from "react";
import StockPickerAssesment from "./StockPicker/StockPickerAssesment";
import { SelectedStocksContext } from "../../context/SelectedStocksContext";
import StockPicker from "./StockPicker/StockPicker";

type RiskAssesmentProps = {
  t: any;
  closeModal: (risk: number) => void;
};

const RiskAssesment: React.FC<RiskAssesmentProps> = ({ t, closeModal }) => {
  const [group1, setGroup1] = useState(0);
  const [group2, setGroup2] = useState(0);
  const [group3, setGroup3] = useState(0);
  const [group4, setGroup4] = useState(0);
  const [group5, setGroup5] = useState(0);
  const [valid, setValid] = useState(false);

  const { selectedStocks } = useContext(SelectedStocksContext);

  useEffect(() => {
    if (
      group1 !== 0 &&
      group2 !== 0 &&
      group3 !== 0 &&
      group4 !== 0 &&
      group5 !== 0 &&
      selectedStocks.length >= 10
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [group1, group2, group3, group4, group5, selectedStocks]);

  /**
   * Value of group 1 answers
   * @param e input event
   */
  const handleGroup1 = (e: any) => {
    setGroup1(parseInt(e.target.value));
  };

  /**
   * Value of group 2 answers
   * @param e input event
   */
  const handleGroup2 = (e: any) => {
    setGroup2(parseInt(e.target.value));
  };

  /**
   * Value of group 3 answers
   * @param e input event
   */
  const handleGroup3 = (e: any) => {
    setGroup3(parseInt(e.target.value));
  };

  /**
   * Value of group 4 answers
   * @param e input event
   */
  const handleGroup4 = (e: any) => {
    setGroup4(parseInt(e.target.value));
  };

  /**
   * Value of group 5 answers
   * @param e input event
   */
  const handleGroup5 = (e: any) => {
    setGroup5(parseInt(e.target.value));
  };

  /**
   * Handles the submition of the form
   */
  const handleSubmit = () => {
    const risk = group1 + group2 + group3 + group4 + group5;
    closeModal(risk);
  };

  return (
    <div>
      <div className="assementModal">
        <h1 className="text-2xl font-bold mt-2 mb-4">
          {t("how_risk_affine_are_you")}
        </h1>
        <div className="flex gap-3 flex-col">
          <div className="ml-4 mr-4">
            <h2 className="text-lg mb-1">
              {t("how_would_you_describe_your_investment_experience")}
            </h2>
            <div
              id="group1"
              className="flex flex-col gap-3 justify-center align-text-top"
              onChange={handleGroup1}
            >
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={1}
                  className="radio radio-lg"
                  name="group1"
                />
                <label className="label">
                  <span className="label-text">{t("no_experience")}</span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={2}
                  className="radio radio-lg"
                  name="group1"
                />
                <label className="label">
                  <span className="label-text">{t("some_experience")}</span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={3}
                  className="radio radio-lg"
                  name="group1"
                />
                <label className="label">
                  <span className="label-text">{t("experienced")}</span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={4}
                  className="radio radio-lg"
                  name="group1"
                />
                <label className="label">
                  <span className="label-text">{t("highly_experienced")}</span>
                </label>
              </div>
            </div>
          </div>
          <div className="ml-4 mr-4">
            <h2 className="text-lg mb-1">
              {t("how_do_you_react_when_your_investments_decrease_in_value")}
            </h2>
            <div
              id="group2"
              className="flex flex-col gap-3 justify-center align-text-top"
              onChange={handleGroup2}
            >
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={1}
                  className="radio radio-lg"
                  name="group2"
                />
                <label className="label">
                  <span className="label-text">{t("become_anxious_sell")}</span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={2}
                  className="radio radio-lg"
                  name="group2"
                />
                <label className="label">
                  <span className="label-text">{t("concerned_wait")}</span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={3}
                  className="radio radio-lg"
                  name="group2"
                />
                <label className="label">
                  <span className="label-text">
                    {t("hold_onto_my_investments")}
                  </span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={4}
                  className="radio radio-lg"
                  name="group2"
                />
                <label className="label">
                  <span className="label-text">{t("buy_more")}</span>
                </label>
              </div>
            </div>
            <h2 className="text-lg mb-1">
              {t("what_is_your_primary_goal_for_investing")}
            </h2>
            <div
              id="group3"
              className="flex flex-col gap-3 justify-center align-text-top"
              onChange={handleGroup3}
            >
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={1}
                  className="radio radio-lg"
                  name="group3"
                />
                <label className="label">
                  <span className="label-text">{t("preserving_capital")}</span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={2}
                  className="radio radio-lg"
                  name="group3"
                />
                <label className="label">
                  <span className="label-text">
                    {t("balance_between_growth_preservance")}
                  </span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={3}
                  className="radio radio-lg"
                  name="group3"
                />
                <label className="label">
                  <span className="label-text">
                    {t("growth_but_no_large_losses")}
                  </span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={4}
                  className="radio radio-lg"
                  name="group3"
                />
                <label className="label">
                  <span className="label-text">{t("maximize_growth")}</span>
                </label>
              </div>
            </div>
            <h2 className="text-lg">
              {t("how_long_is_your_investment_horizon")}
            </h2>
            <div
              id="group4"
              className="flex flex-col gap-3 justify-center align-text-top"
              onChange={handleGroup4}
            >
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={1}
                  className="radio radio-lg"
                  name="group4"
                />
                <label className="label">
                  <span className="label-text">{t("less_than_2_years")}</span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={2}
                  className="radio radio-lg"
                  name="group4"
                />
                <label className="label">
                  <span className="label-text">
                    {t("between_2_and_5_years")}
                  </span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={3}
                  className="radio radio-lg"
                  name="group4"
                />
                <label className="label">
                  <span className="label-text">
                    {t("between_5_and_10_years")}
                  </span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={4}
                  className="radio radio-lg"
                  name="group4"
                />
                <label className="label">
                  <span className="label-text">{t("more_than_10_years")}</span>
                </label>
              </div>
            </div>
            <h2 className="text-lg mb-1">
              {t("suddendrop_in_a_short_period")}
            </h2>
            <div
              id="group5"
              className="flex flex-col gap-3 justify-center align-text-top"
              onChange={handleGroup5}
            >
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={1}
                  className="radio radio-lg"
                  name="group5"
                />
                <label className="label">
                  <span className="label-text">{t("sell_immidialty")}</span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={2}
                  className="radio radio-lg"
                  name="group5"
                />
                <label className="label">
                  <span className="label-text">{t("wait_and_sell")}</span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={3}
                  className="radio radio-lg"
                  name="group5"
                />
                <label className="label">
                  <span className="label-text">{t("keep_it")}</span>
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="radio"
                  value={4}
                  className="radio radio-lg"
                  name="group5"
                />
                <label className="label">
                  <span className="label-text">{t("buy_more")}</span>
                </label>
              </div>
            </div>
          </div>
          <StockPicker />
          {valid ? (
            <button
              className="btn btn-primary mt-2 mb-3 ml-2 mr-2"
              onClick={handleSubmit}
            >
              {t("save")}
            </button>
          ) : (
            <button className="btn btn-primary mt-2 mb-3 ml-2 mr-2" disabled>
              {t("save")}
            </button>
          )}
        </div>
      </div>
      <div className="darkBG"></div>
    </div>
  );
};
export default RiskAssesment;
