/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var start = 0,
        end = nums.length - 1;

    while (start <= end) {
        var mid = start + ((end - start) >> 1);
        console.log(mid)
        if (nums[mid] === target) {
            return true;
        } else if (nums[mid] > nums[start]) {
            if (nums[mid] > target && target >= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if (nums[mid] < nums[start]) {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            start++;
        }
    }

    return false;
};
