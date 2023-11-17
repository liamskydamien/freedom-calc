export const calculateInterpolatedArray = (array: number[], steps: number) => {
  const interpolationPerArray: number[][] = [];
  for (let i = 0; i < array.length; i++) {
    const interpolatedArray: number[] = [];
    if (i < array.length - 1) {
      const startValue = array[i];
      const endValue = array[i + 1];
      const stepSize = (endValue - startValue) / steps;
      for (let j = 0; j < steps; j++) {
        interpolatedArray.push(startValue + j * stepSize);
      }
    } else {
      interpolatedArray.push(array[i]);
    }
    interpolationPerArray.push(interpolatedArray);
  }
  return interpolationPerArray.flat();
};
