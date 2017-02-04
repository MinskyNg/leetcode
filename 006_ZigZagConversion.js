/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    var strArr = new Array(numRows),
        row = 0,
        middleNum = numRows - 2;

    strArr.fill('');
    for (var i = 0, len = s.length; i < len; i++) {
        strArr[row++] += s[i];
        if (row === numRows) {
            row = numRows - 2;
            for (var k = 0; k < middleNum; k++) {
                i++;
                if (i === len) {
                    break;
                }
                strArr[row--] += s[i];
            }
            row = 0;
        }
    }

    return strArr.join('');
};
