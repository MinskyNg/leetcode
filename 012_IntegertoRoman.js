/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var intArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
        str = '';

    for (var i = 0; num !== 0; i++) {
        while (num >= intArr[i]) {
            num -= intArr[i];
            str += romanArr[i];
        }
    }
    return str;
};
