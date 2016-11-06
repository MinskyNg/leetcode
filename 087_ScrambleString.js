/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    if (s1 === s2) {
        return true;
    }

    var len = s1.length;
    var scr = [];

    for (var i = 0; i < len; i++) {
        scr[i] = [];
        for (var j = 0; j < len; j++) {
            scr[i][j] = [true, s1[i] === s2[j]];
        }
    }

    for (var n = 2; n <= len; n++) {
        for (i = 0; i < len - n + 1; i++) {
            for (j = 0; j < len - n + 1; j++) {
                for (k = 1; k < n; k++) {
                    scr[i][j][n] = scr[i][j][n] || (scr[i][j][k] && scr[i + k][j + k][n - k]) || (scr[i][j + n - k][k] && scr[i + k][j][n - k]);
                }
            }
        }
    }

    return scr[0][0][len];
};
