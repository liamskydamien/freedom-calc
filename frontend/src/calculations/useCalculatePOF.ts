type Point = {
    x: number;
    y: number;
};

export const useCalculatePOF = (wealth : number[], costs : number[]) : Point | null => {
    if (wealth.length !== costs.length) {
        return null;
    }
    let pof : Point | null = null;

    const wealthStart = wealth[0];
    const costStart = costs[0];

    if (wealthStart < costStart) {
        for (let i = 0; i < wealth.length; i++) {
            if (wealth[i] >= costs[i]) {
                pof = {
                    x: i,
                    y: costs[i]
                };
                break;
            }
        }
    }
    else {
        pof = {
            x: 0,
            y: 0
        };
    }
    return pof;
}
