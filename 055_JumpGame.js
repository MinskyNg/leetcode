/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var maxReach = 0,
        len = nums.length;
    for (var i = 0; i < len && i <= maxReach; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return i === len;
};
