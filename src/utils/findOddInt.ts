export const findOddInt = (arr: number[]): number => {
    return arr.reduce((acc, num) => acc ^ num, 0);
};
