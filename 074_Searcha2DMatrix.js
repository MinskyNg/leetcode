/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var startRow = 0,
        endRow = matrix.length - 1,
        endCol = matrix[0].length - 1;

    while (startRow <= endRow) {
        var midRow = startRow + ((endRow - startRow) >> 1);
        if (target >= matrix[midRow][0] && target <= matrix[midRow][endCol]) {
            var startCol = 0;
            while (startCol <= endCol) {
                var midCol = startCol + ((endCol - startCol) >> 1);
                if (target === matrix[midRow][midCol]) {
                    return true;
                } else if (target > matrix[midRow][midCol]) {
                    startCol = midCol + 1;
                } else {
                    endCol = midCol - 1;
                }
            }
            break;
        } else if (target > matrix[midRow][endCol]) {
            startRow = midRow + 1;
        } else {
            endRow = midRow - 1;
        }
    }

    return false;
};
