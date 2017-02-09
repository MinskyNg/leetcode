/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var result = 0,
        climb1 = 1,
        climb2 = 0;

    for (var i = 1; i <= n; i++) {
        result += climb2;
        climb2 = climb1;
        climb1 = result;
    }

    return result;
};
