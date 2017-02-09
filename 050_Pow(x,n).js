/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        if (n === -2147483648) {
            return 1 / (myPow(x, 2147483647) * x);
        } else {
            return 1 / myPow(x, -n);
        }
    }

    var half = myPow(x, n >> 1);
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
};
