import AddLifePhase from "../components/lifephases/AddLifePhase";
import {useTranslation} from "react-i18next";
import {InputContext} from "../context/InputContext";
import {useContext} from "react";
import {SelectedLifePhaseContext, SelectedLifePhaseContextProvider} from "../context/SelectedLifePhaseContext";
import ShowSelectedLifePhase from "../components/lifephases/ShowSelectedLifePhase";

const LifePhases = () => {
    const {t} = useTranslation();
    const {phases, setPhases, personalInformation} = useContext(InputContext);

    return (
        <div>
            <h1>Life Phases</h1>
            <SelectedLifePhaseContextProvider>
                <div className="flex flex-col max-w-fit gap-2">
                    <AddLifePhase t={t}
                              lifephase={{phases, setPhases}}
                              expectedAge={personalInformation.expectedAge}
                              age={personalInformation.getAge()}/>
                    <ShowSelectedLifePhase t={t}/>
                </div>
            </SelectedLifePhaseContextProvider>
        </div>
    )
}
export default LifePhases;
