// function formatPhoneNumber(numbers) {
//     const codeArea = numbers.slice(0,3).join('');
//     const prefix = numbers.slice(3,6).join('');
//     const lineNumber = numbers.slice(6).join('');

//     return `(${codeArea}) ${prefix}-${lineNumber}  `
// } aaa

function formatPhoneNumber(numbers) {
    const formatedNumber = numbers.join('');

    return `(${formatedNumber.substring(0,3)}) ${formatedNumber.substring(3,6)}-${formatPhoneNumber.substring(6)}  `
}
module.exports = formatPhoneNumber;
