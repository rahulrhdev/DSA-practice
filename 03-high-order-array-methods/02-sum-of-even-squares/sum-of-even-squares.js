function sumOfEvenSquares(arr) {
    const evenArr = arr
    .filter((num) => num % 2 === 0);
    console.log(evenArr)
    const squareEvenArr = evenArr.map((num) => num ** 2)
    const result = squareEvenArr.reduce((res, num) => res + num,0)
    return result;
}

module.exports = sumOfEvenSquares;
