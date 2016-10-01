/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var result = 0,
        start = 0,
        end = x;


    while (start < end) {
        if (end - start !== 2147483647) {
            var mid = start + ((end - start + 1) >> 1);
        } else {
            mid = start + ((end - start) >> 1);
        }
        var num = mid * mid;
        if (num === x) {
            return mid;
        } else if (num < x) {
            start = mid;
        } else {
            end = mid - 1;
        }
    }

    return end;
};
