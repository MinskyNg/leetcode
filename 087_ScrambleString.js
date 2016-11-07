/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isdpamble = function(s1, s2) {
    if (s1 === s2) {
        return true;
    }

    var len = s1.length;
    var dp = [];

    for (var i = 0; i < len; i++) {
        dp[i] = [];
        for (var j = 0; j < len; j++) {
            dp[i][j] = [true, s1[i] === s2[j]];
        }
    }

    for (var n = 2; n <= len; n++) {
        for (i = 0; i < len - n + 1; i++) {
            for (j = 0; j < len - n + 1; j++) {
                for (k = 1; k < n; k++) {
                    dp[i][j][n] = dp[i][j][n] || (dp[i][j][k] && dp[i + k][j + k][n - k]) || (dp[i][j + n - k][k] && dp[i + k][j][n - k]);
                }
            }
        }
    }

    return dp[0][0][len];
};
