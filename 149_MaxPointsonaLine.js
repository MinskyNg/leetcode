/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    var result = 1,
        len = points.length,
        slopes = new Array(len);

    if (len === 0) {
        return 0;
    }

    if (len === 1) {
        return 1;
    }

    for (var i = 0; i < len; i++) {
        slopes[i] = [];
    }

    for (i = 0; i < len; i++) {
        var slope,
            counts = {},
            pi = points[i];
        for (var j = 0; j < len; j++) {
            if (j !== i) {
                if (slopes[i][j] !== undefined) {
                    counts[slopes[i][j]] = counts[slopes[i][j]] ? counts[slopes[i][j]] + 1 : 1;
                } else {
                    var pj = points[j];
                    if (pj.x === pi.x) {
                        if (pj.y === pi.y) {
                            slope = 's';
                        } else {
                            slope = 'x';
                        }
                    } else {
                        slope = (points[i].y - points[j].y) / (points[i].x - points[j].x);
                    }
                    counts[slope] = counts[slope] ? counts[slope] + 1 : 1;
                    slopes[i][j] = slope;
                    slopes[j][i] = slope;
                }
            }
        }
        var same = counts['s'] || 0;
        delete counts['s'];
        var count = Math.max.apply(null, Object.values(counts)) + same;
        result = Math.max(result, count, same);
    }

    return result + 1;
};
