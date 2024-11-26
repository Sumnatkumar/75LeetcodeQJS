var decodeString = function(s) {
    let stack = [];
    let currentString = "";
    let currentNumber = 0;

    for (let char of s) {
        if (!isNaN(char)) { // If the character is a digit
            currentNumber = currentNumber * 10 + parseInt(char); // Handle multi-digit numbers
        } else if (char === '[') {
            // Push the current number and string onto the stack and reset them
            stack.push(currentString);
            stack.push(currentNumber);
            currentString = "";
            currentNumber = 0;
        } else if (char === ']') {
            // Pop the number and previous string from the stack
            let num = stack.pop();
            let prevString = stack.pop();
            currentString = prevString + currentString.repeat(num);
        } else {
            // Accumulate the letters
            currentString += char;
        }
    }

    return currentString;
};
console.log(decodeString("3[a]2[bc]"));