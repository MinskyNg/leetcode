/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [];

    var dfs = function(arr, start, deep) {
        if (deep === 0) {
            result.push(arr);
            return;
        }
        if (n - start + 1 < deep) {
            return;
        }
        for (var i = start; i <= n; i++) {
            dfs(arr.slice().concat(i), i+1, deep-1);
        }
    }

    dfs([], 1, k);

    return result;
};
