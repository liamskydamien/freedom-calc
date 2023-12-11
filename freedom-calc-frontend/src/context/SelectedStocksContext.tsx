import {createContext, useState} from "react";

type SelectedStocksContextType = {
    selectedStocks: string[]
    notSelectedStocks: string[]
    addStock: (name: string) => void
    removeStock: (name: string) => void
}
export const SelectedStocksContext = createContext<SelectedStocksContextType>({} as SelectedStocksContextType);

const SelectedStocksProvider = ({children}: any) => {
    const [selectedStocks, setSelectedStocks] = useState<string[]>([])
    const [notSelectedStocks, setNotSelectedStocks] = useState<string[]>([])

    const addStock = (name: string) => {
        setSelectedStocks([...selectedStocks, name])
        setNotSelectedStocks(notSelectedStocks.filter(stock => stock !== name))
    }

    const removeStock = (name: string) => {
        setNotSelectedStocks([...notSelectedStocks, name])
        setSelectedStocks(selectedStocks.filter(stock => stock !== name))
    }

    return (
        <SelectedStocksContext.Provider value={{selectedStocks, notSelectedStocks, addStock, removeStock}}>
            {children}
        </SelectedStocksContext.Provider>
    )
}

export default SelectedStocksProvider
