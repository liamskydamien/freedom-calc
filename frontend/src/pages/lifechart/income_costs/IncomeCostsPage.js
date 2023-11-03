import IncomeAndCosts from "../../../components/income_costs/IncomeAndCosts";
import {useTranslation} from "react-i18next";
import {useContext} from "react";
import InputContext from "../../../context/userinputs/InputContext";

const IncomeCostsPage = () => {

    const {t} = useTranslation();
    const {lifephase} = useContext(InputContext);

    return (
        <div>
            <IncomeAndCosts t={t} lifephase={lifephase}/>
        </div>
    );
}

export default IncomeCostsPage;
