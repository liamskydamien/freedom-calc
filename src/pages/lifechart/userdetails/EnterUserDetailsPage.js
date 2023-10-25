
import EnterUserDetails from "../../../components/userdetails/EnterUserDetails";
import stockPhoto from "../../../assets/pictures/pexels-pixabay-53621.jpg"
import "./enteruserdetailspage.css"

const EnterUserDetailsPage = () => {
    return (
        <div className="enterUserDetailsLayout">
                <EnterUserDetails className="enterUserDetails"/>
                <div className="enterUserDetailsImage shadow-lg rounded max-w-full max-h-full"/>
        </div>
    )
}

export default EnterUserDetailsPage
