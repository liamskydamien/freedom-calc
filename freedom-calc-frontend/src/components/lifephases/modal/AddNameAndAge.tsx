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
}
const AddNameAndAge : React.FC<AddNameAndAgeProps> = ({t, name, setName, endAge, setEndAge, setStatus, clear, startAge, expectedAge}) => {

    const nameChangeHandler = (event: { target: { value: string; }; }) => {
        setName(event.target.value);
    }

    const endAgeChangeHandler = (event: { target: { value: string; }; }) => {
        setEndAge(event.target.value === "" ? 0 :parseInt(event.target.value));
    }

    const submitHandler = () => {
        setStatus("income");
    }

    const clearHandler = () => {
        clear();
    }

    return (
        <div>
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
                <div className="form-group">
                    <h3 className="text-sm font-bold pb-0">{t('new_lifephase')}</h3>
                    <div className="form-field">
                        <label className="form-label">{t('name_of_phase')}</label>
                        <input value={name}
                               type="text"
                               className="input max-w-full"
                               required
                               onChange={nameChangeHandler}/>
                    </div>
                    <div className="flex gap-4 mb-3">
                        <div className="form-field">
                            <label className="form-label">{t('start_of_phase')}</label>
                            <input value={startAge}
                                   type="number"
                                   className="input max-w-full"
                                   disabled
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">{t('end_of_phase')}</label>
                            <input value={endAge}
                                   type="number"
                                   placeholder={expectedAge.toString()}
                                   className="input max-w-full"
                                   onChange={endAgeChangeHandler}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-3">
                {
                    name !== "" && endAge > startAge && endAge <= expectedAge ?
                        <button className="btn btn-block btn-primary" onClick={submitHandler}>{t('save_proceed')}</button>
                        :
                        <button className="btn btn-block btn-primary" disabled>{t('save_proceed')}</button>
                }
                <button className="btn btn-block" onClick={clearHandler}>{t('cancel_clear')}</button>
            </div>
        </div>
    )
}

export default AddNameAndAge;
