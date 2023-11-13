import { useTranslation } from "react-i18next";
import StartingCapitalInput from "../components/starting_capital/StartingCapitalInput";
import StartingCapitalDisplay from "../components/starting_capital/StartingCapitalDisplay";

const StartingCapital = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row gap-2">
      <StartingCapitalInput t={t} />
      <StartingCapitalDisplay t={t} />
    </div>
  );
};

export default StartingCapital;
