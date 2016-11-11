/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }

    var result = 0,
        len = prices.length,
        preProfit = new Array(len),
        postProfit = new Array(len);
    preProfit.fill(0);
    postProfit.fill(0);

    var minPrice = prices[0];
    for (var i = 1; i < len; i++) {
        preProfit[i] = Math.max(preProfit[i - 1], prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }

    var maxPrice = prices[len - 1];
    for (i = len - 2; i >= 0; i--) {
        postProfit[i] = Math.max(postProfit[i + 1], maxPrice - prices[i]);
        maxPrice = Math.max(maxPrice, prices[i]);
    }

    for (i = 0; i < len; i++) {
        result = Math.max(result, preProfit[i] + postProfit[i]);
    }

    return result;
};
