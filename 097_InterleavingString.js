/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    var path = [],
        m = s1.length,
        n = s2.length;

    if (s3.length > m + n) {
        return false;
    }

    for (var i = 0; i <= m; i++) {
        path[i] = [];
        for (var j = 0; j <= n; j++) {
            if (i === 0 && j === 0) {
                path[i][j] = true;
            }
            else if (i === 0) {
                path[0][j] = path[0][j - 1] && (s2[j - 1] === s3[j - 1]);
            } else if (j === 0) {
                path[i][0] = path[i - 1][0] && (s1[i - 1] === s3[i - 1]);
            } else {
                path[i][j] = (path[i][j - 1] && (s2[j - 1] === s3[i + j - 1])) || (path[i - 1][j] && (s1[i - 1] === s3[i + j - 1]));
            }
        }
    }
    return path[m][n];
};
