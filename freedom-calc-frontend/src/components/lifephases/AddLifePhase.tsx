import {LifePhase} from "../../models/lifephases/LifePhase";
import React, {useContext, useState} from "react";
import {SelectedLifePhaseContext} from "../../context/SelectedLifePhaseContext";
import {Income} from "../../models/lifephases/Income";
import {Expenses} from "../../models/lifephases/Expenses";
import {LifePhaseContextType} from "../../models/types/LifePhaseContextTypes";
import NewLifePhaseModal from "./modal/NewLifePhaseModal";
import {Phases} from "../../models/lifephases/Phases";

type LifePhaseWrapper = {
    phases: Phases,
    setPhases: (phases: Phases) => void
}

type AddLifePhaseProps = {
    t: any,
    lifephase: LifePhaseWrapper,
    expectedAge: number,
    age: number
}

const AddLifePhase : React.FC<AddLifePhaseProps>= ({t, lifephase, expectedAge, age}) => {

    const {phases, setPhases} = lifephase;

    const selectedLifePhaseContext : LifePhaseContextType  = useContext(SelectedLifePhaseContext);
    const setSelectedLifePhase : (phase: LifePhase) => void = selectedLifePhaseContext.setSelectedLifePhase;

    const [startAge, setStartAge] = useState(age);

    const addPhase = (name : string, endAge : any, income : Income, expenses : Expenses) => {
        const newPhase  = new LifePhase(name,
            startAge,
            endAge,
            income,
            expenses);
        setPhases(new Phases([...phases.phase, newPhase]));
        setStartAge(parseInt(endAge) + 1);
        setSelectedLifePhase(newPhase);
    }

    /**
     * Selects a phase and sets it as the selected phase
     * @param phase the phase to be selected
     */
    const selectPhaseHandler = (phase : LifePhase) => {
        setSelectedLifePhase(phase);
    }

    return (
        <div className="flex-col card p-5 max-w-full">
        <div className="flex flex-row justify-between">
        <h1 className="text-xl font-bold">{t('life_phases')}</h1>
    </div>
    <div className="tabs gap-1">
        {
            phases.phase.length > 0 &&
                phases.phase.map((phase : LifePhase) => {
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
                        onClick={() => selectPhaseHandler(phase)}>
                    {phase.name}
                    </label>
                    </div>
                )
                })
        }
        </div>
        <NewLifePhaseModal addPhase={addPhase}
                            startAge={startAge}
                            t={t}
                            expectedAge={expectedAge}
        />
    </div>
)
}

export default AddLifePhase;
