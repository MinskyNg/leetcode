/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var result = [],
        hash = {};

    for (var i = 0, len = strs.length; i < len; i++) {
        var str = strs[i].split('').sort().join('');
        if (hash[str] !== undefined) {
            hash[str].push(strs[i]);
        } else {
            hash[str] = [strs[i]];
        }
    }

    for ( i in hash) {
        hash[i].sort();
        result.push(hash[i]);
    }

    return result;
};
