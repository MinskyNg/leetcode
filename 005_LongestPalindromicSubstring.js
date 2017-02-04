// 中心检测法
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var i,
        char,
        start,
        end,
        maxStart = 0,
        maxLen = 1;

    for (var pivot = 0, len = s.length; pivot < len; pivot++) {
        char = s[pivot];
        if (char === s[pivot + 1]) {
            i = 2
            while (i < len) {
                if (char !== s[pivot + i]) {
                    break;
                }
                i++;
            }
            start = pivot - 1;
            end = pivot + i;
        } else {
            start = pivot - 1;
            end = pivot + 1;
        }

        while (start > -1 && end < len) {
            if (s[start] !== s[end]) {
                break;
            }
            start--;
            end++;
        }

        if (end - start - 1 > maxLen) {
            maxStart = start + 1;
            maxLen = end - start - 1;
        }
    }

    return s.substr(maxStart, maxLen);
};


// 动态规划
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var tmp,
        dis,
        start = 0,
        maxLen = 1,
        dp = [];

    for (var i = 0, len = s.length; i < len; i++) {
        tmp = new Array(len);
        tmp.fill(false);
        tmp[i] = true;
        dp[i] = tmp;
    }

    for (dis = 1; dis < len; dis++) {
        for (i = 0; dis + i < len; i++) {
            var j = dis + i;
            if (s[i] === s[j]) {
                dp[i][j] = dis !== 1 ? dp[i+1][j-1] : true;
                if (dp[i][j] && dis + 1 > maxLen) {
                    start = i;
                    maxLen = dis + 1;
                }
            }
        }
    }

    return s.substr(start, maxLen);
};


// Manacher算法
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var t = '$#',
        p = [];

    for (var i = 0, len = s.length; i < len; i++) {
        t += s[i] + '#';
    }


};
