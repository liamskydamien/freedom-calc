import ActivaTab from "./ActivaTab";
import PassivaTab from "./PassivaTab";

const AssetsLiabilities = ({t}) => {
    return (
        <div className="max-w-full">
            <div className="flex">
                <ActivaTab t={t} />
                <PassivaTab t={t} />
            </div>
        </div>
    )
}

export default AssetsLiabilities
