/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.replace(/(^\s*)|(\s*$)/g, '');
    var len = s.length;

    if (len === 0) {
        return false;
    }

    var num = false,
        dot = false,
        exp = false,
        i = 0;

    if (s[i] === '+' || s[i] === '-') {
        i++;
    }

    while (i < len) {
        var char = s[i];
        if (char >= '0' && char <= '9') {
            num = true;
        } else if (char === '.') {
            if (exp || dot) {
                return false;
            }
            dot = true;
        } else if (char === 'e') {
            if (exp || !num) {
                return false;
            }
            exp = true;
            num = false;
        } else if (char === '+' || char === '-') {
            if (s[i - 1] !== 'e') {
                return false;
            }
        } else {
            return false;
        }
        i++;
    }

    return num;
};
