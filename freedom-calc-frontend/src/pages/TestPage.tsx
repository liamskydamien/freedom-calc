import { useTestFetch } from "../hooks/useTestFetch";
import { useFetchPortfolio } from "../hooks/useFetchPortfolio";

const TestPage = () => {

    const {portfolio, isError, isLoading} = useFetchPortfolio([1,2,3,4,5,6,7,8,9,10], 30, "vnstock");

    return (
        <div>
            <h1>Test Page</h1>
          {
            isLoading ? <p>Loading...</p> : isError ? <p>Error</p> : portfolio.map((p) => {
              return <p>{p.optimized_return}</p>
            })
          }
        </div>
    )
}

export default TestPage
