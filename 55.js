var findPeakElement = function(nums) {
    // let left = 0;
    // let right = nums.length - 1;

    // while (left < right) {
    //     const mid = Math.floor((left + right) / 2);

    //     // Compare mid with the next element
    //     if (nums[mid] > nums[mid + 1]) {
    //         // Peak is in the left half, including mid
    //         right = mid;
    //     } else {
    //         // Peak is in the right half
    //         left = mid + 1;
    //     }
    // }

    // // `left` and `right` converge to the peak
    // return left;
    let n = nums.length - 1;
    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[i + 1]) {
            return i;
        }
    }
    return n;
};

// Example usage:
console.log(findPeakElement([1, 2, 3, 1])); // Output: 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5 or 1