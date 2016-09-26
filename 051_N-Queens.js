/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var result = [],
        solution = new Array(n);

    for (var i = 0; i < n; i++) {
        var initRow = new Array(n);
        initRow.fill('.');
        solution[i] = initRow;
    }

    backTrace(0, solution);

    return result;

    function backTrace(row, sol) {
        if (row === n) {
            var soled = [];
            for (var i = 0; i < n; i++) {
                soled[i] = sol[i].join('');
            }
            result.push(soled);
        }

        for (var col = 0; col < n; col++) {
            if (isValid(sol, row, col)) {
                sol[row][col] = 'Q';
                backTrace(row + 1, sol);
                sol[row][col] = '.';
            }
        }
    }

    function isValid(sol, row, col) {
        for (var i = 0; i < row; i++) {
            if (sol[i][col] === 'Q') {
                return false;
            }
        }
        i--;
        for (var j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (sol[i][j] === 'Q') {
                return false;
            }
        }
        for (i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (sol[i][j] === 'Q') {
                return false;
            }
        }
        return true;
    }
};
