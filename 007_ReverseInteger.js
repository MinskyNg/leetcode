/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var num = 0;

    while (x !== 0) {
        num = num * 10 + (x % 10);
        x = ~~(x / 10);
    }

    return num > 2147483647 || num < -2147483648 ? 0 : num;
};
