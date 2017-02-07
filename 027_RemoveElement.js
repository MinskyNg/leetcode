/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var result = 0;

    for (var i = 0, len = nums.length; i < len; i++) {
        if (nums[i] !== val) {
            nums[result] = nums[i];
            result++;
        }
    }

    return result;
};
