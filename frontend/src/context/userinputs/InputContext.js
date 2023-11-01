import {createContext, useState} from "react";

const InputContext = createContext({});
export default InputContext;

export const InputContextProvider = ({children}) => {

    // Personal Data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [expectedAge, setExpectedAge] = useState('');
    const [currency, setCurrency] = useState('');

    const personalData = {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        gender,
        setGender,
        dateOfBirth,
        setDateOfBirth,
        expectedAge,
        setExpectedAge,
        currency,
        setCurrency
    };

    // Starting Capital
    // Assets
    const [liquidCapital, setLiquidCapital] = useState(0.0);
    const [realEstate, setRealEstate] = useState(0.0);
    const [stocks, setStocks] = useState(0.0);
    const [other, setOther] = useState(0.0);
    const [preciousMetals, setPreciousMetals] = useState(0.0);
    const [cryptoCurrency, setCryptoCurrency] = useState(0.0);
    const [insurance, setInsurance] = useState(0.0);
    const [pensionInsurance, setPensionInsurance] = useState(0.0);
    const [buildingSavingContract, setBuildingSavingContract] = useState(0.0);
    //const [corporateParticipation, setCorporateParticipation] = useState(0.0);

    const assets = {
        liquidCapital,
        setLiquidCapital,
        realEstate,
        setRealEstate,
        stocks,
        setStocks,
        other,
        setOther,
        preciousMetals,
        setPreciousMetals,
        cryptoCurrency,
        setCryptoCurrency,
        insurance,
        setInsurance,
        buildingSavingContract,
        setBuildingSavingContract,
        pensionInsurance,
        setPensionInsurance
    }
        // Liabilities
    const [liabilities, setLiabilities] = useState(0.0);
    const [reservedCapital, setReservedCapital] = useState(0.0);

    const passiva = {
        liabilities,
        setLiabilities,
        reservedCapital,
        setReservedCapital
    }

    // Income and Costs
    const [incomes, setIncomes] = useState([]);
    const [costs, setCosts] = useState([]);
    const appendIncome = (income) => {
        setIncomes([...incomes, income]);
    }
    const appendCost = (cost) => {
        setCosts([...costs, cost]);
    }

    const removeIncome = (income) => {
        setIncomes(incomes.filter((item) => item.id !== income.id));
    }

    const removeCost = (cost) => {
        setCosts(costs.filter((item) => item.id !== cost.id));
    }

    const incomeCosts = {
        incomes,
        costs,
        appendIncome,
        appendCost,
        removeIncome,
        removeCost
    }

    const value = {personalData, assets, passiva, incomeCosts};
    return (
        <InputContext.Provider value={value}>
            {children}
        </InputContext.Provider>
    )
}
