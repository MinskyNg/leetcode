/**
 * @param {number[]} heights
 * @return {number}
 */
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
