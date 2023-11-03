import EnterUserDetails from "../../../components/userdetails/EnterUserDetails";
import "./enteruserdetailspage.css"
import Footer from "../../../components/footer/Footer";
import {useContext, useEffect, useState} from "react";
import NavigationContext from "../../../context/navigationContext/NavigationContext";
import {useTranslation} from "react-i18next";

const EnterUserDetailsPage = () => {

    const {t} = useTranslation();
    const [allowNavigation, setAllowNavigation] = useState(false);
    const activePage = "/";
    const {setActive, setNavigationAllowed} = useContext(NavigationContext);

    useEffect(() => {
        setActive(activePage);
        setNavigationAllowed(allowNavigation);
    }, [allowNavigation]);

    return (
        <>
            <div className="enterUserDetailsLayout">
                <EnterUserDetails className="enterUserDetails" t={t} setAllowNavigation={setAllowNavigation}/>
                <div className="enterUserDetailsImage shadow-lg rounded max-w-full max-h-full"/>
            </div>
        </>

    )
}

export default EnterUserDetailsPage
