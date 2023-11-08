import {useTranslation} from "react-i18next";
import StartingCapitalInput from "../components/starting_capital/StartingCapitalInput";

const StartingCapital = () => {

    const {t} = useTranslation();

    return (
        <div>
            <StartingCapitalInput t={t} />
        </div>
    );
}

export default StartingCapital;
