
import EnterUserDetails from "../../../components/userdetails/EnterUserDetails";
import stockPhoto from "../../../assets/pictures/pexels-pixabay-53621.jpg"
import "./enteruserdetailspage.css"

const EnterUserDetailsPage = () => {
    return (
        <div className="enterUserDetailsLayout">
                <EnterUserDetails className="enterUserDetails"/>
                <div className="enterUserDetailsImage">
                    <img src={stockPhoto} alt="A stockpicture"></img>
                </div>
        </div>
    )
}

export default EnterUserDetailsPage
