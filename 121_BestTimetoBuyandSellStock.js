/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }

    var result = 0,
        minPrice = prices[0];

    for (var i = 1, len = prices.length; i < len; i++) {
        result = Math.max(result, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return result;
};
