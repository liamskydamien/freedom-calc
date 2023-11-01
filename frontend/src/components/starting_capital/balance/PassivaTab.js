import {useEffect, useState} from "react";

const PassivaTab = ({t, passiva}) => {
    const [total, setTotal] = useState(0.0);
    useEffect(() => {
        setTotal(passiva.liabilities + passiva.reservedCapital);
    }, [passiva]);

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
                        <td>{passiva.liabilities}</td>
                    </tr>
                    <tr>
                        <th>{t('reserved_equity')}</th>
                        <td>{passiva.reservedCapital}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <table className="table-zebra table">
                <thead>
                <tr>
                    <th>{t('total')}</th>
                    <th>{total}</th>
                </tr>
                </thead>
            </table>
        </div>
    )
}

export default PassivaTab
