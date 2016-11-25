/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = nums[0];

    for (var i = 1, len = nums.length; i < len; i++) {
        result ^= nums[i];
    }

    return result;
};
