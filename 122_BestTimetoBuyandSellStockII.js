/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }

    var result = 0;

    for (var i = 1, len = prices.length; i < len; i++) {
        if (prices[i] - prices[i - 1] > 0) {
            result += prices[i] - prices[i - 1];
        }
    }

    return result;
};
