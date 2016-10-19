/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var redCount = 0,
        whiteCount = 0;

    for (var i = 0, len = nums.length; i < len; i++) {
        if (nums[i] === 0) {
            redCount++;
            whiteCount++;
        } else if (nums[i] === 1) {
            whiteCount++;
        }
    }

    i = 0
    while (i < redCount) {
        nums[i++] = 0;
    }
    while (i < whiteCount) {
        nums[i++] = 1;
    }
    while (i < len) {
        nums[i++] = 2;
    }
};
