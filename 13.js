// var maxOperations = function(nums, k) {
//     let count = 0;
//     let map = new Map();

//     for (let num of nums) {
//         let complement = k - num;

//         if (map.has(complement) && map.get(complement) > 0) {
//             // Pair found
//             count++;
//             map.set(complement, map.get(complement) - 1); // Decrease the count of the complement
//         } else {
//             // Add the current number to the map
//             map.set(num, (map.get(num) || 0) + 1);
//         }
//     }

//     return count;
// };

// // Examples
// console.log(maxOperations([1, 2, 3, 4], 5)); // Output: 2
// console.log(maxOperations([3, 1, 3, 4, 3], 6)); // Output: 1

var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let count = 0;
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        const tempSum = nums[left] + nums[right];
        if (tempSum == k) {
            count++;
            left++;
            right--;
        } else if (tempSum < k) {
            left++;
        } else {
            right--;
        }
    }
    return count;
};
console.log(maxOperations([3, 1, 3, 4, 3], 6));