import {Income} from "../../../models/Income";
import {useState} from "react";

const AddIncome = ({ t, setIncome, setStatus}) => {
    //TODO: Integrate useRef do clear inputs
    const [dependent, setDependent] = useState(0.0);
    const [selfemployed, setSelfemployed] = useState(0.0);
    const [rentingIncome, setRentingIncome] = useState(0.0);
    const [capitalIncome, setCapitalIncome] = useState(0.0);
    const [pension, setPension] = useState(0.0);
    const [otherIncome, setOtherIncome] = useState(0.0);

    const addIncomeHandler = () => {
        const income = new Income(dependent, selfemployed, rentingIncome, capitalIncome, pension, otherIncome);
        setIncome(calculateIncome(income));
        setStatus("expense");
    }

    const calculateIncome = (income) => {
        return parseFloat(income.dependent) +
            parseFloat(income.selfemployed) +
            parseFloat(income.rentingIncome) +
            parseFloat(income.capitalIncome) +
            parseFloat(income.pension) +
            parseFloat(income.otherIncome);
    }

    const backHandler = () => {
        setDependent(0.0);
        setSelfemployed(0.0);
        setRentingIncome(0.0);
        setCapitalIncome(0.0);
        setPension(0.0);
        setOtherIncome(0.0);
        setStatus("name");
    }

    const dependentChangeHandler = (event) => {
        setDependent(event.target.value);
    }

    const selfemployedChangeHandler = (event) => {
        setSelfemployed(event.target.value);
    }

    const rentingIncomeChangeHandler = (event) => {
        setRentingIncome(event.target.value);
    }

    const capitalIncomeChangeHandler = (event) => {
        setCapitalIncome(event.target.value);
    }

    const pensionChangeHandler = (event) => {
        setPension(event.target.value);
    }

    const otherIncomeChangeHandler = (event) => {
        setOtherIncome(event.target.value);
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h2 className="text-sm font-bold pb-0">{t('income')}</h2>
                <div className="form-field">
                    <label className="form-label">{t('dependent')}</label>
                    <input value={dependent}
                           type="number"
                           className="input max-w-full"
                           onChange={dependentChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('selfemployed')}</label>
                    <input value={selfemployed}
                           type="number"
                           className="input max-w-full"
                           onChange={selfemployedChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('rentingIncome')}</label>
                    <div className="form-control">
                        <input value={rentingIncome}
                               type="number"
                               className="input max-w-full"
                               onChange={rentingIncomeChangeHandler} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('capitalIncome')}</label>
                    <div className="form-control">
                        <input value={capitalIncome}
                               type="number"
                               className="input max-w-full"
                               onChange={capitalIncomeChangeHandler} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('pensionIncome')}</label>
                    <div className="form-control">
                        <input value={pension}
                               type="number"
                               className="input max-w-full"
                               onChange={pensionChangeHandler} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('otherIncome')}</label>
                    <div className="form-control">
                        <input value={otherIncome}
                               type="number"
                               className="input max-w-full"
                               onChange={otherIncomeChangeHandler} />
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="btn btn-primary" onClick={addIncomeHandler}>{t('save_proceed')}</button>
                    <button className="btn" onClick={backHandler}>{t('back')}</button>
                </div>
            </div>
        </div>
    )
}

export default AddIncome;
