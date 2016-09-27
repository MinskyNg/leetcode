/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var result = '',
        nums = [],
        count = 1;

    for (var i = 0; i < n; i++) {
        nums[i] = i + 1;
        count *= (i + 1);
    }

    k--;
    for (i = 0; i < n; i++) {
        count = count / (n - i);
        var selected = Math.floor(k / count);
        result += nums[selected];
        nums.splice(selected, 1);
        k = k % count;
    }

    return result;
};
