// var maxVowels = function(s, k) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     let maxCount = 0;
//     let currentCount = 0;

//     // Count vowels in the initial window
//     for (let i = 0; i < k; i++) {
//         if (vowels.has(s[i])) {
//             currentCount++;
//         }
//     }

//     maxCount = currentCount;

//     // Slide the window
//     for (let i = k; i < s.length; i++) {
//         if (vowels.has(s[i])) {
//             currentCount++;
//         }
//         if (vowels.has(s[i - k])) {
//             currentCount--;
//         }
//         maxCount = Math.max(maxCount, currentCount);
//     }

//     return maxCount;
// };
var maxVowels = function(s, k) {
    let vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowels = 0;
    let vowels = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (i - start + 1 > k) {
            if (vowelsSet.has(s[start])) vowels--;
            start++;
        }
        if (vowelsSet.has(s[i])) {
            vowels++;
            maxVowels = Math.max(maxVowels, vowels);
        }
    }
    return maxVowels;
}
console.log(maxVowels("aeiou", k = 2))