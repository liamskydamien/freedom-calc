import AddIncome from "./AddIncome";
import {useState} from "react";
import AddNameAndAge from "./AddNameAndAge";
import AddExpense from "./AddExpense";

const NewLifePhaseModal = ({ addPhase, startAge , t}) => {

    const [income, setIncome] = useState(0.0);
    const [expense, setExpense] = useState(0.0);
    const [name, setName] = useState("");
    const [endAge, setEndAge] = useState(0.0);
    const [status, setStatus] = useState("name");

    const clear = () => {
        setName("");
        setEndAge(0.0);
        setStatus("name");
        setIncome(0.0);
        setExpense(0.0);
    }

    const addPhaseHandler = () => {
        addPhase(name, endAge, income, expense);
        clear();
    }

    return (
        <div className="flex justify-center">
            <label className="btn btn-primary" htmlFor="modal-3">{t('new_life_phase')}</label>
            <input className="modal-state" id="modal-3" type="checkbox"  onChange={() => {clear()}}/>
            <div className="modal">
                <label className="modal-overlay" htmlFor="modal-3"></label>
                <div className="modal-content flex flex-col gap-5 max-w-full">
                    <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
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
                            <AddIncome t={t}
                                       setIncome={setIncome}
                                       setStatus={setStatus}
                            />
                            :
                        status === "expense" ?
                            <AddExpense t={t}
                                        setStatus={setStatus}
                                        setExpense={setExpense}/>
                            :
                        status === "summary" &&
                            <div>
                                <h3 className="text-sm font-bold pb-0">{t('summary')}</h3>
                                <div className="flex flex-col gap-1.5 mb-3">
                                <div className="flex justify-between">
                                    <div className="flex mt-auto mb-auto">
                                        <p className="mb-0">{t('name_of_phase')}</p>
                                    </div>
                                    <input value={name}
                                           type="text"
                                           className="input max-w-fit"
                                           readOnly
                                           disabled
                                           />
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex mt-auto mb-auto">
                                        <p className="mb-0">{t('start_of_phase')}</p>
                                    </div>
                                    <input value={startAge}
                                           type="number"
                                           className="input max-w-fit"
                                           readOnly
                                           disabled
                                    />
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex mt-auto mb-auto">
                                        <p className="mb-0">{t('end_of_phase')}</p>
                                    </div>
                                    <input value={endAge}
                                           type="number"
                                           className="input max-w-fit"
                                           readOnly
                                           disabled
                                    />
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex mt-auto mb-auto">
                                        <p className="mb-0">{t('income')}</p>
                                    </div>
                                    <input value={income}
                                           type="number"
                                           className="input max-w-fit"
                                           readOnly
                                           disabled
                                    />
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex mt-auto mb-auto">
                                        <p className="mb-0">{t('expenses')}</p>
                                    </div>
                                    <input value={expense}
                                           type="number"
                                           className="input max-w-fit"
                                           readOnly
                                           disabled
                                    />
                                </div>
                                </div>
                                <div className="flex gap-4">
                                    <label className="btn btn-primary btn-block" htmlFor="modal-3" onClick={addPhaseHandler}>{t('save')}</label>
                                    <label className="btn btn-block" htmlFor="modal-3" onClick={clear}>{t('cancel')}</label>
                                </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default NewLifePhaseModal;
