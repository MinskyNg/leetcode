/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var len = s.length,
        dp = new Array(len + 1);
    dp.fill(false);
    dp[0] = true;

    for (var i = 0; i < len; i++) {
        if (dp[i]) {
            for (var word of wordDict.values()) {
                var lenw = word.length;
                if (s.substr(i, lenw) === word) {
                    dp[i + lenw] = true;
                }
            }
        }
    }

    return dp[len];
};
