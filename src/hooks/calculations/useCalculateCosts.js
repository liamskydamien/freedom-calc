export const useCalculateCosts = ({annualCosts, inflationRate, timeframe}) => {
    // Calculate the total cost over the timeframe
    // Return an array starting with the total cost and then subtracting the annual costs for each year.

    let remainingCosts = []; // Array of remaining costs for each year
    let totalCosts = annualCosts.reduce((sum, cost) => sum + cost, 0); // Total cost over the timeframe

    for (let year = 0; year < timeframe; year++) { // For each year
        totalCosts = totalCosts * (1 + inflationRate); // Calculate the new annual costs
        totalCosts -= annualCosts[year]; // Subtract the annual costs from the total cost
        remainingCosts.push(Math.round(totalCosts)); // Add the remaining cost to the array as a rounded number
    }

    return remainingCosts;
};
