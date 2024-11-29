// var uniquePaths = function(m, n) {
//     // Create a 2D array dp with dimensions m x n
//     let dp = Array(m).fill(0).map(() => Array(n).fill(0));

//     // Initialize the first row and first column to 1
//     for (let i = 0; i < m; i++) dp[i][0] = 1;
//     for (let j = 0; j < n; j++) dp[0][j] = 1;

//     // Fill the DP table using the recursive relation
//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//         }
//     }

//     return dp[m - 1][n - 1]; // The bottom-right corner
// };
// var uniquePaths = function(m, n) {
//     let dp = Array(n).fill(1); // Initialize a 1D array for the first row

//     // Update the dp array for each row
//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             dp[j] += dp[j - 1];
//         }
//     }

//     return dp[n - 1];
// };
var uniquePaths = function(m, n) {
    let totalSteps = m + n - 2; // Total moves
    let downSteps = m - 1; // Moves down

    // Function to calculate nCr (combinations)
    function factorial(x) {
        let res = 1;
        for (let i = 1; i <= x; i++) res *= i;
        return res;
    }

    return Math.round(factorial(totalSteps) / (factorial(downSteps) * factorial(totalSteps - downSteps)));
};

// Example usage
console.log(uniquePaths(3, 7)); // Output: 28


// Example usage
console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3

// Example usage
console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3