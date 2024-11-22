function validatePassword(password) {
    const hasValidLength = password.length >= 8;
    const hasUppercase = password.split('').some((char) => char.toUpperCase() === char && char.toLowerCase() != char);
    const hasLowercase = password.split('').some((char) => char.toLowerCase() === char && char.toUpperCase() != char);
    const hasDigit = password.split('').some((char) => !isNaN(parseInt(char,10)));

    return hasValidLength && hasUppercase && hasLowercase && hasDigit;

}

module.exports = validatePassword;
