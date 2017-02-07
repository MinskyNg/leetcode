/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    backTrace(0, 0);

    function backTrace(row, col) {
        if (row === 8 && col === 9) {
            return true;
        }

        if (col === 9) {
            row++;
            col = 0;
        }

        if (board[row][col] === '.') {
            for (var i = 0; i < 9; i++) {
                var num = nums[i];
                if (isValid(row, col, num)) {
                    board[row][col] = num;
                    if (backTrace(row, col + 1)) {
                        return true;
                    }
                    board[row][col] = '.';
                }
            }
        } else if (backTrace(row, col + 1)) {
            return true
        }

        return false;
    }


    function isValid(row, col, num) {
        for (var i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num) {
                return false;
            }
        }

        var subRow = Math.floor((row) / 3) * 3,
            subCol = Math.floor((col) / 3) * 3;
        for (i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[subRow + i][subCol + j] === num) {
                    return false
                }
            }
        }

        return true;
    }
};
