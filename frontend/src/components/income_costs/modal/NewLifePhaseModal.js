import AddIncome from "./AddIncome";
import {useState} from "react";
import AddNameAndAge from "./AddNameAndAge";

const NewLifePhaseModal = ({ addPhase, startAge , t}) => {

    const [income, setIncome] = useState(0.0);
    const [costs, setCosts] = useState(0.0);
    const [name, setName] = useState("");
    const [endAge, setEndAge] = useState(0);
    const [status, setStatus] = useState("name");

    const clear = () => {
        setName("");
        setEndAge(0);
        setStatus("name");
        setIncome(0.0);
        setCosts(0.0);
    }

    return (
        <div>
            <label className="btn btn-primary" htmlFor="modal-1">{t('new_life_phase')}</label>
            <input className="modal-state" id="modal-1" type="checkbox"  onChange={() => {console.log("changed")}}/>
            <div className="modal">
                <label className="modal-overlay" htmlFor="modal-1"></label>
                <div className="modal-content flex flex-col gap-5 max-w-full">
                    <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h2 className="text-xl">Add a new Life Phase</h2>
                    {
                        status === "name" ?
                            <AddNameAndAge t={t}
                                           name={name}
                                           setName={setName}
                                           endAge={endAge}
                                           setEndAge={setEndAge}
                                           setStatus={setStatus}
                                           clear={clear}
                                           startAge={startAge} />
                            :
                        status === "income" ?
                            <AddIncome t={t} setIncome={setIncome}/>
                            :
                        status === "costs" ?
                            <h2>Costs</h2>
                            :
                            <h2>Not implemented</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default NewLifePhaseModal;
