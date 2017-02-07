/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (var i = 0, len = nums.length; i < len; i++) {
        var tmp = nums[i];
        while (tmp > 0 && tmp < len && nums[tmp - 1] !== tmp) {
            nums[i] = nums[tmp - 1];
            nums[tmp - 1] = tmp;
            tmp = nums[i];
        }
    }

    for (i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return len + 1;
};
