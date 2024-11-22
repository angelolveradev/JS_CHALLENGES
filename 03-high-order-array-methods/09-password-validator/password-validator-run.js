const validatePassword = require('./password-validator');

const result1 = validatePassword('abc12345');
const result2 = validatePassword('password');

console.log(result1, result2);
