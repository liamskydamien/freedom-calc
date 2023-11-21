import {Point} from "../models/Point";

/**
 * Calculates the Point of Financial Freedom
 * @param wealth wealth array
 * @param costs costs array
 */
export function calculatePOF(wealth : number[], costs : number[]) : Point | null {

    if (wealth.length !== costs.length || wealth.length === 0 || costs.length === 0) {
        return null;
    }

    const wealthStart = wealth[0];
    const costStart = costs[0];
    if (wealthStart < costStart) {
        for (let i = 0; i < wealth.length; i++) {
            if (wealth[i] >= costs[i]) { // When wealth is greater than costs, return the point
                return new Point(i, costs[i]);
            }
        }
    }
    else {
        return new Point(0, costStart);
    }
    return null;
}
