var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;

    // Initialize dp array (m+1 rows, n+1 columns)
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill the base cases
    for (let i = 0; i <= m; i++) dp[i][0] = i; // Deleting all characters from word1
    for (let j = 0; j <= n; j++) dp[0][j] = j; // Inserting all characters into word1

    // Fill the dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // Characters match, no operation needed
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j], // Delete operation
                    dp[i][j - 1], // Insert operation
                    dp[i - 1][j - 1] // Replace operation
                );
            }
        }
    }

    return dp[m][n]; // Result is in the bottom-right corner of the dp table
};

// Example usage
console.log(minDistance("horse", "ros")); // Output: 3
console.log(minDistance("intention", "execution")); // Output: 5