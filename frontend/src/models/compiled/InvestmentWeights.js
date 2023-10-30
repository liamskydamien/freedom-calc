"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentWeights = void 0;
var InvestmentWeights = /** @class */ (function () {
    function InvestmentWeights(cash, stocks, preciousMetals, realestate, crypto, other) {
        this.cash = cash;
        this.stocks = stocks;
        this.preciousMetals = preciousMetals;
        this.realestate = realestate;
        this.crypto = crypto;
        this.other = other;
        this.validate();
    }
    InvestmentWeights.prototype.validate = function () {
        if (this.cash + this.stocks + this.preciousMetals + this.realestate + this.crypto + this.other !== 1) {
            throw new Error("Investment weights must add up to 1");
        }
    };
    InvestmentWeights.prototype.getInvestmentWeight = function (assetGroup) {
        switch (assetGroup) {
            case "cash":
                return this.cash;
            case "stocks":
                return this.stocks;
            case "preciousMetals":
                return this.preciousMetals;
            case "realestate":
                return this.realestate;
            case "crypto":
                return this.crypto;
            case "other":
                return this.other;
            default:
                throw new Error("Invalid asset group");
        }
    };
    return InvestmentWeights;
}());
exports.InvestmentWeights = InvestmentWeights;
