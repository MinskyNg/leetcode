/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [],
        len = nums.length,
        visited = {};

    function dfs(depth, perm) {
        if (depth === 0) {
            result.push(perm);
            return;
        } else {
            for (var i = 0; i < len; i++) {
                if (!visited[i]) {
                    visited[i] = true;
                    dfs(depth - 1, perm.concat(nums[i]));
                    visited[i] = false;
                }
            }
        }
    }

    dfs(len, []);

    return result;
};
