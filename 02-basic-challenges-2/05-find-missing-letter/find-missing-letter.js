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
    const indexstart = arr[0].charCodeAt(0);
    
    for (let i =0; i<arr.length; i++){
        if (arr[i].charCodeAt(0) != indexstart + i){
            return String.fromCharCode(indexstart + i);
        }
    }

    return '';
    }

module.exports = findMissingLetter;
