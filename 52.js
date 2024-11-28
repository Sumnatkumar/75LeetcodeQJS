var totalCost = function(costs, k, candidates) {
    // let leftHeap = []; // Min-Heap for the left side
    // let rightHeap = []; // Min-Heap for the right side

    // let left = 0; // Left pointer
    // let right = costs.length - 1; // Right pointer
    // let totalCost = 0; // To store the total hiring cost

    // // Helper function to maintain Min-Heap
    // const minHeapify = (heap) => heap.sort((a, b) => a - b);

    // // Add initial candidates to the heaps
    // while (left < candidates && left <= right) {
    //     leftHeap.push(costs[left++]);
    //     minHeapify(leftHeap);
    // }
    // while (right >= costs.length - candidates && right >= left) {
    //     rightHeap.push(costs[right--]);
    //     minHeapify(rightHeap);
    // }

    // // Hire workers for k sessions
    // for (let i = 0; i < k; i++) {
    //     if (leftHeap.length > 0 && (rightHeap.length === 0 || leftHeap[0] <= rightHeap[0])) {
    //         totalCost += leftHeap.shift(); // Remove and add the smallest cost from the left heap
    //         if (left <= right) { // Add a new candidate from the left if available
    //             leftHeap.push(costs[left++]);
    //             minHeapify(leftHeap);
    //         }
    //     } else {
    //         totalCost += rightHeap.shift(); // Remove and add the smallest cost from the right heap
    //         if (right >= left) { // Add a new candidate from the right if available
    //             rightHeap.push(costs[right--]);
    //             minHeapify(rightHeap);
    //         }
    //     }
    // }

    // return totalCost;
    let pq = new MinPriorityQueue({
        compare: (a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
    });

    let len = costs.length;
    let l = 0,
        r = len - 1;


    for (; l < candidates && l < len; l++) {
        pq.enqueue([costs[l], l]);
    }


    for (; r >= len - candidates && r >= l; r--) {
        pq.enqueue([costs[r], r]);
    }

    let totalCost = 0;


    while (k > 0) {
        let [cost, idx] = pq.dequeue();
        totalCost += cost;

        if (idx < l && l <= r) {
            pq.enqueue([costs[l], l]);
            l++;
        } else if (idx > r && l <= r) {
            pq.enqueue([costs[r], r]);
            r--;
        }
        k--;
    }

    return totalCost;
};

// Example usage:
console.log(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4)); // Output: 11
console.log(totalCost([1, 2, 4, 1], 3, 3)); // Output: 4