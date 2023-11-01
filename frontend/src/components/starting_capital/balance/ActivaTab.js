const ActivaTab = ({t}) => {
    return (
        <div>
            <h2 className="text-lg">{t('activa')}</h2>
            <div className="flex w-full overflow-x-auto">
                <table className="table-zebra table">
                    <thead>
                    <tr>
                        <th>{t('asset_group')}</th>
                        <th>{t('combined_value')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>{t('liquid_assets')}</th>
                        <td>Cy Ganderton</td>
                    </tr>
                    <tr>
                        <th>{t('precious_metals')}</th>
                        <td>Hart Hagerty</td>
                    </tr>
                    <tr>
                        <th>{t('corporate_assets')}</th>
                        <td>Brice Swyre</td>
                    </tr>
                    <tr>
                        <th>{t('crypto_currency')}</th>
                        <td>Brice Swyre</td>
                    </tr>
                    <tr>
                        <th>{t('insurance')}</th>
                        <td>Brice Swyre</td>
                    </tr>
                    <tr>
                        <th>{t('other')}</th>
                        <td>Brice Swyre</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="divider"></div>
            <table className="table-zebra table">
                <thead>
                    <th>{t('total')}</th>
                    <th>1214444</th>
                </thead>
            </table>
        </div>
    )
}

export default ActivaTab
