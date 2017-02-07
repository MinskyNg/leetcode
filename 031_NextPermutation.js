/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length <= 1) {
        return;
    }

    var len = nums.length,
        i = len - 1;
    // 从后向前找到第一个非递增数
    while (nums[i] <= nums[i - 1] && i > 0) {
        i--;
    }

    var index = i - 1,
        j = len - 1;
    // 向后交换数字直到小于该非递增数
    while (i <= j) {
        tmp = nums[j];
        nums[j] = nums[i];
        nums[i] = tmp;
        i++;
        j--;
    }

    // 把初始非递增数位置后的排列逆序
    for (i = index + 1; i < len; i++) {
        if (nums[i] > nums[index]) {
            tmp = nums[index];
            nums[index] = nums[i];
            nums[i] = tmp;
            return;
        }
    }

};
