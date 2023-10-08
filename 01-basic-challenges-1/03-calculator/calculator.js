function calculator(a, b, op) {
    switch (op) {
        case '+':
            return a +  b;
            break;
        case '-' :
            return a-b;
        case '*' :
            return a*b;
            break;
        case '/' :
            return a/b;
            break;
        default:
            throw new Error('Invalid operator')
    }  
}

module.exports = calculator;
