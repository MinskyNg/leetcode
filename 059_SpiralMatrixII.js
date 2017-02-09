/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n === 0) {
        return []
    }

    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
    }

    var num = 1,
        xStart = 0,
        xEnd = n - 1,
        yStart = 0,
        yEnd = n - 1;

    while (xStart <= xEnd && yStart <= yEnd) {
        for (i = xStart; i <= xEnd; i++) {
            matrix[yStart][i] = num;
            num++;
        }
        for (i = yStart + 1; i <= yEnd; i++) {
            matrix[i][xEnd] = num;
            num++
        }
        if (yStart !== yEnd) {
            for (i = xEnd - 1; i >= xStart; i--) {
                matrix[yEnd][i] = num;
                num++;
            }
        }
        if (xStart !== xEnd) {
            for (i = yEnd - 1; i > yStart; i--) {
                matrix[i][xStart] = num;
                num++
            }
        }
        xStart++;
        xEnd--;
        yStart++;
        yEnd--;
    }

    return matrix;
};
