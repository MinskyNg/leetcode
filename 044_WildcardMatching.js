/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var slen = s.length,
        plen = p.length,
        i = 0,
        j = 0,
        starS,
        star;

    while (i < slen) {
        if (s[i] === p[j] || p[j] === '?') {
            i++;
            j++;
        } else if (p[j] === '*') {
            starS = i;
            star = j;
            j++;
        } else if (starS !== undefined) {
            i = starS + 1;
            j = star + 1;
            starS++;
        } else {
            return false;
        }
    }

    while (p[j] === '*') {
        j++;
    }

    return j === plen;
};
