/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var result = 0,
        i = 0;

    while (nums[i] !== undefined) {
        var tmp = nums[i];
        if (tmp === nums[i+1]) {
            nums[result++] = tmp;
            nums[result++] = tmp;
            i += 2;
            while (tmp === nums[i]) {
                i++;
            }
        } else {
            nums[result++] = tmp;
            i++;
        }
    }

    return result;
};
