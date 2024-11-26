var largestAltitude = function(gain) {
    let currentAltitude = 0; // Start at 0 altitude
    let maxAltitude = 0; // Highest altitude tracker

    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i]; // Update the altitude
        maxAltitude = Math.max(maxAltitude, currentAltitude); // Track the highest altitude
    }

    return maxAltitude;
};
console.log(largestAltitude([-5, 1, 5, 0, -7]));