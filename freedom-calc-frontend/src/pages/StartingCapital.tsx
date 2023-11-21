import { useTranslation } from "react-i18next";
import StartingCapitalInput from "../components/starting_capital/StartingCapitalInput";
import StartingCapitalDisplay from "../components/starting_capital/StartingCapitalDisplay";
import { getCurrencySymbol } from "../calculations/utility/getCurrencySymbol";
import { InputContext } from "../context/InputContext";
import { useContext } from "react";

const StartingCapital = () => {
  const { t } = useTranslation();
  const { personalInformation } = useContext(InputContext);
  const currentCurrency = getCurrencySymbol(personalInformation.currency);

  return (
    <div className="flex flex-row gap-2">
      <StartingCapitalInput t={t} currentCurrency={currentCurrency} />
      <StartingCapitalDisplay t={t} currentCurrency={currentCurrency} />
    </div>
  );
};

export default StartingCapital;
