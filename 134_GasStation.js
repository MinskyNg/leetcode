/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var result = -1,
        diffSum = 0,
        diffTotal = 0;

    for (var i = 0, len = gas.length; i < len; i++) {
        var diff = gas[i] - cost[i];
        diffSum += diff;
        diffTotal += diff;

        if (diffSum < 0) {
            result = i;
            diffSum = 0;
        }
    }

    if (diffTotal < 0) {
        return -1;
    } else {
        return result + 1;
    }
};
