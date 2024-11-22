let VowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
var reverseVowels = function(s) {
    let left = 0;
    let right = s.length - 1;
    let rvrsStr = s.split("");

    while (left <= right) {
        if (!VowelsSet.has(rvrsStr[left])) {
            left++;
            continue;
        }
        if (!VowelsSet.has(rvrsStr[right])) {
            right--;
            continue;
        }

        [rvrsStr[left], rvrsStr[right]] = [rvrsStr[right], rvrsStr[left]];
        left++;
        right--;
    }
    return rvrsStr.join("");
};
console.log(reverseVowels("IceCreAm"));