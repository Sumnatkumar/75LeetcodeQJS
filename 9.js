// var compress = function(chars) {
//     let write = 0; // Position to write the compressed character
//     let read = 0; // Position to read the current character

//     while (read < chars.length) {
//         let char = chars[read];
//         let count = 0;

//         // Count the occurrences of the current character
//         while (read < chars.length && chars[read] === char) {
//             read++;
//             count++;
//         }

//         // Write the character to the array
//         chars[write] = char;
//         write++;

//         // Write the count if greater than 1
//         if (count > 1) {
//             for (let digit of count.toString()) {
//                 chars[write] = digit;
//                 write++;
//             }
//         }
//     }

//     return write; // The new length of the array
// };

// // Examples
// console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // Output: 6, chars = ["a","2","b","2","c","3"]
// console.log(compress(["a"])); // Output: 1, chars = ["a"]
// console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])); // Output: 4, chars = ["a","b","1","2"]

var compress = function(chars) {
    let i = 0,
        len = 0;

    while (i < chars.length) {
        let curChar = chars[i];
        chars[len++] = curChar;

        let count = 0;
        while (i < chars.length && curChar == chars[i]) {
            count++;
            i++;
        }
        if (count > 1) {
            count = count.toString().split('');
            for (let c of count) {
                chars[len++] = c;
            }
        }
    }
    return len;
};
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // Output: 6, chars = ["a","2","b","2","c","3"]