/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var reg = s.match(/\s*([a-zA-Z]+)\s*$/);

    return reg && reg[1] ? reg[1].length : 0;
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var len = 0,
        i = s.length - 1;

    while (s[i] === ' ' && i >= 0) {
        i--;
    }

    while (s[i] !== ' ' && i >= 0) {
        len++;
        i--;
    }

    return len;
};
