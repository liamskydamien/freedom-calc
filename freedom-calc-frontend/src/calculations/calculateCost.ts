/**
 * Calculates the remaining cost of a person's life
 * @param annualCosts the costs per year
 * @param inflationRate the inflation rate
 * @param reductionFactor the reduction factor
 * @param wealthToKeep the wealth to keep
 */
export function calculateCost(
  annualCosts: number[],
  inflationRate: number,
  reductionFactor: number,
  wealthToKeep: number,
): number[] {
  let remainingCosts: number[] = []; // Array of remaining costs for each year

  const costWithInflation: number[] = annualCosts.map((cost) => {
    // Calculate the cost with inflation
    return cost * (1 + inflationRate);
  });

  let totalCosts: number =
    costWithInflation.reduce((sum, cost) => sum + cost, 0) / reductionFactor; // Calculate the total cost

  if (totalCosts < 0) throw new Error("Total costs cannot be negative");

  for (let year: number = 0; year < annualCosts.length; year++) {
    // For each year
    totalCosts -= costWithInflation[year] / reductionFactor; // Subtract the annual costs from the total cost
    remainingCosts.push(
      Number(
        (totalCosts + wealthToKeep / reductionFactor).toFixed(
          reductionFactor < 10000 ? 2 : 6,
        ),
      ),
    ); // Add the remaining cost to the array
  }

  return remainingCosts;
}
