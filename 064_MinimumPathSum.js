/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var s = [],
        m = grid.length,
        n = grid[0].length;

    for (var i = 0; i < m; i++) {
        s[i] = new Array(n);
    }

    s[0][0] = grid[0][0];

    for (i = 1; i < m; i++) {
        s[i][0] = s[i - 1][0] + grid[i][0];
    }
    for (i = 1; i < n; i++) {
        s[0][i] = s[0][i - 1] + grid[0][i];
    }

    for (i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            s[i][j] = grid[i][j] + Math.min(s[i - 1][j], s[i][j - 1]);
        }
    }

    return s[m - 1][n - 1];
};
