// var numTilings = function(n) {
//     const MOD = 1e9 + 7;

//     if (n === 1) return 1;
//     if (n === 2) return 2;

//     let dp = new Array(n + 1).fill(0);

//     // Base cases
//     dp[0] = 1; // 1 way to tile a 0-width board (empty board)
//     dp[1] = 1; // 1 way for a 2x1 board
//     dp[2] = 2; // 2 ways for a 2x2 board

//     // Fill DP table
//     for (let i = 3; i <= n; i++) {
//         dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
//     }

//     return dp[n];
// };
var numTilings = function(n) {
    const MOD = Math.pow(10, 9) + 7;
    let dp = {};
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 5;
    for (let i = 4; i <= n; i++) {
        dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
    }
    return dp[n];
};
// Example usage
console.log(numTilings(3)); // Output: 5
console.log(numTilings(1)); // Output: 1
console.log(numTilings(5)); // Output: 24