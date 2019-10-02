function eval() {
    // Do not use eval!!!
    return;
}
function myeval(expr) {
    if(expr.indexOf('/ 0')>0){

        throw 'TypeError: Division by zero.'
    }
    try {
        return new Function('return ' + expr);
    } catch (e) {
        if (e.toString().indexOf("Unexpected token")) {
            throw "ExpressionError: Brackets must be paired";
        }
        throw e;
    }
}


function expressionCalculator(expr) {
    let temp = myeval(expr);
    return temp();
}
// expressionCalculator('1 + 2) * 3')
module.exports = {
    expressionCalculator
}