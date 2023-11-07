export class Income{
    dependent: number;
    selfemployed: number;
    capitalgains: number;
    renting: number;
    pension: number;
    other: number;

    constructor(dependent: number,
                selfemployed: number,
                capitalgains: number,
                renting: number,
                pension: number,
                other: number) {
        this.dependent = dependent;
        this.selfemployed = selfemployed;
        this.capitalgains = capitalgains;
        this.renting = renting;
        this.pension = pension;
        this.other = other;
    }

    getTotalIncome(): number {
        return this.dependent +
            this.selfemployed +
            this.capitalgains +
            this.renting +
            this.pension +
            this.other;
    }

}
