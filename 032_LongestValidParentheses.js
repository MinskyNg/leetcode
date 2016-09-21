4/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var result = 0,
        len = s.length,
        maxLens = new Array(len);

    maxLens.fill(0);
    for (var i = len - 2; i >= 0; i--) {
        if (s[i] === '(') {
            var end = i + maxLens[i + 1] + 1;
            if (end < len && s[end] === ')') {
                maxLens[i] = maxLens[i + 1] + 2;
                if (end < len - 1) {
                    maxLens[i] += maxLens[end + 1];
                }
            }
        }
        result = Math.max(result, maxLens[i]);
    }

    return result;
};

