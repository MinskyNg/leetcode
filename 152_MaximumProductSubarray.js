/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    var result = -Infinity,
        product = 1;


    for (var i = 0, len = nums.length; i < len; i++) {
        product = nums[i] * product;
        result = result > product ? result : product;
        if (product === 0) {
            product = 1;
        }
    }

    if (result !== product) {
        product = 1;
        for (i = len - 1; i >= 0; i--) {
            product = nums[i] * product;
            result = result > product ? result : product;
            if (product === 0) {
                product = 1;
            }
        }
    }

    return result;
};
