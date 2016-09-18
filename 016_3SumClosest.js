/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var result = Number.MAX_VALUE,
        tmp,
        left,
        right;

    nums.sort(function(a, b) {
        return a - b;
    })

    for (var i = 0, len = nums.length; i < len - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            if (i === len - 3) {
                break;
            }
            continue;
        }
        left = i + 1;
        right = len - 1;

        while (left < right) {
            tmp = nums[i] + nums[left] + nums[right];
            result = Math.abs(result - target) > Math.abs(tmp - target) ? tmp : result;

            if (tmp === target) {
                return result;
            } else if (tmp > target) {
                right--;
            } else {
                left++;
            }
        }
    }

    return result;
};
