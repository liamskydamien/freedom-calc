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
    const [corporateParticipation, setCorporateParticipation] = useState(0.0);

    const assets = {
        liquidCapital,
        setLiquidCapital,
        realEstate,
        setRealEstate,
        stocks,
        setStocks,
        other,
        setOther,
        corporateParticipation,
        setCorporateParticipation,
        preciousMetals,
        setPreciousMetals,
        cryptoCurrency,
        setCryptoCurrency
    }
        // Liabilities
    const [liablities, setLiablities] = useState(0.0);
    const [provision, setProvision] = useState(0.0);
    const [reservedForConsumption, setReservedForConsumption] = useState(0.0);
    const [reservedForPension, setReservedForPension] = useState(0.0);

    const liabilities = {
        liablities,
        setLiablities,
        provision,
        setProvision,
        reservedForConsumption,
        setReservedForConsumption,
        reservedForPension,
        setReservedForPension
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

    const value = {personalData, assets, liabilities, incomeCosts};
    return (
        <InputContext.Provider value={value}>
            {children}
        </InputContext.Provider>
    )
}
