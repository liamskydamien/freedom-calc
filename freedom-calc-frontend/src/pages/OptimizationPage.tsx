import RiskAssesment from "../components/optimization/RiskAssesment";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import ShowcasePortfolio from "../components/optimization/ShowcasePortfolio";

const OptimizationPage = () => {

    const { t } = useTranslation();
    const [modalIsOpen, setIsOpen] = useState(true);
    const [risk, setRisk] = useState(0);

    const closeModal = (risk: number) => {
        setRisk(risk);
        setIsOpen(false);
        console.log(risk);
    }

    return (
        <div>
            {
                modalIsOpen && <RiskAssesment t={t} closeModal={closeModal}/>
            }
            <ShowcasePortfolio t={t} />
        </div>
    )
}
export default OptimizationPage;
