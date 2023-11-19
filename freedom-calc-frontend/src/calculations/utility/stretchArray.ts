export const stretchArray = (array: number[], length: number[]) => {
  const stretchedArray: number[] = [];
  for (let i = 0; i < array.length; i++) {
    const stretch = length[i];
    for (let j = 0; j <= stretch; j++) {
      stretchedArray.push(array[i]);
    }
  }
  return stretchedArray;
};
