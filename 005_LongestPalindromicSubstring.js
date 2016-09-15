/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var i,
        char,
        start,
        end,
        subString = '';

    for (var pivot = 0, len = s.length; pivot < len; pivot++) {
        char = s[pivot];
        if (char === s[pivot + 1]) {
            i = 2
            while (i < len) {
                if (char !== s[pivot + i]) {
                    break;
                }
                i++;
            }
            start = pivot - 1;
            end = pivot + i;
        } else {
            start = pivot - 1;
            end = pivot + 1;
        }

        while (start > -1 && end < len) {
            if (s[start] !== s[end]) {
                break;
            }
            start--;
            end++;
        }

        subString = subString.length > end - start - 1 ? subString : s.substring(start + 1, end);
    }

    return subString;
};
