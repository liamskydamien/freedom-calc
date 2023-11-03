import {useState} from "react";
import {Expenses} from "../../../models/Expenses";

const AddExpense = ({ t, setExpense, setStatus}) => {
    //TODO: Integrate useRef do clear inputs
    const [taxes, setTaxes] = useState(0.0);
    const [rent, setRent] = useState(0.0);
    const [consumption, setConsumption] = useState(0.0);
    const [insurance, setInsurance] = useState(0.0);
    const [otherCosts, setOtherCosts] = useState(0.0);
    const [interest, setInterest] = useState(0.0);
    const [socialSecurity, setSocialSecurity] = useState(0.0);
    const [maintenance, setMaintenance] = useState(0.0);
   const addExpenseHandler = () => {
       const expense = new Expenses(taxes, rent ,consumption, socialSecurity ,maintenance, insurance, interest, otherCosts);
       setExpense(expense.getTotalExpenses());
       setStatus("summary");
   }

    const backHandler = () => {
        setTaxes(0.0);
        setRent(0.0);
        setConsumption(0.0);
        setInsurance(0.0);
        setOtherCosts(0.0);
        setInterest(0.0);
        setSocialSecurity(0.0);
        setMaintenance(0.0);
        setStatus("income");
    }

    const taxesChangeHandler = (event) => {
        setTaxes(event.target.value);
    }

    const rentChangeHandler = (event) => {
        setRent(parseFloat(event.target.value));
    }

    const consumptionChangeHandler = (event) => {
        setConsumption(parseFloat(event.target.value));
    }

    const insuranceChangeHandler = (event) => {
        setInsurance(parseFloat(event.target.value));
    }

    const otherCostsChangeHandler = (event) => {
        setOtherCosts(parseFloat(event.target.value));
    }

    const interestChangeHandler = (event) => {
        setInterest(parseFloat(event.target.value));
    }

    const socialSecurityChangeHandler = (event) => {
        setSocialSecurity(parseFloat(event.target.value));
    }

    const maintenanceChangeHandler = (event) => {
        setMaintenance(parseFloat(event.target.value));
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h2 className="text-sm font-bold pb-0">{t('expenses')}</h2>
                <div className="form-field">
                    <label className="form-label">{t('taxes')}</label>
                    <input value={taxes}
                           type="number"
                           className="input max-w-full"
                           onChange={taxesChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('rent')}</label>
                    <input value={rent}
                           type="number"
                           className="input max-w-full"
                           onChange={rentChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('consumption')}</label>
                    <input value={consumption}
                           type="number"
                           className="input max-w-full"
                           onChange={consumptionChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('insurance')}</label>
                    <input value={insurance}
                           type="number"
                           className="input max-w-full"
                           onChange={insuranceChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('interest')}</label>
                    <input value={interest}
                           type="number"
                           className="input max-w-full"
                           onChange={interestChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('socialSecurity')}</label>
                    <input value={socialSecurity}
                           type="number"
                           className="input max-w-full"
                           onChange={socialSecurityChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('maintenance')}</label>
                    <input value={maintenance}
                           type="number"
                           className="input max-w-full"
                           onChange={maintenanceChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('otherCosts')}</label>
                    <input value={otherCosts}
                           type="number"
                           className="input max-w-full"
                           onChange={otherCostsChangeHandler}/>
                </div>
                <div className="flex gap-3">
                    <button className="btn btn-primary" onClick={addExpenseHandler}>{t('save_proceed')}</button>
                    <button className="btn" onClick={backHandler}>{t('back')}</button>
                </div>
            </div>
        </div>
    )
}

export default AddExpense;
