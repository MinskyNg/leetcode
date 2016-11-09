/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    var dp = [[1]];

    for (var i = 1, lens = s.length; i <= lens; i++) {
        dp[i] = [1];
    }

    for (var j = 1, lent = t.length; j <= lent; j++) {
        dp[0][j] = 0;
    }

    for (i = 1; i <= lens; i++) {
        for (j = 1; j <= lent; j++) {
            dp[i][j] = dp[i - 1][j];
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] += dp[i - 1][j - 1];
            }
        }
    }

    return dp[lens][lent];
};
