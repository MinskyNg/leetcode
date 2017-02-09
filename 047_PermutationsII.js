/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var result = [];

    nums.sort(function (a, b) {
        return a - b;
    })

    function dfs(nums, perm, len) {
        if (len === 0) {
            result.push(perm);
            return;
        } else {
            for (var i = 0; i < len; i++) {
                while (nums[i] === nums[i + 1]) {
                    i++;
                }
                dfs(nums.slice(0, i).concat(nums.slice(i + 1)), perm.concat(nums[i]), len - 1);
            }
        }
    }

    dfs(nums, [], nums.length);

    return result;
};
