import { useEffect, useState } from "react";
import axios from "axios";
import { PortfolioClass, Stock } from "../models/optimization/PortfolioClass";

export const useFetchPortfolio = (stocks: string[], target_std: number) => {
  const [portfolio, setPortfolio] = useState<PortfolioClass>({} as PortfolioClass);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<String>("");


  const options = {
    method: "GET",
    url: `https://2eb6de2b-f10e-418d-ba6f-9b9d7a4885ac.mock.pstmn.io/optimization`,
    headers: {
      "x-forwarded-for": "xxxxxxxxx",
      "x-forwarded-proto": "xxxxxxxxx",
      "x-forwarded-port": "xxxxxxxxx",
      "host": "45534ef3-3895-47ab-a9a6-aaa163056870.mock.pstmn.io",
      "x-amzn-trace-id": "Root=1-6563022f-56c39bd00ee217fb48f01aa4",
      "accept": "application/json, text/plain, */*",
      "accept-encoding": "gzip",
      "user-agent": "okhttp/4.9.2"
    },
    data: {
      "indices": stocks,
      "target_std_dev": target_std
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setPortfolio(response.data);
      setIsLoading(false);
      console.log(response.data)
    } catch (error : any) {
      setIsError(error.toString());
      console.log(error)
    }
    finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData().then(r => console.log("fetched"));
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData().then(r => setIsLoading(false));
  };

  return { portfolio, isLoading, isError };
};

