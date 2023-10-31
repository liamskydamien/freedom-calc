import {useEffect, useState} from "react";

const OtherAssetsInput = ({t, setOtherAssets}) => {
    const [art, setArt] = useState(0.0);
    const [jewelry, setJewelry] = useState(0.0);
    const [collectibles, setCollectibles] = useState(0.0);
    const [claims, setClaims] = useState(0.0);
    const [other, setOther] = useState(0.0);

    useEffect(() => {
        updateOther();
    }, [art, jewelry, collectibles, claims, other, setOther]);

    const updateOther = () => {
        setOtherAssets(art + jewelry + collectibles + claims + other);
    }

    const artChangeHandler = (event) => {
        setArt(event.target.value);
    }

    const jewelryChangeHandler = (event) => {
        setJewelry(event.target.value);
    }

    const collectiblesChangeHandler = (event) => {
        setCollectibles(event.target.value);
    }

    const claimsChangeHandler = (event) => {
        setClaims(event.target.value);
    }

    const otherChangeHandler = (event) => {
        setOther(event.target.value);
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold pb-0">{t('other')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('art')}</label>
                    <input value={art}
                           type="number"
                           className="input max-w-full"
                           onChange={artChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('jewelry')}</label>
                    <input value={jewelry}
                           type="number"
                           className="input max-w-full"
                           onChange={jewelryChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('collectibles')}</label>
                    <input value={collectibles}
                           type="number"
                           className="input max-w-full"
                           onChange={collectiblesChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('claims')}</label>
                    <input value={claims}
                           type="number"
                           className="input max-w-full"
                           onChange={claimsChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('other')}</label>
                    <input value={other}
                           type="number"
                           className="input max-w-full"
                           onChange={otherChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default OtherAssetsInput;
