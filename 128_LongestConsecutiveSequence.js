/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var result = 0,
        map = {};

    for (var i = 0, len = nums.length; i < len; i++) {
        map[nums[i]] = true;
    }

    for (i = 0; i < len; i++) {
        if (map[nums[i]]) {
            var tmp = nums[i] + 1,
                maxLen = 1;
            while (map[tmp]) {
                map[tmp] = false;
                maxLen++;
                tmp++;
            }

            tmp = nums[i] - 1;
            while (map[tmp]) {
                map[tmp] = false;
                maxLen++;
                tmp--;
            }

            result = Math.max(result, maxLen);
        }
    }

    return result;
};
