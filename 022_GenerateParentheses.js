/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];

    function dfs(str, left, right) {
        if (left === 0 && right === 0) {
            result.push(str);
            return;
        } else {
            if (left > 0) {
                dfs(str + '(', left - 1, right);
            }
            if (right > 0 && left < right) {
                dfs(str + ')', left, right - 1);
            }
        }
    }

    dfs('', n, n);

    return result;
};

