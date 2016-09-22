/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort(function (a, b) {
        return a - b;
    });

    var min = candidates[0];

    function dfs(candidates, target) {
        var result = [];

        if (candidates.length === 1) {
            var tmp = [];
            while (0 < target) {
                target -= candidates[0];
                tmp.push(candidates[0]);
            }
            if (target === 0) {
                result.push(tmp);
            }
            return result;
        }

        var len = candidates.length,
            i = len - 1;

        while (candidates[i] > target - min) {
            if (candidates[i] === target) {
                result.push([candidates[i]]);
            }
            i--;
        }
        candidates.splice(i + 1, len - 1 - i);

        i = candidates.length - 1;
        while (i >= 0) {
            var subResult = dfs(candidates.slice(0, i + 1), target - candidates[i]);
            len = subResult.length;
            if (len !== 0) {
                for (var j = 0; j < len; j++) {
                    subResult[j].push(candidates[i]);
                    result.push(subResult[j]);
                }
            }
            i--;
        }

        return result
    }

    return dfs(candidates, target);
};
