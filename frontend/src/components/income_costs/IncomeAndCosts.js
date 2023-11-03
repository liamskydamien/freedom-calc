import {LifePhase} from "../../models/LifePhase";
import NewLifePhaseModal from "./modal/NewLifePhaseModal";

const IncomeAndCosts = ({t, lifephase}) => {

    const {phase, setPhase} = lifephase;

    const addPhase = (name, endAge, income, expenses) => {
        const startAge = phase.length === 0 ? 0 : phase[phase.length - 1].toAge
        const newPhase = new LifePhase(name, startAge, endAge, income, expenses);
        setPhase(...phase, newPhase);
    }

    return (
        <div className="flex-col card p-5 max-w-full">
            <div className="flex flex-row justify-between">
                <h1 className="text-xl font-bold">{t('starting_capital')}</h1>
            </div>
            <div className="tabs gap-1">
                <input type="radio" id="tab-10" name="tab-4" className="tab-toggle" checked />
                <label htmlFor="tab-10" className="tab tab-pill">Tab 1</label>
            </div>
            <NewLifePhaseModal addPhase={addPhase} startAge={0} t={t}/>
        </div>
    )
}

export default IncomeAndCosts;
