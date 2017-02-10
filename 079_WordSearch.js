/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var m = board.length,
        n = board[0].length;

    if (m === 0 || n === 0) {
        return false;
    }

    var len = word.length,
        visited = [];

    for (var i = 0; i < m; i++) {
        visited[i] = [];
    }

    for (i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (backtracking(i, j, 0)) {
                return true;
            }
        }
    }


    function backtracking(i, j, l) {
        if (l === len) {
            return true;
        }

        if (i < 0 || j < 0 || i === m || j === n || visited[i][j] || word[l] !== board[i][j]) {
            return false;
        }

        visited[i][j] = true;
        if (backtracking(i+1, j, l+1) || backtracking(i, j+1, l+1) || backtracking(i-1, j, l+1) || backtracking(i, j-1, l+1)) {
            return true;
        }
        visited[i][j] = false;

        return false;
    }


    return false;
};

