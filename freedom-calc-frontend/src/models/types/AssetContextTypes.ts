
export type StartingCapitalProviderState = {
    aktiva: ActivaState,
    passiva: PassivaState,
}

export type CryptoState = {
    bitcoin: number,
    ethereum : number,
    otherCryptos: number,
    setBitcoin: (bitcoin: number) => void,
    setEthereum: (ethereum: number) => void,
    setOtherCryptos: (otherCryptos: number) => void,
}

export type RealEstateState = {
    occupiedProperties : number,
    rentedProperties : number,
    commercialProperties : number,
    forest : number,
    agriculturalLand : number,
    realEstateFunds : number,
    otherRealEstate : number,
    setOccupiedProperties : (occupiedProperties: number) => void,
    setRentedProperties : (rentedProperties: number) => void,
    setCommercialProperties : (commercialProperties: number) => void,
    setForest : (forest: number) => void,
    setAgriculturalLand : (agriculturalLand: number) => void,
    setRealEstateFunds : (realEstateFunds: number) => void,
    setOtherRealEstate : (otherRealEstate: number) => void,
}

export type StockState = {
    singleStocks : number,
    fund : number,
    etf : number,
    derivative : number,
    activeCorporateParticipation : number,
    passiveCorporateParticipation : number,
    otherStocks : number,
    setSingleStocks : (singleStocks: number) => void,
    setFund : (fund: number) => void,
    setEtf : (etf: number) => void,
    setDerivative : (derivative: number) => void,
    setActiveCorporateParticipation : (activeCorporateParticipation: number) => void,
    setPassiveCorporateParticipation : (passiveCorporateParticipation: number) => void,
    setOtherStocks : (otherStocks: number) => void,
}

export type CashState = {
    savings : number,
    checking : number,
    otherLiquidAssets : number,
    setSavings : (savings: number) => void,
    setChecking : (checking: number) => void,
    setOtherLiquidAssets : (otherLiquidAssets: number) => void,
}

export type PreciousMetalsState = {
    gold : number,
    otherMetals : number,
    setGold : (gold: number) => void,
    setOtherMetals : (otherMetals: number) => void,
}

export type OtherState = {
    collectibles : number,
    art : number,
    claims : number,
    insurance : number,
    otherAssets : number,
    setCollectibles : (collectibles: number) => void,
    setArt : (art: number) => void,
    setClaims : (claims: number) => void,
    setInsurance : (insurance: number) => void,
    setOtherAssets : (otherAssets: number) => void,
}

export type LiabilitiesState = {
    objectRelatedLiabilities : number,
    nonObjectRelatedLiabilities : number,
    otherLiabilities : number,
    provisions : number,
    setObjectRelatedLiabilities : (objectRelatedLiabilities: number) => void,
    setNonObjectRelatedLiabilities : (nonObjectRelatedLiabilities: number) => void,
    setOtherLiabilities : (otherLiabilities: number) => void,
    setProvisions : (provisions: number) => void,
}

export type ReservedEquityState = {
    reservedEquityForPensionProvision : number,
    reservedEquityForConsumption : number,
    reservedEquityForOther : number,
    setReservedEquityForPensionProvision : (reservedEquityForPensionProvision: number) => void,
    setReservedEquityForConsumption : (reservedEquityForConsumption: number) => void,
    setReservedEquityForOther : (reservedEquityForOther: number) => void,
}

export type ActivaState = {
    crypto: CryptoState,
    realEstate: RealEstateState,
    stock: StockState,
    cash: CashState,
    preciousMetals: PreciousMetalsState,
    other: OtherState,
}

export type PassivaState = {
    liabilities: LiabilitiesState,
    reservedEquity: ReservedEquityState,
}

