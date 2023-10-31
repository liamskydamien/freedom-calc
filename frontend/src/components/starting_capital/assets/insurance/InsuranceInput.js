import {useEffect, useState} from "react";

const InsuranceInput = ({t, setInsurance, setPension, setBuildingSavingsContract}) => {
    const [buildingSavingContract, setBuildingSavingContract] = useState(0.0);
    const [lifeInsurance, setLifeInsurance] = useState(0.0);
    const [pensionInsurance, setPensionInsurance] = useState(0.0);
    const [other, setOther] = useState(0.0);

    useEffect(() => {
        updateInsurance();
    }, [lifeInsurance, other, setInsurance]);

    useEffect(() => {
        updatePensionInsurance();
    }, [pensionInsurance, setPension]);

    useEffect(() => {
        updateBuildingSavingsContract();
    }, [buildingSavingContract, setBuildingSavingsContract]);
    const updateInsurance = () => {
        setInsurance(buildingSavingContract + lifeInsurance + pensionInsurance + other);
    }

    const updatePensionInsurance = () => {
        setPension(pensionInsurance);
    }

    const updateBuildingSavingsContract = () => {
        setBuildingSavingsContract(buildingSavingContract);
    }

    const buildingSavingContractChangeHandler = (event) => {
        setBuildingSavingContract(event.target.value);
    }

    const lifeInsuranceChangeHandler = (event) => {
        setLifeInsurance(event.target.value);
    }

    const pensionInsuranceChangeHandler = (event) => {
        setPensionInsurance(event.target.value);
    }

    const otherChangeHandler = (event) => {
        setOther(event.target.value);
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold pb-0">{t('insurance')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('building_saving_contract')}</label>
                    <input value={buildingSavingContract}
                           type="number"
                           className="input max-w-full"
                           onChange={buildingSavingContractChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('life_insurance')}</label>
                    <input value={lifeInsurance}
                           type="number"
                           className="input max-w-full"
                           onChange={lifeInsuranceChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('pension_insurance')}</label>
                    <input value={pensionInsurance}
                           type="number"
                           className="input max-w-full"
                           onChange={pensionInsuranceChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('other')}</label>
                    <input value={other}
                           type="number"
                           className="input max-w-full"
                           onChange={otherChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default InsuranceInput;
