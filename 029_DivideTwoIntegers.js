/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 0 || (divisor === -1 && dividend === -2147483648)) {
        return 2147483647;
    }

    if (dividend === 0) {
        return 0;
    }

    var result = 0,
        sign = 1;

    if (dividend < 0) {
        sign = -sign;
    }

    if (divisor < 0) {
        sign = -sign;
    }

    dividend = dividend < 0 ? -dividend : dividend;
    divisor = divisor < 0 ? -divisor : divisor;

    while (dividend >= divisor) {
        var tmp = divisor,
            exponent = 1;
        while ((tmp << 1) <= dividend) {
            // Prevent overflow
            if ((tmp << 1) <= 0) {
                break;
            }
            tmp <<= 1;
            exponent <<= 1;
        }
        dividend -= tmp;
        result += exponent;
    }


    return sign * result;
};
