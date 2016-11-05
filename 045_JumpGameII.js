/**
 * @param {number[]} nums
 * @return {number}
 */
// GREEDY
var jump = function(nums) {
    var result = 0,
        len = nums.length,
        i = len - 1;

    while (i > 0) {
        var maxReach = i - 1;
        for (var j = i - 1; j >= 0; j--) {
            if (nums[j] >= i - j) {
                maxReach = j;
            }
        }
        result++;
        i = maxReach;
    }

    return result;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length === 1) {
        return 0;
    }

    var result = 0,
        start = 0,
        end = 0,
        len = nums.length;

    while (end < len) {
        result++;
        var maxReach = 0;
        for (var i = start; i <= end; i++)
         {
            maxReach = Math.max(maxReach, i + nums[i]);
            if (maxReach >= len - 1) {
                return result;
            }
        }
        start = end + 1;
        end = maxReach;
    }
};
