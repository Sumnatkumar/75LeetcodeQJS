// var moveZeroes = function(nums) {
//     let nonZeroIndex = 0; // Pointer for the next position of a non-zero element

//     // Move all non-zero elements to the front
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]]; // Swap
//             nonZeroIndex++;
//         }
//     }
// };

// // Examples
// let nums1 = [0, 1, 0, 3, 12];
// moveZeroes(nums1);
// console.log(nums1); // Output: [1, 3, 12, 0, 0]

// let nums2 = [0];
// moveZeroes(nums2);
// console.log(nums2); // Output: [0]
var moveZeroesAndShift = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[count] = nums[i];
            count = count + 1;
        }
    }
    while (count < nums.length) {
        nums[count++] = 0;
    }
    return nums;
};
console.log(moveZeroesAndShift([0, 1, 0, 3, 12]));