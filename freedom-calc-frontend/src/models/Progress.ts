export class Progress {
  personalInformation: boolean;
  startingCapital: boolean;
  lifephases: boolean;
  pof: boolean;
  optimisation: boolean;

  constructor() {
    this.personalInformation = false;
    this.startingCapital = false;
    this.lifephases = false;
    this.pof = false;
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

  isPof(): boolean {
    return this.pof;
  }

  setPof(pof: boolean): void {
    this.pof = pof;
  }

  isLifephases(): boolean {
    return this.lifephases;
  }

  setLifephases(lifephases: boolean): void {
    this.lifephases = lifephases;
  }

  isOptimisation(): boolean {
    return this.optimisation;
  }

  setOptimisation(optimisation: boolean): void {
    this.optimisation = optimisation;
  }
}
