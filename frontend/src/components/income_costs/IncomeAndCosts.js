const IncomeAndCosts = ({t}) => {
    return (
        <div className="flex-col card p-5 max-w-full">
            <div className="flex flex-row justify-between">
                <h1 className="text-xl font-bold">{t('starting_capital')}</h1>
                <button className="btn btn-primary">Add new Phase</button>
            </div>
        </div>
    )
}

export default IncomeAndCosts;
