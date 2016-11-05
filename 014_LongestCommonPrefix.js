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
        var prefix = strs[i];
        var compare = strs[i+1];
        while (prefix[j] !== undefined && compare[j] !== undefined && prefix[j] === compare[j]) {
            j++;
        }
        strs[i+1] = compare.slice(0, j);
    }

    return strs[len];
};
