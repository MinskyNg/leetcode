/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }

    var result = [1, 1];

    while (--rowIndex) {
        for (var i = 0, len = result.length - 1; i < len; i++) {
            result[i] = result[i] + result[i + 1];
        }
        result[len] = 1;
        result.unshift(1);
    }

    return result;
};
