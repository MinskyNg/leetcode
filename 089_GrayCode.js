/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var result = [0];

    while (n--) {
        var hightBit = result.length;
        for (var i = hightBit - 1; i >= 0; i--) {
            result.push(hightBit | result[i]);
        }
    }

    return result;
};
