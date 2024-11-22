var findMaxAverage = function(nums, k) {
    // Compute the sum of the first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // Slide the window across the array
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    // Return the maximum average
    return maxSum / k;
};

// Examples
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // Output: 12.75000
console.log(findMaxAverage([5], 1)); // Output: 5.00000