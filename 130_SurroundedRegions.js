/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var helper = function(board, i, j) {
    var lenRow = board.length,
        lenCol = board[0].length;

    var queue = [];
    queue.push({i: i, j : j});

    while (queue.length) {
        var tmp = queue.shift();

        if (0 <= tmp.i && tmp.i < lenRow && 0 <= tmp.j && tmp.j < lenCol && board[tmp.i][tmp.j] === 'O') {
            board[tmp.i][tmp.j] = 'Y';
            queue.push({i: tmp.i - 1, j: tmp.j});
            queue.push({i: tmp.i, j: tmp.j - 1});
            queue.push({i: tmp.i + 1, j: tmp.j});
            queue.push({i: tmp.i, j: tmp.j + 1});
        }
    }
};

var solve = function(board) {
    if (board.length < 3) {
        return;
    }

    if (board[0].length < 3) {
        return;
    }

    var lenRow = board.length,
        lenCol = board[0].length;

    for (var i = 0; i < lenRow; i++) {
        if (board[i][0] === 'O') {
            helper(board, i, 0);
        }
        if (board[i][lenCol - 1] === 'O') {
            helper(board, i, lenCol - 1);
        }
    }
    for (var j = 0; j < lenCol; j++) {
        if (board[0][j] === 'O') {
            helper(board, 0, j);
        }
        if (board[lenRow - 1][j] === 'O') {
            helper(board, lenRow - 1, j);
        }
    }


    for (i = 0; i < lenRow; i++) {
        for(j = 0; j < lenCol; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }

            if (board[i][j] === 'Y') {
                board[i][j] = 'O';
            }
        }
    }

};
