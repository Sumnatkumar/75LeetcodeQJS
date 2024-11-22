var mergeAlternately = function(word1, word2) {
    let res = '';
    let loop = Math.max(word1.length, word2.length);
    for (let i = 0; i < loop; i++) {
        res += word1[i] || '';
        res += word2[i] || '';
    }
    return res;
}
console.log(mergeAlternately("abc", "pqr"));