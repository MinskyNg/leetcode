/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s === null || s.length === 0) {
        return 0;
    }

    if (s[0] === '0') {
        return 0;
    }

    var dp = [1];
    dp[1] = s[0] === '0' ? 0 : 1;

    for (var i = 2, len = s.length; i <= len; i++) {
        dp[i] = 0;
        var num = +(s[i - 2] + s[i - 1]);
        if (9 < num && num < 27) {
            dp[i] += dp[i - 2];
        }

        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }
    }

    return dp[len];
};
