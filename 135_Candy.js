/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var result = 0,
        len = ratings.length,
        candies = new Array(len);
    candies.fill(1);

    for (var i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1;
        }
    }

    for (i = 0; i < len; i++) {
        result += candies[i];
    }

    return result;
};
