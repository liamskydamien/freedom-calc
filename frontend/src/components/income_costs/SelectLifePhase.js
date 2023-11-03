import {useContext} from "react";
import SelectedLifePhaseContext from "../../context/lifephase/SelectedLifePhaseContext";

const SelectLifePhase = ({t}) => {

    const {selectedLifePhase} = useContext(SelectedLifePhaseContext)

    return (
        <div className="card">
            <div className="card-body">
                {
                    selectedLifePhase ?
                    <div className="flex flex-col gap-1.5 mb-3">
                        <div className="flex justify-between">
                            <div className="flex mt-auto mb-auto">
                                <p className="mb-0">{t('name_of_phase')}</p>
                            </div>
                            <input value={selectedLifePhase.name}
                                   type="text"
                                   className="input max-w-fit"
                                   readOnly
                                   disabled
                            />
                        </div>

                        <div className="flex justify-between">
                            <div className="flex mt-auto mb-auto">
                                <p className="mb-0">{t('start_of_phase')}</p>
                            </div>
                            <input value={selectedLifePhase.fromAge}
                                   type="number"
                                   className="input max-w-fit"
                                   readOnly
                                   disabled
                            />
                        </div>

                        <div className="flex justify-between">
                            <div className="flex mt-auto mb-auto">
                                <p className="mb-0">{t('end_of_phase')}</p>
                            </div>
                            <input value={selectedLifePhase.toAge}
                                   type="number"
                                   className="input max-w-fit"
                                   readOnly
                                   disabled
                            />
                        </div>

                        <div className="flex justify-between">
                            <div className="flex mt-auto mb-auto">
                                <p className="mb-0">{t('income')}</p>
                            </div>
                            <input value={selectedLifePhase.income}
                                   type="number"
                                   className="input max-w-fit"
                                   readOnly
                                   disabled
                            />
                        </div>

                        <div className="flex justify-between">
                            <div className="flex mt-auto mb-auto">
                                <p className="mb-0">{t('expenses')}</p>
                            </div>
                            <input value={selectedLifePhase.expense}
                                   type="number"
                                   className="input max-w-fit"
                                   readOnly
                                   disabled
                            />
                        </div>
                    </div>
                    :
                    <p>{t('no_lifephase_selected')}</p>
                }
            </div>
        </div>
    )
}

export default SelectLifePhase
