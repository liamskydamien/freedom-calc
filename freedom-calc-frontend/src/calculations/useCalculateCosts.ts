import {useScaleDownSize} from "./utility/useScaleDownSize";

export const useCalculateCosts = (annualCosts: number[],
                                  inflationRate: number,
                                  timeframe: number) :number[] => {
    // Calculate the total cost over the timeframe
    // Return an array starting with the total cost and then subtracting the annual costs for each year.

    let remainingCosts : number[] = []; // Array of remaining costs for each year

    const costWithInflation : number[] = annualCosts.map( (cost) => {
        return cost * (1 + inflationRate);
    })

    let totalCosts = costWithInflation.reduce((sum, cost) => sum + cost, 0);

    if(totalCosts < 0) throw new Error("Total costs cannot be negative"); // Total costs cannot be negative

    for (let year : number = 0; year <= timeframe; year++) { // For each year
        totalCosts -= costWithInflation[year]; // Subtract the annual costs from the total cost
        remainingCosts.push(Math.round(totalCosts)); // Add the remaining cost to the array as a rounded number
    }

    return useScaleDownSize(remainingCosts);
};
