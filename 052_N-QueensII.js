/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var result = 0,
        state = new Array(n);

    state.fill(-1);

    backTrace(0, state);

    return result;

    function backTrace(row, state) {
        if (row === n) {
            result++;
        }

        for (var col = 0; col < n; col++) {
            if (isValid(state, row, col)) {
                state[row] = col;
                backTrace(row + 1, state);
                state[row] = -1;
            }
        }
    }

    function isValid(state, row, col) {
        for (var i = row - 1; i >= 0; i--) {
            if (state[i] === col || Math.abs(state[i] - col) === Math.abs(i - row)) {
                return false;
            }
        }
        return true;
    }
};
