import RiskAssesment from "../components/optimization/RiskAssesment";
import {useTranslation} from "react-i18next";

const OptimizationPage = () => {

    const { t } = useTranslation();

    return (
        <div>
            <RiskAssesment t={t}/>
        </div>
    )
}
export default OptimizationPage;
