/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var rows = [],
        cols = [],
        subBoards = [];

    for (var i = 0; i < 9; i++) {
        rows[i] = {};
        cols[i] = {};
        subBoards[i] = {};
    }

    for (i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                continue;
            } else {
                var num = board[i][j];
                if (rows[i][num] || cols[j][num] || subBoards[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num]) {
                    return false;
                } else {
                    rows[i][num] = cols[j][num] = subBoards[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num] = true;
                }
            }
        }
    }

    return true;
};
