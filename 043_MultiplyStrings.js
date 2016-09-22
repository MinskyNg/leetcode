/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }

    var len1 = num1.length,
        len2 = num2.length,
        result = new Array(len1 + len2);

    result.fill(0);
    for (var i = len1 - 1; i >= 0; i--) {
        var tmpNum = num1[i];
        for (var j = len2 - 1; j >= 0; j--) {
            var tmp = tmpNum * (+num2[j]);
            result[i + j + 1] += tmp % 10;
            result[i + j] += ~~(tmp / 10);
        }
    }

    for (i = result.length - 2; i >= 0; i--) {
        if (result[i] > 9) {
            result[i - 1] += ~~(result[i] / 10);
            result[i] = result[i] % 10;
        }
    }

    if (result[0] === 0) {
        result.shift();
    }


    return result.join('');
};
