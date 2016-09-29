/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var s = [],
        m = obstacleGrid.length,
        n = obstacleGrid[0].length;

    if (obstacleGrid[m - 1][n - 1] === 1) {
        return 0;
    }

    for (var i = 0; i < m; i++) {
        s[i] = new Array(n);
    }

    for (i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 0) {
            s[i][0] = 1;
        } else {
            while (i < m) {
                s[i][0] = 0;
                i++;
            }
        }
    }

    for (i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 0) {
            s[0][i] = 1;
        } else {
            while (i < n) {
                s[0][i] = 0;
                i++;
            }
        }
    }

    for (i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            s[i][j] = (obstacleGrid[i - 1][j] === 0 ? s[i - 1][j] : 0) + (obstacleGrid[i][j - 1] === 0 ? s[i][j - 1] : 0);
        }
    }

    return s[m - 1][n - 1];
};
