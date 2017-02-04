/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [],
        left,
        right;

    nums.sort(function(a, b) {
        return a - b;
    });

    for (var i = 0, len = nums.length; i < len - 2 && nums[i] <= 0; i++) {
        while (nums[i] === nums[i - 1]) {
            i++;
        }

        left = i + 1;
        right = len - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) {
                    left++;
                }
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            } else if(nums[i] + nums[left] + nums[right] < 0) {
                while (nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
            } else {
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;
            }
        }
    }

    return result;
};
