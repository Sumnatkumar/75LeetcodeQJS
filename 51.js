// var maxScore = function(nums1, nums2, k) {
//     // Pair the values and sort by nums2 in descending order
//     const pairs = nums1.map((num, i) => [num, nums2[i]]);
//     pairs.sort((a, b) => b[1] - a[1]); // Sort by nums2 descending

//     let maxScore = 0; // To store the maximum score
//     let sumNums1 = 0; // Sum of selected nums1 values
//     const minHeap = []; // Min-Heap to keep track of k elements in nums1

//     for (const [num1, num2] of pairs) {
//         // Add the current nums1 value to the heap and update sum
//         sumNums1 += num1;
//         minHeap.push(num1);
//         minHeap.sort((a, b) => a - b); // Keep heap sorted

//         // If more than k elements in the heap, remove the smallest
//         if (minHeap.length > k) {
//             sumNums1 -= minHeap.shift(); // Remove smallest element
//         }

//         // If exactly k elements in the heap, calculate the score
//         if (minHeap.length === k) {
//             maxScore = Math.max(maxScore, sumNums1 * num2);
//         }
//     }

//     return maxScore;
// };
var maxScore = function(nums1, nums2, k) {

    let minHeap = new MinPriorityQueue();

    let zipped = nums1.map((num1, i) => [num1, nums2[i]]);
    zipped.sort((a, b) => b[1] - a[1]);

    let res = 0,
        sum = 0;

    for (let [num, min] of zipped) {

        minHeap.enqueue(num);
        sum += num;

        if (minHeap.size() === k) {
            res = Math.max(res, sum * min);

            sum -= minHeap.dequeue().element;
        }
    }
    return res;
};

// Example usage:
console.log(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3)); // Output: 12
console.log(maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1)); // Output: 30