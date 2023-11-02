export class Income{
    dependent: number;
    selfemployed: number;
    capitalgains: number;
    renting: number;
    commercial: number;
    agricultural: number;
    pension: number;
    other: number;

    constructor(dependent: number,
                selfemployed: number,
                capitalgains: number,
                renting: number,
                commercial: number,
                agricultural: number,
                pension: number,
                other: number) {
        this.dependent = dependent;
        this.selfemployed = selfemployed;
        this.capitalgains = capitalgains;
        this.renting = renting;
        this.commercial = commercial;
        this.agricultural = agricultural;
        this.pension = pension;
        this.other = other;
    }

    getTotalIncome(): number {
        return this.dependent + this.selfemployed + this.capitalgains + this.renting + this.commercial + this.agricultural + this.pension + this.other;
    }

}
