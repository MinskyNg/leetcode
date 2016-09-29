/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length,
        i = len - 1;

    digits[len - 1] += 1;

    while (i > 0 && digits[i] > 9) {
        digits[i] = 0;
        digits[i - 1] += 1;
        i--;
    }

    if (digits[0] > 9) {
        digits[0] = 0;
        digits.unshift(1);
    }

    return digits;
};
