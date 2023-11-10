import React, {useState} from "react";
import AddNameAndAge from "./AddNameAndAge";
import AddIncome from "./AddIncome";
import AddExpense from "./AddExpense";
import {Expenses} from "../../../models/lifephases/Expenses";
import {Income} from "../../../models/lifephases/Income";

type NewLifePhaseModalProps = {
    addPhase: (name: string, endAge: number, income: Income, expense: Expenses) => void;
    startAge: number;
    t: any;
    expectedAge: number;
    valid: boolean;
}
const NewLifePhaseModal : React.FC<NewLifePhaseModalProps> = ({valid, addPhase, startAge , t, expectedAge}) => {

    const [income, setIncome] = useState(new Income(0.0, 0.0, 0.0, 0.0, 0.0, 0.0));
    const [expense, setExpense] = useState(new Expenses(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0));
    const [name, setName] = useState("");
    const [endAge, setEndAge] = useState(expectedAge);
    const [status, setStatus] = useState("name");

    const clear = () => {
        setName("");
        setEndAge(expectedAge);
        setStatus("name");
        setIncome(new Income(0.0, 0.0, 0.0, 0.0, 0.0, 0.0));
        setExpense(new Expenses(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0));
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
                        valid ?
                            <div className="alert alert-warning">
                                <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.94024 35.0004H35.0602C38.1402 35.0004 40.0602 31.6604 38.5202 29.0004L23.4602 2.98035C21.9202 0.320352 18.0802 0.320352 16.5402 2.98035L1.48024 29.0004C-0.0597576 31.6604 1.86024 35.0004 4.94024 35.0004ZM20.0002 21.0004C18.9002 21.0004 18.0002 20.1004 18.0002 19.0004V15.0004C18.0002 13.9004 18.9002 13.0004 20.0002 13.0004C21.1002 13.0004 22.0002 13.9004 22.0002 15.0004V19.0004C22.0002 20.1004 21.1002 21.0004 20.0002 21.0004ZM22.0002 29.0004H18.0002V25.0004H22.0002V29.0004Z" fill="#F98600" />
                                </svg>
                                <div className="flex flex-col">
                                    <span>Title</span>
                                    <span className="text-content2">Long sample text</span>
                                </div>
                            </div>
                            :
                        status === "name" ?
                            <AddNameAndAge t={t}
                                           name={name}
                                           setName={setName}
                                           endAge={endAge}
                                           setEndAge={setEndAge}
                                           setStatus={setStatus}
                                           clear={clear}
                                           startAge={startAge}
                                           expectedAge={expectedAge}
                            />
                            :
                            status === "income" ?
                                <AddIncome t={t}
                                           income={income}
                                           setIncome={setIncome}
                                           setStatus={setStatus}
                                />
                                :
                                status === "expense" ?
                                    <AddExpense t={t}
                                                expense={expense}
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
                                                <input value={income.getTotalIncome()}
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
                                                <input value={expense.getTotalExpenses()}
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
