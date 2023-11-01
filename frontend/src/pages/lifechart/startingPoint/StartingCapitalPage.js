import StartingCapitalInput from "../../../components/starting_capital/StartingCapitalInput";
import BalanceSheet from "../../../components/starting_capital/balance/BalanceSheet";

const StartingCapitalPage = () => {
    return (
    <div className="flex">
        <StartingCapitalInput />
        <BalanceSheet />
    </div>
  )
}

export default StartingCapitalPage
