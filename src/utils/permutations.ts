export const generatePermutations = (input: string): string[] => {
    if (input.length === 0) return [''];
    const chars = input.split('');
    const result = [];
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        const remainingChars = chars.slice(0, i).concat(chars.slice(i + 1)).join('');
        for (const permutation of generatePermutations(remainingChars)) {
            result.push(char + permutation);
        }
    }
    return result;
};
