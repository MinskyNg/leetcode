/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if  (n === 0) {
        return 0;
    }

    var result = [1, 1];

    for (var i = 2; i <= n; i++) {
        result[i] = 0;
        for (var j = 0; j < i; j++) {
            result[i] += result[j]*result[i - j - 1];
        }
    }

    return result[n];
};
