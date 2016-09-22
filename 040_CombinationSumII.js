/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort(function (a, b) {
        return a - b;
    });

    var min = candidates[0];

    function dfs(candidates, target) {
        var result = [],
            len = candidates.length,
            i = len - 1;


        while (candidates[i] > target - min) {
            if (candidates[i] === target) {
                result.push([candidates[i]]);
                while (candidates[i - 1] === target) {
                    i--;
                }
            }
            i--;
        }
        candidates.splice(i + 1, len - 1 - i);

        i = candidates.length - 1;
        while (i >= 0) {
            var subResult = combinationSum2(candidates.slice(0, i), target - candidates[i]);
            len = subResult.length;
            if (len !== 0) {
                for (var j = 0; j < len; j++) {
                    subResult[j].push(candidates[i]);
                    result.push(subResult[j]);
                }
            }
            while (candidates[i - 1] === candidates[i]) {
                i--;
            }
            i--;
        }

        return result
    }

    return dfs(candidates, target);
};
