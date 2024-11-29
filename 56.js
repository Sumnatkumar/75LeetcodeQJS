var minEatingSpeed = function(piles, h) {
    // let left = 1;
    // let right = Math.max(...piles);

    // const canEatAll = (speed) => {
    //     let hours = 0;
    //     for (let pile of piles) {
    //         hours += Math.ceil(pile / speed);
    //     }
    //     return hours <= h;
    // };

    // while (left < right) {
    //     const mid = Math.floor((left + right) / 2);
    //     if (canEatAll(mid)) {
    //         right = mid; // Try to minimize speed
    //     } else {
    //         left = mid + 1; // Increase speed
    //     }
    // }

    // return left;
    let maxPile = 0;
    for (let pile of piles) {
        maxPile = Math.max(maxPile, pile)
    }
    let calcHrs = function(speed) {
        let hrs = 0;
        for (let pile of piles) {
            hrs += Math.ceil(pile / speed);
        }
        return hrs;
    }
    let bs = function(l, r) {
        while (l < r) {
            let avgSpeed = Math.floor((l + r) / 2);
            let hrs = calcHrs(avgSpeed);
            if (hrs <= h) r = avgSpeed;
            else l = avgSpeed + 1;
        }
        return l;
    }
    return bs(1, maxPile);
};

// Example usage:
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // Output: 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // Output: 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // Output: 23