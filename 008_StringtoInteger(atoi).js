/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var reg = str.match(/^\s*([+-]?\d+)/),
        num = (reg && +reg[1]);

    return num > 2147483647 ? 2147483647 : (num < -2147483648 ? -2147483648 : num || 0);
};
