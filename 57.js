var letterCombinations = function(digits) {
    // if (digits.length === 0) return [];

    // // Map of digits to corresponding letters
    // const phoneMap = {
    //     '2': 'abc',
    //     '3': 'def',
    //     '4': 'ghi',
    //     '5': 'jkl',
    //     '6': 'mno',
    //     '7': 'pqrs',
    //     '8': 'tuv',
    //     '9': 'wxyz'
    // };

    // const result = [];

    // // Recursive backtracking function
    // const backtrack = (combination, nextDigits) => {
    //     if (nextDigits.length === 0) {
    //         result.push(combination); // Completed a valid combination
    //     } else {
    //         // Take the first digit and find corresponding letters
    //         const digit = nextDigits[0];
    //         const letters = phoneMap[digit];

    //         for (let letter of letters) {
    //             backtrack(combination + letter, nextDigits.slice(1)); // Add letter and proceed
    //         }
    //     }
    // };

    // // Start backtracking from the first digit
    // backtrack('', digits);
    // return result;
    if (digits.length === 0) return [];
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    const queue = [''];
    for (const digit of digits) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const current = queue.shift();
            map[digit].split('').forEach(i => queue.push(current + i));
        }
    }
    return queue;
};

// Example usage:
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // Output: []
console.log(letterCombinations("2")); // Output: ["a","b","c"]