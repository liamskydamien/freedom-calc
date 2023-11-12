import {LifePhase} from "../../models/lifephases/LifePhase";
import {Income} from "../../models/lifephases/Income";
import {Expenses} from "../../models/lifephases/Expenses";
import {Phases} from "../../models/lifephases/Phases";

export const LIFEPHASE = new Phases([
    new LifePhase(
    "",
    0,
0,
    new Income(0, 0, 0, 0, 0, 0),
    new Expenses(0, 0, 0, 0, 0, 0, 0, 0)
    )])
