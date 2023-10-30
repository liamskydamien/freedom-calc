const StockAssetInput = ({setStocks, t}) => {
    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <div className="form-field">
                    <label className="form-label">{t('single_stocks')}</label>
                    <input value={cash}
                           type="number"
                           className="input max-w-full"
                           onChange={cashChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('pension fund')}</label>
                    <div className="form-control">
                        <input value={pensionFund}
                               type="number"
                               className="input max-w-full"
                               onChange={pensionFundChangeHandler} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('precious_metals')}</label>
                    <div className="form-control">
                        <input value={preciousMetals}
                               type="number"
                               className="input max-w-full"
                               onChange={preciousMetalsChangeHandler} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StockAssetInput;
