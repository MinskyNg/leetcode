/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var s = [];

    for (var i = 0; i < m; i++) {
        var tmp = new Array(n);
        tmp[0] = 1;
        s[i] = tmp;
    }
    s[0].fill(1);

    for (i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            s[i][j] = s[i - 1][j] + s[i][j - 1];
        }
    }

    return s[m - 1][n - 1];
};
