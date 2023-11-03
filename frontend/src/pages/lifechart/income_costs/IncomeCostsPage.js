import IncomeAndCosts from "../../../components/income_costs/IncomeAndCosts";
import {useTranslation} from "react-i18next";
import {useContext} from "react";
import InputContext from "../../../context/userinputs/InputContext";
import {SelectedLifePhaseContextProvider} from "../../../context/lifephase/SelectedLifePhaseContext";
import SelectLifePhase from "../../../components/income_costs/SelectLifePhase";

const IncomeCostsPage = () => {

    const {t} = useTranslation();
    const {lifephase} = useContext(InputContext);

    return (
        <div>
            <SelectedLifePhaseContextProvider>
                <IncomeAndCosts t={t} lifephase={lifephase}/>
                <SelectLifePhase t={t} lifephase={lifephase}/>
            </SelectedLifePhaseContextProvider>
        </div>
    );
}

export default IncomeCostsPage;
