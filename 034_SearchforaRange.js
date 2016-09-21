/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [],
        start = 0,
        end  = nums.length - 1;

    while (start < end) {
        mid = start + ((end - start) >> 1);
        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    if (nums[start] === target) {
        result.push(start);
    } else {
        return [-1, -1];
    }

    start = 0;
    end = nums.length - 1;
    while (start < end) {
        mid = start + ((end - start + 1) >> 1);
        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid;
        }
    }
    result.push(end);

    return result;
};
