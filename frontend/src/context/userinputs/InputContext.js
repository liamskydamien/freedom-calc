import {createContext, useState} from "react";
import {LifePhase} from "../../models/LifePhase";

const InputContext = createContext({});
export default InputContext;

export const InputContextProvider = ({children}) => {

    // Personal Data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("female");
    const [age,setAge] = useState(0);
    const [expectedAge, setExpectedAge] = useState(0);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [currency, setCurrency] = useState('');

    const personalData = {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        gender,
        setGender,
        age,
        setAge,
        expectedAge,
        setExpectedAge,
        currency,
        setCurrency,
        dateOfBirth,
        setDateOfBirth
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
    const [phases, setPhases] = useState([]);

    const lifephase = {phases, setPhases};

    const value = {personalData, assets, passiva, lifephase};
    return (
        <InputContext.Provider value={value}>
            {children}
        </InputContext.Provider>
    )
}
