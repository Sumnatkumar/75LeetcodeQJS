// var singleNumber = function(nums) {
//     let result = 0;

//     for (let num of nums) {
//         result ^= num; // XOR all elements
//     }

//     return result;
// };
var singleNumber = function(nums) {
    const ht = {};

    for (const num of nums) {
        ht[num] = ht[num] + 1 || 1;
    }

    for (const key in ht) {
        if (ht[key] === 1) {
            return key;
        }
    }
};
// Example usage
console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber([1])); // Output: 1