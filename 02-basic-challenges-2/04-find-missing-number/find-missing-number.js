function findMissingNumber(arr) {
    const n = arr.length + 1
    const sumOfN = n * (n + 1) / 2;
    let sumOfArr = 0;
    if (arr.length === 0) {
        return 1;
    } else if (arr === undefined) {
        return undefined;
    } else {
        for (let i = 0; i < arr.length; i++) {
            sumOfArr += arr[i];
        }
        return sumOfN - sumOfArr;
    }
}

module.exports = findMissingNumber;
