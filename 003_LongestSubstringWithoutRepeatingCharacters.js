/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var result = 1,
        start = 0,
        len = s.length,
        i,
        j,
        char;

    if (len === 0) {
        return 0;
    }

    for (i = 1; i < len; i++) {
        char = s[i];
        for (j = start; j < i; j++) {
            if (s[j] === char) {
                start = j+1;
                break;
            }
            if (i === j + 1) {
                result = Math.max(result, i - start + 1);
            }
        }
    }
    return result;
};
