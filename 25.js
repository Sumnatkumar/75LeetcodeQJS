// var asteroidCollision = function(asteroids) {
//     let stack = [];

//     for (let asteroid of asteroids) {
//         let isAlive = true;

//         // Handle collision only when the current asteroid is moving left (negative)
//         while (isAlive && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
//             let topAsteroid = stack.pop();

//             if (-asteroid < topAsteroid) {
//                 // Current asteroid is smaller, so it explodes
//                 isAlive = false;
//                 stack.push(topAsteroid); // Keep the top asteroid
//             } else if (-asteroid === topAsteroid) {
//                 // Both asteroids explode
//                 isAlive = false;
//             }
//         }

//         // If the current asteroid survived or it's positive, add it to the stack
//         if (isAlive) {
//             stack.push(asteroid);
//         }
//     }

//     return stack;
// };
var asteroidCollision = function(asteroids) {
    let stack = [];
    for (let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];
        if (asteroid > 0) {
            stack.push(asteroid);
        } else {
            while (stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroid)) {
                stack.pop();
            }
            if (stack.length === 0 || stack[stack.length - 1] < 0) {
                stack.push(asteroid);
            } else if (stack[stack.length - 1] === Math.abs(asteroid)) {
                stack.pop();
            }
        }
    }
    return stack;
};
console.log(asteroidCollision([5, 10, -5]));