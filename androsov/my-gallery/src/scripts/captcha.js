"use strict";
exports.__esModule = true;
function askCaptcha(punishment) {
    var a = Math.round(Math.random() * 100), b = Math.round(Math.random() * 100), operations = ['+', '-', '*'], operationIndex = Math.round(Math.random() * 3 - 0.5), userAnswer = +prompt(a + ' ' + operations[operationIndex] + ' ' + b), res;
    switch (operationIndex) {
        case 0:
            res = a + b;
            break;
        case 1:
            res = a - b;
            break;
        case 2:
            res = a * b;
            break;
    }
    if (userAnswer !== res) {
        punishment();
    }
}
exports["default"] = askCaptcha;
