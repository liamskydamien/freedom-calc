import { useContext, useEffect, useState } from "react";
import { InputContext } from "../../context/InputContext";
import { InputContextProviderState } from "../../models/InputContextProviderState";
import { PersonalInformation } from "../../models/personalinformation/PersonalInformation";
import { useNavigate } from "react-router";
import { ProgressContext } from "../../context/ProgressContext";

type InputPersonalInformationProps = {
  t: any;
};
const InputPersonalInformation: React.FC<InputPersonalInformationProps> = ({
  t,
}) => {
  // Import Hooks
  const navigate = useNavigate();

  // Set up context variables and state
  // @ts-ignore
  const {
    personalInformation,
    setPersonalInformation,
  }: InputContextProviderState = useContext(InputContext);
  const { progress, updateProgress }: any = useContext(ProgressContext);
  const [firstName, setFirstName] = useState(personalInformation.firstName);
  const [lastName, setLastName] = useState(personalInformation.lastName);
  const [birthDate, setBirthDate] = useState(personalInformation.birthDate);
  const [expectedAge, setExpectedAge] = useState(
    personalInformation.expectedAge,
  );
  const [currency, setCurrency] = useState(personalInformation.currency);
  const [gender, setGender] = useState(personalInformation.gender);
  const [valid, setValid] = useState(false);
  const [birthDateString, setBirthDateString] = useState("");
  // Set up useEffect
  useEffect(() => {
    checkPersonalInformation() ? setValid(true) : setValid(false);
  }, []);

  // Set up useEffect for birthDateString to birthDate conversion
  useEffect(() => {
    if (birthDateString !== "") {
      const date = new Date(birthDateString);
      setBirthDate(date);
    }
  }, [birthDateString]);

  // Set up event handlers
  /**
   * Handles the change of the first name
   * @param event
   */
  const firstNameChangeHandler = (event: { target: { value: any } }) => {
    setFirstName(event.target.value);
  };

  /**
   * Handles the change of the last name
   * @param event
   */
  const lastNameChangeHandler = (event: { target: { value: any } }) => {
    setLastName(event.target.value);
  };

  /**
   * Handles the change of the gender
   * @param event
   */
  const genderChangeHandler = (event: { target: { value: any } }) => {
    setGender(event.target.value);
  };

  /**
   * Handles the change of the date of birth
   * @param event
   */
  const dateOfBirthChangeHandler = (event: { target: { value: any } }) => {
    setBirthDateString(event.target.value);
  };

  /**
   * Handles the change of the expected age
   * @param event
   */
  const expectedAgeChangeHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    // This will allow only numbers and empty string to be set
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setExpectedAge(value);
    }
  };

  /**
   * Handles the change of the currency
   * @param event
   */
  const currencyChangeHandler = (event: { target: { value: any } }) => {
    setCurrency(event.target.value);
  };

  /**
   * Submits the form and updates the personal information in the context
   * @param event
   */
  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (checkPersonalInformation() && checkAge()) {
      updatePersonalInformation();
      updateProgressPersonal();
      navigate("/starting_capital");
    } else {
      //TODO: Add error Modal
      alert("Please check your input!");
    }
  };

  /**
   * Updates the personal information in the context
   */
  const updatePersonalInformation = () => {
    const updatedPersonalInformation = new PersonalInformation(
      firstName,
      lastName,
      birthDate,
      expectedAge,
      gender,
      currency,
    );
    setPersonalInformation(updatedPersonalInformation);
  };

  const updateProgressPersonal = () => {
    progress.setPersonalInformation(true);
    updateProgress(progress);
  };

  /**
   * Checks if the personal information is valid
   */
  const checkPersonalInformation = () => {
    const check =
      firstName !== "" &&
      lastName !== "" &&
      expectedAge !== 0 &&
      currency !== "" &&
      gender !== "";
    console.log("Form is valid: ", check);
    return check;
  };

  /**
   * Checks if the age is valid meaning that the expected age is greater than the current age
   */
  const checkAge = () => {
    return expectedAge > 0 && expectedAge > getAge();
  };

  /**
   * Calculates the current age
   */
  const getAge = (): number => {
    if (birthDate.getMonth() > new Date().getMonth())
      return new Date().getFullYear() - birthDate.getFullYear() - 1;
    else if (birthDate.getMonth() === new Date().getMonth())
      if (birthDate.getDate() > new Date().getDate())
        return new Date().getFullYear() - birthDate.getFullYear() - 1;
      else return new Date().getFullYear() - birthDate.getFullYear();
    else return new Date().getFullYear() - birthDate.getFullYear();
  };

  return (
    <div className="w-auto flex-col card p-5">
      <h1 className="text-xl font-bold">{t("personal_information")}</h1>
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        <div className="form-group">
          {valid ? (
            <div className="form-field">
              <label className="form-label">{t("firstname")}</label>
              <input
                placeholder={t("type_here")}
                className="input max-w-full"
                value={firstName}
                required={true}
                disabled={true}
              />
            </div>
          ) : (
            <div className="form-field">
              <label className="form-label">{t("firstname")}</label>
              <input
                placeholder={t("type_here")}
                className="input max-w-full"
                value={firstName}
                required={true}
                onChange={firstNameChangeHandler}
              />
            </div>
          )}
          {valid ? (
            <div className="form-field">
              <label className="form-label">{t("surname")}</label>
              <input
                placeholder={t("type_here")}
                className="input max-w-full"
                value={lastName}
                required={true}
                disabled={true}
              />
            </div>
          ) : (
            <div className="form-field">
              <label className="form-label">{t("surname")}</label>
              <input
                placeholder={t("type_here")}
                className="input max-w-full"
                value={lastName}
                required={true}
                onChange={lastNameChangeHandler}
              />
            </div>
          )}
          {valid ? (
            gender === "Female" || gender === "Nữ" || gender === "Frau" ? (
              <div className="form-field">
                <label className="form-label">{t("gender")}</label>
                <select
                  className="select max-w-full"
                  onChange={genderChangeHandler}
                  disabled={true}
                >
                  <option>{t("female")}</option>
                </select>
              </div>
            ) : (
              <div className="form-field">
                <label className="form-label">{t("gender")}</label>
                <select
                  className="select max-w-full"
                  onChange={genderChangeHandler}
                  disabled={true}
                >
                  <option>{t("male")}</option>
                </select>
              </div>
            )
          ) : (
            <div className="form-field">
              <label className="form-label">{t("gender")}</label>
              <select
                className="select max-w-full"
                onChange={genderChangeHandler}
              >
                <option>{t("female")}</option>
                <option>{t("male")}</option>
              </select>
            </div>
          )}
          <div className="form-field flex-row max-w-full">
            {valid ? (
              <div className="w-auto">
                <label className="form-label">{t("date_of_birth")}</label>
                <input
                  className="input w-auto"
                  type="date"
                  required={true}
                  value={birthDateString}
                  disabled={true}
                ></input>
              </div>
            ) : (
              <div className="w-auto">
                <label className="form-label">{t("date_of_birth")}</label>
                <input
                  className="input w-auto"
                  type="date"
                  required={true}
                  value={birthDateString}
                  onChange={dateOfBirthChangeHandler}
                ></input>
              </div>
            )}
            {valid ? (
              <div className="max-w-full">
                <label className="form-label">{t("expected_age")}</label>
                <input
                  className="input max-w-full"
                  type="number"
                  required={true}
                  value={expectedAge}
                  disabled={true}
                ></input>
              </div>
            ) : (
              <div className="max-w-full">
                <label className="form-label">{t("expected_age")}</label>
                <input
                  className="input max-w-full"
                  type="number"
                  required={true}
                  value={expectedAge  === 0 ? "" : expectedAge}
                  placeholder="0"
                  onChange={expectedAgeChangeHandler}
                ></input>
              </div>
            )}
          </div>
          {valid ? (
            currency === "EUR €" ? (
              <div className="form-field">
                <label className="form-label">{t("currency")}</label>
                <select
                  className="select max-w-full"
                  onChange={currencyChangeHandler}
                  disabled={true}
                >
                  <option>EUR €</option>
                </select>
              </div>
            ) : (
              <div className="form-field">
                <label className="form-label">{t("currency")}</label>
                <select
                  className="select max-w-full"
                  onChange={currencyChangeHandler}
                  disabled={true}
                >
                  <option>VND ₫</option>
                </select>
              </div>
            )
          ) : (
            <div className="form-field">
              <label className="form-label">{t("currency")}</label>
              <select
                className="select max-w-full"
                onChange={currencyChangeHandler}
              >
                <option>EUR €</option>
                <option>VND ₫</option>
              </select>
            </div>
          )}
          <div className="form-field">
            <button className="btn btn-primary" onClick={submitHandler}>
              {t("save_and_proceed")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPersonalInformation;
