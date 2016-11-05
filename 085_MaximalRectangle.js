/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) {
        return 0;
    }
    var result = 0
        lenr = matrix.length,
        lenc = matrix[0].length,
        tmp = new Array(lenc);
    tmp.fill(0);

    for (var i = 0; i < lenr; i++) {
        var heights = matrix[i];
        for (var j = 0; j < lenc; j++) {
            heights[j] = +heights[j]
            if (heights[j]) {
                heights[j] = heights[j] + tmp[j];
            }
        }
        result = Math.max(result, largestRectangleArea(heights));
        tmp = heights;
    }

    return result
};

var largestRectangleArea = function(heights) {
    var result = 0,
        stack = [];
    heights.push(0);

    for (var i = 0, len = heights.length; i<len; i++) {
        if (stack[0] === undefined || heights[stack[stack.length - 1]] < heights[i]) {
            stack.push(i);
        } else {
            var tmp = stack.pop();
            result = Math.max(result, heights[tmp] * (stack[0] === undefined ? i : i - stack[stack.length - 1] - 1));
            i--;
        }
    }

    return result;
};
