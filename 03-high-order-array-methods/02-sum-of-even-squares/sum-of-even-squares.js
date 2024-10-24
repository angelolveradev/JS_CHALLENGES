function sumOfEvenSquares(numbers) {
    const evenNumbers = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum,num) => sum + num, 0);

    return evenNumbers;
}

module.exports = sumOfEvenSquares;
