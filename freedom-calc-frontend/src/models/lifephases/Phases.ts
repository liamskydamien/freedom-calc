import {LifePhase} from "./LifePhase";

export class Phases {
    phase: LifePhase[];
    constructor(phase: LifePhase[]) {
        this.phase = phase;
    }
    getPhases(): LifePhase[] {
        return this.phase;
    }
}
