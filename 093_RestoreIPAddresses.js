/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var result = [],
        len = s.length;

    if (len < 4 || len > 12) {
        return result;
    }

    var isValid = function(ip) {
        var num = +ip;

        if (ip[0] === '0') {
            return ip.length === 1;
        }
        if (num <= 255) {
            return true;
        }
        return false;
    };

    var dfs = function(deep, start, ips) {
        if (start === len || deep === 4) {
            if (start === len && deep === 4) {
                result.push(ips.join('.'));
            }
            return;
        }

        for (var i = 1; i < 4; i++) {
            if (isValid(s.substr(start, i))) {
                dfs(deep + 1, start + i, ips.concat(s.substr(start, i)));
            }
        }
    };

    dfs(0, 0, []);
    return result;
};
