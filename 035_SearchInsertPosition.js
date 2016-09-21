/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var start = 0,
        end = nums.length;

    while (start < end) {
        var mid = start + ((end - start) >> 1);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return end;
};
