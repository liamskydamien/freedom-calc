import { readCovariances } from "../../calculations/portfolio/readCSVData";

describe("readCSVData", () => {
  test("should read csv data", () => {
    const covariances = readCovariances();
    console.log(covariances ? covariances : "no covariances");
  });
});
