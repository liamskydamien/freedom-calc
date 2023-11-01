const PassivaTab = ({t, passiva}) => {
    return (
        <div>
            <h2 className="text-lg">{t('passiva')}</h2>
            <div className="flex w-full overflow-x-auto">
                <table className="table-zebra table">
                    <thead>
                    <tr>
                        <th>{t('liability_group')}</th>
                        <th>{t('combined_value')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>{t('liability')}</th>
                        <td>Cy Ganderton</td>
                    </tr>
                    <tr>
                        <th>{t('reserved_equity')}</th>
                        <td>Hart Hagerty</td>
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

export default PassivaTab
