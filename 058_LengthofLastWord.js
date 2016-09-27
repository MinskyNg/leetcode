/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var reg = s.match(/\s*([a-zA-Z]+)\s*$/);

    return reg && reg[1] ? reg[1].length : 0;
};
