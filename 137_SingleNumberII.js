/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = 0,
        len = nums.length;

    for (var i = 0; i < 32; i++) {
        var count = 0,
            mask = 1 << i;

        for (var j = 0; j < len; j++) {
            if (mask & nums[j]) {
                count++;
            }
        }

        if (count % 3) {
            result |= mask;
        }
    }

    return result;
};
