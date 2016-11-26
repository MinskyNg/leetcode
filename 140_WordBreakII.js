/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    var result = [],
        len = s.length,
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

    var dfs = function(end, str) {
        if (end === 0) {
            result.push(str);
            return;
        }

        if (end < 0 || !dp[end]) {
            return;
        }

        for (word of wordDict.values()) {
            lenw = word.length;
            if (s.substring(end - lenw, end) === word) {
                dfs(end - lenw, word + ' ' + str);
            }
        }
    };

    for (word of wordDict.values()) {
        lenw = word.length;
        if (s.substr(len - lenw, len) === word) {
            dfs(len - lenw, word);
        }
    }

    return result;
};
