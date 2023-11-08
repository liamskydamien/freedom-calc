import React, {createContext, useState} from "react";

export const StartingCapitalContext = createContext({
    activa: {},
    passiva: {}
});

type StartingCapitalProviderProps = {
    children: React.ReactNode
}

type ReturnValue = {
    activa: {},
    passiva: {}
}

const StartingCapitalProvider : React.FC<StartingCapitalProviderProps> = ({children}) => {
    // Activa Context
    /* Other */
    const [collectibles, setCollectibles] = useState(0.0);
    const [art, setArt] = useState(0.0);
    const [claims, setClaims] = useState(0.0);
    const [insurance, setInsurance] = useState(0.0);
    const [otherAssets, setOtherAssets] = useState(0.0);
    /* Crypto */
    const [bitcoin, setBitcoin] = useState(0.0);
    const [ethereum, setEthereum] = useState(0.0);
    const [otherCryptos, setOtherCryptos] = useState(0.0);
    /* Liquid Assets */
    const [savings, setSavings] = useState(0.0);
    const [checking, setChecking] = useState(0.0);
    const [otherLiquidAssets, setOtherLiquidAssets] = useState(0.0);
    const [gold, setGold] = useState(0.0);
    const [otherMetals, setOtherMetals] = useState(0.0);
    /* Real Estate */
    const [occupiedProperties, setOccupiedProperties] = useState(0.0);
    const [rentedProperties, setRentedProperties] = useState(0.0);
    const [commercialProperties, setCommercialProperties] = useState(0.0);
    const [forest, setForest] = useState(0.0);
    const [agriculturalLand, setAgriculturalLand] = useState(0.0);
    const [realEstateFunds, setRealEstateFunds] = useState(0.0);
    const [otherRealEstate, setOtherRealEstate] = useState(0.0);
    /* Stocks */
    const [singleStocks, setSingleStocks] = useState(0.0);
    const [fund, setFund] = useState(0.0);
    const [etf, setEtf] = useState(0.0);
    const [derivative, setDerivative] = useState(0.0);
    const [activeCorporateParticipation, setActiveCorporateParticipation] = useState(0.0);
    const [passiveCorporateParticipation, setPassiveCorporateParticipation] = useState(0.0);
    const [otherStocks, setOtherStocks] = useState(0.0);

    // Passiva Context
    /* Liabilities */
    const [objectRelatedLiabilities, setObjectRelatedLiabilities] = useState(0.0);
    const [nonObjectRelatedLiabilities, setNonObjectRelatedLiabilities] = useState(0.0);
    const [otherLiabilities, setOtherLiabilities] = useState(0.0);
    const [provisions, setProvisions] = useState(0.0);
    /* Reserved Equity */
    const [reservedEquityForPensionProvision, setReservedEquityForPensionProvision] = useState(0);
    const [reservedEquityForConsumption, setReservedEquityForConsumption] = useState(0);
    const [reservedEquityForOther, setReservedEquityForOther] = useState(0);

    // Grouping of all the States
    const crypto  = {
        bitcoin,
        ethereum,
        otherCryptos,
        setBitcoin,
        setEthereum,
        setOtherCryptos,
    }

    const cash = {
        savings: savings,
        checking: checking,
        otherLiquidAssets: otherLiquidAssets,
        setSavings: setSavings,
        setChecking: setChecking,
        setOtherLiquidAssets: setOtherLiquidAssets,
    }

    const preciousMetals = {
        gold: gold,
        otherMetals: otherMetals,
        setGold: setGold,
        setOtherMetals: setOtherMetals,
    }

    const realEstate = {
        occupiedProperties: occupiedProperties,
        rentedProperties: rentedProperties,
        commercialProperties: commercialProperties,
        forest: forest,
        agriculturalLand: agriculturalLand,
        realEstateFunds: realEstateFunds,
        otherRealEstate: otherRealEstate,
        setOccupiedProperties: setOccupiedProperties,
        setRentedProperties: setRentedProperties,
        setCommercialProperties: setCommercialProperties,
        setForest: setForest,
        setAgriculturalLand: setAgriculturalLand,
        setRealEstateFunds: setRealEstateFunds,
        setOtherRealEstate: setOtherRealEstate,
    }

    const stocks = {
        singleStocks: singleStocks,
        fund: fund,
        etf: etf,
        derivative: derivative,
        activeCorporateParticipation: activeCorporateParticipation,
        passiveCorporateParticipation: passiveCorporateParticipation,
        otherStocks: otherStocks,
        setSingleStocks: setSingleStocks,
        setFund: setFund,
        setEtf: setEtf,
        setDerivative: setDerivative,
        setActiveCorporateParticipation: setActiveCorporateParticipation,
        setPassiveCorporateParticipation: setPassiveCorporateParticipation,
        setOtherStocks: setOtherStocks,
    }

    const other = {
        collectibles: collectibles,
        art: art,
        claims: claims,
        insurance: insurance,
        otherAssets: otherAssets,
        setCollectibles: setCollectibles,
        setArt: setArt,
        setClaims: setClaims,
        setInsurance: setInsurance,
        setOtherAssets: setOtherAssets,
    }

    const liabilities = {
        objectRelatedLiabilities: objectRelatedLiabilities,
        nonObjectRelatedLiabilities: nonObjectRelatedLiabilities,
        otherLiabilities: otherLiabilities,
        provisions: provisions,
        setObjectRelatedLiabilities: setObjectRelatedLiabilities,
        setNonObjectRelatedLiabilities: setNonObjectRelatedLiabilities,
        setOtherLiabilities: setOtherLiabilities,
        setProvisions: setProvisions,
    }

    const reservedEquity = {
        reservedEquityForPensionProvision: reservedEquityForPensionProvision,
        reservedEquityForConsumption: reservedEquityForConsumption,
        reservedEquityForOther: reservedEquityForOther,
        setReservedEquityForPensionProvision: setReservedEquityForPensionProvision,
        setReservedEquityForConsumption: setReservedEquityForConsumption,
        setReservedEquityForOther: setReservedEquityForOther,
    }

    const activa = {
        crypto,
        cash,
        preciousMetals,
        realEstate,
        stocks,
        other,
    }

    const passiva = {
        liabilities: liabilities,
        reservedEquity: reservedEquity,
    }

    const startingcapitalStates : ReturnValue = {
        activa: activa,
        passiva: passiva,
    }

    return (
        <StartingCapitalContext.Provider value={startingcapitalStates}>
            {children}
        </StartingCapitalContext.Provider>
    )
}

export default StartingCapitalProvider;
