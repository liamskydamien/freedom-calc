import { useEffect, useState } from "react";
import i18n from "../../i18n"; // Use the correct path
import { MdLanguage } from "react-icons/md";
import { Languages } from "../../constants/languages/languages";
import FreedomCalcLogo from "../../assets/pictures/logo.png";

const Header = () => {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    i18n
      .changeLanguage(language)
      .then(() => console.log("Language changed to " + language));
  }, [language]);

  return (
    <div className="navbar rounded-lg">
      <div className="navbar-start flex flex-row">
        <img src={FreedomCalcLogo} alt="Logo" className="max-h-20" />
        <a className="navbar-item text-xl font-bold">Freedom Calc</a>
      </div>
      <div className="navbar-end">
        <div className="flex">
          <div className="dropdown-container">
            <div className="dropdown">
              <label
                className="btn btn-ghost flex cursor-pointer px-0"
                tabIndex={0}
              >
                <a className="reactIcons">
                  <MdLanguage size="32" />
                </a>
              </label>
              <div className="dropdown-menu dropdown-menu-bottom-left">
                {Languages.map((language) => {
                  return (
                    <a
                      key={language.value}
                      className="dropdown-item text-sm"
                      onClick={() => setLanguage(language.value)}
                    >
                      {language.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
