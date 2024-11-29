var longestCommonSubsequence = function(text1, text2) {
    // const m = text1.length;
    // const n = text2.length;
    let m = text1.length;
    let n = text2.length;
    // Create a 2D DP array with dimensions (m+1) x (n+1)
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]; // Characters match
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Characters don't match
            }
        }
    }

    // The length of the longest common subsequence is in dp[m][n]
    return dp[m][n];
};

// Example usage
console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
console.log(longestCommonSubsequence("abc", "abc")); // Output: 3
console.log(longestCommonSubsequence("abc", "def")); // Output: 0