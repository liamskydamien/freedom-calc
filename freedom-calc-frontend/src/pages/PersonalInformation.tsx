import { useTranslation } from "react-i18next";
import InputPersonalInformation from "../components/personal_information/InputPersonalInformation";
import "./styles/personalinformation.css";
import Explanation from "../components/personal_information/Explanation";
import { useNavigate } from "react-router";
const PersonalInformation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row gap-2">
        <button onClick={() => {
          navigate("/test");
        }}>
          Test
        </button>
        <InputPersonalInformation t={t} />
        <Explanation t={t} />
      </div>
    </>
  );
};

export default PersonalInformation;
