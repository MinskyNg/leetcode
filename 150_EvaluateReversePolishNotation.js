/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [];

    for (var i = 0, len = tokens.length; i < len; i++) {
        if (tokens[i] === '+') {
            var num1 = +stack.pop();
            var num2 = +stack.pop();
            stack.push(num2 + num1);
        } else if (tokens[i] === '-') {
            num1 = +stack.pop();
            num2 = +stack.pop();
            stack.push(num2 - num1);
        } else if (tokens[i] === '*') {
            num1 = +stack.pop();
            num2 = +stack.pop();
            stack.push(num2 * num1);
        } else if (tokens[i] === '/') {
            num1 = +stack.pop();
            num2 = +stack.pop();
            stack.push(~~(num2 / num1));
        } else {
            stack.push(tokens[i]);
        }
    }

    return +stack[0];
};
