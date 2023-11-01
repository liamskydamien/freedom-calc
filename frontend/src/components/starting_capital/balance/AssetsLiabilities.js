import ActivaTab from "./ActivaTab";
import PassivaTab from "./PassivaTab";
import InputContext from "../../../context/userinputs/InputContext";
import {useContext} from "react";

const AssetsLiabilities = ({t}) => {
    const {assets, passiva} = useContext(InputContext);

    return (
        <div className="max-w-full">
            <div className="flex">
                <ActivaTab t={t} assets={assets} />
                <PassivaTab t={t} />
            </div>
        </div>
    )
}

export default AssetsLiabilities
