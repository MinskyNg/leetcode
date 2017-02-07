/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var len = s.length,
        maxLens = new Array(len + 1);

    maxLens.fill(0);
    for (var i = len - 2; i >= 0; i--) {
        if (s[i] === '(') {
            var end = i + maxLens[i + 1] + 1;
            if (s[end] === ')') {
                maxLens[i] = maxLens[i + 1] + 2 + maxLens[end + 1];
            }
        }
    }

    return Math.max.apply(null, maxLens);
};

