// Pre-defined API (example simulation)
const pick = 6; // Example picked number
const guess = (num) => {
    if (num === pick) return 0;
    return num > pick ? -1 : 1;
};

// Function to guess the number
var guessNumber = function(n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Calculate middle point
        const res = guess(mid); // Call the API with the guess

        if (res === 0) return mid; // Correct guess
        if (res === -1) right = mid - 1; // Guess was too high
        else left = mid + 1; // Guess was too low
    }

    return -1; // If the number wasn't found (shouldn't occur with valid input)
};

// Example usage
console.log(guessNumber(10)); // Output: 6 (with pick = 6)