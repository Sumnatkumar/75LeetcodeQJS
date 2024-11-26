var pivotIndex = function(nums) {
    let totalSum = nums.reduce((sum, num) => sum + num, 0); // Calculate the total sum
    let leftSum = 0; // Initialize the left sum

    for (let i = 0; i < nums.length; i++) {
        // Check if the left sum equals the right sum
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i; // Found the pivot index
        }
        leftSum += nums[i]; // Update the left sum
    }

    return -1; // No pivot index found
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));