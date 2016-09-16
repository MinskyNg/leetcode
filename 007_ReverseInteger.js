/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var numStr = '',
        num = x > 0 ? x : -x;

    while (num !== 0 ) {
        numStr += num % 10;
        num = Math.floor(num / 10);
    }

    num = x > 0 ? +numStr : -(+numStr);

    return num > 2147483647 || num < -2147483648 ? 0 : num;
};
