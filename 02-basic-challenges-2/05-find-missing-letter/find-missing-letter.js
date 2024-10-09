// function findMissingLetter(arr) {
// const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const indexstart = alphabet.indexOf(arr[0])

// for (let i =0; i<arr.length; i++){
//     if (alphabet[indexstart + i] != arr[i]){
//         return alphabet[indexstart + i];
//     }
// }
// }

function findMissingLetter(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const indexstart = alphabet.indexOf(arr[0])
    
    for (let i =0; i<arr.length; i++){
        if (alphabet[indexstart + i] != arr[i]){
            return alphabet[indexstart + i];
        }
    }
    }

module.exports = findMissingLetter;
