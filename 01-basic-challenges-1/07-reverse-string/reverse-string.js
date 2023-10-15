function reverseString(str) {
    let strReverse = '';
    for (i = str.length - 1; i>=0; i--) {
        strReverse = strReverse + str[i]
    }
    return strReverse;
}

module.exports = reverseString;
