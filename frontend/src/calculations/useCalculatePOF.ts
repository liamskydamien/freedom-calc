type Point = {
    x: number;
    y: number;
};

export const useCalculatePOF = (wealth : number[], costs : number[], startAge : number) : Point | null => {
    if (wealth.length < 2 || costs.length < 2) {
        throw new Error('Each array must have at least two points (two years of data).');
    }

    // Calculate slope (m) and y-intercept (b) for each line
    const getSlopeAndIntercept = (yValues: number[]): [number, number] => {
        const x1 = 0;
        const x2 = 1;
        const y1 = yValues[0];
        const y2 = yValues[1];

        const m = (y2 - y1) / (x2 - x1);
        const b = y1 - m * x1;

        return [m, b];
    };

    const [m1, b1] = getSlopeAndIntercept(wealth);
    const [m2, b2] = getSlopeAndIntercept(costs);

    // Check if lines are parallel (slopes are equal)
    if (m1 === m2) {
        // If the y-intercepts are also equal, the lines are coincident (the same line).
        // Otherwise, they are parallel and never intersect.
        return b1 === b2 ? null : null; // Adjust as needed to handle coincident lines.
    }

    // Calculate x value of intersection point
    const x = ((b2 - b1) / (m1 - m2) + startAge)

    // Calculate y value of intersection point using one of the line equations
    const y = m1 * x + b1;

    // Return the intersection point
    return { x, y };
}
