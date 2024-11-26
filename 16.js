var longestOnes = function(nums, k) {
    let left = 0; // Left pointer of the window
    let maxOnes = 0; // Maximum length of consecutive 1s (with flips)
    let zeroCount = 0; // Count of flipped zeros in the current window

    for (let right = 0; right < nums.length; right++) {
        // If the current element is 0, increase the zero count
        if (nums[right] === 0) {
            zeroCount++;
        }

        // If zeroCount exceeds k, shrink the window from the left
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--; // Reduce count of flipped zeros
            }
            left++; // Move left pointer to shrink the window
        }

        // Update the maximum length of 1s with flipped zeros
        maxOnes = Math.max(maxOnes, right - left + 1);
    }

    return maxOnes;
};
console.log(longestOnes(nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2));