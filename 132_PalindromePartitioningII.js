/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    if (s === null || s.length === 0) {
        return 0;
    }

    var len = s.length,
        dpCut = [],
        dpPalindrome = [];

    for (var i = 0; i < len; i++) {
        dpCut[i] = len - i;
        dpPalindrome[i] = [];
    }

    for (i = len - 1; i >= 0; i--) {
        for (var j = i; j < len; j++) {
            if (s[i] === s[j] && (j - i < 2 || dpPalindrome[i+1][j-1])) {
                dpPalindrome[i][j] = true;
                dpCut[i] = Math.min(dpCut[i], dpCut[j+1] ? dpCut[j+1] + 1 : 1);
            }
        }
    }

    return dpCut[0] - 1;
};
