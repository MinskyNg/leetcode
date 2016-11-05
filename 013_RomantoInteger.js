/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var intArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
        num = 0;

    for (var i = 0; s !== ''; i++) {
        while (s.indexOf(romanArr[i]) === 0) {
            s = romanArr[i].length === 1 ? s.slice(1) : s.slice(2);
            num += intArr[i];
        }
    }

    return num;
};
