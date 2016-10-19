/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var n = board.length;
    if (n === 0) {
        return false;
    }
    var m = board[0].length;
    if (m === 0) {
        return false;
    }

    var len = word.length,
        visited = [];

    for (var i = 0; i < n; i++) {
        var tmpArr = [].fill(false);
        visited[i] = tmpArr;
    }

    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            if (backtracking(board, word, visited, i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};

var backtracking = function(board, word, visited, i, j, l) {
    if (l === word.length) {
        return true;
    }

    if (i < 0 || j < 0 || i == board.length || j == board[0].length || visited[i][j] || word[l] != board[i][j]) {
        return false;
    }

    visited[i][j] = true;

    if (backtracking(board, word, visited, i+1, j, l+1) || backtracking(board, word, visited, i, j+1, l+1) || backtracking(board, word, visited, i-1, j, l+1) || backtracking(board, word, visited, i, j-1, l+1)) {
        return true;
    }

    visited[i][j] = false;
    return false;
}

