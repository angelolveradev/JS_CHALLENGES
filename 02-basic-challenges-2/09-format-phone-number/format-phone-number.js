function formatPhoneNumber(numbers) {
    const codeArea = numbers.slice(0,3).join('');
    const prefix = numbers.slice(3,6).join('');
    const lineNumber = numbers.slice(6).join('');

    return `(${codeArea}) ${prefix}-${lineNumber}  `
}

module.exports = formatPhoneNumber;
