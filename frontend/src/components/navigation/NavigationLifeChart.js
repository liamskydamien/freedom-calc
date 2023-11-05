import Stepper from "./Stepper";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {useNavigate} from "react-router-dom";

const NavigationLifeChart = ({active, navigationAllowed}) => {
    const navigate = useNavigate();
    const determineNextStep = () => {
        switch (active) {
            case '/':
                return '/starting_capital';
            case 'starting_capital':
                return '/income_costs';
            case 'income_costs':
                return '/pof';
            case 'pof':
                return '/optimisation';
            case 'optimisation':
                return '/optimisation';
            default:
                return '/';
        }
    }

    const determinePreviousStep = () => {
        switch (active) {
            case 'personal_information':
                return '/';
            case 'starting_capital':
                return '/';
            case 'income_costs':
                return '/starting_capital';
            case 'pof':
                return '/income_costs';
            case 'optimisation':
                return '/pof';
            default:
                return '/';
        }
    }

    const handleNavigate = () => {
        if (navigationAllowed) {
            navigate(determineNextStep());
        }
    }

    const handleBack = () => {
        navigate(determinePreviousStep())
    }

    return (
        <div className="flex sm:justify-between m-auto w-auto">
            <label className="btn btn-ghost flex cursor-pointer px-0">
                <a className="reactIcons">
                    <MdKeyboardArrowLeft size="32"
                                         onClick={handleBack}/>
                </a>
            </label>
            <Stepper active={active} />
            <label className="btn btn-ghost flex cursor-pointer px-0">
                <a className="reactIcons">
                    <MdKeyboardArrowRight size="32"
                                          onClick={handleNavigate}/>
                </a>
            </label>
        </div>
    )
}

export default NavigationLifeChart;
