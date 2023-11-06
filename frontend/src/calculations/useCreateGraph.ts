export const useCreateGraph = (wealth : number[],
                               costs : number[],
                               startAge : number) : any[] => {
    const graphData = [];

    for (let i = 0; i < wealth.length; i++) {
        graphData.push({
            age: i + startAge,
            wealth: wealth[i],
            costs: costs[i]
        });
    }
    return graphData;
}
