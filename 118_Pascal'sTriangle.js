/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }

    if (numRows === 1) {
        return [[1]];
    }

    var result = [[1], [1, 1]];

    numRows--;
    while (--numRows) {
        var pre = result[result.length - 1];
        var next = [1];
        for (var i = 0, len = pre.length - 1; i < len; i++) {
            next.push(pre[i] + pre[i + 1]);
        }
        next.push(1);
        result.push(next);
    }

    return result;
};
