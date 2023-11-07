export class Progress{
    personalInformation: boolean;
    startingCapital: boolean;
    incomeCosts: boolean;
    lifePhases: boolean;
    optimisation: boolean;

    constructor() {
        this.personalInformation = false;
        this.startingCapital = false;
        this.incomeCosts = false;
        this.lifePhases = false;
        this.optimisation = false;
    }

    isPersonalInformation(): boolean {
        return this.personalInformation;
    }

    setPersonalInformation(personalInformation: boolean): void {
        this.personalInformation = personalInformation;
    }

    isStartingCapital(): boolean {
        return this.startingCapital;
    }

    setStartingCapital(startingCapital: boolean): void {
        this.startingCapital = startingCapital;
    }

    isIncomeCosts(): boolean {
        return this.incomeCosts;
    }

    setIncomeCosts(incomeCosts: boolean): void {
        this.incomeCosts = incomeCosts;
    }

    isLifePhases(): boolean {
        return this.lifePhases;
    }

    setLifePhases(lifePhases: boolean): void {
        this.lifePhases = lifePhases;
    }

    isOptimisation(): boolean {
        return this.optimisation;
    }

    setOptimisation(optimisation: boolean): void {
        this.optimisation = optimisation;
    }
}
