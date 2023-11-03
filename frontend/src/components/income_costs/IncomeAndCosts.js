import {LifePhase} from "../../models/LifePhase";
import NewLifePhaseModal from "./modal/NewLifePhaseModal";
import {useState} from "react";

const IncomeAndCosts = ({t, lifephase}) => {

    const {phases, setPhases} = lifephase;

    const [startAge, setStartAge] = useState(0);

    const addPhase = (name, endAge, income, expenses) => {
        const newPhase = new LifePhase(name, startAge, endAge, income, expenses);
        setPhases([...phases, newPhase]);
        setStartAge(parseInt(endAge) + 1);
    }

    return (
        <div className="flex-col card p-5 max-w-full">
            <div className="flex flex-row justify-between">
                <h1 className="text-xl font-bold">{t('starting_capital')}</h1>
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
                                           className="tab tab-pill">
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
