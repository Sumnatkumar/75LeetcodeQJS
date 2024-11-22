var productExceptSelf = function(nums) {
    let res = [1];

    for (let i = 1; i < nums.length; i++) {
        res.push(res[i - 1] * nums[i - 1]);
    }

    let suffProd = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        suffProd *= nums[i + 1];
        res[i] = res[i] * suffProd;
    }
    return res;
};
console.log(productExceptSelf([1, 2, 3, 4]));