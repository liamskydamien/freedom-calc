import { useEffect, useState } from "react";
import axios from "axios";
import { PortfolioClass } from "../models/optimization/PortfolioClass";

export const useFetchPortfolio = (stocks: string[], target_std: number) => {
  const [portfolio, setPortfolio] = useState<PortfolioClass[]>([] as PortfolioClass[]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<String>("");


  const options = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://2eb6de2b-f10e-418d-ba6f-9b9d7a4885ac.mock.pstmn.io/optimized',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      "indices": stocks,
      "target_std_dev": target_std
    },
  };

  /**
   * Fetches the portfolio from the backend
   */
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setPortfolio(response.data);
      setIsLoading(false);
    } catch (error : any) {
      setIsError(error.toString());
      console.log(error)
    }
    finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData().then(r => console.log("Fetched data successfully"));
  }, []);

  /**
   * Refetches the portfolio from the backend
   */
  const refetch = () => {
    setIsLoading(true);
    fetchData().then(r => setIsLoading(false));
  };

  return { portfolio, isLoading, isError, refetch };
};

