/**
 * Scales down the size of the array by 1000
 * @param array The array to scale down
 */
export const useScaleDownSize = (array: number[]) => {
    return array.map((value) => {
        return value / 1000;
    });
}
