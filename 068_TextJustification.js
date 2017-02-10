/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var result = [],
        len = words.length,
        i = 0,
        line = [],
        count = 0;


    while (i < len) {
        if (count + line.length + words[i].length > maxWidth) {
            var lineLen = line.length;
            for (var j = 0, k = 0; j < maxWidth - count; j++, k++) {
                var index = k % lineLen
                if (index === lineLen - 1 && lineLen !== 1) {
                    j--;
                    continue;
                }
                line[index] += ' ';
            }
            result.push(line.join(''));
            line = [];
            count = 0;
        }

        line.push(words[i]);
        count += words[i].length;
        i++;
    }

    if (count !== 0 || result.length === 0) {
        for (i = 0, len = line.length - 1; i < len; i++) {
            line[i] += ' ';
            count++;
        }
        var str = line.join('') || '';
        while (count < maxWidth) {
            str += ' ';
            count++;
        }
        result.push(str);
    }

    return result;
};
