/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var result = 1,
        queue = [],
        letters = 'abcdefghijklmnopqrstuvwxyz';
    queue.push(beginWord);

    while(queue.length) {
        for (var i = 0, lenq = queue.length; i < lenq; i++) {
            var word = queue.shift();

            for (var j = 0, lenw = word.length; j < lenw; j++) {
                for (var k = 0; k < 26; k++) {
                    var newWord = word.substring(0, j) + letters[k] + word.substring(j + 1);

                    if (newWord === endWord) {
                        return result + 1;
                    }

                    if (wordList.has(newWord)) {
                        queue.push(newWord);
                        wordList.delete(newWord);
                    }
                }
            }
        }

        result++;
    }

    return 0;
};
