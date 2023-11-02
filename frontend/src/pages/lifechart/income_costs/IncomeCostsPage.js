import IncomeAndCosts from "../../../components/income_costs/IncomeAndCosts";
import {useTranslation} from "react-i18next";

const IncomeCostsPage = () => {

    const {t} = useTranslation();

    return (
        <div>
            <IncomeAndCosts t={t} />
        </div>
    );
}

export default IncomeCostsPage;
