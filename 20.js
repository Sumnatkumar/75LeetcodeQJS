var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    // Find elements in set1 that are not in set2
    let diff1 = [...set1].filter(num => !set2.has(num));

    // Find elements in set2 that are not in set1
    let diff2 = [...set2].filter(num => !set1.has(num));

    return [diff1, diff2];
};
console.log(findDifference([1, 2, 3], nums2 = [2, 4, 6]));