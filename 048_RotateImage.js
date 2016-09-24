/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (var i = 0, n = matrix.length - 1; i < n; i++, n--) {
        for (var j = i, k = n; j < n; j++, k--) {
            var tmp = matrix[i][j];
            matrix[i][j] = matrix[k][i];
            matrix[k][i] = matrix[n][k];
            matrix[n][k] = matrix[j][n];
            matrix[j][n] = tmp;
        }
    }
};
