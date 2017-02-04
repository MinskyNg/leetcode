/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x + ''
    return str === str.split('').reverse().join('');
};
