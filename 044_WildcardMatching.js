/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var slen = s.length,
        plen = p.length,
        i = 0,
        j = 0;

    while (i < slen) {
        if (s[i] === p[j] || p[j] === '?') {
            i++;
            j++;
            continue;
        }

        if (p[j] === '*') {
            var starS = i,
                star = j;
            j++;
            continue;
        }

        if (i !== slen) {
            i = starS + 1;
            j = star + 1;
            starS++;
            continue;
        }

        return false;
    }

    while (p[j] === '*') {
        j++;
    }

    return j === plen;
};
