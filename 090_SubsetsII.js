/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var result = [[]],
        len = nums.length,
        path = [];

    nums.sort(function(a, b) {
        return a - b;
    });

    var dfs = function(deep) {
        if (deep === len) {
            return;
        }

        for (var i = deep; i < len; i++) {
            path.push(nums[i]);
            result.push(path.slice(0));
            dfs(i+1);
            var tmp = path.pop();
            while (tmp === nums[i+1]) {
                i++;
            }
        }
    }

    dfs(0);
    return result;
};
