// var minFlips = function(a, b, c) {
//     let flips = 0;
//     while (a > 0 || b > 0 || c > 0) {
//         // Extract the least significant bits (LSB)
//         let bitA = a & 1;
//         let bitB = b & 1;
//         let bitC = c & 1;

//         if (bitC === 1) {
//             // If c's bit is 1, at least one of a's or b's bits must be 1
//             if (bitA === 0 && bitB === 0) {
//                 flips++; // Need to flip one bit to 1
//             }
//         } else {
//             // If c's bit is 0, both a's and b's bits must be 0
//             flips += bitA + bitB; // Add the count of bits that need flipping
//         }

//         // Right shift to check the next bit
//         a >>= 1;
//         b >>= 1;
//         c >>= 1;
//     }
//     return flips;
// };
var minFlips = function(a, b, c) {
    let answer = 0;
    while (a | b | c) {
        if (c & 1) {
            answer += !(a & 1) && !(b & 1);
        } else {
            answer += (a & 1) + (b & 1);
        }
        a >>= 1;
        b >>= 1;
        c >>= 1;
    }
    return answer;
};
console.log(minFlips(2, 6, 5));