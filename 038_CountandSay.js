/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var str = '1';

    for (var seq = 1; seq < n; seq++) {
        var tmp = [];
        for (var i = 0, len = str.length; i < len; i++) {
            var count = 1;
            while (str[i] === str[i + 1]) {
                i++;
                count++;
            }
            tmp.push(count + str[i]);
        }
        str = tmp.join('');
    }

    return str;
};
