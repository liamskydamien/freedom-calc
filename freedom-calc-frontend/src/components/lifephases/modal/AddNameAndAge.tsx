import React from "react";

type AddNameAndAgeProps = {
  t: any;
  name: string;
  setName: (name: string) => void;
  endAge: number;
  setEndAge: (endAge: number) => void;
  setStatus: (status: string) => void;
  clear: () => void;
  startAge: number;
  expectedAge: number;
};
const AddNameAndAge: React.FC<AddNameAndAgeProps> = ({
  t,
  name,
  setName,
  endAge,
  setEndAge,
  setStatus,
  clear,
  startAge,
  expectedAge,
}) => {
  /**
   * Handles the change of the name
   * @param event the event
   */
  const nameChangeHandler = (event: { target: { value: string } }) => {
    setName(event.target.value);
  };

  /**
   * Handles the change of the end age
   * @param event the event
   */
  const endAgeChangeHandler = (event: { target: { value: string } }) => {
    setEndAge(event.target.value === "" ? 0 : parseInt(event.target.value));
  };

  /**
   * Submits the input fields
   */
  const submitHandler = () => {
    setStatus("income");
  };

  /**
   * Clears the input fields
   */
  const clearHandler = () => {
    clear();
  };

  return (
    <div>
      {startAge >= expectedAge ? (
        <div className="alert alert-success max-w-sm">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM18.58 32.58L11.4 25.4C10.62 24.62 10.62 23.36 11.4 22.58C12.18 21.8 13.44 21.8 14.22 22.58L20 28.34L33.76 14.58C34.54 13.8 35.8 13.8 36.58 14.58C37.36 15.36 37.36 16.62 36.58 17.4L21.4 32.58C20.64 33.36 19.36 33.36 18.58 32.58Z"
              fill="#00BA34"
            />
          </svg>
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <span className="text-content2">
                {t("all_phases_successfully_set")}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
              <h3 className="text-sm font-bold pb-0">{t("new_lifephase")}</h3>
              <div className="form-field">
                <label className="form-label">{t("name_of_phase")}</label>
                <input
                  value={name === "" ? "" : name}
                  type="text"
                  placeholder="0"
                  className="input max-w-full"
                  required
                  onChange={nameChangeHandler}
                />
              </div>
              <div className="flex gap-4 mb-3">
                <div className="form-field">
                  <label className="form-label">{t("start_of_phase")}</label>
                  <input
                    value={startAge}
                    type="number"
                    placeholder="0"
                    className="input max-w-full"
                    disabled
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">{t("end_of_phase")}</label>
                  <input
                    value={endAge === 0 ? "" : endAge}
                    type="number"
                    placeholder={expectedAge.toString()}
                    className="input max-w-full"
                    onChange={endAgeChangeHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            {name !== "" && endAge > startAge && endAge <= expectedAge ? (
              <button
                className="btn btn-block btn-primary"
                onClick={submitHandler}
              >
                {t("save_proceed")}
              </button>
            ) : (
              <button className="btn btn-block btn-primary" disabled>
                {t("save_proceed")}
              </button>
            )}
            <button className="btn btn-block" onClick={clearHandler}>
              {t("cancel_clear")}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddNameAndAge;
