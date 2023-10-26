const AssetsInput = ({assets, t}) => {
    return (
        <div className="tabs gap-1">
            <input type="radio" id="tab-10" name="tab-4" className="tab-toggle" defaultChecked />
            <label htmlFor="tab-10" className="tab tab-pill">{t('liquid_assets')}</label>

            <input type="radio" id="tab-11" name="tab-4" className="tab-toggle" />
            <label htmlFor="tab-11" className="tab tab-pill">{t('realestate')}</label>

            <input type="radio" id="tab-12" name="tab-4" className="tab-toggle" />
            <label htmlFor="tab-12" className="tab tab-pill">{t('corporate')}</label>

            <input type="radio" id="tab-12" name="tab-4" className="tab-toggle" />
            <label htmlFor="tab-13" className="tab tab-pill">{t('other_assets')}</label>
        </div>
    );
}

export default AssetsInput;
