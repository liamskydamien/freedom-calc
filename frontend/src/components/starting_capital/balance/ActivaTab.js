import {AssetGroup} from "../../../models/AssetGroup";
import {useEffect, useState} from "react";

const ActivaTab = ({t, assets}) => {

    const [total, setTotal] = useState(0.0);
    useEffect(() => {
        setTotal(assets.liquidCapital + assets.preciousMetals + assets.stocks + assets.cryptoCurrency + assets.insurance + assets.other);
    }, [assets]);

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
                        <td>{assets.liquidCapital}</td>
                    </tr>
                    <tr>
                        <th>{t('precious_metals')}</th>
                        <td>{assets.preciousMetals}</td>
                    </tr>
                    <tr>
                        <th>{t('corporate_assets')}</th>
                        <td>{assets.stocks}</td>
                    </tr>
                    <tr>
                        <th>{t('crypto_currency')}</th>
                        <td>{assets.cryptoCurrency}</td>
                    </tr>
                    <tr>
                        <th>{t('insurance')}</th>
                        <td>{assets.insurance}</td>
                    </tr>
                    <tr>
                        <th>{t('other')}</th>
                        <td>{assets.other}</td>
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

export default ActivaTab
