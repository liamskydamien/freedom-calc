import { useEffect, useState } from "react";
import axios from "axios";

export const useTestFetch = ()=> {
  const [test, setTest] = useState<string>("");
  const url = "http://localhost:5000/test";
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<String>("");

  const options  = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${url}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  /**
   * Fetches the portfolio from the backend
   */
  const fetchData = async () => {
    setIsLoading(true);
    try {
      // @ts-ignore
      const response = await axios.get(url);
      setTest(response.data.message);
      setIsLoading(false);
    } catch (error: any) {
      setIsError(error.toString());
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

    useEffect(() => {
      fetchData().then(() => console.log("Fetched data successfully"));
    }, []);

    return {isLoading, test, isError};
}
