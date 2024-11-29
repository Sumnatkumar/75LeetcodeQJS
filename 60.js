var minCostClimbingStairs = function(cost) {
    // let n = cost.length;
    // // Initialize the first two steps
    // let first = cost[0];
    // let second = cost[1];

    // // Bottom-up calculation from the 3rd step to the top
    // for (let i = 2; i < n; i++) {
    //     let current = cost[i] + Math.min(first, second); // Minimum cost to reach step i
    //     first = second; // Move forward
    //     second = current;
    // }

    // // Return the minimum cost to reach the top from either of the last two steps
    // return Math.min(first, second);
    let n = cost.length;
    let dp = new Array(n);
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    return Math.min(dp[n - 1], dp[n - 2]);
};

// Example usage:
console.log(minCostClimbingStairs([10, 15, 20])); // Output: 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // Output: 6