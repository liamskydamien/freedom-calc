import React, { createContext, useState } from "react";
import {
  ActivaState,
  CashState,
  CryptoState,
  LiabilitiesState,
  OtherState,
  PassivaState,
  PreciousMetalsState,
  RealEstateState,
  ReservedEquityState,
  StartingCapitalProviderState,
  StockState,
} from "../models/types/AssetContextTypes";

export const StartingCapitalContext = createContext(
  {} as StartingCapitalProviderState
);

type StartingCapitalProviderProps = {
  children: React.ReactNode;
};

const StartingCapitalProvider: React.FC<StartingCapitalProviderProps> = ({
  children,
}) => {
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
  const [activeCorporateParticipation, setActiveCorporateParticipation] =
    useState(0.0);
  const [passiveCorporateParticipation, setPassiveCorporateParticipation] =
    useState(0.0);
  const [otherStocks, setOtherStocks] = useState(0.0);

  // Passiva Context
  /* Liabilities */
  const [objectRelatedLiabilities, setObjectRelatedLiabilities] = useState(0.0);
  const [nonObjectRelatedLiabilities, setNonObjectRelatedLiabilities] =
    useState(0.0);
  const [otherLiabilities, setOtherLiabilities] = useState(0.0);
  const [provisions, setProvisions] = useState(0.0);
  /* Reserved Equity */
  const [
    reservedEquityForPensionProvision,
    setReservedEquityForPensionProvision,
  ] = useState(0);
  const [reservedEquityForConsumption, setReservedEquityForConsumption] =
    useState(0);
  const [reservedEquityForOther, setReservedEquityForOther] = useState(0);

  // Grouping of all the States
  const crypto: CryptoState = {
    bitcoin,
    ethereum,
    otherCryptos,
    setBitcoin,
    setEthereum,
    setOtherCryptos,
  };

  const cash: CashState = {
    savings,
    checking,
    otherLiquidAssets,
    setSavings,
    setChecking,
    setOtherLiquidAssets,
  };

  const preciousMetals: PreciousMetalsState = {
    gold,
    otherMetals,
    setGold,
    setOtherMetals,
  };

  const realEstate: RealEstateState = {
    occupiedProperties,
    rentedProperties,
    commercialProperties,
    forest,
    agriculturalLand,
    realEstateFunds,
    otherRealEstate,
    setOccupiedProperties,
    setRentedProperties,
    setCommercialProperties,
    setForest,
    setAgriculturalLand,
    setRealEstateFunds,
    setOtherRealEstate,
  };

  const stocks: StockState = {
    singleStocks,
    fund,
    etf,
    derivative,
    activeCorporateParticipation,
    passiveCorporateParticipation,
    otherStocks,
    setSingleStocks,
    setFund,
    setEtf,
    setDerivative,
    setActiveCorporateParticipation,
    setPassiveCorporateParticipation,
    setOtherStocks,
  };

  const other: OtherState = {
    collectibles,
    art,
    claims,
    insurance,
    otherAssets,
    setCollectibles,
    setArt,
    setClaims,
    setInsurance,
    setOtherAssets,
  };

  const liabilities: LiabilitiesState = {
    objectRelatedLiabilities,
    nonObjectRelatedLiabilities,
    otherLiabilities,
    provisions,
    setObjectRelatedLiabilities,
    setNonObjectRelatedLiabilities,
    setOtherLiabilities,
    setProvisions,
  };

  const reservedEquity: ReservedEquityState = {
    reservedEquityForPensionProvision,
    reservedEquityForConsumption,
    reservedEquityForOther,
    setReservedEquityForPensionProvision,
    setReservedEquityForConsumption,
    setReservedEquityForOther,
  };

  const activa: ActivaState = {
    crypto: crypto,
    cash: cash,
    preciousMetals: preciousMetals,
    realEstate: realEstate,
    stock: stocks,
    other: other,
  };

  const passiva: PassivaState = {
    liabilities: liabilities,
    reservedEquity: reservedEquity,
  };

  const startingcapitalStates: StartingCapitalProviderState = {
    aktiva: activa,
    passiva: passiva,
  };

  return (
    <StartingCapitalContext.Provider value={startingcapitalStates}>
      {children}
    </StartingCapitalContext.Provider>
  );
};

export default StartingCapitalProvider;
