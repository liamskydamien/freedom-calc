import { useTranslation } from "react-i18next";
import InputPersonalInformation from "../components/personal_information/InputPersonalInformation";
import "./styles/personalinformation.css";
import Explanation from "../components/personal_information/Explanation";
const PersonalInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-row gap-2">
        <InputPersonalInformation t={t} />
        <Explanation t={t}/>
      </div>
    </>
  );
};

export default PersonalInformation;
