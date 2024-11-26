var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    let cnt1 = Array(26).fill(0),
        cnt2 = Array(26).fill(0);
    for (let i = 0; i < word1.length; i++) {
        cnt1[word1.charCodeAt(i) - 97]++;
        cnt2[word2.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        if ((cnt1[i] && !cnt2[i]) || (!cnt1[i] && cnt2[i])) return false;
    }
    cnt1.sort((a, b) => a - b);
    cnt2.sort((a, b) => a - b);
    for (let i = 0; i < 26; i++) {
        if (cnt1[i] !== cnt2[i]) return false;
    }
    return true;
};
console.log(closeStrings("abc", "bca"));