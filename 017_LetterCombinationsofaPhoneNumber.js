/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  if (digits.length === 1) {
    return digits[0];
  }

  var result = []，
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
    };

  function dfs(str, depth) {
    if (depth === digits.length) {
      result.push(str);
      return;
    } else {
      for (var i = 0, len = map[digits[depth]].length; i < len; i++) {
        dfs(str + map[digits[depth]][i], depth + 1);
      }
    }
  }

  dfs('', 0);

  return result;
};
