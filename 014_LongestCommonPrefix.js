/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }

    for (var i = 0, len = strs.length - 1; i < len; i++) {
        var j = 0;
        while (strs[i][j] !== undefined && strs[i+1][j] !== undefined && strs[i][j] === strs[i+1][j]) {
            j++;
        }
        strs[i+1] = strs[i+1].slice(0, j);
    }

    return strs[len];
};
