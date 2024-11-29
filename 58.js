var combinationSum3 = function(k, n) {
    // const result = [];

    // // Backtracking function
    // const backtrack = (start, combination, sum) => {
    //     if (combination.length === k) {
    //         if (sum === n) {
    //             result.push([...combination]); // Found a valid combination
    //         }
    //         return; // Stop if the combination is complete
    //     }

    //     // Try all numbers from 'start' to 9
    //     for (let i = start; i <= 9; i++) {
    //         if (sum + i > n) break; // Prune paths where the sum exceeds 'n'

    //         combination.push(i); // Add current number
    //         backtrack(i + 1, combination, sum + i); // Recursive call with updated sum
    //         combination.pop(); // Backtrack: remove the last number added
    //     }
    // };

    // backtrack(1, [], 0); // Start from 1, empty combination, sum 0
    // return result;
    let result = [];

    function dfs(index, current, total) {
        if (total < 0 || current.length > k) return;
        if (total === 0 && current.length === k) {
            result.push([...current]);
        }
        for (let i = index; i <= 9; i++) {
            current.push(i);
            dfs(i + 1, current, total - i);
            current.pop();
        }
    }
    dfs(1, [], n);
    return result;
};

// Example usage:
console.log(combinationSum3(3, 7)); // Output: [[1,2,4]]
console.log(combinationSum3(3, 9)); // Output: [[1,2,6],[1,3,5],[2,3,4]]
console.log(combinationSum3(4, 1)); // Output: []