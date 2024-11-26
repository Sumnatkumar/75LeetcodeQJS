var RecentCounter = function() {
    this.queue = [];
};

RecentCounter.prototype.ping = function(t) {
    this.queue.push(t); // Add the new request time

    // Remove timestamps outside the range [t - 3000, t]
    while (this.queue[0] < t - 3000) {
        this.queue.shift(); // Remove the oldest timestamp
    }

    return this.queue.length;
};

// Instantiate RecentCounter
let recentCounter = new RecentCounter();

// Call the ping method with the given inputs
console.log(recentCounter.ping(1)); // Output: 1
console.log(recentCounter.ping(100)); // Output: 2
console.log(recentCounter.ping(3001)); // Output: 3
console.log(recentCounter.ping(3002)); // Output: 3