/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var result = [];

    nums.sort(function (a, b) {
        return a - b;
    })

    function dfs(nums, permutation) {
        if (nums.length === 0) {
            result.push(permutation);
            return;
        } else {
            for (var i = 0, len = nums.length; i < len; i++) {
                while (nums[i] === nums[i + 1]) {
                    i++;
                }
                dfs(nums.slice(0, i).concat(nums.slice(i + 1)), permutation.concat(nums[i]));
            }
        }
    }

    dfs(nums, []);

    return result;
};
