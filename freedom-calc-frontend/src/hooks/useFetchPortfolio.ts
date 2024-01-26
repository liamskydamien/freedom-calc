import { useEffect, useState } from "react";
import axios from "axios";
import { PortfolioClass } from "../models/optimization/PortfolioClass";

export const useFetchPortfolio = (stocks: number[], target_std: number, market: string) => {
  const [portfolio, setPortfolio] = useState<PortfolioClass[]>(
    [] as PortfolioClass[],
  );
  const url = "backend:5000/optimize-portfolio";
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<String>("");

  const options  = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${url}/optimized`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      selected_stock_table: market,
      selected_ids: stocks,
      percentage: target_std
    },
  };

  /**
   * Fetches the portfolio from the backend
   */
  const fetchData = async () => {
    setIsLoading(true);
    try {
      // @ts-ignore
      const response = await axios.request(options);
      setPortfolio(response.data);
      setIsLoading(false);
    } catch (error: any) {
      setIsError(error.toString());
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData().then(() => console.log("Fetched data successfully"));
  }, []);

  /**
   * Refetches the portfolio from the backend
   */
  const refetch = () => {
    setIsLoading(true);
    fetchData().then((r) => setIsLoading(false));
  };

  return { portfolio, isLoading, isError, refetch };
};
