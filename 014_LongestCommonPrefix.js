/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }

    var prefix = strs[0];

    for (var i = 1, len = strs.length; i < len; i++) {
        var j = 0;
        var compare = strs[i];
        while (prefix[j] !== undefined && compare[j] !== undefined && prefix[j] === compare[j]) {
            j++;
        }
        prefix = prefix.slice(0, j);
    }

    return prefix;
};
