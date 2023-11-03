import {LifePhase} from "../../models/LifePhase";
import NewLifePhaseModal from "./modal/NewLifePhaseModal";
import {useContext, useState} from "react";
import SelectedLifePhaseContext from "../../context/lifephase/SelectedLifePhaseContext";

const IncomeAndCosts = ({t, lifephase}) => {

    const {phases, setPhases} = lifephase;

    const {setSelectedLifePhase} = useContext(SelectedLifePhaseContext);

    const [startAge, setStartAge] = useState(0);

    const addPhase = (name, endAge, income, expenses) => {
        const newPhase = new LifePhase(name, startAge, endAge, income, expenses);
        setPhases([...phases, newPhase]);
        setStartAge(parseInt(endAge) + 1);
        setSelectedLifePhase(newPhase);
    }

    const selectPhaseHandler = (phase) => {
        setSelectedLifePhase(phase);
    }

    return (
        <div className="flex-col card p-5 max-w-full">
            <div className="flex flex-row justify-between">
                <h1 className="text-xl font-bold">{t('life_phases')}</h1>
            </div>
            <div className="tabs gap-1">
                {
                    phases.length > 0 &&
                    phases.map((phase) => {
                       return( <div>
                                    <input type="radio"
                                           id={`tab-${phase.name}`}
                                           name="tab-4"
                                           className="tab-toggle"
                                           checked
                                           readOnly
                                           key={`tab-${phase.name}-${phase.toAge}`}/>
                                    <label htmlFor={`tab-${phase.name}`}
                                           className="tab tab-pill"
                                           onClick={() => {selectPhaseHandler(phase)}}>
                                        {phase.name}
                                    </label>
                        </div>
                       )
                    })
                }
            </div>
            <NewLifePhaseModal addPhase={addPhase} startAge={startAge} t={t}/>
        </div>
    )
}

export default IncomeAndCosts;
