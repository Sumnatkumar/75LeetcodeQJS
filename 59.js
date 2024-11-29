var tribonacci = function(n) {
    // // Base cases
    // if (n === 0) return 0;
    // if (n === 1 || n === 2) return 1;

    // // Initialize the first three values
    // let t0 = 0,
    //     t1 = 1,
    //     t2 = 1;

    // // Calculate Tribonacci numbers iteratively
    // for (let i = 3; i <= n; i++) {
    //     let t3 = t0 + t1 + t2; // Current Tribonacci number
    //     t0 = t1; // Shift the values for the next iteration
    //     t1 = t2;
    //     t2 = t3;
    // }

    // return t2; // t2 holds the value of Tn at the end
    let nums = [0, 1, 1];
    while (nums.length <= n) {
        nums.push(nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3]);
    }
    return nums[n];
};

// Example usage:
console.log(tribonacci(4)); // Output: 4
console.log(tribonacci(25)); // Output: 1389537