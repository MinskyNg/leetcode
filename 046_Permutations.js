/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];

    function dfs(nums, permutation) {
        if (nums.length === 0) {
            result.push(permutation);
            return;
        } else {
            for (var i = 0, len = nums.length; i < len; i++) {
                dfs(nums.slice(0, i).concat(nums.slice(i + 1)), permutation.concat(nums[i]));
            }
        }
    }

    dfs(nums, []);

    return result;
};
