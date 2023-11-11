export const useCreateGraph = (wealth : number[],
                               costs : number[],
                               ciGraph : number[],
                               wealthGraph : number[],
                               startAge : number) : any[] => {
    const graphData = [];

    for (let i = 0; i < wealth.length; i++) {
        graphData.push({
            age: i + startAge,
            wealth: wealth[i],
            costs: costs[i],
            wealthGraph: wealthGraph[i],
            ciGraph: ciGraph[i]
        });
    }
    return graphData;
}
