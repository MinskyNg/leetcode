/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (var i = 0, len = nums.length; i < len; i++) {
        while (nums[i] > 0 && nums[i] < len && nums[i] !== i + 1) {
            var tmp = nums[i];
            if (nums[tmp - 1] === tmp) {
                break;
            }
            nums[i] = nums[tmp - 1];
            nums[tmp - 1] = tmp;
        }
    }

    for (i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i +  1;
        }
    }

    return len + 1;
};
