/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var hashNeed = {},
        hashFound = {},
        minBegin = 0,
        minLength = Number.MAX_VALUE,
        needCount = t.length,
        foundCount = 0;

    for (var i = 0; i < 128; i++) {
        hashNeed[i] = 0;
        hashFound[i] = 0;
    }

    for (i = 0; i < needCount; i++) {
        hashNeed[t.charCodeAt(i)]++;
    }

    i = 0;
    for (var start = 0, lenS = s.length; i < lenS; i++) {
        if (++hashFound[s.charCodeAt(i)] <= hashNeed[s.charCodeAt(i)]) {
            foundCount++;
        }

        while (hashFound[s.charCodeAt(start)] > hashNeed[s.charCodeAt(start)]) {
            hashFound[s.charCodeAt(start)]--;
            start++;
        }

        if (foundCount === needCount && (i - start + 1) < minLength) {
            minLength = i - start + 1;
            minBegin = start;
            hashFound[s.charCodeAt(start)]--;
            foundCount--;
            start++;
        }
    }

    return minLength === Number.MAX_VALUE ? '' : s.substr(minBegin, minLength);
};
