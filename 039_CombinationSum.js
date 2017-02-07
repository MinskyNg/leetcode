/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort(function (a, b) {
        return a - b;
    });

    function dfs(cands, target) {
        var result = [];

        if (cands.length === 1) {
            while (0 < target) {
                target -= cands[0];
                result.push(cands[0]);
            }
            if (target === 0) {
                return [result];
            }
            return [];
        }


        var len = cands.length,
            i = len - 1;
        while (cands[i] > target) {
            i--;
        }
        while (cands[i] === target) {
            result.push([cands[i]]);
            i--;
        }
        cands.splice(i + 1, len - 1 - i);


        i = cands.length - 1;
        while (i >= 0) {
            var cand = cands[i];
            var subResult = dfs(cands.slice(0, i + 1), target - cand);
            len = subResult.length;
            for (var j = 0; j < len; j++) {
                subResult[j].push(cand);
                result.push(subResult[j]);
            }
            i--;
        }

        return result
    }

    return dfs(candidates, target);
};
