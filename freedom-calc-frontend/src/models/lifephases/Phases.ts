import { LifePhase } from "./LifePhase";
import { LIFEPHASE } from "../../constants/assets/lifephases";

export class Phases {
  phase: LifePhase[];
  constructor(LifePhase: LifePhase[]) {
    this.phase = LifePhase;
  }

  setPhases(phases: LifePhase[]) {
    this.phase = phases;
  }

  getPhases(): LifePhase[] {
    return this.phase;
  }

  isEmpty(): boolean {
    if (this.phase === LIFEPHASE.getPhases()) {
      return true;
    }
    return this.phase.length === 0;
  }
}
