function countOccurrences(sentence, word) {
    let counter = 0
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === word) {
            counter ++;
        }
    }
    return counter;
}

module.exports = countOccurrences;
