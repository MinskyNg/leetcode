var isMatch = function(s, p) {
    var slen = s.length,
        plen= p.length;

    if (slen === 0) {
        if (plen === 0 || (p[1] === '*' && isMatch(s, p.slice(2)))) {
            return true
        }
        return false;
    }

    if (plen === 0) {
        return false;
    }

    if ((s[0] === p[0] || p[0] === '.') && p[1] !== '*') {
        return isMatch(s.slice(1), p.slice(1));
    } else if ((s[0] === p[0] || p[0] === '.') && p[1] === '*') {

         if (isMatch(s.slice(1), p)) {
            return true;
        }

        if (isMatch(s, p.slice(2))) {
            return true;
        }

        var i = 0;
        while (s[i] === p || p === '.') {
            if (isMatch(s.slice(i + 1, p.slice(2)))) {
                return true;
            }
            i++;
        }
    } else if (p[1] === '*') {
        return isMatch(s, p.slice(2));
    }

    return false;
};
