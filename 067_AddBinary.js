/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length > b.length) {
        var tmp = b;
        b = a;
        a = tmp;
    }

    var result = '',
        carry = 0,
        i = a.length - 1,
        j = b.length - 1;

    while (a[i] !== undefined) {
        var sum = (+a[i]) + (+b[j]) + carry;
        result = sum % 2 + result;
        carry = ~~(sum / 2);
        i--;
        j--;
    }

    while (b[j] !== undefined) {
        sum = (+b[j]) + carry;
        result = sum % 2 + result;
        carry = ~~(sum / 2);
        j--;
    }

    if (carry) {
        result = '1' + result;
    }

    return result;
};
