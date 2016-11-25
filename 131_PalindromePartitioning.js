/**
 * @param {string} s
 * @return {string[][]}
 */
var isPalindrome = function(x) {
    return x + '' === (x + '').split('').reverse().join('');
};

var partition = function(s) {
    var len = s.length,
        result = [],
        palindrome = {};

    var dfs = function(start, arr) {
        if (start === len) {
            result.push(arr);
            return;
        }

        for (var i = start + 1; i <= len; i++) {
            if ((palindrome[start] && palindrome[start][i]) || isPalindrome(s.slice(start, i))) {
                palindrome[start] = palindrome[start] ? palindrome[start][i] = true : {i: true};
                dfs(i, arr.concat(s.slice(start, i)));
            }
        }
    };

    dfs(0, []);

    return result;
};
