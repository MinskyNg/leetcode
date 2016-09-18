/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [],
        len = nums.length,
        left,
        right;

    nums.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < len - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            if (i === len - 3) {
                break;
            }
            continue;
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
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};
