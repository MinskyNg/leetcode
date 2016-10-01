/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var len1 = word1.length,
        len2 = word2.length,
        dis = new Array(len1);

    if (len1 === 0) {
        return len2;
    }

    if (len2 === 0) {
        return len1;
    }

    for (var i = 0; i <= len1; i++) {
        var tmp = new Array(len2);
        tmp[0] = i;
        dis[i] = tmp;
    }

    for (i = 0; i <= len2; i++) {
        dis[0][i] = i;
    }

    for (i = 1; i <= len1; i++) {
        for (var j = 1; j <= len2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dis[i][j] = dis[i - 1][j - 1];
            } else {
                dis[i][j] = Math.min(dis[i - 1][j - 1], dis[i][j - 1], dis[i - 1][j]) + 1;
            }
        }
    }

    return dis[len1][len2];
};
