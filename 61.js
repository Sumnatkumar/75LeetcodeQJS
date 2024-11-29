// var rob = function(nums) {
//     let n = nums.length;
//     if (n === 0) return 0; // No houses
//     if (n === 1) return nums[0]; // Only one house

//     // Initialize dp array
//     let dp = new Array(n);
//     dp[0] = nums[0]; // Rob the first house
//     dp[1] = Math.max(nums[0], nums[1]); // Max of first or second house

//     // Fill dp array based on recurrence relation
//     for (let i = 2; i < n; i++) {
//         dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
//     }

//     // The last element of dp contains the maximum amount we can rob
//     return dp[n - 1];
// };
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length == 1) return nums[0];
    let dp = Array(nums + 1).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    return dp[dp.length - 1];
};
// Example usage:
console.log(rob([1, 2, 3, 1])); // Output: 4
console.log(rob([2, 7, 9, 3, 1])); // Output: 12