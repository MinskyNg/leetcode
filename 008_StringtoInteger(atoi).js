/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.replace(/(^\s*)/g, '');
    var len = str.length;

    if (len === 0) {
        return 0;
    }

    var num = 0,
        sign = 1,
        i = 0;

    if (str[i] === '+') {
        i++;
    } else if (str[i] === '-') {
        sign = -1;
        i++;
    }

    while (i < len && str[i] >= '0' && str[i] <= '9') {
        num = num * 10 + (str[i] - '0');
        i++;
    }

    num = num * sign;
    return num > 2147483647 ? 2147483647 : (num < -2147483648 ? -2147483648 : num || 0);
};


// /**
//  * @param {string} str
//  * @return {number}
//  */
// var myAtoi = function(str) {
//     var reg = str.match(/^\s*([+-]?\d+)/),
//         num = (reg && +reg[1]);

//     return num > 2147483647 ? 2147483647 : (num < -2147483648 ? -2147483648 : num || 0);
// };
