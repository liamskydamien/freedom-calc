import {AssetGroup} from "../../models/startingcapital/AssetGroup";
import {GROWTH_RATE} from "./growthrate";

export const ASSET_GROUPS : AssetGroup[] = [
    new AssetGroup("cash", GROWTH_RATE.cash, 0.0),
    new AssetGroup("stocks", GROWTH_RATE.stocks, 0.0),
    new AssetGroup("crypto", GROWTH_RATE.crypto, 0.0),
    new AssetGroup("realestate", GROWTH_RATE.realestate, 0.0),
    new AssetGroup("preciousMetals", GROWTH_RATE.preciousMetals, 0.0),
    new AssetGroup("other", GROWTH_RATE.other, 0.0)
]
