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
        while (nums[i] === nums[i - 1]) {
            i++;
        }

        left = i + 1;
        right = len - 1;
        while (left < right) {
            tmp = nums[i] + nums[left] + nums[right];
            result = Math.abs(result - target) > Math.abs(tmp - target) ? tmp : result;
            if (tmp === target) {
                return result;
            } else if (tmp > target) {
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;
            } else {
                while (nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
            }
        }
    }

    return result;
};
