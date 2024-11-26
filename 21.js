// var uniqueOccurrences = function(arr) {
//     let countMap = new Map(); // To store element frequencies

//     // Count occurrences of each element
//     for (let num of arr) {
//         countMap.set(num, (countMap.get(num) || 0) + 1);
//     }

//     let occurrenceSet = new Set(); // To check for unique occurrences

//     // Add each frequency to the set, return false if duplicate is found
//     for (let count of countMap.values()) {
//         if (occurrenceSet.has(count)) {
//             return false; // Duplicate occurrence found
//         }
//         occurrenceSet.add(count);
//     }

//     return true; // All occurrences are unique
// };
var uniqueOccurrences = function(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]]++;
        }
    }
    let count = Object.values(map);
    return count.length === new Set(count).size;
};
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));