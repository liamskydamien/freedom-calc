import {useTranslation} from "react-i18next";
const UserDetails = () => {

    const {t} = useTranslation();

    return (
        <>
            <div className="enterUserDetailsLayout">
                <div className="enterUserDetailsImage shadow-lg rounded max-w-full max-h-full"/>
            </div>
        </>

    )
}

export default UserDetails;
