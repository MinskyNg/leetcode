/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    intervals.sort(function (a ,b) {
        return a.start - b.start;
    });

    var i = 0;
    while (intervals[i] !== undefined) {
        if (newInterval.end < intervals[i].start) {
            intervals.splice(i, 0, newInterval);
            break;
        } else if (newInterval.start > intervals[i].end) {
            i++;
        } else {
            newInterval.start = newInterval.start <= intervals[i].start ? newInterval.start : intervals[i].start;
            newInterval.end = newInterval.end >= intervals[i].end ? newInterval.end : intervals[i].end;
            intervals.splice(i, 1);
        }
    }

    if (intervals[i] === undefined) {
        intervals[i] = newInterval;
    }

    return intervals;
};
