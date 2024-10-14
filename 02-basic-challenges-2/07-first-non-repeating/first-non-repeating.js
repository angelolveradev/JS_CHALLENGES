// function findFirstNonRepeatingCharacter(str) {
//     const charObject = {}

//     for (const char of str){
//         charObject[char] = ((charObject[char] || 0) + 1);
//     }

//     for (const char of str){
//         if (charObject[char] === 1){
//             return char;
//         }
//     }
//     return null;
// }


function findFirstNonRepeatingCharacter(str) {
    const charObject = new Map();

    for (const char of str){
        charObject.set(char ,(charObject.get(char) || 0 ) + 1)
    }

    for (const char of str){
        if (charObject.get(char) === 1){
            return char;
        }
    }
    return null;
}
module.exports = findFirstNonRepeatingCharacter;
