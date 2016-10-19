/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var rowCount = matrix.length,
        colCount = matrix[0].length,
        row0Zero = false,
        col0Zero = false;

    for (var i = 0; i < rowCount; i++) {
        if (matrix[i][0] === 0) {
            col0Zero = true;
            break;
        }
    }

    for (var j = 0; j < colCount; j++) {
        if (matrix[0][j] === 0) {
            row0Zero = true;
            break;
        }
    }

    for (i = 1; i < rowCount; i++) {
        for (j = 1; j < colCount; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (i = 1; i < colCount; i++) {
        if (matrix[0][i] === 0) {
            for (j = 0; j < rowCount; j++) {
                matrix[j][i] = 0;
            }
        }
    }

    for (i = 1; i < rowCount; i++) {
        if (matrix[i][0] === 0) {
            for (j = 0; j < colCount; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    if (row0Zero) {
        for (i = 0; i < colCount; i++) {
            matrix[0][i] = 0;
        }
    }

    if (col0Zero) {
        for (i = 0; i < rowCount; i++) {
            matrix[i][0] = 0;
        }
    }

    return;
};
