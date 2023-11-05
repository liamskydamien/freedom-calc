import StartingCapitalInput from "../../../components/starting_capital/StartingCapitalInput";
import BalanceSheet from "../../../components/starting_capital/balance/BalanceSheet";
import {useTranslation} from "react-i18next";
import NavigationContext from "../../../context/navigationContext/NavigationContext";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const StartingCapitalPage = () => {

    const {t} = useTranslation();
    const activePage = "/starting_capital";
    const {setActive, allowAccess} = useContext(NavigationContext);
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

    return (
    <div className="flex">
        {
            loading ? <div className="spinner-simple"></div>
            :
            <div>
                <StartingCapitalInput />
                <BalanceSheet />
            </div>
        }
    </div>
  )
}

export default StartingCapitalPage
