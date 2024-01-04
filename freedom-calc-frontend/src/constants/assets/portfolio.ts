import {PortfolioClass, Stock} from "../../models/optimization/PortfolioClass";

export const TEST_PORTFOLIO = () : PortfolioClass => {
    const stocks : Stock[] = [
        new Stock("AAPL", 0.1, 0.2, 0.25),
        new Stock("MSFT", 0.2, 0.3, 0.25),
        new Stock("GOOG", 0.3, 0.4, 0.25),
        new Stock("AMZN", 0.4, 0.5, 0.25)
    ];

    return new PortfolioClass("Test Portfolio", 0.25, 0.25, stocks);

}
