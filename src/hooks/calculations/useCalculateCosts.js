const useCalculateCosts = ({annualCosts, inflationRate, timeframe}) => {
    // Calculate the total cost over the timeframe
    // Return an array starting with the total cost and then subtracting the annual costs for each year.

    let remainingCosts = []; // Array of remaining costs for each year
    let totalCosts = annualCosts.reduce((sum, cost) => sum + cost, 0); // Total cost over the timeframe
    remainingCosts.push(totalCosts); // Add the total cost to the array

    for (let year = 1; year <= timeframe; year++) { // For each year
        annualCosts = annualCosts.map(cost => cost * (1 + inflationRate)); // Increase the annual costs by the inflation rate
        totalCosts -= annualCosts.reduce((sum, cost) => sum + cost, 0); // Subtract the annual costs from the total cost
        remainingCosts.push(totalCosts); // Add the remaining cost to the array
    }

    return remainingCosts;
};
