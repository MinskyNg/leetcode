/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [[]],
        len = nums.length,
        path = [];

    var dfs = function(deep) {
        if (deep === len) {
            return;
        }

        for (var i = deep; i < len; i++) {
            path.push(nums[i]);
            result.push(path.slice(0));
            dfs(i+1);
            path.pop();
        }
    }

    dfs(0);
    return result;
};
