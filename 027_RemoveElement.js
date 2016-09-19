/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.sort(function (a, b) {
        return a - b;
    })

    var result = 0;

    for (var i = 0, len = nums.length; i < len; i++) {
        if (nums[i] < val) {
            result++;
        } else if (nums[i] === val) {
        } else {
            nums[result] = nums[i];
            result++;
        }
    }

    return result;
};
