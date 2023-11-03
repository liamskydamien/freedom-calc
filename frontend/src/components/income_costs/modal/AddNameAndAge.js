const AddNameAndAge = ({t, name, setName, endAge, setEndAge, setStatus, clear, startAge}) => {

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const endAgeChangeHandler = (event) => {
        setEndAge(parseInt(event.target.value));
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
                                   className="input max-w-full"
                                   onChange={endAgeChangeHandler}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-3">
                {
                    name !== "" && endAge > startAge ?
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
