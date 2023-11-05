import {useContext, useEffect, useState} from "react";
import NavigationContext from "../../../context/navigationContext/NavigationContext";
import {useNavigate} from "react-router-dom";

const OptimisationPage = () => {

    const activePage = "/optimisation";
    const {setActive, allowAccess} = useContext(NavigationContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (allowAccess(activePage)) {
            setActive(activePage);
            setLoading(false);
        }
        else {
            navigate('/pof');
        }
    }, [allowAccess, activePage]);


    return (
        <div>
            <h1>Optimisation</h1>
        </div>
    );
}

export default OptimisationPage;
