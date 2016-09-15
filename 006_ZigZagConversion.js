/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var strArr = [],
        row = 0,
        middleRows = numRows - 2;

    for (var i = 0, len = s.length; i < len; i++) {
        strArr[row] =  (strArr[row] || '') + s[i];
        row++;
        if (row === numRows) {
            row = numRows - 2;
            for (var k = 0; k < middleRows; k++) {
                i++;
                strArr[row] =  (strArr[row] || '') + s[i];
                row--;
            }
            row = 0;
        }
    }

    return strArr.join('');
};
