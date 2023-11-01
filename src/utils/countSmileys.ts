export const countSmileys = (arr: string[]): number => {
    if (!Array.isArray(arr)) return 0;
    const regex = /^[:;][-~]?[)D]$/;
    return arr.filter(face => regex.test(face)).length;
};
