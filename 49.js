// var findKthLargest = function(nums, k) {
//     const minHeap = []; // Initialize an empty min-heap

//     for (const num of nums) {
//         // Add each element to the heap
//         minHeap.push(num);
//         minHeap.sort((a, b) => a - b); // Maintain heap property (smallest element at the top)

//         // Keep heap size at k
//         if (minHeap.length > k) {
//             minHeap.shift(); // Remove the smallest element if heap size exceeds k
//         }
//     }

//     return minHeap[0]; // The root contains the kth largest element
// };
var findKthLargest = function(nums, k) {
    let minVal = Infinity,
        maxVal = -Infinity;
    for (let num of nums) {
        minVal = Math.min(minVal, num);
        maxVal = Math.max(maxVal, num);
    }
    let arr = new Array(maxVal - minVal + 1).fill(0);
    for (let num of nums) {
        arr[num - minVal]++;
    }
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        count += arr[i];
        if (count >= k) return i + minVal;
    }
};

// Example usage:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4