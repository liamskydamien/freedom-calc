import IncomeAndCosts from "../../../components/income_costs/IncomeAndCosts";
import {useTranslation} from "react-i18next";
import {useContext, useEffect, useState} from "react";
import InputContext from "../../../context/userinputs/InputContext";
import {SelectedLifePhaseContextProvider} from "../../../context/lifephase/SelectedLifePhaseContext";
import SelectLifePhase from "../../../components/income_costs/SelectLifePhase";
import {useNavigate} from "react-router-dom";
import NavigationContext from "../../../context/navigationContext/NavigationContext";

const IncomeCostsPage = () => {

    const {t} = useTranslation();
    const {lifephase, expectedAge} = useContext(InputContext);
    const activePage = "/income_costs";
    const {setActive, allowAccess, setIncomeCosts} = useContext(NavigationContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (allowAccess(activePage)) {
            setActive(activePage);
            setLoading(false);
        }
        else {
            navigate('/starting_capital');
        }
    }, [allowAccess, activePage]);

    useEffect(() => {
        if (lifephase.phases.length !== 0) {
            const {phases} = lifephase;
            const lifePhase = phases[phases.length - 1];
            const {toAge} = lifePhase;
            if (toAge === expectedAge) {
                setIncomeCosts(true);
            }
            else {
                setIncomeCosts(false);
            }
        }
        else {
            setIncomeCosts(false);
        }
    }, [lifephase, expectedAge, setIncomeCosts]);

    return (
        <div>
            {
                loading ? <div className="spinner-simple"></div>
                    :
                    <div>
                        <SelectedLifePhaseContextProvider>
                            <div className="flex flex-col gap-4 max-w-fit">
                                <IncomeAndCosts t={t} lifephase={lifephase}/>
                                <SelectLifePhase t={t} lifephase={lifephase}/>
                            </div>
                        </SelectedLifePhaseContextProvider>
                    </div>
            }
        </div>
    );
}

export default IncomeCostsPage;
