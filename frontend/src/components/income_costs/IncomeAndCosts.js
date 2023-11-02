import {useState} from "react";

const IncomeAndCosts = ({t}) => {

    const [phases, setPhases] = useState([])

    return (
        <div className="flex-col card p-5 max-w-full">
            <div className="flex flex-row justify-between">
                <h1 className="text-xl font-bold">{t('starting_capital')}</h1>
                <button className="btn btn-primary">Add new Phase</button>
            </div>
            <div className="tabs gap-1">
                <input type="radio" id="tab-10" name="tab-4" className="tab-toggle" checked />
                <label htmlFor="tab-10" className="tab tab-pill">Tab 1</label>
            </div>
        </div>
    )
}

export default IncomeAndCosts;
