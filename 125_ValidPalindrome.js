/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var left = 0,
        right = s.length - 1;


    while (left < right) {
        var leftStr = s[left];
        if ('A' <= s[left] && s[left] <= 'Z') {
            leftStr = leftStr.toLowerCase();
        } else if (!('a' <= s[left] && s[left] <= 'z') && !('0' <= s[left] && s[left] <= '9')) {
            left++;
            continue;
        }

        var rightStr = s[right];
        if ('A' <= s[right] && s[right] <= 'Z') {
            rightStr = rightStr.toLowerCase();
        } else if (!('a' <= s[right] && s[right] <= 'z') && !('0' <= s[right] && s[right] <= '9')) {
            right--;
            continue;
        }

        if (leftStr !== rightStr) {
            return false;
        }

        left++;
        right--;
    }


    return true;
};
