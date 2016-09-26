/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    var result = nums[0],
        localResult = nums[0];

    for (var i = 1, len = nums.length; i < len; i++) {
        localResult = Math.max(localResult + nums[i], nums[i]);
        result = Math.max(localResult, result);
    }

    return result;
};
