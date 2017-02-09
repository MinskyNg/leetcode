/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var result = 0,
        start = 0,
        end = x;


    while (start < end) {
        mid = start + ((end - start) >> 1);
        var num = mid * mid;
        if (num === x) {
            return mid;
        } else if (num < x) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return end * end > x ? end - 1 : end;
};
