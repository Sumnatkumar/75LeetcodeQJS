var reverseWords = function(s) {
    let words = s.split(' ');
    console.log(words);

    let result = '';
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i].length == 0) continue;
        else {
            if (result.length == 0) result += words[i];
            else result += ' ' + words[i];
        }
    }
    return result;
};
console.log(reverseWords("the sky is blue"));