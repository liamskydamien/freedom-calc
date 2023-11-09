import {PersonalInformation} from "./personalinformation/PersonalInformation";
import {StartingCapital} from "./startingcapital/StartingCapital";
import {Phases} from "./lifephases/Phases";

export type InputContextProviderState =     {
    personalInformation: PersonalInformation;
    startingCapital: StartingCapital;
    phases: Phases;
    setPersonalInformation: (personalInformation: PersonalInformation) => void;
    setStartingCapital: (startingCapital: StartingCapital) => void;
    setPhases: (phases: Phases) => void;
}
