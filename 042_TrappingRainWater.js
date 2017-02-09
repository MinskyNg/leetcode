/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var result = 0,
        start = 0,
        len = height.length;

    while (start < len - 1) {
        var startHeight = height[start],
            maxHeight = 0;
        for (var i = start + 1; i < len; i++) {
            if (startHeight <= height[i]) {
                for (var j = start + 1; j < i; j++) {
                    result += startHeight - height[j];
                }
                break;
            }
            maxHeight = Math.max(maxHeight, height[i]);
        }
        if (i === len && maxHeight !== startHeight) {
            i = height.lastIndexOf(maxHeight);
            for (j = start + 1; j < i; j++) {
                result += maxHeight - height[j];
            }
        }
        start = i;
    }

    return result;
};
