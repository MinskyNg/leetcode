/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle.length === 0) {
        return 0;
    }

    for (var i = triangle.length - 2; i >= 0; i--) {
        var next = triangle[i];
        var pre = triangle[i + 1];
        for (var j = 0, len = triangle[i].length; j < len; j++) {
            next[j] = Math.min(pre[j], pre[j + 1]) + next[j];
        }
    }

    return triangle[0][0];
};
