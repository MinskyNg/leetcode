/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return [];
    }

    var result = [],
        xStart = 0,
        xEnd = matrix[0].length - 1,
        yStart = 0,
        yEnd = matrix.length - 1;

    while (xStart <= xEnd && yStart <= yEnd) {
        for (var i = xStart; i <= xEnd; i++) {
            result.push(matrix[yStart][i]);
        }
        for (i = yStart + 1; i <= yEnd; i++) {
            result.push(matrix[i][xEnd]);
        }
        if (yStart !== yEnd) {
            for (i = xEnd - 1; i >= xStart; i--) {
                result.push(matrix[yEnd][i]);
            }
        }
        if (xStart !== xEnd) {
            for (i = yEnd - 1; i > yStart; i--) {
                result.push(matrix[i][xStart]);
            }
        }
        xStart++;
        xEnd--;
        yStart++;
        yEnd--;
    }

    return result;
};
