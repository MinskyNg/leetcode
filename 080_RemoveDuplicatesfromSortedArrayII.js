/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var result = 0,
        i = 0;

    while (nums[i] !== undefined) {
        if (nums[i] === nums[i+1]) {
            i++;
            result = result + 2;
            while (nums[i] === nums[i+1]) {
                nums.splice(i, 1);
            }
        } else {
            result++;
        }
        i++;
    }

    return result;
};
