import AddLifePhase from "../components/lifephases/AddLifePhase";
import {useTranslation} from "react-i18next";
import {InputContext} from "../context/InputContext";
import {useContext} from "react";

const LifePhases = () => {
    const {t} = useTranslation();
    const {phases, setPhases, personalInformation} = useContext(InputContext);

    return (
        <div>
            <h1>Life Phases</h1>
            <AddLifePhase t={t}
                          lifephase={{phases, setPhases}}
                          expectedAge={personalInformation.expectedAge}
                          age={personalInformation.getAge()}/>
        </div>
    )
}
export default LifePhases;
