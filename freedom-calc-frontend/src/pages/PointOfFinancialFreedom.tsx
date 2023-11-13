import PoF from "../components/pof/PoF";
import { useTranslation } from "react-i18next";

const PointOfFinancialFreedom = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PoF t={t} />
    </div>
  );
};

export default PointOfFinancialFreedom;
