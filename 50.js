var SmallestInfiniteSet = function() {
    this.minHeap = []; // Min-Heap to store added-back numbers
    this.addedSet = new Set(); // Set to track numbers in the heap
    this.nextNumber = 1; // The next number in the infinite set
};

SmallestInfiniteSet.prototype.popSmallest = function() {
    if (this.minHeap.length > 0) {
        // Remove and return the smallest number from the heap
        const smallest = this.minHeap.shift();
        this.addedSet.delete(smallest);
        return smallest;
    } else {
        // Return the next number in the infinite sequence
        return this.nextNumber++;
    }
};

SmallestInfiniteSet.prototype.addBack = function(num) {
    // Add the number back only if it's smaller than nextNumber and not in the heap
    if (num < this.nextNumber && !this.addedSet.has(num)) {
        this.minHeap.push(num);
        this.minHeap.sort((a, b) => a - b); // Maintain the heap property
        this.addedSet.add(num);
    }
};

// Example usage:
const smallestInfiniteSet = new SmallestInfiniteSet();
console.log(smallestInfiniteSet.popSmallest()); // Output: 1
console.log(smallestInfiniteSet.popSmallest()); // Output: 2
smallestInfiniteSet.addBack(2);
console.log(smallestInfiniteSet.popSmallest()); // Output: 2
console.log(smallestInfiniteSet.popSmallest()); // Output: 3