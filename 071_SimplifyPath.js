/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var stack = [];

    path = path.split('/');
    for (var i = 0, len = path.length; i < len; i++) {
        if (path[i] === '' || path[i] === '.') {
            continue;
        } else if (path[i] === '..') {
            stack.pop();
        } else {
            stack.push(path[i]);
        }
    }

    return '/' + stack.join('/');
};
