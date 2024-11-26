// var removeStars = function(s) {
//     if (s.length === 0) return '';
//     let stack = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '*') stack.pop();
//         else stack.push(s[i]);
//     }
//     return stack.join('');
// };
var removeStars = function(s) {
    let stack = [];

    for (let char of s) {
        if (char === '*') {
            stack.pop(); // Remove the last character from the stack
        } else {
            stack.push(char); // Add character to the stack
        }
    }

    return stack.join(''); // Join stack elements to form the result string
};
console.log(removeStars("leet**cod*e"));