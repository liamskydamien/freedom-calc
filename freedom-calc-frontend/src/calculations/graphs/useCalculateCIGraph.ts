import { useScaleDownSize } from "../utility/useScaleDownSize";
import { CIGraph } from "../../models/types/CIGraph";

/**
 * Calculate the cumulative income graph
 * @param data - The data to calculate the cumulative income graph from
 * @param wealth - The wealth data to scale the data down to
 */
export function useCalculateCIGraph(
  data: number[],
  wealth: number[],
): CIGraph {
  const normalizedData = useScaleDownSize(data);
  const ciGraph: number[] = [];
  const wealthGraph: number[] = wealth;
  let total = 0;
  for (let i = 0; i < normalizedData.length; i++) {
    total += normalizedData[i] > 0 ? normalizedData[i] : 0;
    ciGraph.push(total);
    wealthGraph[i] -= total;
  }
  return { ciGraph, wealthGraph };
}
