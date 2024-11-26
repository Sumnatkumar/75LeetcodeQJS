var longestSubarray = function(nums) {
    let left = 0; // Left pointer of the window
    let zeroCount = 0; // To count zeros in the current window
    let maxOnes = 0; // Store the maximum length of subarray of 1's

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++; // Increment zero count if 0 is encountered
        }

        // Shrink the window if zero count exceeds 1
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--; // Decrease zero count when removing a zero
            }
            left++; // Move the left pointer
        }

        // Calculate the maximum length, ensuring at least one element is deleted
        maxOnes = Math.max(maxOnes, right - left);
    }

    return maxOnes;
};
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));