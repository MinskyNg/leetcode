/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var result = 1,
        start = 0,
        len = s.length,
        i,
        j,
        char;

    if (len === 0) {
        return 0;
    }

    for (i = 1; i < len; i++) {
        char = s[i];
        for (j = start; j < i; j++) {
            if (s[j] === char) {
                start = j+1;
                break;
            }
            if (i === j + 1) {
                result = (result > i - start + 1) ? result : i - start + 1;
            }
        }
    }
    return result;
};


// 使用hash table
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     var result = 1,
//         tmp,
//         hash = {},
//         start = 0,
//         len = s.length,
//         i,
//         char;

//     if (len === 0) {
//         return 0;
//     }

//     for (i = 0; i < len; i++) {
//         char = s[i];

//         if (hash[char] !== undefined && hash[char] >= start ) {
//             tmp = i - start;
//             start = hash[char] + 1;
//         }

//         if (tmp > result) {
//             result = tmp;
//         }

//         hash[char] = i;

//     }

//     result = result > i - start ? result : i - start;

//     return result;
// };

