import EnterUserDetails from "../../../components/userdetails/EnterUserDetails";
import "./enteruserdetailspage.css"
import {useContext, useEffect, useState} from "react";
import NavigationContext from "../../../context/navigationContext/NavigationContext";
import {useTranslation} from "react-i18next";

const EnterUserDetailsPage = () => {

    const {t} = useTranslation();
    const [allowNavigation] = useState(false);
    const activePage = "/";
    const {setActive, setPersonalData} = useContext(NavigationContext);

    useEffect(() => {
        setActive(activePage);
    }, [allowNavigation]);

    return (
        <>
            <div className="enterUserDetailsLayout">
                <EnterUserDetails className="enterUserDetails" t={t} setPersonalData={setPersonalData}/>
                <div className="enterUserDetailsImage shadow-lg rounded max-w-full max-h-full"/>
            </div>
        </>

    )
}

export default EnterUserDetailsPage
