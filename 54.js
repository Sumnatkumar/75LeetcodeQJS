var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b); // Sort the potions array
    const n = spells.length;
    const m = potions.length;
    const result = new Array(n);

    for (let i = 0; i < n; i++) {
        const required = Math.ceil(success / spells[i]); // Minimum potion strength needed for success

        // Binary search for the first potion >= required
        let left = 0,
            right = m - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (potions[mid] >= required) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // `left` now points to the first valid potion
        result[i] = m - left; // Number of successful pairs
    }

    return result;
};

// Example usage:
console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)); // Output: [4, 0, 3]
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16)); // Output: [2, 0, 2]