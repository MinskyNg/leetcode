/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }

    var result = [],
        map = {
            '1': '*',
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz',
        },
        dLen = digits.length;

    function dfs(str, depth) {
        if (depth === dLen) {
            result.push(str);
            return;
        } else {
            var letters = map[digits[depth]];
            for (var i = 0, len = letters.length; i < len; i++) {
                dfs(str + letters[i], depth + 1);
            }
        }
    }

    dfs('', 0);
    return result;
};
