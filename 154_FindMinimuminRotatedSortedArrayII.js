/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    var result = Infinity,
        start = 0,
        end = nums.length - 1;

    while (start <= end) {
        var mid = start + ((end - start) >> 1);
        if (nums[mid] === nums[start] || nums[mid] === nums[end]) {
            if (nums[mid] === nums[start]) {
                start++;
            }
            if (nums[mid] === nums[end]) {
                end--;
            }
            result = result > nums[mid] ? nums[mid] : result;
        } else if (nums[mid] > nums[end]) {
            start = mid + 1;
            result = result > nums[end] ? nums[end] : result;
        } else if (nums[mid] < nums[start]) {
            end = mid - 1;
            result = result > nums[mid] ? nums[mid] : result;
        } else {
            result = result > nums[start] ? nums[start] : result;
            break;
        }
    }

    return result;
};
