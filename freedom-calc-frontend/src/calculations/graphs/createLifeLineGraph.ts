/**
 * Creates a graph for the lifeline graph
 * @param wealth user's wealth
 * @param cost user's cost
 * @param startAge user's start age
 */
export function createLifeLineGraph(
  wealth: number[],
  cost: number[],
  startAge: number,
) {
  const lifeLineGraph = [];
  for (let i = 0; i < wealth.length; i++) {
    lifeLineGraph.push({
      name: i + startAge,
      wealth: wealth[i],
      cost: cost[i],
    });
  }
  return lifeLineGraph;
}
