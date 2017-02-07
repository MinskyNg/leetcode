/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort(function (a, b) {
        return a - b;
    });

    function dfs(cands, target) {
        var result = [],
            len = cands.length,
            i = len - 1;


        while (cands[i] > target) {
            i--;
        }
        if (cands[i] === target) {
            result.push([cands[i]]);
            while (cands[i - 1] === target) {
                i--;
            }
        }
        cands.splice(i + 1, len - 1 - i);


        i = cands.length - 1;
        while (i >= 0) {
            var cand = cands[i];
            var subResult = combinationSum2(cands.slice(0, i), target - cand);
            len = subResult.length;
            for (var j = 0; j < len; j++) {
                subResult[j].push(cand);
                result.push(subResult[j]);
            }
            while (cands[i - 1] === cands[i]) {
                i--;
            }
            i--;
        }

        return result
    }

    return dfs(candidates, target);
};
