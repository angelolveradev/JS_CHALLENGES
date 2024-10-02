/*function countOccurrences(str, char) {
    let cont = 0;
    for (let i=0; i<str.length; i++){
        if (str[i] === char) {
            cont++;
        }
        
    }
    return cont;
}*/

const countOccurrences = (str, char) => str.split(char).length-1;

module.exports = countOccurrences;
