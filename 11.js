// var isSubsequence = function(s, t) {
//     let i = 0; // Pointer for string s
//     let j = 0; // Pointer for string t

//     while (i < s.length && j < t.length) {
//         if (s[i] === t[j]) {
//             i++; // Move to the next character in s if there's a match
//         }
//         j++; // Always move to the next character in t
//     }

//     return i === s.length; // True if all characters in s were matched
// };

// // Examples
// console.log(isSubsequence("abc", "ahbgdc")); // Output: true
// console.log(isSubsequence("axc", "ahbgdc")); // Output: false
var isSubsequence = function(s, t) {
    let p1 = 0,
        p2 = 0;
    while (p1 < s.length && p2 < t.length) {
        if (s[p1] === t[p2]) {
            p1++;
            p2++;
        } else {
            p2++;
        }
    }
    return p1 === s.length;
};
console.log(isSubsequence("abc", "ahbgdc")); // Output: true
console.log(isSubsequence("axc", "ahbgdc"));