/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var result = [],
        wordLen = words[0].length,
        map1 = {};

    for (var i = 0, len = words.length; i < len; i++) {
        map1[words[i]] = map1[words[i]] ? map1[words[i]] + 1 : 1;
    }

    for (i = 0; i < wordLen; i++) {
        var map2 = {},
            count = 0,
            start = i;
        for (var j = i, sLen = s.length; j <= sLen - wordLen; j += wordLen) {
            var str = s.substr(j, wordLen);
            if (map1[str]) {
                map2[str] = map2[str] ? map2[str] + 1 : 1;
                if (map2[str] <= map1[str]) {
                    count++;
                } else {
                    while (1) {
                        var tmp = s.substr(start, wordLen);
                        map2[tmp] -= 1;
                        start += wordLen;
                        if (str === tmp) {
                            break;
                        } else {
                            count--;
                        }
                    }
                }
                if (count === len) {
                    result.push(start);
                    tmp = s.substr(start, wordLen);
                    map2[tmp] -= 1;
                    start += wordLen;
                    count--;
                }
            } else {
                map2 = {};
                count = 0;
                start = j + wordLen;
            }
        }
    }

    return result;
};
