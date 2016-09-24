/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len = nums.length;
    if (len <= 1) {
        return;
    }

    var i = len - 1;
    while (nums[i] <= nums[i - 1] && i > 0) {
        i--;
    }

    var index = i - 1,
        j = len - 1;
    while (i <= j) {
        tmp = nums[j];
        nums[j] = nums[i];
        nums[i] = tmp;
        i++;
        j--;
    }

    for (i = index + 1; i < len; i++) {
        if (nums[i] > nums[index]) {
            tmp = nums[index];
            nums[index] = nums[i];
            nums[i] = tmp;
            return;
        }
    }

};
